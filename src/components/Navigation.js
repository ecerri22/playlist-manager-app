import { HiMoon } from "react-icons/hi2";
import { IoMdSettings } from "react-icons/io";
import { IoLogOutSharp } from "react-icons/io5";
import { useContext } from "react";
import { useState, useEffect } from "react";
import SearchBar from "./Seachbar";
import User from "./User";
import { TokenContext } from "../context/TokenProvider";

function Navigation({ onSearch }) {
  const { logout } = useContext(TokenContext);

  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if(window.matchMedia('(prefers-color-scheme: dark)').matches){
      setTheme('dark');
    }
    else {
      setTheme('light');
    }
  }, [])


  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);
  

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="col-span-full flex flex-row justify-between items-center overflow-hidden fixed gap-4 relative fixed top-0 w-full px-24 py-8">
      <button onClick={handleThemeSwitch}>
        <HiMoon className="m-2 text-gray-600 hover:text-indigo-600 active:text-indigo-600 focus:text-indigo-600 dark:text-indigo-600 dark:hover:text-gray-600" />
      </button>

      <SearchBar searchItem={onSearch} />

      <div className="flex flex-row items-center">
        <button className="m-1 px-1 " onClick={logout}>
          <IoLogOutSharp className="m-1 text-gray-600 hover:text-indigo-600 active:text-indigo-600 focus:text-indigo-600 dark:text-gray-400" />
        </button>

        <button className="m-1 px-1 ">
          <IoMdSettings className="m-1 text-gray-600 hover:text-indigo-600 active:text-indigo-600 focus:text-indigo-600 dark:text-gray-400" />
        </button>

        <button className="m-1 text-gray-800">
          <User />
        </button>
      </div>
    </div>
  );
}

export default Navigation;