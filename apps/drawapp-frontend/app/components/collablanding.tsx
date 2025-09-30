"use client"

import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import AppBar from './appbar';
import Footer from './footer';
import CTA from './cta';
import DemoSection from './demosection';
import FeatureSection from './featuresection';
import HeroSection from './herosection';

const DrawAppLanding = () => {
    const router = useRouter()

  return (
    <div className="font-sans bg-gray-900 text-white overflow-x-hidden min-h-screen">
     <AppBar />
     <HeroSection/>
     <FeatureSection/>
     <DemoSection/>
     <CTA/>
     <Footer/>
    </div>
  );
};

export default DrawAppLanding;