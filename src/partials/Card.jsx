import React from "react";
import { Link } from "react-router-dom";

const Card = ({ data, title }) => {
  console.log(title);

  return (
    <div className='flex flex-wrap w-full bg-[#1F1E24] px-[4%] '>
      {data.map((c, i) => (
        <Link
          to={`/${c.media_type || title}/details/${c.id}`}
          className='w-[33vh] mr-[2%] mb-7 hover:scale-105 relative'
          key={i}
        >
          <img
            className='shadow-[8px_17px_38px_2px_rgba(0,0,0,0.5)] h-[45vh] object-cover rounded'
            src={`https://image.tmdb.org/t/p/original/${
              c.poster_path || c.backdrop_path || c.profile_path
            }`}
            alt=''
          />
          <h1 className='text-zinc-300 text-lg text-center mt-3'>
            {c.name || c.title || c.original_name || c.original_title}
          </h1>
          {c.vote_average && (
            <div className='absolute right-[1%] bottom-[30%] w-[7vh] h-[7vh] rounded-full flex items-center justify-center text-xl bg-yellow-500 text-white font-bold'>
              {c.vote_average.toFixed()}{" "}
              <sup className='font-bold text-sm'>%</sup>
            </div>
          )}
        </Link>
      ))}
    </div>
  );
};

export default Card;
