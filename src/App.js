import Image from './Image.js';
import React from 'react';
import resume from './Neil-Purohit.pdf';
import Theme from './Theme.js';


export default function App() {
  document.body.classList.add("bg-stone-300", "dark:bg-zinc-950");
  const delayMessage = () => {
    alert("ProspectiveProgramming is not out for release, yet. Please wait patiently for the prototype to come out.");
  };
  return (
    <div className="h-screen flex items-center lg:ml-52">
      <div>
        <div className="lg:flex lg:items-center">
            <Image/>
            <div className="lg:mt-0 inline-grid text-center lg:text-left w-full gap-3 lg:gap-1">
              <p className="mt-20 md:mt-0 text-6xl font-mono font-bold text-black dark:text-white">Neil Purohit</p>
              <div className="inline-grid lg:flex lg:items-center gap-3">
                <p className="font-mono text-black dark:text-white"><a className="hover:font-semibold" href="https://linkedin.com/in/neilpurohit06"><u>LinkedIn</u></a> // <a className="hover:font-semibold" href="https://github.com/neilp06"><u>Github</u></a> // <a className="hover:font-semibold" href="mailto:me@neilpuroh.it"><u>Contact</u></a> // <a className="hover:font-semibold" href={resume}><u>Résumé</u></a> //</p>
                <Theme/>
              </div>
            </div>
        </div>
        <div className="flex flex-col items-center lg:items-start mx-12 lg:mx-0 mt-10 lg:w-5/6">
          <p className="lg:mb-5 text-center lg:text-left text-md lg:text-xl font-mono font-medium text-black dark:text-white">I am a senior at Lake Forest High School with a focus on data analytics, game development, and AI systems. I specialize in MERN, Java, Python, & SQL. Some of my notable roles include <i>Data & Analytics Summer Intern</i> at AbbVie (Summer 2023), <i>Founder</i> of <a className="hover:font-semibold" href="https://prospectiveprogramming.org"><u>ProspectiveProgramming</u></a>, and <i>Co-Founder</i> of <a className="hover:font-semibold" href="https://futurepearstudios.co"><u>FuturePearStudios</u></a>. I'm currently working on developing new online games and building a application focused on specialized IDE features and project-sharing. Please do not hesitate to contact me if you have any questions!</p>
        </div>
      </div>
    </div>
  );
}