import { createClient } from "@supabase/supabase-js";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { useState, useEffect } from 'react';
import { Search } from "lucide-react";

const supabase = createClient(process.env.REACT_APP_SUPABASE_URL, process.env.REACT_APP_SUPABASE_KEY);

export default function Blog() {
    const [ arrData, setArrData ] = useState("")
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

    useEffect(() => {
        async function getData() {
            const { data, error } = await supabase.from("articles").select("id, name, date, cover-image, body, images-body, url, tags").order("date", {ascending: false});

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
                let desc = item["body"].substring(0, 200);
                let href = `/blog/${item["url"]}`;
                let delayTime = 1.75 - parseInt(item["id"]) * 0.25;
                const renderedComponent = (
                    <Link key={item["id"]} to={href}>
                        <motion.div initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} transition={{transition, delay: delayTime}}
                                    className="mb-12 hover:cursor-pointer text-stone-300 hover:text-stone-400 duration-500">
                            <p className="font-semibold text-2xl font-mono">{item["name"]}</p>
                            <p className="text-lg text-stone-500 font-mono">Published {item["date"]}</p>
                            <p className="text-md text-justify text-stone-600 font-mono mb-3">Tags: {item["tags"]}</p>
                            </motion.div>
                        </Link>
                );
                curr.push(renderedComponent);
                return curr;
            }, []);
            setArrData(data_arr);
        });
    }, []);

    const transition = {
        duration: 1.5,
        ease: [0.50, 0.67, 0.83, 0.67 ],
    }

    return (
        <motion.div className="pt-[10vh] flex flex-col items-center justify-center">
            {/* Navigation bar */}
            <motion.div initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} transition={{transition, delay: 0.50}}
                        className="w-3/5 mb-[2vh] flex">
                <Link to="/blog" className="text-xl inline-flex items-center mr-8 hover:underline"><p className="font-semibold text-stone-400">Blog</p></Link>
                <Link to="/projects" className="text-xl inline-flex items-center mr-8 hover:underline"><p className="font-semibold text-stone-200 hover:text-stone-400">Projects</p></Link>
                <Link to="/experience" className="text-xl inline-flex items-center mr-8 hover:underline"><p className="font-semibold text-stone-200 hover:text-stone-400">Experience</p></Link>
                <Link to="/" className="text-2xl font-bold ml-auto">
                    <p className="text-stone-200 hover:text-stone-400">Neil Purohit</p>
                </Link>
            </motion.div>

            {/* Horizontal divider */}
            <motion.div initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} transition={{transition, delay: 0.75}} 
                        className="w-3/5 mb-[3vh] text-justify w-3/5">
                <hr className="border-2 rounded-md border-stone-900"/>
            </motion.div>

            {/* Search bar */}
            <motion.div initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} transition={{transition, delay: 1.0}}
                        className="w-3/5 mb-[3vh]">
                <SearchTags/>
            </motion.div>

            {/* Main content */}
            <motion.div className="w-3/5">
                <p className="dark:text-white">{arrData}</p>
            </motion.div>
        </motion.div>
    )
}

function SearchTags() {
    const [ result, setResult ] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (res) => {
        res.preventDefault();
        
        const formatted = result.trim();

        if (formatted) {
            navigate(`/blog/tag/${encodeURIComponent(formatted)}`);
        }
    };

    return (
        <motion.form onSubmit={handleSubmit} className="flex items-center">
            <button type="submit" className="pr-2">
                <Search color="#57534d" strokeWidth={2.50}/>
            </button>
            <input name="Tag Search" type="text" 
                   value={result} onChange={(e) => setResult(e.target.value)}
                   placeholder="Search by Tag"
                   className="dark:text-white dark:placeholder-stone-600 dark:bg-stone-900 rounded-md px-3 py-1">
            </input>
        </motion.form>
    )
}