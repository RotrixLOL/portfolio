import React, { useEffect } from 'react';

import { About, Footer, Header, Skills, Testimonial, Work } from './container';
import { Navbar } from './components';
import { logCurrentPage } from './utils/analytics';
import './App.scss';

useEffect(() => {
  logCurrentPage();
}, []);

const App = () => (
  <div className="app">
    <Navbar />
    <Header />
    <About />
    <Work />
    <Skills />
    <Testimonial />
    <Footer />
  </div>
);

export default App;
