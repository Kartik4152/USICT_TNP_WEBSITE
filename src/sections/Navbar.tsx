import React, { useRef } from 'react';
import logoIPU from '../assets/GGSIPU-logo.png';

const Navbar = () => {
  const myref = useRef<any>(null);
  const secondRef = useRef<any>(null);
  const click = (e: any) => {
    if (e.type === 'keydown' && !(e.code === 'Enter' || e.code === 'Space')) return;
    e.preventDefault();
    myref.current.classList.toggle('active');
    secondRef.current.classList.toggle('!h-24');
  };
  const scrollTop = (e: any) => {
    if (e.type === 'keydown' && !(e.code === 'Enter' || e.code === 'Space')) return;
    e.preventDefault();
    document.getElementById('header')?.scrollIntoView();
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-slate-50 shadow-lg">
      <div className="flex justify-between items-center px-4 py-2">
        <div className="flex items-center cursor-pointer" onClick={scrollTop} onKeyDown={scrollTop} tabIndex={0} role="button">
          <img src={logoIPU} alt="IPU Logo" className="xs:w-16 xs:h-16 object-contain mr-4 w-8 h-8" />
          <div className="flex flex-col">
            <span className="leading-4 mb-1 xs:text-base text-xs">Training and Placement Cell</span>
            <span className="border-t-[1px] border-black border-opacity-50 leading-4 xs:text-base text-xs">Guru Gobind Singh Indraprastha University</span>
          </div>
        </div>
        <div className="navMenu xl:hidden" role="button" tabIndex={0} onClick={click} onKeyDown={click} ref={myref}>
          <span />
          <span />
          <span />
        </div>
        <div className=" space-x-4 items-center hidden xl:flex cursor-pointer">
          <a href="#header"><span>Home</span></a>
          <a href="#about_us"><span>About Us</span></a>
          <a href="#ranking"><span>Rankings</span></a>
          <a href="#communique"><span>Alumni Communique</span></a>
          <a href="#statistics"><span>Statistics</span></a>
          <a href="#faq"><span>FAQs</span></a>
          <a href="#footer"><span>Contact</span></a>
          <a href="https://usict-ggsipu.calyxpod.com/sorNHC/sign-up" target="_blank" rel="noreferrer">
            <div className="bg-[#003865] px-4 py-2 rounded-sm text-white" role="button">Login/Sign Up</div>
          </a>
        </div>
      </div>
      <div ref={secondRef} role="button" tabIndex={0} onClick={click} onKeyDown={click} className="text-black transition-all duration-300 delay-300 overflow-hidden h-0">
        <div className="flex flex-row flex-wrap space-x-4 sm:space-x-8 justify-center items-center py-2 px-2 xs:text-base text-sm">
          <a href="#header" className="my-2"><span>Home</span></a>
          <a href="#about_us" className="my-2"><span>About Us</span></a>
          <a href="#ranking" className="my-2"><span>Rankings</span></a>
          <a href="#communique" className="my-2"><span>Alumni Communique</span></a>
          <a href="#statistics" className="my-2"><span>Statistics</span></a>
          <a href="#faq" className="my-2"><span>FAQs</span></a>
          <a href="#footer" className="my-2"><span>Contact</span></a>
          <a href="https://usict-ggsipu.calyxpod.com/sorNHC/sign-up" target="_blank" rel="noreferrer">
            <div className="bg-[#003865] px-4 py-2 rounded-sm text-white" role="button">Login/Sign Up</div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
