import { useState, FC } from 'react';

const Accordion:FC<{title: string, content: string}> = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-item">
      <div className="p-4 hover:bg-[#E7E9E8] font-bold flex justify-between cursor-pointer bg-[#f7f9f9]" onClick={() => setIsActive(!isActive)}>
        <div>{title}</div>
        <div>{isActive ? '-' : '+'}</div>
      </div>
      {isActive && <div className="bg-[#f7f9f9] p-4">{content}</div>}
    </div>
  );
};

export default Accordion;