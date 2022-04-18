import React from 'react';
import imageRankings from '../assets/rankings_pic.png';

const Rankings = () => (
  <div className="flex flex-col bg-[#fff] w-full p-4 items-center gap-8 py-20" id="ranking">
    <h1 className="mb-4 text-4xl font-bold text-[#003865] leading-loose">
      Rankings
    </h1>
    <img
      src={imageRankings}
      alt="rankings"
      className="w-full lg:w-3/5 object-contain"
    />
  </div>
);

export default Rankings;
