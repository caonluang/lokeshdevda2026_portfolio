import React from 'react';

type Props = {
  children: React.ReactNode;
};

type State = {
  error?: Error;
};

export class ErrorBoundary extends React.Component<Props, State> {
  state: State = {};

  static getDerivedStateFromError(error: Error) {
    return { error };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    // Keep details in console for debugging
    // eslint-disable-next-line no-console
    console.error('App crashed:', error, info);
  }

  render() {
    if (this.state.error) {
      return (
        <div style={{ padding: 24, fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, Inter, Arial' }}>
          <h1 style={{ fontSize: 18, fontWeight: 800, marginBottom: 8 }}>UI Error</h1>
          <p style={{ opacity: 0.8, marginBottom: 12 }}>
            Something crashed while rendering. Open DevTools Console for full stack trace.
          </p>
          <pre
            style={{
              whiteSpace: 'pre-wrap',
              background: 'rgba(0,0,0,0.6)',
              color: 'white',
              padding: 16,
              borderRadius: 12,
              overflow: 'auto',
              maxWidth: 920,
            }}
          >
            {this.state.error.message}
          </pre>
          <button
            onClick={() => window.location.reload()}
            style={{
              marginTop: 16,
              padding: '10px 14px',
              borderRadius: 10,
              border: '1px solid rgba(255,255,255,0.2)',
              background: 'transparent',
              color: 'inherit',
              fontWeight: 700,
              cursor: 'pointer',
            }}
          >
            Reload
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

