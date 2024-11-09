import React, { useEffect, useState } from "react";

import Topnav from "../partials/Topnav";
import axios from "../utils/axios";
import Header from "../partials/Header";
import Horizontalcard from "../partials/Horizontalcard";
import Dropdown from "../partials/Dropdown";
import Loading from "./Loading";
import Sidenav from "./../partials/Sidenav";

const Home = () => {
  const [wallpaper, setWallpaper] = useState(null);
  const [trending, setTrending] = useState(null);
  const [category, setCategory] = useState("all");

  const getWall = async () => {
    try {
      const { data } = await axios.get(`/trending/all/day`);
      let newData =
        data.results[(Math.random() * data.results.length).toFixed()];

      setWallpaper(newData);
    } catch (error) {
      console.log("Error", error);
    }
  };
  const GetTrending = async () => {
    try {
      const { data } = await axios.get(`/trending/${category}/day`);
      setTrending(data.results);
    } catch (error) {
      console.log("Error", error);
    }
  };

  useEffect(() => {
    !wallpaper && getWall();
    GetTrending();
  }, [category]);

  return wallpaper && trending ? (
    <>
      <Sidenav />
      <div className='w-[80%] h-full overflow-auto overflow-x-hidden'>
        <Topnav />
        <Header data={wallpaper} />

        <div className='p-5 flex justify-between'>
          <h1 className='text-3xl font-semibold text-zinc-400'>Trending</h1>

          <Dropdown
            title='Filter'
            options={["tv", "movie", "all"]}
            func={(e) => setCategory(e.target.value)}
          />
        </div>
        <Horizontalcard data={trending} />
      </div>
    </>
  ) : (
    <Loading />
  );
};

export default Home;
