import axios from "../utils/axios";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";
import Topnav from "../partials/Topnav";
import Dropdown from "../partials/Dropdown";
import Card from "../partials/Card";

const Tvshows = () => {
  const naviagte = useNavigate();
  const [category, setCategory] = useState("airing_today");
  const [tv, settv] = useState([]);
  const [page, setPage] = useState(1);
  const [hashmore, setHashmore] = useState(true);
  document.title = "Tv Shows" + " " + category.toUpperCase();

  const GetTv = async () => {
    try {
      const { data } = await axios.get(`/tv/${category}?page=${page}`);

      if (data.results.length > 0) {
        // settv(data.results);
        settv((prevState) => [...prevState, ...data.results]);
        setPage(page + 1);
      } else {
        setHashmore(false);
      }
    } catch (error) {
      console.log("Error", error);
    }
  };

  const refreshHandler = async () => {
    if (tv.length === 0) {
      GetTv();
    } else {
      setPage(1);
      settv([]);
      GetTv();
    }
  };

  useEffect(() => {
    refreshHandler();
  }, [category]);

  return tv.length > 0 ? (
    <div className='w-screen h-screen'>
      <div className='w-[89%] flex items-center pl-[4%]'>
        <i
          onClick={() => naviagte(-1)}
          className='hover:text-[#6556CD] cursor-pointer text-xl ri-arrow-left-fill'
        ></i>
        <h1 className='text-2xl font-semibold text-zinc-400'>Tv</h1>

        <Topnav />
        <Dropdown
          title='Category'
          options={["on_the_air", "top_rated", "popular", "airing_today"]}
          func={(e) => setCategory(e.target.value)}
        />
      </div>

      <InfiniteScroll
        dataLength={tv.length}
        next={GetTv}
        hasMore={hashmore}
        loader={<h1>Loading....</h1>}
      >
        <Card data={tv} title='tv' />
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
};

export default Tvshows;
