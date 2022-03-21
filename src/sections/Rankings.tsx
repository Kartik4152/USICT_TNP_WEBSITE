import React from 'react'
import Image_Rankings from "../assets/rankings_pic.png";

const Rankings = () => {
  return (
    <div className='flex flex-col bg-[#f2f8ff] w-full p-4 items-center'>
        <h1 className='mb-4 text-4xl font-bold text-[#003865] leading-loose'>Rankings</h1>
        <img src={Image_Rankings} alt="rankings" className='w-1/2 object-contain'/>
    </div>
  )
}

export default Rankings