import React, {
  useState, FC,
} from 'react';

const Accordion:FC<{title: string, content: string}> = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);
  const openFaq = (e: any) => {
    if (e.type === 'keydown' && !(e.code === 'Enter' || e.code === 'Space')) return;
    setIsActive((prev) => !prev);
  };

  return (
    <div className="accordion-item">
      <div className="p-4 hover:bg-[#E7E9E8] font-bold flex justify-between cursor-pointer bg-[#f7f9f9]" onClick={() => setIsActive((prev) => !prev)} onKeyDown={openFaq} tabIndex={0} role="button">
        <div>{title}</div>
        <div>{isActive ? '-' : '+'}</div>
      </div>
      {isActive && <div className="bg-[#f7f9f9] p-4">{content}</div>}
    </div>
  );
};

export default Accordion;
