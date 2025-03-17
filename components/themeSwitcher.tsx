import { set } from "date-fns";
import { Moon, Sun, Menu } from "lucide-react";
import { ThemeProvider, useTheme } from "next-themes";
import { useState } from "react";

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  let themeName = 'dark'; 
  setTheme(themeName);

  return (
    <button
      aria-label="Toggle Dark Mode"
      type="button"
      className="p-1 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800"
      onClick={() => { 
        if (themeName === "dark") {
          themeName = "light";
          setTheme("light");
        }
        else if (themeName === "light") {
            themeName = "dark";
           setTheme("dark");
        }
        console.log(`${themeName} is changed`);
       }}
    >
      {theme === "dark" ? <Sun size={24} /> : <Moon size={24} />}
    </button>
  );
}