import { Moon, Sun } from 'lucide-react';
import { useState, useEffect } from 'react';

/**
 * @brief Gives theme controlability to the user and store preferences in local
 *        settings to ensure consistency.
 * 
 * @returns <Theme/>
 */
export default function Theme() {
    const [ theme, setTheme ] = useState(null);
 
    // Assign theme value
    useEffect(() => {
        const stored = localStorage.getItem("theme");

        // User already set theme
        if (stored === "light" || stored === "dark") {
            setTheme(stored);
        }

        // Assign theme on system preference if not already set
        else {
            if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                setTheme("dark");
                return;
            }
            setTheme("light");
        }
    }, []);

    // Sync changes to system
    useEffect(() => {
        // Do nothing if theme is not initialized
        if (!theme) {
            return;
        }

        // Add to HTML class and local storage
        document.documentElement.classList.toggle("dark", theme === "dark");
        localStorage.setItem("theme", theme);
    }, [theme]);

    // Toggle between themes
    const handleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    return (
        <div className="mt-1.5">
            <button onClick={handleTheme}>
                {
                    theme === "dark"
                        ? <Sun color="white" size={20}/>
                        : <Moon color="black" size={20}/>
                }
            </button>
        </div>
    );
}