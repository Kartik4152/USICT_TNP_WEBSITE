import React from 'react';

const FooterCard:React.FC<{icon: string, title:string, text: string}> = ({ icon, title, text }) => (
  <div className="flex w-[20rem] justify-center">
    <div className="flex flex-col space-y-4  sm:space-y-0 sm:flex-row items-center">
      <img src={icon} alt="google map pin" className="w-12 h-12 object-contain mr-2" />
      <div className="flex  flex-col items-center text-center  sm:items-start sm:text-left  max-w-[10rem]">
        <div className="text-white">
          {title}
        </div>
        <div className="text-white text-xs">
          {text}
        </div>
      </div>
    </div>
  </div>
);

export default FooterCard;
