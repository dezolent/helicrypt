import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CoreLogic from './components/CoreLogic';
import Testing from './components/Testing';
import Innovation from './components/Innovation';
import Applications from './components/Applications';
import Creator from './components/Creator';
import Footer from './components/Footer';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main>
        <Hero />
        <CoreLogic />
        <Testing />
        <Innovation />
        <Applications />
        <Creator />
      </main>
      <Footer />
    </div>
  );
}

export default App;