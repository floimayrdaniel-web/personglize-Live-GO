
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Packages from './components/Packages';
import Testimonials from './components/Testimonials';
import Configurator from './components/Configurator';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Benefits />
        <Packages />
        <Testimonials />
        <Configurator />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default App;
