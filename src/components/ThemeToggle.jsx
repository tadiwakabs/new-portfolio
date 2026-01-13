import {Sun, Moon} from "lucide-react";
import {useEffect, useState} from "react";
import {cn} from "@/lib/utils";

export const ThemeToggle = () => {
    const [isDarkMode, setDarkMode] = useState(true);

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme === "dark") {
            setDarkMode(true);
            document.documentElement.classList.add("dark");
        } else {
            setDarkMode(false);
            document.documentElement.classList.remove("dark");
        }
    }, [])

    const toggleTheme = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
            setDarkMode(false);
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
            setDarkMode(true);
        }
    }

    return (
    <button onClick={toggleTheme}
            className={cn("p-1 cursor-pointer " +
                       " rounded-full transition-colors duration-300 focus: outline-hidden")}
    >
        {isDarkMode ? <Sun className="h-5 w-5 text-yellow-50 hover:text-primary transition-colors duration-300"/> :
            <Moon className="h-5 w-5 text-blue-950 hover:text-primary transition-colors duration-300"/>}
    </button>
    )
}
