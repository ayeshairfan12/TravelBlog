"use client";
import React, { useState, useEffect } from "react";

const Destinitionslider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    {
      text: "AMAZON RAINFOREST EXPERIENCE",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, ea quia facilis ipsa omnis",
      image:
        "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      text: "CLIMBING THE SWISS ALPS",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, ea quia facilis ipsa omnis",
      image:
        "https://images.unsplash.com/photo-1529566321973-795c4f4138bb?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      text: "EVERYDAY URBAN CONCRETE JUNGLE",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, ea quia facilis ipsa omnis",
      image:
        "https://wanderland.qodeinteractive.com/wp-content/uploads/2019/11/h1-rev-slide1-bckg.jpg",
    },
  ];
  const totalSlides = slides.length;

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + totalSlides) % totalSlides);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="relative w-full h-screen bg-gray-100">
      <div className="absolute inset-0 flex items-center justify-center px-4 md:px-8">
        <div className="text-center text-white">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold transition-transform duration-500 transform translate-y-8 opacity-0 animate-slide-up">
            {slides[currentIndex].text}
          </h1>
          <p className="mt-2 text-sm sm:text-base md:text-lg lg:text-xl transition-transform duration-500 transform translate-y-8 opacity-0 animate-slide-up">
            {slides[currentIndex].description}
          </p>
          <div className="flex justify-center items-center gap-2">
            <button className="mt-10 px-4 py-3 text-lg font-bold bg-[#59815b] hover:bg-[#496d4b] text-white relative overflow-hidden group flex items-center gap-1">
              <span className="relative z-10 transition-opacity duration-300 group-hover:opacity-10">
                READ MORE
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                className="absolute left-full top-1/2 transform -translate-y-1/2 translate-x-2 transition-transform duration-300 group-hover:left-auto group-hover:right-2 group-hover:-translate-x-10 group-hover:rotate-0 group-hover:delay-300"
              >
                <path
                  d="M22.707,12.707a1,1,0,0,0,0-1.414l-5-5a1,1,0,0,0-1.414,1.414L19.586,11H2a1,1,0,0,0,0,2H19.586l-3.293,3.293a1,1,0,0,0,1.414,1.414Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div
        className="w-full h-full bg-cover bg-center transition-transform duration-500"
        style={{ backgroundImage: `url(${slides[currentIndex].image})` }}
      ></div>
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 flex justify-between w-full px-4 md:px-8">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          id="arrow"
          fill="white"
          onClick={prevSlide}
          className="cursor-pointer"
        >
          <path d="M4 15.004a.999.999 0 0 0 .286.692l.006.012 6 6a1 1 0 0 0 1.414-1.414L7.414 16H27a1 1 0 0 0 0-2H7.414l4.292-4.292a1 1 0 0 0-1.414-1.414l-6 6-.006.01a.978.978 0 0 0-.208.314A.974.974 0 0 0 4 15v.004z"></path>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="32"
          height="32"
          id="next-arrow"
          fill="white"
          onClick={nextSlide}
          className="cursor-pointer"
        >
          <path d="M22.707,12.707a1,1,0,0,0,0-1.414l-5-5a1,1,0,0,0-1.414,1.414L19.586,11H2a1,1,0,0,0,0,2H19.586l-3.293,3.293a1,1,0,0,0,1.414,1.414Z"></path>
        </svg>
      </div>
    </div>
  );
};

export default Destinitionslider;
