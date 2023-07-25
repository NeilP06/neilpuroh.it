import photo from './photo.png';
import { Moon } from 'lucide-react';
import {useState, useEffect } from 'react';
import React from 'react';
import Theme from './Theme.js';


export default function App() {
  document.body.classList.add("bg-stone-300", "dark:bg-zinc-950");
  return (
    <div>
      <div class="mt-32 ml-52 flex items-center">
          <img class="mr-8 border-4 rounded-full border-black dark:border-white" src={photo} height="140" width="140"></img>
          <div class="inline-grid gap-2">
            <p class="text-6xl font-mono font-bold text-black dark:text-white">Neil Purohit</p>
            <p class="font-mono text-black dark:text-white"><a  class="hover:font-semibold" href="https://linkedin.com/in/neilpurohit06"><u>LinkedIn</u></a> // <a class="hover:font-semibold" href="https://github.com/neilp06"><u>Github</u></a> // <a class="hover:font-semibold" href="mailto:neilpurohit42@gmail.com"><u>Contact</u></a> // <a class="hover:font-semibold" href=""><u>Resumé</u></a></p>
          </div>
      </div>
      <div class="mt-10 ml-52 w-2/3">
        <p class="text-xl font-mono font-medium text-black dark:text-white">I am a senior at Lake Forest High School who has a passion for data analytics & software development, hoping to make a difference in the real world. I am proficient in MERN, Java, Python, & SQL. Some of my notable roles include <i>Summer Worker Intern</i> at AbbVie, <i>Founder</i> of <a class="hover:font-semibold" href=""><u>ProspectiveProgramming</u></a>, and <i>Co-Founder</i> of <a class="hover:font-semibold" href="https://futurepearstudios.co"><u>FuturePearStudios</u></a>, amongst others.</p>
      </div>
      <Theme/>
    </div>
  );
}



