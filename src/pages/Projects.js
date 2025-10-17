import { createClient } from "@supabase/supabase-js";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { Search } from "lucide-react";
import { transition } from "../shared/globals.js";
import { useState, useEffect, useRef } from 'react';

import Theme from "../shared/Theme.js";

const supabase = createClient(process.env.REACT_APP_SUPABASE_URL, process.env.REACT_APP_SUPABASE_KEY);

export default function Projects() {
 const [ arrData, setArrData ] = useState("")
 const listRef = useRef(null);

    document.body.classList.add("bg-stone-300", "dark:bg-stone-950");

    useEffect(() => {
        async function getData() {
            const { data, error } = await supabase.from("projects").select("id, name, cover, tldr, url, skills").order("id", {ascending: true});

            if (error) {
                throw new Error("Fetch blog data failed.\n", error);
            }

            return data;
        }

        getData().then((data) => {
            const transition = {
                duration: 1.5,
                ease: [0.50, 0.67, 0.83, 0.67 ],
            }

            const data_arr = data.reduce((curr, item) => {
                let href = item["url"];
                let delayTime = 1.75 + parseInt(item["id"]) * 0.25;

                let list_skills = item["skills"].replace(" ", "").split(",");
                let rows = [];
                let image = "";

                for (let i = 0; i < list_skills.length; i++) {
                    let elem = <p className="text-sm dark:bg-stone-900 rounded-2xl mx-1 px-4 py-1">{list_skills[i]}</p>
                    rows.push(elem);
                }

                if (item["cover"]) {
                    image = <img className="w-4/5 border-4 rounded-lg border-stone-200 dark:border-stone-900" src={item["cover"]}/>;
                }


                const renderedComponent = (
                    <Link key={item["id"]} to={href}>
                        <motion.div initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} transition={{transition, delay: delayTime}}
                                    className="border-4 rounded-lg border-stone-200 dark:border-stone-900 p-3 flex flex-col items-center text-center justify-center hover:cursor-pointer text-stone-800 dark:text-stone-300 hover:text-stone-500 dark:hover:text-stone-400 duration-500">
                            <p className="w-[80%] my-5 font-semibold text-3xl font-mono">{item["name"]}</p>
                            {image}
                            <p className="mt-5 w-[80%] text-center text-lg font-mono">{item["tldr"]}</p>
                            <div className="my-5 w-4/5 flex flex-wrap justify-center gap-2">
                                {list_skills.map((skill, i) => (
                                    <span
                                        key={`${item.id}-skill-${i}`}
                                        className="inline-flex items-center rounded-2xl px-3 py-1 text-sm bg-stone-100 dark:bg-stone-900 text-stone-800 dark:text-stone-200 whitespace-nowrap"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    </Link>
                );
                curr.push(renderedComponent);
                return curr;
            }, []);
            setArrData(data_arr);
        });
    }, []);

    useEffect(() => {
        if (listRef.current) {
            listRef.current.scrollTop = 0;
        }
    }, [arrData]);

    return (
        <motion.div className="pt-[10vh] flex flex-col items-center justify-center">
            {/* Navigation bar */}
            <motion.div initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} transition={{transition, delay: 0.50}}
                        className="w-3/5 mb-[2vh] flex">
                <Link to="/blog" className="text-xl inline-flex items-center mr-8"><p className="font-semibold text-stone-700 dark:text-stone-200 hover:text-stone-500 dark:hover:text-stone-400">Blog</p></Link>
                <Link to="/projects" className="text-xl inline-flex items-center mr-8"><p className="font-semibold text-stone-900 dark:text-stone-400">Projects</p></Link>
                <Link to="/experience" className="text-xl inline-flex items-center mr-8"><p className="font-semibold text-stone-700 dark:text-stone-200 hover:text-stone-500 dark:hover:text-stone-400">Experience</p></Link>
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

            {/* Main content */}
            <motion.div className="flex flex-col relative overflow-y-auto no-scrollbar items-center max-h-[80vh] w-[55%]" ref={listRef}>
                <div className="grid grid-cols-1 gap-8">
                    {arrData}
                </div>
            </motion.div>
        </motion.div>
    );
}