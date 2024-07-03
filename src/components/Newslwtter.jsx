import React from "react";

const Newslwtter = () => {
  return (
    <div
      style={{
        backgroundImage: `url("https://wanderland.qodeinteractive.com/wp-content/uploads/2019/10/h5-bckg-img-02.jpg?id=1249")`,
        height: "100vh",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="flex flex-col md:flex-row items-center gap-10 px-4 md:px-24 justify-center">
        <div>
          <img
            src="https://wanderland.qodeinteractive.com/wp-content/uploads/2019/10/h1-img-01.png"
            alt=""
            className="w-full max-w-md md:max-w-xl"
          />
        </div>
        <div>
          <p className="text-[#A2A19F] italic text-lg">Lorem, ipsum dolor.</p>
          <h1 className="text-2xl md:text-4xl font-bold leading-snug">
            FINDING THE PERFECT TRAILS TO HIKE IS EASY WITH{" "}
            <span className="bg-white text-[#59815b]">NEWSLETTER</span>
          </h1>
          <p className="text-lg text-[#A2A19F] font-medium">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididu nt ut labore et dolore minim veniam, quism.
          </p>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-5 mt-4">
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-3 items-center">
              <input
                type="text"
                className="py-3 px-2 w-full md:w-auto"
                placeholder="First input"
              />
              <input
                type="text"
                className="py-3 px-2 w-full md:w-auto"
                placeholder="Second input"
              />
            </div>
            <button className="px-6 py-3 text-lg font-bold bg-[#59815b] hover:bg-[#496d4b] text-white flex items-center gap-1">
              <span>SUBSCRIBE</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                className="transition-transform duration-300 transform group-hover:translate-x-2"
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
    </div>
  );
  
   
};

export default Newslwtter;
