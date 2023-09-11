"use client";

import React, { createContext, useEffect, useState, useContext } from "react";
import type {
    ThemeContextProviderProps,
    ThemeContextType,
    Theme
} from "@/types/sometype";

const ThemeContext = createContext<ThemeContextType | null>(null);

export default function ThemeContextProvider({
    children
}: ThemeContextProviderProps) {
    const [theme, setTheme] = useState<Theme>("light");

    const toggleTheme = () => {
        if (theme === "light") {
            setTheme("dark");
            window.localStorage.setItem("theme", "dark");
            document.documentElement.classList.add("dark"); // tailwind.config.ts  darkMode: "class" 설정해야함
        } else {
            setTheme("light");
            window.localStorage.setItem("theme", "light");
            document.documentElement.classList.remove("dark"); // tailwind.config.ts  darkMode: "class" 설정해야함
        }
    };

    // 웹 다시 들어올때 그 전의 theme으로 sync하려고 씀
    useEffect(() => {
        const localTheme = window.localStorage.getItem("theme") as Theme | null;

        if (localTheme) {
            setTheme(localTheme);

            if (localTheme === "dark") {
                document.documentElement.classList.add("dark"); // tailwind.config.ts  darkMode: "class" 설정해야함
            }

            // Device의 theme을 가져옴
        } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            setTheme("dark");
            document.documentElement.classList.add("dark"); // tailwind.config.ts  darkMode: "class" 설정해야함
        }
    }, []);

    return (
        <ThemeContext.Provider
            value={{
                theme,
                toggleTheme
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
}

export const useTheme = () => {
    const context = useContext(ThemeContext);

    if (context === null) {
        throw new Error("useTheme must be used within a ThemeContextProvider");
    }

    return context;
};
