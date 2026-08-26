import { Component, type ReactNode } from "react";

type State = { error: Error | null };

/**
 * Catches runtime errors and shows a readable message instead of
 * a blank white page.
 */
export default class ErrorBoundary extends Component<{ children: ReactNode }, State> {
  state: State = { error: null };

  static getDerivedStateFromError(error: Error): State {
    return { error };
  }

  componentDidCatch(error: Error) {
    console.error("VoxPRV site crashed:", error);
  }

  render() {
    if (this.state.error) {
      return (
        <div style={{ minHeight: "100svh", display: "grid", placeItems: "center", padding: "2rem", fontFamily: "system-ui" }}>
          <div style={{ maxWidth: 640, textAlign: "center" }}>
            <h1 style={{ fontSize: "1.5rem", fontWeight: 700 }}>Something went wrong</h1>
            <p style={{ marginTop: "0.75rem", color: "#666", lineHeight: 1.6 }}>
              The page failed to load. Try a hard refresh (Ctrl+Shift+R). If the problem persists,
              restart the dev server:
            </p>
            <pre style={{"marginTop": "1rem", background: "#f4f4f8", padding: "0.75rem", borderRadius: 12, fontSize: "0.85rem"}}>
npm run dev
            </pre>
            <details style={{ marginTop: "1rem", textAlign: "left" }}>
              <summary style={{ cursor: "pointer", color: "#4f6bff", fontSize: "0.85rem" }}>Error details</summary>
              <pre style={{ marginTop: "0.5rem", background: "#fdf2f2", color: "#b91c1c", padding: "0.75rem", borderRadius: 12, fontSize: "0.75rem", whiteSpace: "pre-wrap", wordBreak: "break-word" }}>
                {this.state.error?.message}
                {"\n\n"}
                {this.state.error?.stack}
              </pre>
            </details>
            <button
              onClick={() => window.location.reload()}
              style={{ marginTop: "1.25rem", padding: "0.7rem 1.5rem", borderRadius: 999, border: "none", background: "#4f6bff", color: "#fff", fontWeight: 600, cursor: "pointer" }}
            >
              Reload
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
