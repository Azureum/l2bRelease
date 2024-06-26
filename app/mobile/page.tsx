"use client"
import React, { useEffect } from 'react';

export default function Blocked() {
  useEffect(() => {
    // Set overflow to 'hidden' when the component mounts
    document.body.style.overflow = 'hidden';
    
    // Reset overflow to 'auto' when the component unmounts
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);
  return (
    <div className="flex h-screen justify-center items-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold">Mobile User Detected</h1>
        <p className="mt-4">Sorry! We are currently working on mobile support.</p>
        <p className="mt-2">Our engineer is working hard to bring it to life, you can still access the website on laptop/desktop</p>
        <p className="mt-2">our engineer: 🔧😿 </p>
      </div>
    </div>
  );
}