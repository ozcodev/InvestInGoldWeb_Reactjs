import React from 'react';
import logo from '../../images/aure.svg';
import PrimaryButton from '../buttons/SecondaryButton';
import { FaAngleRight } from 'react-icons/fa';
import SecondaryButton from '../buttons/SecondaryButton';

const Footer = () => {
  return (
    <footer>
      <div className="container mx-auto border-b border-gray-200 py-6">
        <div className="grid grid-cols-4">
          <div className="flex justify-around p-6 border-r border-gray-200">
            <div>
              <img src={logo} alt="" />
            </div>
            <ul>
              <li className="mb-4">
                <a href="/" className="font-semibold text-gray-400">
                  Buy Gold
                </a>
              </li>
              <li className="mb-4">
                <a href="/" className="text-gray-400">
                  Exchanges
                </a>
              </li>
              <li className="mb-4">
                <a href="/" className="text-gray-400">
                  Portfolio
                </a>
              </li>
              <li className="mb-4">
                <a href="/" className="text-gray-400">
                  Market
                </a>
              </li>
            </ul>
          </div>

          <div className="p-4 flex justify-around border-r border-gray-200">
            <ul>
              <li className="mb-4">
                <a href="/" className="font-semibold text-gray-400">
                  Products
                </a>
              </li>
              <li className="mb-4">
                <a href="/" className="text-gray-400">
                  Abous Us
                </a>
              </li>
              <li className="mb-4">
                <a href="/" className="text-gray-400">
                  Security
                </a>
              </li>
            </ul>
          </div>

          <div className="p-4 flex justify-around border-r border-gray-200">
            <ul>
              <li className="mb-4">
                <a href="/" className="font-semibold text-gray-400">
                  Help Center
                </a>
              </li>
              <li className="mb-4">
                <a href="/" className="text-gray-400">
                  Contact Us
                </a>
              </li>
              <li className="mb-4">
                <a href="/" className="text-gray-400">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          <div className="p-6">
            <span className="text-gray-400 text-lg font-semibold">
              Newsletter
            </span>
            <p className="text-gray-600 mt-2">
              Never miss anything Gold, when you're on the go
            </p>
            <div className="flex flex-col md:flex-row items-center mt-4 space-y-4 md:space-y-0 md:space-x-3">
              <input
                type="email"
                className="w-full md:w-auto border border-gray-200 rounded-xl p-4 outline-none focus:border-primary"
                placeholder="Enter Your Email"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="text-center py-6">
        <p className="text-gray-400">
          made by{' '}
          <a href="https://www.ozcodev.com" className="font-bold">
            ozcodev
          </a>
          . ALL rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
