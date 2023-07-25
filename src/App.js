import { Moon } from 'lucide-react';
import {useState, useEffect } from 'react';
import logo from './logo.svg';
import React from 'react';


export default function App() {
  const [ theme, setTheme ] = useState("light"); 

  document.body.classList.add("bg-slate-300", "dark:bg-zinc-950");
  return (
    <div>
      <button><Moon color="959ea8"/></button>
      <h2 class="text-white">hi</h2>
    </div>
  );
}



