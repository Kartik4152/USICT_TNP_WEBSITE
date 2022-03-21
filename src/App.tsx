import React from "react";
import Communique from "./sections/Communique";
import Footer from "./sections/Footer";
import Navbar from "./sections/Navbar";
import Rankings from "./sections/Rankings";
import Statistics from "./sections/Statistics";

function App() {
  return (
    <>
      <Navbar />
      <Rankings />
      <Communique />
      <Statistics />
      <Footer />
    </>
  );
}

export default App;
