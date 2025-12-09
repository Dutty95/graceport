import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Portfolio />
        <Experience />
      </main>
      <Footer />
    </div>
  );
};

export default App;