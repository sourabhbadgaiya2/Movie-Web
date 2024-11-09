import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "../utils/axios";
import noImage from "/noimage.jpg";

const Topnav = () => {
  const [query, setQuery] = useState("");
  const [Search, setSearch] = useState([]);

  const getSearch = async () => {
    try {
      const { data } = await axios.get(`/search/multi?query=${query}`);
      setSearch(data.results);
    } catch (error) {
      console.log("Error", error);
    }
  };

  useEffect(() => {
    getSearch();
  }, [query]);

  return (
    <div className='w-full h-[10vh] relative flex items-center justify-start ml-[17%]'>
      <i className='text-zinc-400 text-2xl ri-search-line'></i>
      <input
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        className='w-[50%] p-3 outline-none text-xl text-zinc-300 border-none bg-transparent'
        type='text'
        placeholder='Search Anything...'
      />

      {query.length > 0 && (
        <i
          onClick={() => setQuery("")}
          className='text-zinc-400 text-3xl cursor-pointer ri-close-fill'
        ></i>
      )}

      <div className='z-[100] absolute w-[50%] max-h-[50vh] bg-red-100 top-[90%] overflow-auto'>
        {Search.map((s, i) => (
          <Link
            key={i}
            className='text-zinc-600 font-semibold hover:text-zinc-900 hover:bg-zinc-300 duration-200 w-full p-6 flex justify-start items-center border-b-2 border-zinc-100'
          >
            <img
              className='w-[15vh] h-[15vh] object-cover rounded-sm mr-5 shadow-lg'
              src={
                s.backdrop_path || s.profile_path
                  ? `https://image.tmdb.org/t/p/original/${
                      s.backdrop_path || s.profile_path
                    }`
                  : noImage
              }
              alt=''
            />{" "}
            {s.name || s.title || s.original_name || s.original_title}
            <span className=''></span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Topnav;
