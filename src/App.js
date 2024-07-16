import Image from './Image.js';
import React from 'react';
// import resume from './Neil-Purohit.pdf';
import Theme from './Theme.js';

export default function App() {
  document.body.classList.add("bg-stone-300", "dark:bg-zinc-950");
  const resume = () => { alert("Old resumé is outdated; a new one is currently being drafted."); };
  return (
    <div className="h-screen flex items-center lg:ml-52">
      <div>
        <div className="lg:flex lg:items-center">
            <Image/>
            <div className="lg:mt-0 inline-grid text-center lg:text-left w-full gap-3 lg:gap-1">
              <p className="mt-20 md:mt-0 text-6xl font-mono font-bold text-black dark:text-white">Neil Purohit</p>
              <div className="inline-grid lg:flex lg:items-center gap-3">
                <p className="font-mono text-black dark:text-white"><a className="hover:font-semibold" href="https://linkedin.com/in/neilpurohit06"><u>LinkedIn</u></a> // <a className="hover:font-semibold" href="https://github.com/neilp06"><u>Github</u></a> // <a className="hover:font-semibold" href="mailto:me@neilpuroh.it"><u>Contact</u></a> // <a className="hover:font-semibold" onClick={resume}><u>Résumé</u></a> //</p>
                <Theme/>
              </div>
              <div className="inline-grid lg:flex lg:items-center gap-3">
                <p className="font-mono text-sm text-black dark:text-white">Java • Python • Javascript • MERN • SQL • React Native</p>
              </div>
            </div>
        </div>
        <div className="flex flex-col items-center lg:items-start mx-12 lg:mx-0 mt-10 lg:w-5/6">
          <p className="lg:mb-5 text-center lg:text-left text-md lg:text-xl font-mono font-medium text-black dark:text-white">I am an upcoming freshman at Carnegie Mellon University majoring in Statistics & Machine Learning and Computer Science. My interests are in data engineering, quantitative trading, sports statistics, and computer vision tasks. I previously interned at AbbVie as a <i>Data & Analytics Summer Intern</i>, focusing on building data visualizations and dashboards. I am the <i>Founder</i> of <a className="hover:font-semibold" href="https://prospectiveprogramming.org"><u>ProspectiveProgramming</u></a>, Author of <a href="https://thesidelinestat.com"><u>TheSidelineStat</u></a>, and <i>Co-Founder</i> of FuturePearStudios.</p>
        </div>
      </div>
    </div>
  );
}