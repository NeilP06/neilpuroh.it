import { createClient } from "@supabase/supabase-js";
import { ArrowLeftFromLine } from "lucide-react";
import { motion } from "motion/react";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import Footer from "../shared/Footer";

const supabase = createClient(process.env.REACT_APP_SUPABASE_URL, process.env.REACT_APP_SUPABASE_KEY);


export default function BlogPage() {
    const { name } = useParams();
    const [ fetchData, setfetchData] = useState(null);
    const [ loading, setLoading ] = useState(true);
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

  useEffect(() => {
    supabase
        .from("articles")
        .select("id, name, date, body, images-body, tags")
        .eq("url", name) 
        .single()
        .then(({ data, error }) => {
            if (error) console.error(error);
            else setfetchData(data);
      })
      .finally(() => setLoading(false));
  }, [name]);

    // Handle loading/failure states:
    if (loading) {
        return (
            <motion.div className="mx-10 mt-10">
                <p className="font-semibold text-black dark:text-white">Article is loading...</p>
            </motion.div>
        );                  
    }

    if (!fetchData) {
        <motion.div className="mx-10 mt-10">
            <p className="font-semibold text-black dark:text-white ">404: Article not found.</p>
        </motion.div>
    }

    return (
        <motion.div className="h-screen flex flex-col items-center justify-center">
            {/* Navigation bar. */}
            <motion.div initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} transition={{transition, delay: 0.50}}
                        className="w-3/5 mx-auto mb-[2vh] flex justify-between items-center">
                <Link to="/blog" className="inline-flex items-center text-stone-900 dark:text-stone-200 dark:hover:text-stone-400">
                    {
                        window.matchMedia('(prefers-color-scheme: dark)').matches
                            ? <ArrowLeftFromLine color="#e7e5e4" className="pr-2"/>
                            : <ArrowLeftFromLine color="#1c1917" className="pr-2"/>}<p className="">Blog Home</p>
                </Link>
                <Link to="/"><p className="text-2xl text-black dark:text-stone-200 hover:text-stone-400 font-bold items-end">Neil Purohit</p></Link>
            </motion.div>

            {/* Horizontal divider */}
            <motion.div initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} transition={{transition, delay: 1.0}} 
                        className="w-3/5 mb-[3vh] text-justify w-3/5">
                <hr className="border-2 rounded-md border-stone-200 dark:border-stone-900"/>
            </motion.div>

            {/* Main content. */}
            <motion.div className="inline-flex flex-col w-3/5 items-center lg:items-start">
                <motion.div initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} transition={{transition, delay: 0.75}}>
                    <p className="font-mono text-3xl font-bold text-stone-200">{fetchData.name}</p>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} transition={{transition, delay: 1.00}}>
                    <p className="font-mono text-md font-semibold text-stone-400">Published {fetchData.date} | Tags: {fetchData.tags}</p>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} transition={{transition, delay: 1.25}}>
                    <div className="relative max-h-[70vh] mt-[2vh] overflow-y-auto no-scrollbar">
                        <p className="font-mono text-lg text-justify text-stone-300 mt-6"><FormatText text={fetchData.body}></FormatText></p>
                    </div>
                </motion.div>
            </motion.div>
            <Footer/>
        </motion.div>
    );
}

function FormatText(props) {
    const [text, setText] = useState([]);

    useEffect(() => {
        if (typeof props.text === "string") {
            const formattedText = props.text
              .replace(/~/g, '<br/>')
              .replace(/!h/g, '<h2 style="font-size:30px;margin-bottom:3vh;margin-top:2vh"><b>')
              .replace(/h!/g, '</b></h2>')
              .replace(/!s/g, '<h2 style="font-size:20px;font-weight:600;margin-bottom:2vh;">')
              .replace(/s!/g, '</h2>')
              .replace(/!b/g, '<b>')
              .replace(/b!/g, '</b>')
              .replace(/<a/g, '<a style="text-decoration:underline;font-weight:550;" onmouseover="this.style.fontWeight=`700`;" onmouseout="this.style.fontWeight=`550`;" ');
            setText(formattedText);
        }
    }, [props.text]);

    return <span dangerouslySetInnerHTML={{__html: text}}/>;
}