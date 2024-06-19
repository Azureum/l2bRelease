import React from 'react';

export default function Blocked() {
  return (
    <div className="flex h-screen justify-center items-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold">Excess access detected</h1>
        <p className="mt-4">You have exceeded the rate limit. Please try again in a few seconds.</p>
        <p className="mt-2">If you did not mean for this to happen, don&apos;t worry; this is only a security measure. 😸</p>
        <a href="https://www.learn2build.xyz">
          <button type="button" className="mt-4 py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
            Press to Retry
          </button>
        </a>
      </div>
    </div>
  );
}
