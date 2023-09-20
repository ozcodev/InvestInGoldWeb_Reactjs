import React from 'react';
import logo from '../../images/aure.svg';
import { FaAngleDown } from 'react-icons/fa';
import PrimaryButton from '../buttons/PrimaryButton';
import SecondaryButton from '../buttons/SecondaryButton';

const Navbar = () => {
  return (
    <nav className="bg-primary bg-opacity-5">
      <div className="sticky container mx-auto top-0 py-8 flex justify-between items-center">
        <div className="flex items-center">
          <img src={logo} className="mr-6" alt="aure logo" />

          <div className="flex">
            <a href="" className="mx-6 hover:text-primary">
              Exchange
            </a>
            <a href="" className="mx-6 hover:text-primary">
              Watchlist
            </a>
            <a href="" className="mx-6 hover:text-primary">
              Markets
            </a>
            <a href="" className="mx-6 hover:text-primary">
              Exchange
            </a>
            <a href="" className="mx-6 hover:text-primary">
              Customers
            </a>
            <a href="" className="mx-6 hover:text-primary">
              Products
              <FaAngleDown className="inline ml-2" />
            </a>
          </div>
        </div>

        <div className="flex">
          <SecondaryButton className="mr-4">Sign In</SecondaryButton>
          <PrimaryButton>Sign Up</PrimaryButton>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
