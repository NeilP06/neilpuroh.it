import { ArrowLeftFromLine } from "lucide-react";
import { createClient } from "@supabase/supabase-js";
import { Link, useParams } from "react-router-dom";
import { motion } from "motion/react";
import { transition } from "../shared/globals.js";
import { useState, useEffect } from "react";

import Footer from "../shared/Footer.js";
import Theme from "../shared/Theme.js";


/**
 * @brief Template page for a blog post.
 * 
 * @returns <BlogPage/>
 */
export default function BlogPage() {
    const { name } = useParams();
    const [ fetchData, setfetchData] = useState(null);
    const [ loading, setLoading ] = useState(true);
    const supabase = createClient(process.env.REACT_APP_SUPABASE_URL, 
                                  process.env.REACT_APP_SUPABASE_KEY);

    // Background colors for the light & dark themes
    document.body.classList.add("bg-stone-300", "dark:bg-stone-950");

    // Search database to find an article that matches the URL
    useEffect(() => {
        supabase
            .from("articles")
            .select("id, name, date, body, images-body, tags")
            .eq("url", name) 
            .single()
            .then(({ data, error }) => {
                error ? console.error(error) : setfetchData(data);
            })
            .finally(() => setLoading(false));
    }, [name]);

    // Temporary state while page is loading
    if (loading) {
        return (
            <motion.div className="mx-10 mt-10">
                <p className="font-semibold text-black dark:text-white">Article is loading...</p>
                <Footer/>
            </motion.div>
        );                  
    }

    // Display error if article name is not found
    if (!fetchData) {
        return (
            <motion.div className="mx-10 mt-10">
                <p className="font-semibold text-black dark:text-white">This article could not found. Go back to <Link to="/blog" className="underline hover:font-bold">Blog Home</Link>?</p>
                <Footer/>
            </motion.div>
        );
    }

    return (
        <motion.div className="h-screen flex flex-col items-center justify-center">
            {/* Navigation bar. */}
            <motion.div initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} transition={{transition, delay: 0.50}}
                        className="w-3/5 mb-[2vh] flex">
                <Link to="/blog" className="pr-8 inline-flex items-center text-stone-900 dark:text-stone-200 hover:text-stone-600 dark:hover:text-stone-400">
                    <ArrowLeftFromLine className="pr-2 text-stone-900 dark:text-stone-200 hover:text-stone-600 dark:text-hover-400"/><p>Blog Home</p>
                </Link>
                <Theme className="mx-8"/>
                <Link to="/" className="text-2xl font-bold ml-auto">
                    <p className="text-stone-950 dark:text-stone-200 hover:text-stone-700 dark:hover:text-stone-400">Neil Purohit</p>
                </Link>
            </motion.div>

            {/* Horizontal divider */}
            <motion.div initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} transition={{transition, delay: 0.75}} 
                        className="w-3/5 mb-[3vh] text-justify w-3/5">
                <hr className="border-2 rounded-md border-stone-200 dark:border-stone-900"/>
            </motion.div>

            {/* Main content. */}
            <motion.div className="inline-flex flex-col w-3/5 items-center lg:items-start">
                <motion.div initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} transition={{transition, delay: 1.00}}>
                    <p className="font-mono text-3xl font-bold text-stone-900 dark:text-stone-200">{fetchData.name}</p>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} transition={{transition, delay: 1.25}}>
                    <p className="font-mono text-md font-semibold text-stone-600 dark:text-stone-400">Published {fetchData.date} | Tags: {fetchData.tags}</p>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} transition={{transition, delay: 1.50}}>
                    <div className="relative max-h-[70vh] mt-[2vh] overflow-y-auto no-scrollbar">
                        <p className="font-mono text-lg text-justify text-stone-800 dark:text-stone-300 mt-6"><FormatText text={fetchData.body}/></p>
                    </div>
                </motion.div>
            </motion.div>
        </motion.div>
    );
}


/**
 * @brief Formats a string into HTML code with certain elements being replaced
 *        to give structure to the response.
 * 
 * @param {*} props Takes in a string.
 * @returns <FormatText text={string}/>
 */
function FormatText(props) {
    const [text, setText] = useState([]);

    // Replace specific expressions with HTML code
    useEffect(() => {
        if (typeof props.text === "string") {
            const formattedText = props.text
              .replace(/~/g, '<br/>')
              .replace(/!h/g, '<h2 style="font-size:30px;margin-bottom:3vh;'
                            + 'margin-top:2vh"><b>')
              .replace(/h!/g, '</b></h2>')
              .replace(/!s/g, '<h2 style="font-size:20px;font-weight:600;'
                            + 'margin-bottom:2vh;">')
              .replace(/s!/g, '</h2>')
              .replace(/!b/g, '<b>')
              .replace(/b!/g, '</b>')
              .replace(/<a/g, '<a style="text-decoration:underline;font-weight'
                            + ':550;" onmouseover="this.style.fontWeight=`700`'
                            + ';" onmouseout="this.style.fontWeight=`550`;" ');
            setText(formattedText);
        }
    }, [props.text]);

    return <span dangerouslySetInnerHTML={{__html: text}}/>;
}