import { Component, ErrorInfo, PropsWithChildren } from 'react';
import { PageError } from 'widgets/PageError';

interface ErrorBoundaryState {
  hasError: boolean;
}

export class ErrorBoundary extends Component<PropsWithChildren<unknown>, ErrorBoundaryState> {
  constructor(props: PropsWithChildren<unknown>) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.log(error, errorInfo);
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;

    if (hasError) {
      return <PageError />;
    }

    return children;
  }
}
