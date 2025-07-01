import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { useState, useEffect } from 'react';

export default function Experiences() {
    const [ theme, setTheme ] = useState(null);
 
    useEffect(() => {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setTheme("dark");
            return;
        }
        setTheme("light");
    }, []);

    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
            return;
        }
        document.documentElement.classList.remove("dark");
    }, [ theme ]);

    document.body.classList.add("bg-stone-300", "dark:bg-stone-950");

    const transition = {
        duration: 1.5,
        ease: [0.50, 0.67, 0.83, 0.67 ],
    }

    return (
        <motion.div className="pt-[10vh] flex flex-col items-center justify-center">
            {/* Navigation bar */}
            <motion.div initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} transition={{transition, delay: 0.50}}
                        className="w-3/5 mb-[2vh] flex">
                <Link to="/blog" className="text-xl inline-flex items-center mr-8 hover:underline"><p className="font-semibold text-stone-200 hover:text-stone-400">Blog</p></Link>
                <Link to="/projects" className="text-xl inline-flex items-center mr-8 hover:underline"><p className="font-semibold text-stone-200 hover:text-stone-400">Projects</p></Link>
                <Link to="/experience" className="text-xl inline-flex items-center mr-8 hover:underline"><p className="font-semibold text-stone-400">Experience</p></Link>
                <Link to="/" className="text-2xl font-bold ml-auto">
                    <p className="text-stone-200 hover:text-stone-400">Neil Purohit</p>
                </Link>
            </motion.div>

            {/* Horizontal divider */}
            <motion.div initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} transition={{transition, delay: 0.75}} 
                        className="w-3/5 mb-[3vh] text-justify w-3/5">
                <hr className="border-2 rounded-md border-stone-900"/>
            </motion.div>

            {/* TBD */}
            <motion.div initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} transition={{transition, delay: 1.0}}
                        className="w-3/5 mb-[3vh]">
                <p className="text-white text-lg font-semibold">En construcción 👷</p>
            </motion.div>
        </motion.div>
    );
}