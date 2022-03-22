import React from 'react';
import Footer from './sections/Footer';
import Navbar from './sections/Navbar';
import Header from './sections/Header';
import Communique from "./sections/Communique";
import Rankings from "./sections/Rankings";
import Statistics from "./sections/Statistics";
import Accordion from './sections/Accordion';
import { accordionData } from './sections/content';

function App() {
  return (
    <>
      <Navbar />
      <Rankings />
      <Communique />
      <Statistics />
      <div>
      <div id="statistics" className='w-full flex justify-center'>
        <div className='w-4/5 flex flex-col items-center'>
            <h1 className='mb-4 text-4xl font-bold text-[#003865] leading-loosey'>FREQUENTLY ASKED QUESTIONS</h1>
        </div>
      </div>
      <div className="accordion">
          {accordionData.map(({ title, content }) => (
            <Accordion title={title} content={content} />
          ))}
        </div>
    </div>
      <Footer />
    </>
  );
}
export default App;
