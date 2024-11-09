import React from "react";
import { Link } from "react-router-dom";

const Horizontalcard = ({ data }) => {
  console.log(data);
  return (
    <div className='w-full flex overflow-hidden overflow-x-auto ml-4'>
      {data.map((d, i) => (
        <Link
          to={`/${d.media_type}/details/${d.id}`}
          key={i}
          className='min-w-[33%] mr-4 bg-zinc-900 p-2 rounded'
        >
          <img
            className='object-cover'
            src={`https://image.tmdb.org/t/p/original/${
              d.backdrop_path || d.poster_path
            }`}
            alt=''
          />

          <div className='text-white mt-4'>
            <h1 className='text-2xl from-black text-white '>
              {d.name || d.title || d.original_name || d.original_title}
            </h1>

            <p className='text-white mt-3'>
              {d.overview.slice(0, 100)}...
              <span className='text-zinc-300'>more</span>
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Horizontalcard;
