import React from 'react';
import bankTrans from '../../images/illustrations/bank.png';
import PrimaryButton from '../buttons/PrimaryButton';
import { FaAngleDown } from 'react-icons/fa';

const BuyGold = () => {
  return (
    <div className="container mx-auto py-32 ">
      <div className="grid grid-cols-2 gap-10">
        <div className="flex items-center">
          <div className="max-w-xl">
            <h2 className="font-bold text-4xl mb-6 leading-normal">
              Purchase & Trade on the <br />
              Authentic Gold Market
            </h2>
            <p className="text-gray-500 mb-6">
              Buy 15 Grams, and Receive an Extra 5 Grams as a Reward! <br />{' '}
              Seize this Exclusive Offer Now!
            </p>

            <div className="flex justify-between gap-4 mb-6">
              <div className="border border-primary rounded-2xl py-4 px-6 flex items-center ">
                <div className="border-r border-primary pr-6 ">
                  <small className="text-primary font-bold">Amount</small>
                </div>
                <input
                  type="text"
                  value="$60.75"
                  className="text-right outline-none w-full"
                />
              </div>
              <div className="flex border border-primary rounded-2xl py-6 px-8 items-center">
                <img src="" alt="" className="inline mr-2" />
                <span className="mr-10">24K 1G</span>
                <span>
                  <FaAngleDown />
                </span>
              </div>
            </div>

            <div className="flex justify-between gap-4 mb-6">
              <div className="border border-primary rounded-2xl py-4 px-6 flex items-center ">
                <div className="border-r border-primary pr-6 ">
                  <small className="text-primary font-bold">Amount</small>
                </div>
                <input
                  type="text"
                  value="$850.51"
                  className="text-right outline-none w-full"
                />
              </div>
              <div className="flex border border-primary rounded-2xl py-6 px-8 items-center">
                <img src="" alt="" className="inline mr-2" />
                <span className="mr-4">14 Grams</span>
                <span>
                  <FaAngleDown />
                </span>
              </div>
            </div>
            <PrimaryButton className="w-full">Buy Now</PrimaryButton>
          </div>
        </div>
        <div>
          <img src={bankTrans} alt="" />
        </div>
      </div>
    </div>
  );
};

export default BuyGold;
