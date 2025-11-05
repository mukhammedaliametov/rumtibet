import React from 'react';
import Hero from './components/Hero';
import Header from './components/Header';
import About from './components/About';
import Program from './components/Program';
import Services from './components/Services';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Program />
      <Services />
      <Footer />
    </div>
  );
};

export default App;