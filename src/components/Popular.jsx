import axios from "../utils/axios";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";
import Topnav from "../partials/Topnav";
import Dropdown from "../partials/Dropdown";
import Card from "../partials/Card";

const Popular = () => {
  const naviagte = useNavigate();
  const [category, setCategory] = useState("movie");
  const [popular, setPopular] = useState([]);
  const [page, setpage] = useState(1);
  const [hashmore, setHashmore] = useState(true);
  document.title = "Popular" + " " + category.toUpperCase();

  const GetPopular = async () => {
    try {
      const { data } = await axios.get(`${category}/popular?page=${page}`);

      if (data.results.length > 0) {
        // setPopular(data.results);
        setPopular((prevState) => [...prevState, ...data.results]);
        setpage(page + 1);
      } else {
        setHashmore(false);
      }
    } catch (error) {
      console.log("Error", error);
    }
  };

  const refreshHandler = async () => {
    if (popular.length === 0) {
      GetPopular();
    } else {
      setpage(1);
      setPopular([]);
      GetPopular();
    }
  };

  useEffect(() => {
    refreshHandler();
  }, [category]);

  return popular.length > 0 ? (
    <div className='w-screen h-screen'>
      <div className='w-[89%] flex items-center pl-[4%]'>
        <i
          onClick={() => naviagte(-1)}
          className='hover:text-[#6556CD] cursor-pointer text-xl ri-arrow-left-fill'
        ></i>
        <h1 className='text-2xl font-semibold text-zinc-400'>Popular</h1>

        <Topnav />
        <Dropdown
          title='Category'
          options={["movie", "tv"]}
          func={(e) => setCategory(e.target.value)}
        />
      </div>

      <InfiniteScroll
        dataLength={popular.length}
        next={GetPopular}
        hasMore={hashmore}
        loader={<h1>Loading....</h1>}
      >
        <Card data={popular} title={category} />
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
};

export default Popular;
