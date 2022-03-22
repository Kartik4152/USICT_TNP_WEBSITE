import React from 'react';
import Footer from './sections/Footer';
import Navbar from './sections/Navbar';
import AboutUs from './sections/AboutUs';
import Header from './sections/Header';
import Communique from "./sections/Communique";
import Rankings from "./sections/Rankings";
import Statistics from "./sections/Statistics";
import Faq from './sections/Faq';

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <AboutUs />
      <Rankings />
      <Communique />
      <Statistics />
      <Faq />
      <Footer />
    </>
  );
}
export default App;
