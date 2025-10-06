import React from 'react'
import { useState, useEffect,useRef } from "react";
import { Link, useNavigate } from 'react-router-dom';

const url=import.meta.env.VITE_URL

const Search = () => {

    const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
   const searchRef = useRef(null);

  const navigate=useNavigate()

  useEffect(() => {
    if (!query) {
      setResults([]);
      return;
    }

    const delay = setTimeout(() => {
      fetch(`${url}/search?q=${query}`)
        .then((res) => res.json())
        .then((data) => setResults(data))
        .catch((err) => console.error(err));
    }, 500);

    return () => clearTimeout(delay);
  }, [query]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {

        setQuery("");
        setResults([]);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  
    return (
    <div ref={searchRef} className=" w-80  " >
      <input
        type="text"
        placeholder="Search products..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="border p-2 rounded w-full"
      />

      <ul className="mt-2 border rounded shadow absolute top-36 md:top-22 right-0 left-0 z-50 bg-gray-700">
        {results.map((item) => (
             <li key={item._id} className="p-2 hover:bg-gray-500 text-white" onClick={()=>{setQuery("");navigate(`/productPage?${item._id}`) }}>
            {item.productName}
          </li>
        ))}
      </ul>
    </div>
  );
}


export default Search