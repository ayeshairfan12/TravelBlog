"use client";
import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navItems = [
    "DESTINITION",
    "HOME",
    "PAGE",
    "ABOUT US",
    "BLOG",
    "SHOP",
    "LANDING",
    "SEARCH",
  ];

  return (
    <div className="bg-transparent text-white absolute top-0 left-0 z-20 w-full">
      <header className="bg-inherit py-2 px-16 font-serif border-b-[1px] border-[#ffffff80] hidden lg:flex">
        <div className="flex justify-between items-center w-full">
          <div className="flex gap-5 items-center">
            <div className="flex gap-2 hover:opacity-50">
              <svg
                className="hover-text"
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                id="phone"
              >
                <path fill="white" d="M0 0h24v24H0V0z"></path>
                <path d="M19.23 15.26l-2.54-.29c-.61-.07-1.21.14-1.64.57l-1.84 1.84c-2.83-1.44-5.15-3.75-6.59-6.59l1.85-1.85c.43-.43.64-1.03.57-1.64l-.29-2.52c-.12-1.01-.97-1.77-1.99-1.77H5.03c-1.13 0-2.07.94-2 2.07.53 8.54 7.36 15.36 15.89 15.89 1.13.07 2.07-.87 2.07-2v-1.73c.01-1.01-.75-1.86-1.76-1.98z"></path>
              </svg>
              +923226088241
            </div>
            <div className="flex gap-2 hover:opacity-50">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 32 32"
                id="mail"
              >
                <path
                  fill="white"
                  d="M16,14.81,28.78,6.6A3,3,0,0,0,27,6H5a3,3,0,0,0-1.78.6Z"
                ></path>
                <path
                  fill="white"
                  d="M16.54,16.84h0l-.17.08-.08,0A1,1,0,0,1,16,17h0a1,1,0,0,1-.25,0l-.08,0-.17-.08h0L2.1,8.26A3,3,0,0,0,2,9V23a3,3,0,0,0,3,3H27a3,3,0,0,0,3-3V9a3,3,0,0,0-.1-.74Z"
                ></path>
              </svg>
              <a href="mailto:irfanayesha712@gmail.com">irfanayesha712@gmail.com</a>
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <span className="items-center hover:opacity-50">Social</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fillRule="evenodd"
              strokeLinejoin="round"
              width="18"
              height="18"
              strokeMiterlimit="2"
              clipRule="evenodd"
              viewBox="0 0 26 26"
              id="instagram"
              className="hover:opacity-50"
            >
              <g transform="translate(-40 -40)">
                <rect width="24" height="24" x="40" y="40" fill="none"></rect>
                <path
                  fill="white"
                  d="M110.9,199C110.9,195.744 108.256,193.1 105,193.1C105,193.1 95,193.1 95,193.1C91.744,193.1 89.1,195.744 89.1,199C89.1,199 89.1,209 89.1,209C89.1,212.256 91.744,214.9 95,214.9C95,214.9 105,214.9 105,214.9C108.256,214.9 110.9,212.256 110.9,209L110.9,199ZM109.1,199L109.1,209C109.1,211.263 107.263,213.1 105,213.1L95,213.1C92.737,213.1 90.9,211.263 90.9,209L90.9,199C90.9,196.737 92.737,194.9 95,194.9L105,194.9C107.263,194.9 109.1,196.737 109.1,199ZM104.89,203.238C104.575,201.109 102.891,199.425 100.762,199.11C100.524,199.074 100.284,199.057 100.043,199.057C97.355,199.057 95.143,201.269 95.143,203.957C95.143,206.645 97.355,208.857 100.043,208.857C102.731,208.857 104.943,206.645 104.943,203.957C104.943,203.716 104.926,203.476 104.89,203.238ZM103.11,203.502C103.132,203.653 103.143,203.805 103.143,203.957C103.143,205.657 101.744,207.057 100.043,207.057C98.343,207.057 96.943,205.657 96.943,203.957C96.943,202.256 98.343,200.857 100.043,200.857C100.195,200.857 100.347,200.868 100.498,200.89C101.845,201.09 102.91,202.155 103.11,203.502ZM105.5,197.6C105.997,197.6 106.4,198.003 106.4,198.5C106.4,198.997 105.997,199.4 105.5,199.4C105.003,199.4 104.6,198.997 104.6,198.5C104.6,198.003 105.003,197.6 105.5,197.6Z"
                  transform="translate(-48 -152)"
                ></path>
              </g>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              width="18"
              height="18"
              id="facebook"
              className="hover:opacity-50"
            >
              <path
                fill="white"
                d="M12 5.5H9v-2a1 1 0 0 1 1-1h1V0H9a3 3 0 0 0-3 3v2.5H4V8h2v8h3V8h2l1-2.5z"
                clipRule="evenodd"
              ></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              enableBackground="new 0 0 28 22.934"
              viewBox="0 0 28 22.934"
              width="18"
              height="18"
              id="twitter-logo"
              className="hover:opacity-50"
            >
              <path
                fill="white"
                d="M1.85,1.131c0,0,4.175,5.608,11.859,6.003c0,0-1.046-4.086,2.807-6.343s7.06,1.027,7.06,1.027s1.977-0.33,3.676-1.344c0,0-0.57,2.053-2.472,3.169c0,0,2.053-0.292,3.22-0.862c0,0-1.166,1.876-2.801,2.928c0,0,0.71,11.826-10.597,16.187C6.761,18.92,0,20.375,0,20.375s3.904,0.811,8.366-2.383c0,0-3.574,0.177-5.349-4.081c0,0,1.217,0.33,2.586-0.076c0,0-4.31-0.608-4.563-5.704c0,0,1.546,0.71,2.51,0.684C3.549,8.815-0.533,5.894,1.85,1.131z"
              ></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              width="18"
              height="18"
              id="youtube"
              className="hover:opacity-50"
            >
              <path
                fill="white"
                d="M15.32 4.06c-.434-.772-.905-.914-1.864-.968C12.498 3.027 10.089 3 8.002 3c-2.091 0-4.501.027-5.458.091-.957.055-1.429.196-1.867.969C.23 4.831 0 6.159 0 8.497v.008c0 2.328.23 3.666.677 4.429.438.772.909.912 1.866.977.958.056 3.368.089 5.459.089 2.087 0 4.496-.033 5.455-.088.959-.065 1.43-.205 1.864-.977.451-.763.679-2.101.679-4.429v-.008c0-2.339-.228-3.667-.68-4.438zM6 11.5v-6l5 3-5 3z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
        </div>
      </header>
      <div className="flex lg:hidden bg-white justify-between items-center px-4 py-2">
        <div className="cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="black"
            viewBox="0 0 24 24"
          >
            <path d="M4 5h16v2H4zm0 7h16v2H4zm0 7h16v2H4z"></path>
          </svg>
        </div>
        <img
          src="https://wanderland.qodeinteractive.com/wp-content/uploads/2019/10/logo-dark-img-02.png"
          width="80px"
          alt="Logo"
        />
      </div>
      <nav className={`border-b-[1px] border-[#ffffff80] ${menuOpen ? 'block' : 'hidden'} lg:block`}>
        <div className="px-28 py-4">
          <div className="flex flex-col lg:flex-row items-center justify-between text-[16px] font-bold">
            {navItems.slice(0, 4).map((item, index) => (
              <div key={index} className="hover:text-[#59815b]">
                {item}
              </div>
            ))}
            <div className="h-1/6 my-4 lg:my-0">
              <img
                src="https://wanderland.qodeinteractive.com/wp-content/uploads/2020/01/logo-img-03.png"
                width="150px"
                alt="Logo"
              />
            </div>
            {navItems.slice(4).map((item, index) => (
              <div key={index + 4} className="hover:text-[#59815b]">
                {item}
              </div>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
