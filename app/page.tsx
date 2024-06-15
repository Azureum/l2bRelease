"use client";
import React from 'react';
import Image from 'next/image';
import logo from './components/ui/photos/mg.png';
import { TextGenerateEffect } from "../app/components//ui/text-generate-effect";
import { BackgroundBeams } from "../app/components/ui/background-beams";
import { BackgroundGradient } from "../app/components/ui/background-gradient";
import { BentoGrid, BentoGridItem } from "../app/components/ui/bento-grid";
export default function App() {
return (
<main className='App dark'>
   <section>
      <div className='w-screen h-screen grid md:grid-cols-2'>
         <div className="grid h-screen place-items-center ">
            <div>
               <TextGenerateEffect words="Learn 2 Build's"/>
               <TextGenerateEffect words="2024 Hackathon" />
               <h2 className = "opacity-0 text-xs" >ignore me just some free padding, learning react without any typescript / js / or any knowledge is hard 🤫</h2>
               <button className="inline-flex w-[14vw] h-[12vh] animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] text-3xl font-mono text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 font-bold">
               Sign up!
               </button>
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
                     <p className="text-3xl dark:text-indigo-400	-200 font-bold">
                        3,381
                     </p>
                     <p className="text-base sm:text-4xl text-black mt-4 mb-2 dark:text-neutral-200 font-bold">
                        Schedule
                     </p>
                     <p className="text-xl dark:text-neutral-200">
                        The Hackathon will go from,  <span className='font-bold'>July 15 to September 20.</span> You can still become a participant  when the hackathon is active.
                     </p>
                     <p className="text-base sm:text-4xl text-black mt-4 mb-2 dark:text-neutral-200 font-bold">
                        Prize Pool
                     </p>
                     <p className="text-xl dark:text-neutral-200">
                        $25,000 USD +
                        Other Awards
                     </p>
                  </BackgroundGradient>
               </div>
            </div>
         </div>
      </div>
   </section>
   <section>
      <div>
         {/* Create one for contact, About, some statistics */}
      <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={item.className}
        />
      ))}
    </BentoGrid>
      </div>
   </section>
   <BackgroundBeams />
</main>
);
}
const Skeleton = () => (
   <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
 );
 const items = [
   {
     title: "The Dawn of Innovation",
     description: "Explore the birth of groundbreaking ideas and inventions.",
     header: <Skeleton />,
     className: "md:col-span-2",
   },
   {
     title: "The Digital Revolution",
     description: "Dive into the transformative power of technology.",
     header: <Skeleton />,
     className: "md:col-span-1",
   },
   {
     title: "The Art of Design",
     description: "Discover the beauty of thoughtful and functional design.",
     header: <Skeleton />,
     className: "md:col-span-1",
   },
   {
     title: "The Power of Communication",
     description:
       "Understand the impact of effective communication in our lives.",
     header: <Skeleton />,
     className: "md:col-span-2",
   },
 ];
