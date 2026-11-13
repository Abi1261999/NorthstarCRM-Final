import { Component, type ErrorInfo, type ReactNode } from "react";

type Props = { children: ReactNode };
type State = { hasError: boolean; message: string };

export default class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false, message: "" };

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, message: error.message || "Unexpected application error" };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("Northstar CRM render error:", error, info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <main className="grid min-h-screen place-items-center bg-slate-50 p-6">
          <section className="max-w-lg rounded-2xl border border-rose-200 bg-white p-6 shadow-sm">
            <h1 className="text-lg font-bold text-slate-900">The page could not be displayed</h1>
            <p className="mt-2 text-sm text-slate-500">A frontend error occurred. Refresh the page after checking the browser console.</p>
            <pre className="mt-4 overflow-auto rounded-xl bg-slate-50 p-3 text-xs text-rose-700">{this.state.message}</pre>
            <button className="mt-4 rounded-xl bg-indigo-600 px-4 py-2 text-sm font-semibold text-white" onClick={() => window.location.reload()}>Reload application</button>
          </section>
        </main>
      );
    }
    return this.props.children;
  }
}
