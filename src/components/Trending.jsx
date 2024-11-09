import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Topnav from "../partials/Topnav";
import Dropdown from "../partials/Dropdown";
import Card from "../partials/Card";
import Loading from "./Loading";
import axios from "../utils/axios";
import InfiniteScroll from "react-infinite-scroll-component";

const Trending = () => {
  const naviagte = useNavigate();
  const [category, setCategory] = useState("all");
  const [duration, setDuration] = useState("day");
  const [trending, settrending] = useState([]);
  const [page, setpage] = useState(1);
  const [hashmore, setHashmore] = useState(true);
  document.title = "Trending" + " " + category.toUpperCase();

  const GetTrending = async () => {
    try {
      const { data } = await axios.get(
        `/trending/${category}/${duration}?page=${page}`
      );

      if (data.results.length > 0) {
        // settrending(data.results);
        settrending((prevState) => [...prevState, ...data.results]);
        setpage(page + 1);
      } else {
        setHashmore(false);
      }
    } catch (error) {
      console.log("Error", error);
    }
  };

  const refreshHandler = async () => {
    if (trending.length === 0) {
      GetTrending();
    } else {
      setpage(1);
      settrending([]);
      GetTrending();
    }
  };

  useEffect(() => {
    refreshHandler();
  }, [category, duration]);

  return trending.length > 0 ? (
    <div className='w-screen h-screen'>
      <div className='w-[89%] flex items-center pl-[4%]'>
        <i
          onClick={() => naviagte(-1)}
          className='hover:text-[#6556CD] cursor-pointer text-xl ri-arrow-left-fill'
        ></i>
        <h1 className='text-2xl font-semibold text-zinc-400'>Trending</h1>

        <Topnav />
        <Dropdown
          title='Category'
          options={["movie", "tv", "all"]}
          func={(e) => setCategory(e.target.value)}
        />
        <div className='w-10'></div>
        <Dropdown
          title='Duration'
          options={["week", "day"]}
          func={(e) => setDuration(e.target.value)}
        />
      </div>

      <InfiniteScroll
        dataLength={trending.length}
        next={GetTrending}
        hasMore={hashmore}
        loader={<h1>Loading....</h1>}
      >
        <Card data={trending} title={category} />
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
};

export default Trending;
