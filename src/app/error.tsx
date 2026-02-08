"use client";

import { AlertTriangle } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

type AppErrorProps = { error: Error & { digest?: string }; reset: () => void };

const AppError = ({ error, reset }: AppErrorProps) => {
  const router = useRouter();
  useEffect(() => {
    // Log to error reporting service
    console.error("Root error:", error);
  }, [error]);

  return (
    <div className="min-h-[95vh] flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full">
        <div className="bg-white shadow-sm rounded-lg p-6">
          <div className="flex items-center justify-center w-12 h-12 mx-auto bg-red-100 rounded-full">
            <AlertTriangle className="w-6 h-6 text-red-600" />
          </div>

          <div className="mt-4 text-center">
            <h3 className="text-lg font-semibold text-gray-900">Oops! Something went wrong</h3>
            <p className="mt-2 text-sm text-gray-600">An unexpected error occurred. Please try again.</p>
          </div>

          {process.env.NODE_ENV === "development" && (
            <details className="mt-4">
              <summary className="cursor-pointer text-sm font-medium text-gray-700 hover:text-gray-900">
                View error details
              </summary>
              <div className="mt-2 p-4 bg-gray-50 rounded border border-gray-200">
                <p className="text-xs font-mono text-red-600 wrap-break-word">{error.message}</p>
                {error.stack && <pre className="mt-2 text-xs text-gray-600 overflow-auto max-h-48">{error.stack}</pre>}
                {error.digest && <p className="mt-2 text-xs text-gray-500">Error ID: {error.digest}</p>}
              </div>
            </details>
          )}

          <div className="mt-6 flex gap-3">
            <Button onClick={reset} className="flex-1">
              Try again
            </Button>
            <Button onClick={() => router.push("/")} variant="outline" className="flex-1">
              Home
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppError;
