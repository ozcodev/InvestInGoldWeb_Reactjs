import React from 'react';
import credit from '../../images/illustrations/credit.png';
import SecondaryButton from '../buttons/SecondaryButton';
import { FaCheckSquare } from 'react-icons/fa';

const CreditCard = () => {
  return (
    <div className="container mx-auto py-32 ">
      <div className="grid grid-cols-2">
        <img src={credit} alt="" />
        <div className="flex justify-center">
          <div className="max-w-md">
            <h2 className="font-bold text-4xl mb-6 leading-normal">
              Elevate Your Earnings with Tokenized Precious Metals
            </h2>
            <p className="text-gray-400">
              You can earn rewards paid in tokenized gold
              <br /> silver and platinum via the AureX token
            </p>
            <ul className="my-6">
              <li className="mb-2">
                <FaCheckSquare className="text-primary inline mr-2" />
                Up to 5% Cashback on Every Purchase
              </li>
              <li className="mb-2">
                <FaCheckSquare className="text-primary inline mr-2" />
                Tokenized Gold, Silver, and Platinum Rewards
              </li>
              <li className="mb-2">
                <FaCheckSquare className="text-primary inline mr-2" />
                No Annual Fees, No Hassles
              </li>
            </ul>

            <SecondaryButton>Join the waitList</SecondaryButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreditCard;
