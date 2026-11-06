import React from "react";
import { AlertCircle, RefreshCw, Home } from "lucide-react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    console.error("Bakery application error captured:", error, info);
  }

  handleReload = () => {
    this.setState({ hasError: false, error: null });
    window.location.assign("/");
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary-wrap" role="alert">
          <div className="error-boundary-card">
            <div className="error-icon-box">
              <AlertCircle className="w-10 h-10 text-amber-800" />
            </div>
            <h1>Pardon Our Kitchen Dust</h1>
            <p>
              An unexpected hiccup occurred while rendering this page. Do not worry, our bakers have logged the occurrence and we are dusting down the counter.
            </p>
            <div className="error-boundary-actions">
              <button
                type="button"
                className="error-primary-btn"
                onClick={this.handleReload}
              >
                <RefreshCw className="w-4 h-4" />
                <span>Reload Bakery Counter</span>
              </button>
              <a href="mailto:hello@sweetcrusts.com.gh" className="error-secondary-btn">
                Contact Bakery Support
              </a>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
