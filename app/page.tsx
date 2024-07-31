"use client";
import React from 'react';
import Image from 'next/image';
import { TextGenerateEffect } from "../app/components/ui/text-generate-effect";
import { BackgroundBeams } from "../app/components/ui/background-beams";
import { BackgroundGradient } from "../app/components/ui/background-gradient";
import { BentoGrid, BentoGridItem } from "../app/components/ui/bento-grid";
import { FlipWords } from "../app/components/ui/flip-words";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import ScrollButton from './components/scroll-to-top'; 
import xyzLogo from '../public/xyz-logo-white.png';
import aopsLogo from '../public/AoPS_Main_Logo.png';
import axureLogo from '../public/Axure_logo_400@2x.png';
import desmosLogo from "../public/DesmosLogo-W.png";
import InterviewCake from "../public/cake_logo_white.png";
import NordLogo from "../public/NordVPN_Logo_RGB_Primary_Blue_White.png";
import NordPass from "../public/NordPass-white-vertical(1).png";
import Incogni from "../public/incogni_white.png";

// make scroll up button
export default function App() {
return(
<main className='App dark'>
   <BackgroundBeams />
   <SpeedInsights/>
   <Analytics/>
   <ScrollButton />
   <section>
      <div className='grid md:grid-cols-2'>
         <div className="grid h-screen place-items-center">
            <div>
               <TextGenerateEffect words="Learn 2 Build's" />
               <TextGenerateEffect words="2024 Hackathon" />
               <div className="h-[3rem]  items-center px-1">
                  <div className="text-5xl mx-auto font-normal text-neutral-400">
                     Learn to<FlipWords words={["create", "innovate", "develop", "code", "invent", "master"]} />
                  </div>
               </div>
               <h2 className="opacity-0 text-sm">
                  ignore me just some free padding, learning react without any typescript / js / or any knowledge is hard, &quot;Don&apos;t be evil&quot;
               </h2>
               <a href="https://learn-2-build.devpost.com" target="_blank" rel="noopener noreferrer">
                  <button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-2 text-base font-semibold leading-6 text-white inline-block">
                     <span className="absolute inset-0 overflow-hidden rounded-full">
                     <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                     </span>
                     <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-1 px-6 ring-1 ring-white/10 ">
                        <span>
                        Sign up!
                        </span>
                        <svg
                           fill="none"
                           height="24"
                           viewBox="0 0 24 24"
                           width="24"
                           xmlns="http://www.w3.org/2000/svg"
                           >
                           <path
                              d="M10.75 8.75L14.25 12L10.75 15.25"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                              />
                        </svg>
                     </div>
                     <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
                  </button>
               </a>
               <span className='pl-5 text-gray-500'>Join now and start hacking!</span>
            </div>
         </div>
         <div className="w-full h-full bg-black flex items-center justify-center md:h-screen">
            <div className="box-content">
               <div>
                  <BackgroundGradient className="rounded-[22px] max-w-lg p-4 sm:p-10 bg-white dark:bg-zinc-900">
                     <p className="text-base sm:text-4xl text-black mt-4 mb-2 dark:text-neutral-200 font-bold">
                        Participants
                     </p>
                     <p className="text-3xl inline-text bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 bg-clip-text text-transparent font-bold">
                        70
                     </p>
                     <p className="text-base sm:text-4xl text-black mt-4 mb-2 dark:text-neutral-200 font-bold">
                        Schedule
                     </p>
                     <p className="text-xl dark:text-neutral-200">
                        The Hackathon will go from <span className='font-bold'>July 25 to September 30.</span> You can still become a participant when the hackathon is active.
                     </p>
                     <p className="text-base sm:text-4xl text-black mt-4 mb-2 dark:text-neutral-200 font-bold">
                        Prize Pool
                     </p>
                     <p className="text-xl dark:text-neutral-200">
                        To be determined.
                     </p>
                  </BackgroundGradient>
               </div>
            </div>
         </div>
      </div>
   </section>
   <section className="h-[60rem] w-full flex justify-center ">
      <div className="text-center">
         <h2 className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent text-xl md:text-2xl lg:text-4xl xl:text-6xl 2xl:text-8xl font-bold">
            SPONSORS
         </h2>
         <div className='flex justify-center items-center'>
          <a href="https://gen.xyz/" className="pl-[2rem] pr-[2rem] pt-[2rem]">
            <Image src={xyzLogo} alt="XYZ Logo" width={400} height={240} className='w-[20rem] h-[12rem]' />
          </a>
          <a href="https://artofproblemsolving.com/" className="pl-[2rem] pr-[2rem] pt-[2rem]">
            <Image src={aopsLogo} alt="AoPS Logo" width={700} height={240} className='w-[35rem] h-[12rem]' />
          </a>
          <a href="https://www.axure.com/" className="pl-[2rem] pr-[2rem] pt-[2rem]">
            <Image src={axureLogo} alt="Axure Logo" width={700} height={240} className='w-[35rem] h-[10rem]' />
          </a>
        </div>
        <div className='flex justify-center items-center pt-[2rem]'>
          <a href="https://www.desmos.com/" className="[2rem] pr-[2rem] pt-[2rem]">
            <Image src={desmosLogo} alt="Desmos Logo" width={400} height={240} className='w-[25rem] h-[6rem]' />
          </a>
          <a href="https://www.interviewcake.com/" className="[2rem] pr-[2rem] pt-[2rem]">
            <Image src={InterviewCake} alt="InterviewCake Logo" width={400} height={240} className='w-[35rem] h-[6rem]' />
          </a>
          <a href="https://nordvpn.com/" className="[2rem] pr-[2rem] pt-[2rem]">
            <Image src={NordLogo} alt="NordVPN Logo" width={400} height={240} className='w-[35rem] h-[18rem]' />
          </a>
        </div>
        <div className='flex justify-center items-center'>
          <a href="https://incogni.com/" className="[2rem] pr-[2rem] pt-[2rem]">
            <Image src={Incogni} alt="Incogni Logo" width={400} height={240} className='w-[30rem] h-[10rem]' />
          </a>
          <a href="https://nordpass.com/" className="[2rem] pr-[2rem] pt-[2rem]">
            <Image src={NordPass} alt="NordPass Logo" width={400} height={240} className='w-[15rem] h-[15rem]' />
          </a>
          </div>
      </div>
   </section>
   <section className=''>
      <h2 className="flex justify-center font-bold bg-gradient-to-r from-indigo-100 via-purple-500 to-pink-500 bg-clip-text text-transparent text-xl md:text-2xl lg:text-4xl xl:text-6xl 2xl:text-8xl ">
         FAQ
      </h2>
      <div>
         <BentoGrid className=" max-w-7xl mx-auto md:auto-rows-[25rem]">
            {items.map((item, i) => (
            <BentoGridItem
               key = {i}
               title={item.title}
               description={item.description}
               className={item.className}
               />
            ))}
         </BentoGrid>
      </div>
   </section>
   <section>
      <div className = "text-neutral-600 font-semibold p-2">Made with love by Matt 💖</div>
   </section>
</main>
);
}
const items = [
{
title: "🔎What is Learn 2 Build?",
description: (
<>
<p className="text-xl">
   Learn 2 Build is an international hackathon dedicated to encouraging innovation, creativity, collaboration, as well as social change among participants from around the globe. It aims to bring together developers, designers, and technology enthusiasts to work on projects to solve a collective problem.
</p>
<p className="text-xl">
   <br />
   Our participant&apos;s age ranges from middle schoolers to collegiate, though anyone is free to join. We also do not have a set theme or category, we ask participants to create a 2-and-a-half-minute-long video demonstrating their creation&apos;s functionality and purpose. You are also free to develop an idea and create a demo of the concept.
</p>
</>
),
className: "md:col-span-2 text-xl",
},
{
title: "🤔What's a Hackathon?",
description:  (
<>
<p className="text-xl font-">A hackathon or codefest is a competition which participants can choose to team up to solve problems by creating software solutions. These events are usually centered around a topic or goal, though our hackathon doesn&apos;t have such theme we heavily encourage participants to create an app promoting social change. </p>
</>
),
className: "md:col-span-1",
},
{
title: "📧 Contact Us!",
description: (
<>
<p className="text-xl font-bold ">
   Do you have any questions or concerns? Or are you interested in helping sponsor the event? <br/><br/>
   Shoot us an email at: <span className = "text-green-400 ">learn2hackathon@gmail.com</span> <br/> We&apos;ll respond in less than 24hrs!
</p>
<br/><br/><br/><br/><br/>
<button onClick={() => window.open('mailto:learn2hackathon@gmail.com', '_blank')} className='text-3xl '>📧</button>
</>
),
className: "md:col-span-1",
},
{
title: "😸 Our Team",
description:(
<>
<p className="text-2xl font-bold">
   ✨Matthew Mei
</p>
<p className="text-xl">
   &ensp;Founder | Technology Lead
   <br />
</p>
<p className="text-2xl font-bold">
   ✨Danny Zhong
</p>
<p className="text-xl">
   &ensp;Business Development Manager
   <br />
</p>
<p className="text-2xl font-bold">
   ✨Matthew Lin
</p>
<p className="text-xl">
   &ensp;Chief Marketing Officer
   <br />
</p>
</>),
className: "md:col-span-1",
},
{
title: "🧑 Judges",
description: (
<>
<p className = "text-xl font-bold">
✨Darren Chen
</p>
<p className="text-lg">
   &ensp;CS & Electrical Engineering @ Yale
   <br />
</p>
<p className = "text-xl font-bold">
🤵Gaurav Mittal
</p>
<p className="text-lg">
   &ensp;IT Manager - Data Science @ Thermo Fisher 
</p>
<p className="text-lg">
   &ensp;Scientific
   </p>
<p className = "text-xl font-bold">
🔨Anujkumarsinh Donvir
</p>
<p className="text-lg">
   &ensp;Lead Application Developer @ ADP
</p>
<p className = "text-xl font-bold">
⚡ Kunvar Chokshi
</p>
<p className="text-lg">
   &ensp;Staff Embedded Software Engineer @ Tesla 
</p>
<p className = "text-xl font-bold">
🛡️Nurzhan Nogerbek
</p>
<p className="text-lg">
   &ensp;Lead Software Engineer @ Nomios
</p>
</>
),
className: "md:col-span-1",
},
];