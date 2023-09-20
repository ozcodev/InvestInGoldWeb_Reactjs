import React from 'react';
import HeroImage from '../../images/illustrations/HeroImage.png';
import { FaAngleDown } from 'react-icons/fa';
import PrimaryButton from '../buttons/PrimaryButton';
import SecondaryButton from '../buttons/SecondaryButton';

const HeroSection = () => {
  return (
    <section className="bg-primary bg-opacity-5">
      <div className=" container mx-auto grid grid-cols-2">
        <div className="flex items-center">
          <div>
            <p className="text-primary">SIGN UP TODAY</p>
            <h1 className="text-5xl font-bold leading-normal">
              An open precious metals market for everyone
            </h1>

            <div className="mt-4 mb-8">
              <p className="text-gray">
                Expand your investment horizons with our selection of 15+
                diverse gold types.
              </p>
              <p className="text-gray">
                Secure your future through the enduring value of gold.
              </p>
            </div>
            <div className="flex">
              <PrimaryButton className="mr-4">Get Started</PrimaryButton>
              <SecondaryButton>
                Download App <FaAngleDown className="inline ml-2" />
              </SecondaryButton>
            </div>
          </div>
        </div>
        <div>
          <img src={HeroImage} className="h-[90%] w-[95%]" alt="" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
