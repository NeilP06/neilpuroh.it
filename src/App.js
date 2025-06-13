import { animate, motion, MotionValue, useMotionValue, useMotionValueEvent, useScroll } from "motion/react";
import Blog from './BlogHandler.js';
import Image from './Image.js';
import React, { useRef } from 'react';
import resume from './Neil-Purohit.pdf';
import Theme from './Theme.js';

function useScrollOverflowMask(scrollProg) {
  const opaque      = "#000";
  const transparent = "#0000";

  // start with fades at top/bottom
  const maskImage = useMotionValue(
    `linear-gradient(
       180deg,
       ${transparent} 0%,
       ${opaque} 20%,
       ${opaque} 80%,
       ${transparent} 100%
     )`
  );

  useMotionValueEvent(scrollProg, "change", (v) => {
    if (v === 0 || v === 1) {
      // at very top or bottom: no fade
      animate(
        maskImage,
        `linear-gradient(180deg, ${opaque} 0%, ${opaque} 100%)`
      );
    } else {
      // middle scroll: fade both ends
      animate(
        maskImage,
        `linear-gradient(
           180deg,
           ${transparent} 0%,
           ${opaque} 20%,
           ${opaque} 80%,
           ${transparent} 100%
         )`
      );
    }
  });

  return maskImage;
}

export default function App() {
  const ref = useRef(null);

  // Define transition parameters.
  const transition = {
    duration: 1.5,
    ease: [0.50, 0.67, 0.83, 0.67 ],
  }

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const maskImage = useScrollOverflowMask(scrollYProgress);

  // Background settings.
  document.body.classList.add("bg-stone-300", "dark:bg-stone-950");

  return (
    <motion.div className="h-screen flex flex-col items-center justify-center">
      <div className="inline-flex flex-col items-center lg:items-start">
          <div className="flex lg:justify-center">
              <motion.div initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} transition={{transition, delay: 0.50}}>
                <Image/>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} transition={{transition, delay: 0.50}}
                          className="flex flex-col w-full max-w-lg lg:mt-0 inline-grid text-center lg:text-left gap-3 lg:gap-1">
                <p className="mt-20 md:mt-0 text-6xl font-mono font-bold text-black dark:text-stone-300">Neil Purohit</p>
                <div className="flex flex-col lg:flex-row lg:items-center gap-3">
                  <p className="font-mono text-black dark:text-stone-300">
                    <a className="hover:font-semibold" href="https://linkedin.com/in/neilpurohit06"><u>LinkedIn</u></a> // 
                    <a className="hover:font-semibold" href="https://github.com/neilp06"> <u>Github</u></a> // 
                    <a className="hover:font-semibold" href="mailto:me@neilpuroh.it"> <u>Contact</u></a> // 
                    <a className="hover:font-semibold" href={resume}> <u>Résumé</u></a> //
                  </p>
                  <Theme/>
                </div>
                <p className="font-mono text-sm text-black dark:text-stone-300">Knows C, OCaml, Java, Python, MERN, SQL, & more.</p>
              </motion.div>
          </div>
      </div>

      <motion.div initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} transition={{transition, delay: 0.75}} 
                  className=" w-3/5 lg:mb-5 text-justify">
        <p className="mt-10 text-md lg:text-xl font-mono font-medium text-black dark:text-stone-300">
          I am a sophomore at Carnegie Mellon University double majoring in 
          Statistics & Machine Learning and Computer Science. I am interested
          in big data, algorithms trading, and computer vision.
        </p>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} transition={{transition, delay: 1.0}} 
                  className="w-3/5 lg:mb-5 text-justify my-6 w-3/5">
        <hr className="border-2 rounded-md border-stone-900"/>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} transition={{transition, delay: 1.25}} className="mt-6 pb-3">
        <p className="text-lg text-black">
            <a className="dark:text-stone-500 font-semibold hover:font-bold bg-stone-900 border-stone-900 border-2 rounded-md px-4 py-2 mx-4" href="">
              <u className="no-underline">Blog</u>
            </a>
          <a className="dark:text-stone-300 font-semibold hover:font-bold bg-stone-900 border-stone-900 border-2 rounded-md px-4 py-2 mx-4" href="">
            <u className="no-underline">Projects</u>
          </a>
          <a className="dark:text-stone-300 font-semibold hover:font-bold bg-stone-900 border-stone-900 border-2 rounded-md px-4 py-2 mx-4" href="">
            <u className="no-underline">Experience</u>
          </a>
        </p>
      </motion.div>
      <motion.div ref={ref} style={{WebkitMaskImage: maskImage, maskImage: maskImage}}
                  className="max-h-[30vh] overflow-y-auto w-3/5 pt-10 no-scrollbar">
        <Blog/>
      </motion.div>
    </motion.div>
  );
}