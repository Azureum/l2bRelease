"use client";
import React from 'react';
import Image from 'next/image';
import logo from './components/ui/photos/mg.png';

import { TextGenerateEffect } from "../app/components//ui/text-generate-effect";
import { BackgroundBeams } from "../app/components/ui/background-beams";

export default function App() {
  return (
    <main>
      <div className="h-screen flex items-center justify-center">
        <div className="box-content h-10/12 w-10/12  ">
        <TextGenerateEffect words="Learn 2 Build" />
        <TextGenerateEffect words="2025 Hackathon" />
        </div>
      </div>
      <BackgroundBeams />
    </main>
  );
}
