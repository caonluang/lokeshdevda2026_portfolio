import React, { useEffect, useRef, useState, useCallback } from 'react';
import * as THREE from 'three';
import { CSS3DObject, CSS3DRenderer } from 'three/examples/jsm/renderers/CSS3DRenderer.js';
import { animate } from 'framer-motion';
import { cn } from '../utils/cn';

interface Carousel3DProps {
  items: string[];
  className?: string;
  containerClass?: string;
  itemWidth?: number;
  itemHeight?: number;
  radius?: number;
}

export const Carousel3DThree: React.FC<Carousel3DProps> = ({
  items = [],
  className = "",
  containerClass = "",
  itemWidth = 400,
  itemHeight = 250,
  radius: customRadius,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<CSS3DRenderer | null>(null);
  const sceneRef = useRef<THREE.Scene>(new THREE.Scene());
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const carouselRef = useRef<THREE.Object3D>(new THREE.Object3D());
  const animationRef = useRef<any>(null);
  
  const [isDragging, setIsDragging] = useState(false);
  const startX = useRef(0);
  const currentX = useRef(0);
  const sensitivity = 0.0025;

  const startContinuousRotation = useCallback(() => {
    if (animationRef.current) animationRef.current.stop();
    
    const carousel = carouselRef.current;
    if (!carousel) return;

    const fromVal = carousel.rotation.y;
    const toVal = fromVal + Math.PI * 2;

    animationRef.current = animate(fromVal, toVal, {
      duration: 30,
      ease: "linear",
      repeat: Infinity,
      onUpdate: (latest) => {
        carousel.rotation.y = latest;
        if (rendererRef.current && sceneRef.current && cameraRef.current) {
          rendererRef.current.render(sceneRef.current, cameraRef.current);
        }
      },
    });
  }, []);

  useEffect(() => {
    if (!containerRef.current || items.length === 0) return;

    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight;

    // Renderer
    const renderer = new CSS3DRenderer();
    renderer.setSize(width, height);
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Camera
    const camera = new THREE.PerspectiveCamera(50, width / height, 1, 5000);
    camera.position.z = 1000;
    camera.position.y = 50;
    cameraRef.current = camera;

    // Scene setup
    const scene = sceneRef.current;
    const carousel = carouselRef.current;
    scene.add(carousel);

    const radius = customRadius || Math.min(width * 0.8, 800);

    // Items
    items.forEach((image, index) => {
      const element = document.createElement("div");
      element.style.width = `${itemWidth}px`;
      element.style.height = `${itemHeight}px`;
      element.className = "rounded-2xl overflow-hidden bg-zinc-900 border border-white/10 shadow-2xl transition-all duration-500 hover:border-[#00ff88]/50";
      
      const img = document.createElement("img");
      img.src = image;
      img.style.width = "100%";
      img.style.height = "100%";
      img.style.objectFit = "cover";
      element.appendChild(img);

      const object = new CSS3DObject(element);
      const angle = (index / items.length) * Math.PI * 2;
      
      object.position.x = radius * Math.sin(angle);
      object.position.z = radius * Math.cos(angle);
      object.lookAt(new THREE.Vector3(0, 0, 0));

      carousel.add(object);
    });

    carousel.rotation.x = THREE.MathUtils.degToRad(10);
    startContinuousRotation();

    const handleResize = () => {
      if (!containerRef.current) return;
      const w = containerRef.current.clientWidth;
      const h = containerRef.current.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
      if (animationRef.current) animationRef.current.stop();
    };
  }, [items, itemWidth, itemHeight, customRadius, startContinuousRotation]);

  const onDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);
    startX.current = "touches" in e ? e.touches[0].clientX : e.clientX;
    currentX.current = startX.current;
    if (animationRef.current) animationRef.current.stop();
  };

  const onDragEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    startContinuousRotation();
  };

  const onDragMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return;
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    const deltaX = clientX - currentX.current;
    currentX.current = clientX;

    carouselRef.current.rotation.y += -deltaX * sensitivity;
    if (rendererRef.current && sceneRef.current && cameraRef.current) {
      rendererRef.current.render(sceneRef.current, cameraRef.current);
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn("relative w-full h-full overflow-hidden bg-transparent select-none cursor-grab active:cursor-grabbing", containerClass)}
      onMouseDown={onDragStart}
      onMouseUp={onDragEnd}
      onMouseLeave={onDragEnd}
      onMouseMove={onDragMove}
      onTouchStart={onDragStart}
      onTouchEnd={onDragEnd}
      onTouchMove={onDragMove}
    >
      <div className={cn("absolute inset-0 pointer-events-none z-10", className)} />
    </div>
  );
};
