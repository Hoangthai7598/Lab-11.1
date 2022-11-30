import { Component } from 'react';

class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = { hasError: false };
  }

  componentDidCatch(error) {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <p style={{ width: '100%', alignSelf: 'center', justifyContent: 'center', alignItems: 'center', display: 'flex' }}>Something went wrong!</p>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
