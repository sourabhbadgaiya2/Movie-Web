import React from "react";
import { Link } from "react-router-dom";

const Header = ({ data }) => {
  // console.log(data);
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,.2), rgba(0,0,0,.5), rgba(0,0,0,.9)), url(https://image.tmdb.org/t/p/original/${
          data.backdrop_path || data.profile_path
        })`,
        backgroundPosition: "top 8%",
        backgroundSize: "cover",
      }}
      className='w-full h-[55vh] flex flex-col justify-end items-start p-10'
    >
      <h1 className='text-4xl from-black text-white '>
        {data.name || data.title || data.original_name || data.original_title}
      </h1>

      <p className='text-white w-[70%] text-justify mt-3'>
        {data.overview.slice(0, 200)}...
        <Link
          to={`/${data.media_type}/details/${data.id}`}
          className='text-blue-500'
        >
          more
        </Link>
      </p>

      <p className='text-white w-[70%] text-justify mt-3'>
        <i className='text-yellow-400 mr-1 ri-megaphone-fill'></i>
        {data.release_date ? data.release_date : "No Information"}
        <i className='ml-5 text-yellow-400 mr-1 ri-album-fill'></i>
        {data.media_type.toUpperCase()}
      </p>

      <Link className='bg-[#6556CD] hover:bg-[#614de0]  p-3 text-white font-semibold rounded-md mt-5'>
        Watch Trailer
      </Link>
    </div>
  );
};

export default Header;
