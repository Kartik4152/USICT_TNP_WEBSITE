import React from 'react';
import SiteData from 'SiteData';
import Accordion from '../components/Accordion';

const Faq = () => (
  <div className="w-full py-8">
    <div id="faq" className="w-full flex justify-center">
      <div className="w-4/5 flex flex-col items-center">
        <h1 className="mb-4 xs:text-4xl font-bold text-[#003865] underline underline-offset-8 decoration-2 text-3xl">{SiteData.faq.heading1}</h1>
      </div>
    </div>
    <div className="max-w-[70rem] my-8 mx-auto">
      {SiteData.faq.data.map(({ question, answer }) => (
        <Accordion title={question} content={answer} />
      ))}
    </div>
  </div>
);

export default Faq;
