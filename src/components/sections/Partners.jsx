import React from 'react';
import { sponsor1, sponsor2, sponsor3, sponsor5,sponsor6 } from '../../images/sponsores';

const Partners = () => {
  return (
    <div className="px-0">
      <div className="rounded-3xl bg-gradient-to-b from-[#ffffff] to-[#f8efc6] py-10">
        <div className="container mx-auto">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">The Aures ecosystem</h2>
            <p className="text-gray-500">
              An open ecosystem that anyone can join and benefit from
            </p>
          </div>
          <div className="my-10">
            <div className="flex justify-center gap-6">
              <img src={sponsor1} alt="" />
              <img src={sponsor5} alt="" />
              <img src={sponsor3} alt="" />
              <img src={sponsor6} alt="" />
              <img src={sponsor2} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
