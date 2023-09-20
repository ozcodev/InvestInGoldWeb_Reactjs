import React from 'react';
import emoji from 'react-easy-emoji';
import { FaAngleRight } from 'react-icons/fa';
import RowGold from './RowGold';

const ListGold = ({ title, data}) => {
  return (
    <>
      <div className="flex justify-between mb-6">
        <span className="font-bold text-lg">
          {emoji(title, {
            props: { className: 'inline mr-2 text-normal' },
          })}
        </span>
        <a href="" className="text-primary">
          More <FaAngleRight className="inline ml-2" />
        </a>
      </div>
      <div>
        <div className="grid grid-cols-3 mb-4">
          <span className="text-gray-400">Type</span>
          <span className="text-gray-400">In USD</span>
          <span className="text-gray-400">Changes</span>
        </div>
        {data.map(({ image, type, price, uptrend }) => (
          <RowGold
            image={image}
            goldType={type}
            goldPrice={price}
            goldUpTrend={uptrend}
          />
        ))}
      </div>
    </>
  );
};

export default ListGold;
