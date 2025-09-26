import React, { Component, ReactNode } from 'react';
import { Card } from '../UI/Card/Card';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <Card>
          <h2>Something went wrong!</h2>
          <p>We're sorry, but something unexpected happened.</p>
          <p><strong>What you can try:</strong></p>
          <ul>
            <li>Refresh the page</li>
            <li>Clear your browser cache</li>
            <li>Try again in a few minutes</li>
          </ul>
          <button onClick={() => window.location.href = '/'}>
            Go to Home Page
          </button>
        </Card>
      );
    }

    return this.props.children;
  }
}
