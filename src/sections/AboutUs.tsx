import React from 'react';
import SiteData from '../SiteData';

const AboutUs = () => (
  <div id="about_us" className=" flex w-full py-48">
    <p>
      <h3 className="font-mono text-[#003865] font-bold text-4xl text-center mt-6 underline underline-offset-4 ">
        {SiteData.aboutUs.heading}
      </h3>
      <p className="font-mono text-[#366286] xl:px-60 font-bold lg:px-40 text-center px-12 my-8 py-4">
        {SiteData.aboutUs.text}
      </p>
    </p>
  </div>
);

export default AboutUs;
