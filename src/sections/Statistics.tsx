import React from 'react';
import BorderCard from '../components/BorderCard';
import CompaniesVisited from '../components/Graphs/CompaniesVisited';
import HighestPackage from '../assets/offers.svg';
import industries from '../assets/average.svg';
import expertise from '../assets/Final.svg';

const Statistics = () => (
  <div id="statistics" className="w-full flex justify-center pt-8 pb-12">
    <div className="xl:w-3/5 w-full xs:px-8 px-4 xl:px-0 flex flex-col items-center">
      <h1 className="mb-8 text-4xl font-bold text-[#003865] leading-loose offset-border">
        Statistics
      </h1>
      <div className="w-full mb-12 grid md:grid-cols-4 md:grid-rows-1 md:gap-2 grid-cols-2 grid-rows-2 xs:gap-4 gap-2">
        <BorderCard title="Highest Package" content="44.14 LPA" variant="primary" />
        <BorderCard title="Companies visiting" content="100+" variant="secondary" />
        <BorderCard title="Average package" content="12.50 LPA" variant="fill" />
        <BorderCard title="Internship Offers" content="110+" variant="fill" />
      </div>
      <div className="w-full flex flex-col items-center">
        <h1 className="mb-4 text-center text-2xl font-bold text-[#003865] leading-loose">
          Companies Visiting
        </h1>
        <CompaniesVisited />
        <h1 className="mb-4 text-center text-2xl font-bold text-[#003865] leading-loose">
          Total Number of Offers
        </h1>
        <img src={HighestPackage} alt="highest package" className="w-full object-contain mb-8" />
        <div className="w-full grid sm:grid-rows-1 sm:grid-cols-2 grid-rows-2 grid-cols-1 gap-8">
          <div className="col-span-1 flex flex-col items-center">
            <h1 className="text-center text-2xl font-bold text-[#003865] leading-loose">Students Expertise</h1>
            <img src={expertise} alt="expertise" className="object-contain h-[22rem] w-full " />
          </div>
          <div className="col-span-1 flex flex-col items-center">
            <h1 className="text-center text-2xl font-bold text-[#003865] leading-loose">Average Package</h1>
            <img src={industries} alt="industries" className="object-contain h-[22rem] pt-24" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Statistics;
