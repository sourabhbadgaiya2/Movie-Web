import axios from "../utils/axios";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";
import Topnav from "../partials/Topnav";
import Dropdown from "../partials/Dropdown";
import Card from "../partials/Card";

const Movie = () => {
  const naviagte = useNavigate();
  const [category, setCategory] = useState("now_playing");
  const [movie, setMovie] = useState([]);
  const [page, setPage] = useState(1);
  const [hashmore, setHashmore] = useState(true);
  document.title = "Movies" + " " + category.toUpperCase();

  const GetMovie = async () => {
    try {
      const { data } = await axios.get(`/movie/${category}?page=${page}`);

      if (data.results.length > 0) {
        // setMovie(data.results);
        setMovie((prevState) => [...prevState, ...data.results]);
        setPage(page + 1);
      } else {
        setHashmore(false);
      }
    } catch (error) {
      console.log("Error", error);
    }
  };

  const refreshHandler = async () => {
    if (movie.length === 0) {
      GetMovie();
    } else {
      setPage(1);
      setMovie([]);
      GetMovie();
    }
  };

  useEffect(() => {
    refreshHandler();
  }, [category]);

  return movie.length > 0 ? (
    <div className='w-screen h-screen'>
      <div className='w-[89%] flex items-center pl-[4%]'>
        <i
          onClick={() => naviagte(-1)}
          className='hover:text-[#6556CD] cursor-pointer text-xl ri-arrow-left-fill'
        ></i>
        <h1 className='text-2xl font-semibold text-zinc-400'>Movie</h1>

        <Topnav />
        <Dropdown
          title='Category'
          options={["popular", "top_rated", "upcoming", "now_playing"]}
          func={(e) => setCategory(e.target.value)}
        />
      </div>

      <InfiniteScroll
        dataLength={movie.length}
        next={GetMovie}
        hasMore={hashmore}
        loader={<h1>Loading....</h1>}
      >
        <Card data={movie} title='movie' />
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
};

export default Movie;
