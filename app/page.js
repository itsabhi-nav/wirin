import React from "react";
import Herod from "/components/Herod";
import About from "/components/About";
import Gallery from "@/components/Gallery";
import Projects from "@/components/Projects";

const page = () => {
  return (
    <div>
      <Herod />
      <About />
      <Projects />
      <Gallery />
    </div>
  );
};

export default page;
