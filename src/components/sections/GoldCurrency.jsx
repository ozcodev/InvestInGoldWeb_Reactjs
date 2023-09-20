import React from 'react';

import ListGold from '../ListGold';

const trendingGold = [{}];
const topTypes = [{}];
const others = [{}];

const GoldCurrency = () => {
  return (
    <section className="-mt-10">
      <div className="container mx-auto rounded-3xl bg-white py-8 px-4 shadow-lg">
        <div className="grid grid-cols-3">
          <div className="px-4">
            <ListGold title="🔥 Trending" data={trendingGold} />
          </div>
          <div className="px-4">
            <ListGold title="🔥 Top Types" data={topTypes} />
          </div>
          <div className="px-4">
            <ListGold title="🔥 others" data={others} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoldCurrency;
