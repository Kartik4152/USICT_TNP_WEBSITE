import React from "react";
import Communique from "./sections/Communique";
import Footer from "./sections/Footer";
import Navbar from "./sections/Navbar";
import Rankings from "./sections/Rankings";

function App() {
  return (
    <>
      <Navbar />
      <Rankings />
      <Communique />
      <Footer />
    </>
  );
}

export default App;
