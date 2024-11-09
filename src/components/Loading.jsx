import React from "react";
import loader from "/loader.gif";

const Loading = () => {
  return (
    <div className='flex items-center justify-center'>
      <img className='h-full w-screen object-cover' src={loader} alt='' />
    </div>
  );
};

export default Loading;
