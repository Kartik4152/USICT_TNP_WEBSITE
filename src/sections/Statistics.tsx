import React from 'react';
import BorderCard from '../components/BorderCard';
import CompaniesVisited from '../components/Graphs/CompaniesVisited';
import HighestPackage from '../assets/highest_package.png';
import industries from '../assets/industries.png';
import expertise from '../assets/expertise.png';

const Statistics = () => (
  <div id="statistics" className="w-full flex justify-center pt-8 pb-12">
    <div className="w-3/5 flex flex-col items-center">
      <h1 className="mb-8 text-4xl font-bold text-[#003865] leading-loose offset-border">
        Statistics
      </h1>
      <div className="w-full flex justify-center space-x-4 mb-12">
        <BorderCard title="Highest Package" content="55 LPA" variant="primary" />
        <BorderCard title="Companies visiting" content="500+" variant="secondary" />
        <BorderCard title="Average package" content="14 LPA" variant="fill" />
        <BorderCard title="Minimum package" content="10 LPA" variant="fill" />
      </div>
      <div className="w-full flex flex-col items-center">
        <h1 className="mb-4 text-center text-2xl font-bold text-[#003865] leading-loose">
          Companies Visiting
        </h1>
        <CompaniesVisited />
        <h1 className="mb-4 text-center text-2xl font-bold text-[#003865] leading-loose">
          Highest Package
        </h1>
        <img src={HighestPackage} alt="highest package" className="w-full object-contain mb-8" />
        <div className="w-full grid grid-rows-1 grid-cols-2 gap-8">
          <div className="col-span-1">
            <h1 className="text-center text-2xl font-bold text-[#003865] leading-loose">Students Expertise</h1>
            <img src={expertise} alt="expertise" className="object-contain w-full" />
          </div>
          <div className="col-span-1">
            <h1 className="text-center text-2xl font-bold text-[#003865] leading-loose">Industries</h1>
            <img src={industries} alt="industries" className="object-contain w-full" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Statistics;
