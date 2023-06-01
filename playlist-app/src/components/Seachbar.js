import { HiSearch } from "react-icons/hi";
import { useState } from "react";
import {  useNavigate } from "react-router-dom"

function SearchBar({ searchItem }) {
  const [term, setTerm] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    searchItem(term);
    navigate('/search');
    clearSearch();
  };

  const handleChange = (event) => {
    setTerm(event.target.value);
  };

  const clearSearch = () => {
    setTerm("");
  };

  return (
    <div>
      <div>
        <form className="flex items-center justify-evenly" onSubmit={handleSubmit}>
          <button className="border-none z-10" onClick={handleSubmit}>
            <HiSearch className="w-4 h-4 m-1 text-gray-700 dark:text-gray-200" />
          </button>
          <input
            className="w-full border-solid border-slate-300 border cursor-pointer rounded-lg text-sm p-3 px-8 -ml-8 focus:border-indigo-400 focus:outline-none dark:bg-neutral-800 dark:text-white"
            placeholder="Type here to search"
            value={term}
            onChange={handleChange}
          />
        </form>
      </div>
      
    </div>
  );
}

export default SearchBar;
