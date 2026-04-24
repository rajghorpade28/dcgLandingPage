import React, { useState } from 'react';
import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import TechStack from './components/TechStack';
import Install from './components/Install';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LicenseModal from './components/LicenseModal';

export default function App() {
  const [licenseOpen, setLicenseOpen] = useState(false);

  return (
    <>
      <Navbar onInstallClick={() => setLicenseOpen(true)} />
      <main>
        <Hero onInstallClick={() => setLicenseOpen(true)} />
        <Features />
        <TechStack />
        <Install onInstallClick={() => setLicenseOpen(true)} />
        <Contact />
      </main>
      <Footer />
      <LicenseModal isOpen={licenseOpen} onClose={() => setLicenseOpen(false)} />
    </>
  );
}
