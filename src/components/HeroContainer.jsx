import React from "react";
import Hero from '../assests/images/hero/phone.png'
const HeroContainer = () => {
  return (
    <section className="flex flex-col items-center w-[90%] justify-center pt-8  lg:flex-row text-secondary pb-4">
      <div className="flex flex-col gap-5 text-center lg:text-left lg:w-5/12">
        <h1 className="text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl">A Powerful App For Your Business.</h1>
        <p className="text-sm md:text-base">
          From open source to pro services, Piqes helps you to build, deploy,
          test, and monitor apps.
        </p>
        <div className="flex flex-col items-center justify-center gap-3 mt-10 lg:justify-start md:gap-6 md:flex-row">
          <button className="w-[45%] md:w-[180px] flex items-center px-6 py-2 rounded-md group bg-secondary text-main hover:bg-primary hover:text-secondary">
            <div className="">
              <svg
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
                stroke-width="3"
                stroke="#ff6b81"
                className="w-8 h-8 group-hover:stroke-secondary"
                fill="none"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path d="M51.71,25.51s-4.17-4.9-9.6-4.9A20.22,20.22,0,0,0,33.9,22.3a2.82,2.82,0,0,1-2.08.11c-2.1-.68-6.14-1.87-9.76-1.58-4.13.33-7.11,4.22-7.11,4.22s-3.34,4-3.34,11.32a24.83,24.83,0,0,0,7,17.68s4.54,5.49,8.46,3.11a10,10,0,0,1,10-.44c2,1.23,5.74,1.71,8-.56a26.54,26.54,0,0,0,6.9-11s-6.45-4.45-6.23-9.91S51.71,25.51,51.71,25.51Z"></path>
                  <path d="M33.35,17.67a10.33,10.33,0,0,1,8.7-11.11S42.94,16.61,33.35,17.67Z"></path>
                </g>
              </svg>
            </div>
            <p>App Store</p>
          </button>
          <button className="w-[45%] md:w-[180px] flex items-center px-6 py-2 rounded-md group outline outline-secondary outline-1 text-secondary hover:bg-secondary hover:text-main">
            <div>
              <svg
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
                stroke-width="3"
                stroke="#fff"
                fill="none"
                className="w-8 h-8 group-hover:stroke-main"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path d="M12.36,53.33V10.67a1,1,0,0,1,1.56-.91L51.11,31a1,1,0,0,1,0,1.81L13.93,54.24A1.05,1.05,0,0,1,12.36,53.33Z"></path>
                  <line x1="12.36" y1="10.67" x2="42.07" y2="38.02"></line>
                  <line x1="12.36" y1="53.33" x2="41.24" y2="25.35"></line>
                </g>
              </svg>
            </div>
            <p>Play store</p>
          </button>
        </div>
      </div>
      <div className="lg:w-7/12">
        <img src={Hero} alt="Two phone" className=''/>
      </div>
    </section>
  );
};

export default HeroContainer;
