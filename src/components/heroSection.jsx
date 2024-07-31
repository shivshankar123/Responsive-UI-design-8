import React from "react";

function Hero() {
  return (
    <>
      <div className="hero min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white">
        <div className="hero-content flex-col lg:flex-row-reverse px-4 md:px-8 lg:px-16">
          <div className="text-center lg:text-left lg:ml-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Unleash Your Potential with Nike
            </h1>
            <p className="py-4 text-lg md:text-xl">
              Discover the perfect blend of performance and style with Nike's
              latest collection. Elevate your game with innovation and iconic
              design.
            </p>
            <button className="btn btn-primary mt-4">Shop Now</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
