import { Link } from "react-router-dom";

const Sidenav = () => {
  return (
    <>
      <div className='w-[20%] h-full border-r border-zinc-700 p-6'>
        <h1 className='text-white text-2xl'>
          <i className='text-[#6556CD] ri-tv-fill mr-2'></i>
          <span>LOGO</span>
        </h1>
        <nav className='flex flex-col text-zinc-400 text-xl'>
          <h1 className='text-white font-semibold text-xl mt-6 mb-5'>
            New Feeds
          </h1>
          <Link
            to={"/trending"}
            className='hover:bg-[#6556CD] text-white rounded-lg p-3 duration-200'
          >
            <i className='mr-1 ri-fire-fill'></i>
            Trending
          </Link>
          <Link
            to={"/popular"}
            className='hover:bg-[#6556CD] text-white rounded-lg p-3 duration-200'
          >
            <i className='mr-1 ri-bard-fill'></i>
            Popular
          </Link>
          <Link
            to={"/movie"}
            className='hover:bg-[#6556CD] text-white rounded-lg p-3 duration-200'
          >
            <i className='mr-1 ri-movie-2-fill'></i>
            Movies
          </Link>
          <Link
            to={"/tv"}
            className='hover:bg-[#6556CD] text-white rounded-lg p-3 duration-200'
          >
            <i className='mr-1 ri-tv-2-fill'></i>
            Tv Shows
          </Link>
          <Link
            to={"/people"}
            className='hover:bg-[#6556CD] text-white rounded-lg p-3 duration-200'
          >
            <i className='mr-1 ri-user-community-fill'></i>
            People
          </Link>
        </nav>
        <hr className='border-none h-[1px] bg-zinc-400' />
        <nav className='flex flex-col text-zinc-400 text-xl'>
          <h1 className='text-white font-semibold mt-5 mb-5'>
            Websites Information
          </h1>
          <Link className='hover:bg-[#6556CD] text-white rounded-lg p-3 duration-200'>
            <i className='mr-1 ri-information-fill'></i>
            About
          </Link>
          <Link className='hover:bg-[#6556CD] text-white rounded-lg p-3 duration-200'>
            <i className='mr-1 ri-phone-fill'></i>
            Contact Us
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Sidenav;
