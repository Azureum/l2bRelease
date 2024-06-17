import React from 'react';

export default function Blocked() {
  return (
    <div className="flex h-screen justify-center items-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold">Excess access detected</h1>
        <p className="mt-4">You have exceeded the rate limit. Please try again in a few seconds.</p>
        <p className="mt-2 ">If you did not mean for this to happen, don&apos;t worry this is only a security measure.😸</p>
      </div>
    </div>
  );
}