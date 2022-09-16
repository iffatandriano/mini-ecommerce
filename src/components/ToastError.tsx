import React from "react";

type ToastErrorProps = {
  hidden: boolean;
  message: string;
};

export default function ToastError({ hidden, message }: ToastErrorProps) {
  return (
    <div
      id="toast-notification"
      className={
        hidden
          ? "hidden"
          : "absolute top-5 right-5 p-4 w-full max-w-xs text-gray-900 bg-red-500 rounded-lg shadow-3xl dark:bg-white-800 dark:text-gray-300"
      }
      style={{
        border: "solid .0625rem #000",
        borderRadius: ".25rem",
      }}
      role="alert"
    >
      <div className="flex items-center mb-3">
        <button
          type="button"
          className="ml-auto -mx-1.5 -my-1.5 text-white-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-red-300 p-1.5 inline-flex h-8 w-8 dark:text-white dark:hover:text-gray-500"
          data-dismiss-target="#toast-notification"
          aria-label="Close"
        >
          <span className="sr-only">Close</span>
          <svg
            aria-hidden="true"
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      <div className="flex">
        <span className="text-white">{message}</span>
      </div>
    </div>
  );
}
