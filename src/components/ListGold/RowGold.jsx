import React from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
const RowGold = ({ image, goldType, goldPrice, goldUpTrend }) => {
  return (
    <div className="grid grid-cols-3 mb-2 py-2 border-b border-gray-300 last:border-none">
      <div className="flex items-center">
        <img src={image} className="inline h-[1m] mr-2" alt="" />
        {goldType}
      </div>
      <div className="flex items-center">
        {goldUpTrend ? (
          <FaPlus className="text-green-600 inline mr-1" />
        ) : (
          <FaMinus className="text-red-600 inline mr-1" />
        )}
        ${goldPrice}
      </div>
      {/* <div>
        <img src={goldUpTrend ? upChart : downChart} alt="" />
      </div> */}
    </div>
  );
};

export default RowGold;
