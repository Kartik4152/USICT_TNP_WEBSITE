import React from 'react';
import SiteData from '../SiteData';

const AboutUs = () => (
  <div id="about_us" className=" flex w-full">
    <p>
      <h3 className="text-4xl font-bold text-[#003865] py-8 text-center underline underline-offset-8 decoration-2">
        {SiteData.aboutUs.heading}
      </h3>
      <p className="font-mono text-[#366286] xl:px-60 font-bold lg:px-40 text-center px-12 my-8 py-4">
        {SiteData.aboutUs.text}
      </p>
    </p>
  </div>
);

export default AboutUs;
