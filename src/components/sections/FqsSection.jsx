import React from 'react';
import question from '../../images/illustrations/question.png';
import SecondaryButton from '../buttons/SecondaryButton';
import { FaAngleUp, FaAngleDown } from 'react-icons/fa';

const FqsSection = () => {
  return (
    <div className="container mx-auto py-32 ">
      <div className="grid grid-cols-2">
        <img src={question} alt="" />
        <div className="flex justify-center">
          <div className="">
            <span className="text-primary">SUPPORT</span>
            <h2 className="font-bold text-4xl mb-6 leading-normal">
              Frequently asked questions
            </h2>
            <ul className="my-6">
              <li className="mb-3 border-b border-gray-300 pb-3">
                <div className="flex justify-between py-4">
                  Why should I Choose AURE ?
                  <FaAngleUp />
                </div>
                <p className="text-gray-500">
                  We're industry pioneers, having been in the gold Investment
                  industry since 2016. We've facilitated more than 21 billion
                  USD worth of transactions on our exchange for customers in
                  over 40 countries. Today, we're trusted by over 8 million
                  customers around the world and have received praise for our
                  easy-to-use app, secure wallet, and range of features.{' '}
                </p>
              </li>
              <li className="mb-3 border-b border-gray-300 pb-3">
                <div className="flex justify-between py-4">
                  How secure is AURE ?
                  <FaAngleDown />
                </div>
              </li>
              <li className="mb-3 border-b border-gray-300 pb-3">
                <div className="flex justify-between py-4">
                  Do I have to buy a whole Market?
                  <FaAngleDown />
                </div>
              </li>
              <li className="mb-3 border-b border-gray-300 pb-3">
                <div className="flex justify-between py-4">
                  How do I actually buy Gold?
                  <FaAngleDown />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FqsSection;
