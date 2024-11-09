import axios from "../utils/axios";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";
import Topnav from "../partials/Topnav";
import Dropdown from "../partials/Dropdown";
import Card from "../partials/Card";

const People = () => {
  const naviagte = useNavigate();
  const [category, setCategory] = useState("popular");
  const [people, setPeople] = useState([]);
  const [page, setPage] = useState(1);
  const [hashmore, setHashmore] = useState(true);
  document.title = " People " + category.toUpperCase();

  const GetPeople = async () => {
    try {
      const { data } = await axios.get(`/person/${category}?page=${page}`);

      if (data.results.length > 0) {
        // setPeople(data.results);
        setPeople((prevState) => [...prevState, ...data.results]);
        setPage(page + 1);
      } else {
        setHashmore(false);
      }
    } catch (error) {
      console.log("Error", error);
    }
  };

  const refreshHandler = async () => {
    if (people.length === 0) {
      GetPeople();
    } else {
      setPage(1);
      setPeople([]);
      GetPeople();
    }
  };

  useEffect(() => {
    refreshHandler();
  }, [category]);

  return people.length > 0 ? (
    <div className='w-screen h-screen'>
      <div className='w-[89%] flex items-center pl-[4%]'>
        <i
          onClick={() => naviagte(-1)}
          className='hover:text-[#6556CD] cursor-pointer text-xl ri-arrow-left-fill'
        ></i>
        <h1 className='text-2xl font-semibold text-zinc-400'>People</h1>

        <Topnav />
      </div>

      <InfiniteScroll
        dataLength={people.length}
        next={GetPeople}
        hasMore={hashmore}
        loader={<h1>Loading....</h1>}
      >
        <Card data={people} title='person' />
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
};

export default People;
