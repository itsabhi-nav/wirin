import React from "react";

const Hero = () => {
  return (
    <div>
      <section
        className="relative bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(images/background.jpg)`, // Use local image as background image
        }}
      >
        <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25"></div>

        <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
          <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right w-full">
            <h1 className="text-3xl font-extrabold sm:text-5xl text-left">
              Wirin
              <strong className="block font-extrabold text-blue-700">
                National Dataset
              </strong>
            </h1>
            <p className="mt-4 max-w-lg sm:text-xl/relaxed text-left">
              Wipro IISc Research and Innovation Network is a hybrid system for
              holistic development of next-gen technologies, people, and
              ecosystem - idea discovery research, design, and innovation for
              business and social needs
            </p>
            <div className="mt-8 flex flex-wrap gap-4 text-center">
              <a
                href="#"
                className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
