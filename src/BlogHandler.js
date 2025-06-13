import { createClient } from "@supabase/supabase-js";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { useState, useEffect } from 'react';
import React from 'react';

const supabase = createClient(process.env.REACT_APP_SUPABASE_URL, process.env.REACT_APP_SUPABASE_KEY);

export default function Blog() {
    const [ getData, setData ] = useState("");
    const [ arrData, setArrData ] = useState("");


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
                let desc = item["body"].substring(0, 100);
                let href = `/blog/${item["url"]}`;
                let delayTime = 1.75 - parseInt(item["id"]) * 0.25;
                const renderedComponent = (
                    <Link key={item["id"]} to={href}>
                        <motion.div initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} transition={{transition, delay: delayTime}}
                                    className="px-4 py-8 mb-5 rounded-lg border-4 border-stone-900 
                                               hover:cursor-pointer hover:border-stone-700 duration-500">
                            <p className="font-semibold text-2xl text-stone-300 font-mono">{item["name"]}</p>
                            <p className="text-lg text-stone-500 mb-3 font-mono">Published {item["date"]} | Post #{item["id"]}</p>
                            <p className="text-md text-justify text-stone-600 font-mono">{desc}..."</p>
                        </motion.div>
                    </Link>
                );
                curr.push(renderedComponent);
                return curr;
            }, []);
            setArrData(data_arr);
        });
    }, []);
    return (
        <div>
            {arrData}
        </div>
    );
}