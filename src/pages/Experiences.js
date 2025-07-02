import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { transition } from "../shared/globals.js";

import Theme from "../shared/Theme.js";

export default function Experiences() {
    document.body.classList.add("bg-stone-300", "dark:bg-stone-950");

    return (
        <motion.div className="pt-[10vh] flex flex-col items-center justify-center">
            {/* Navigation bar */}
            <motion.div initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} transition={{transition, delay: 0.50}}
                        className="w-3/5 mb-[2vh] flex">
                <Link to="/blog" className="text-xl inline-flex items-center mr-8"><p className="font-semibold text-stone-700 dark:text-stone-200 hover:text-stone-500 dark:hover:text-stone-400">Blog</p></Link>
                <Link to="/projects" className="text-xl inline-flex items-center mr-8"><p className="font-semibold text-stone-700 dark:text-stone-200 hover:text-stone-500 dark:hover:text-stone-400">Projects</p></Link>
                <Link to="/experience" className="text-xl inline-flex items-center mr-8"><p className="font-semibold text-stone-900 dark:text-stone-400">Experience</p></Link>
                <Theme className=""/>
                <Link to="/" className="text-2xl font-bold ml-auto">
                    <p className="text-stone-950 dark:text-stone-200 hover:text-stone-700 dark:hover:text-stone-400">Neil Purohit</p>
                </Link>
            </motion.div>

            {/* Horizontal divider */}
            <motion.div initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} transition={{transition, delay: 0.75}} 
                        className="w-3/5 mb-[3vh] text-justify w-3/5">
                <hr className="border-2 rounded-md border-stone-200 dark:border-stone-900"/>
            </motion.div>

            {/* TBD */}
            <motion.div initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} transition={{transition, delay: 1.0}}
                        className="w-3/5 mb-[3vh]">
                <p className="text-black dark:text-white text-lg font-semibold">En construcción 👷</p>
            </motion.div>
        </motion.div>
    );
}