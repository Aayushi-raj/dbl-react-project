import React from 'react';
import Carousel from './components/carousel';
import Destinations from './components/Destination';
import Footer from './components/footer';
import Hero from './components/hero';
import Navbar from './components/Navbar';
import Search from './components/Search';
import Selects from './components/selects';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Destinations />
      <Search />
      <Selects />
      <Carousel />
      <Footer />
    </div>
  );
}

export default App;