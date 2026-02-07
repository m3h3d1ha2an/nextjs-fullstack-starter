"use client";

import { useEffect } from "react";

type GlobalErrorProps = { error: Error & { digest?: string }; reset: () => void };

const GlobalError = ({ error, reset }: GlobalErrorProps) => {
  useEffect(() => {
    // Log error to error reporting service (e.g., Sentry, LogRocket)
    console.error("Global error:", error);

    // You can integrate error tracking here:
    // if (process.env.NODE_ENV === 'production') {
    //   Sentry.captureException(error);
    // }
  }, [error]);

  return (
    <html lang="en">
      <body>
        <div
          style={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#f9fafb",
            padding: "1rem",
          }}
        >
          <div
            style={{
              maxWidth: "28rem",
              width: "100%",
              backgroundColor: "white",
              borderRadius: "0.5rem",
              boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
              padding: "2rem",
              textAlign: "center",
            }}
          >
            {/* Error Icon */}
            <div
              style={{
                width: "3rem",
                height: "3rem",
                margin: "0 auto 1rem",
                backgroundColor: "#fee2e2",
                borderRadius: "9999px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="#dc2626"
                style={{ width: "1.5rem", height: "1.5rem" }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                />
              </svg>
            </div>

            <h2
              style={{
                fontSize: "1.5rem",
                fontWeight: "bold",
                color: "#111827",
                marginBottom: "0.5rem",
              }}
            >
              Application Error
            </h2>

            <p
              style={{
                color: "#6b7280",
                marginBottom: "1.5rem",
              }}
            >
              A critical error occurred. Please try refreshing the page.
            </p>

            {/* Development Error Details */}
            {process.env.NODE_ENV === "development" && (
              <details
                style={{
                  marginBottom: "1.5rem",
                  textAlign: "left",
                }}
              >
                <summary
                  style={{
                    cursor: "pointer",
                    fontSize: "0.875rem",
                    fontWeight: "500",
                    color: "#374151",
                    marginBottom: "0.5rem",
                  }}
                >
                  Error Details (Development Only)
                </summary>
                <div
                  style={{
                    backgroundColor: "#f3f4f6",
                    padding: "1rem",
                    borderRadius: "0.375rem",
                    fontSize: "0.75rem",
                    fontFamily: "monospace",
                    whiteSpace: "pre-wrap",
                    wordBreak: "break-word",
                    color: "#dc2626",
                    marginTop: "0.5rem",
                  }}
                >
                  {error.message}
                  {error.stack && (
                    <>
                      {"\n\n"}
                      {error.stack}
                    </>
                  )}
                  {error.digest && (
                    <>
                      {"\n\n"}
                      Error ID: {error.digest}
                    </>
                  )}
                </div>
              </details>
            )}

            {/* Actions */}
            <div style={{ display: "flex", gap: "0.75rem" }}>
              <button
                onClick={() => reset()}
                style={{
                  flex: 1,
                  padding: "0.625rem 1rem",
                  backgroundColor: "#2563eb",
                  color: "white",
                  border: "none",
                  borderRadius: "0.375rem",
                  fontSize: "0.875rem",
                  fontWeight: "500",
                  cursor: "pointer",
                }}
              >
                Try Again
              </button>
              <a href="/">
                <button
                  style={{
                    flex: 1,
                    padding: "0.625rem 1rem",
                    backgroundColor: "white",
                    color: "#374151",
                    border: "1px solid #d1d5db",
                    borderRadius: "0.375rem",
                    fontSize: "0.875rem",
                    fontWeight: "500",
                    cursor: "pointer",
                  }}
                >
                  Go Home
                </button>
              </a>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
};

export default GlobalError;
