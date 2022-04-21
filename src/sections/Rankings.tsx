import React from 'react';
import imageRankings from '../assets/rankings_pic.png';

const Rankings = () => (
  <div className="flex flex-col bg-[#fff] w-full items-center py-8" id="ranking">
    <h1 className="mb-4 text-4xl font-bold text-[#003865] leading-loose offset-border">
      Rankings
    </h1>
    <img
      src={imageRankings}
      alt="rankings"
      className="w-full lg:w-3/5 object-contain py-8"
    />
  </div>
);

export default Rankings;
