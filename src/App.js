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
                <p className="font-mono text-black dark:text-white"><a className="hover:font-semibold" href="https://linkedin.com/in/neilpurohit06"><u>LinkedIn</u></a> // <a className="hover:font-semibold" href="https://github.com/neilp06"><u>Github</u></a> // <a className="hover:font-semibold" href="mailto:neilpurohit42@gmail.com"><u>Contact</u></a> // <a className="hover:font-semibold" href={resume}><u>Résumé</u></a> //</p>
                <Theme/>
              </div>
            </div>
        </div>
        <div className="flex flex-col items-center lg:items-start mx-12 lg:mx-0 mt-10 lg:w-5/6">
          <p className="lg:mb-5 text-center lg:text-left text-md lg:text-xl font-mono font-medium text-black dark:text-white">I am a senior at Lake Forest High School who has a passion for data analytics & software development, hoping to make a difference in the real world. I specialize in MERN, Java, Python, & SQL. Some of my notable roles include <i>Data & Analytics Summer Intern</i> at AbbVie, <i>Founder</i> of <a className="hover:font-semibold" onClick={delayMessage} href=""><u>ProspectiveProgramming</u></a>, and <i>Co-Founder</i> of <a className="hover:font-semibold" href="https://futurepearstudios.co"><u>FuturePearStudios</u></a>, amongst others. Going through this journey, I want to help others succeed in the programming world and make the biggest impact I can. Feel free to contact me for anything!</p>
        </div>
      </div>
    </div>
  );
}



