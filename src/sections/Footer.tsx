import React from 'react';
import FooterCard from '../components/FooterCard';
import QrCode from '../assets/qr.png';
import logoPin from '../assets/location_icon.png';
import logoPhone from '../assets/contact_icon.png';
import logoMail from '../assets/mail_icon.png';
import logoInstagram from '../assets/instagram_icon.png';
import logoLinkedin from '../assets/linkedin_icon.png';
import logoFacebook from '../assets/facebook.webp';
/* eslint-disable */
const Footer = () => (
  <div id="footer" className="bg-[#242424] w-full flex flex-col items-center pb-11 pt-14">
    <div className="lg:w-3/5 xs:w-10/12 w-11/12 py-12 text-white">
      <div className="flex sm:items-center w-full justify-between border-b-4 pb-8 mb-8 border-[#777777]">
        <a href="https://goo.gl/maps/916NRahDy6rvrZgr6" >
            <FooterCard title="FIND US" icon={logoPin} text="Dean Office, USICT, GGSIPU Sector 16C, Dwarka, Delhi" />
        </a>
        <a href="tel:011-25302843" >
            <FooterCard title="CALL US" icon={logoPhone} text="011-25302843" />
        </a>
        <a href="mailto:info@tnp.ac.in" >
            <FooterCard title="MAIL US" icon={logoMail} text="info@tnp.ac.in" />
        </a>
      </div>
      <div className="flex justify-between w-full xs:flex-row xs:items-start xs:space-y-0 flex-col items-center space-y-8">
        <div className="flex flex-col space-y-4 xs:text-left text-center">
          <h1 className="uppercase text-xl md:text-2xl">Quick Links</h1>
          <span><a href="http://www.ipu.ac.in/usict/" className='sm:text-base text-sm'>USICT</a></span>
          <span><a href="#ranking" className='sm:text-base text-sm'>Rankings</a></span>
          <span><a href="#statistics" className='sm:text-base text-sm'>Statistics</a></span>
        </div>
        <div className="flex flex-col space-y-4 text-center">
          <h1 className="uppercase text-xl md:text-2xl">Social Links</h1>
          <a href="https://instagram.com/tnp_usict">
          <span
            role="button"
            className="flex cursor-pointer"
          >
            <img src={logoInstagram} alt="social logo" className="w-6 h-6 object-contain mr-4" />
            Instagram
          </span>
          </a>
          <a href="https://www.linkedin.com/company/tnp-usict/">
          <span className="flex cursor-pointer">
            <img src={logoLinkedin} alt="social logo" className="w-6 h-6 object-contain mr-4" />
            Linkedin
          </span>
          </a>
          <a href="https://www.facebook.com/USSPlacements">
          <span className="flex cursor-pointer">
            <img src={logoFacebook} alt="social logo" className="w-6 h-6 object-contain mr-4" />
            Facebook
          </span>
          </a>
        </div>
        <img src={QrCode} alt="qr code" className="md:w-48 md:h-48 sm:w-36 sm:h-36 h-48 w-48 object-contain object-right" />
      </div>
    </div>
    <div className="bg-[#2D2D2D] text-sm md:text-lg text-center  w-full flex items-center justify-center text-white px-14 sm:p-4 py-8">
      © Conceptualized, designed and developed by office bearers of Training and Placement Cell
    </div>
  </div>
);

export default Footer;
