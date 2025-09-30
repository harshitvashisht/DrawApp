"use client"

import AppBar from './appbar';
import Footer from './footer';
import CTA from './cta';
import DemoSection from './demosection';
import FeatureSection from './featuresection';
import HeroSection from './herosection';

const DrawAppLanding = () => {

  return (
    <div className="font-sans bg-gray-900 text-white overflow-x-hidden min-h-screen">
     <HeroSection/>
     <FeatureSection/>
     <DemoSection/>
     <CTA/>
    </div>
  );
};

export default DrawAppLanding;