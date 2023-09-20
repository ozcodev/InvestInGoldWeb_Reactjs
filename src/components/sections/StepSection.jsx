import React from 'react';
import step1 from '../../images/illustrations/step1.png';
import step2 from '../../images/illustrations/step2.png';
import step3 from '../../images/illustrations/step3.png';

const StepSection = () => {
  return (
    <div className="px-0">
      <div className="rounded-3xl bg-gradient-to-b from-[#ffffff] to-[#f8efc6] py-10">
        <div className="container mx-auto text-center">
          <h2 className="font-bold text-4xl mb-7 leading-normal">
            Get Started in just a few Seconds
          </h2>
          <div className="flex justify-center gap-16">
            <div className="text-center">
              <img src={step1} className="mb-4 mx-auto" alt="" />
              <h3 className="text-2xl font-bold ">Sign Up</h3>
              <p className="text-gray-400 text-[13px]">
                Sign up for your free, or download our iOS/Android app, easy
                process to set up your profile
              </p>
            </div>

            <div className="text-center">
              <img src={step3} className="mb-4 mx-auto" alt="" />
              <h3 className="text-2xl font-bold ">Buy Gold</h3>
              <p className="text-gray-400 text-[13px]">
                Buy Metals, then securely store it in your Wallet or send it on
                easily to friends
              </p>
            </div>

            <div className="text-center">
              <img src={step2} className="mb-4 mx-auto" alt="" />
              <h3 className="text-2xl font-bold ">Fund</h3>
              <p className="text-gray-400 text-[13px]">
                Choose your preferred payment method such as bank transfer or
                credit card to top up your gold price
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepSection;
