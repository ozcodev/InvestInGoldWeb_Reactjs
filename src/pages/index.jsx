import React from 'react';
import Layout from '../components/Layout/Layout';
import HeroSection from '../components/sections/HeroSection';
import GoldCurrency from '../components/sections/GoldCurrency';
import BuyGold from '../components/sections/BuyGold';
import Partners from '../components/sections/Partners';
import CreditCard from '../components/sections/CreditCard';
import StepSection from '../components/sections/StepSection';
import FqsSection from '../components/sections/FqsSection';
import BackToTop from '../components/sections/BackToTop';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <GoldCurrency />
      <BuyGold />
      <Partners />
      <CreditCard />
      <StepSection />
      <FqsSection />
      <BackToTop />
    </Layout>
  );
};

export default Index;
