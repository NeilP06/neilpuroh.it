import { Moon } from 'lucide-react';
import {useState, useEffect } from 'react';
import photo from './photo.png';
import React from 'react';
import resume from './Neil-Purohit.pdf';
import Theme from './Theme.js';


export default function App() {
  document.body.classList.add("bg-stone-300", "dark:bg-zinc-950");

  const delayMessage = () => {
    alert("ProspectiveProgramming is not out for release, yet. Please wait patiently for the prototype to come out.");
  };
  return (
    <div>
      <div class="mt-40 ml-56 flex items-center">
          <img class="mr-8 border-4 rounded-full border-black dark:border-white" src={photo} height="140" width="140"></img>
          <div class="inline-grid gap-1">
            <p class="text-6xl font-mono font-bold text-black dark:text-white">Neil Purohit</p>
            <div class="flex items-center">
              <p class="mr-2 font-mono text-black dark:text-white"><a class="hover:font-semibold" href="https://linkedin.com/in/neilpurohit06"><u>LinkedIn</u></a> // <a class="hover:font-semibold" href="https://github.com/neilp06"><u>Github</u></a> // <a class="hover:font-semibold" href="mailto:neilpurohit42@gmail.com"><u>Contact</u></a> // <a class="hover:font-semibold" href={resume}><u>Resumé</u></a> // </p>
              <Theme/>
            </div>
          </div>
      </div>
      <div class="mt-10 ml-56 w-2/3">
        <p class="mb-5 text-xl font-mono font-medium text-black dark:text-white">I am a senior at Lake Forest High School who has a passion for data analytics & software development, hoping to make a difference in the real world. I specialize in MERN, Java, Python, & SQL. Some of my notable roles include <i>Data & Analytics Summer Intern</i> at AbbVie, <i>Founder</i> of <a class="hover:font-semibold" onClick={delayMessage} href=""><u>ProspectiveProgramming</u></a>, and <i>Co-Founder</i> of <a class="hover:font-semibold" href="https://futurepearstudios.co"><u>FuturePearStudios</u></a>, amongst others. Going through this journey, I want to help others succeed in the programming world and make the biggest impact I can. Feel free to contact me for anything!</p>
      </div>
    </div>
  );
}



