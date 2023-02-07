import React from "react";

const PricingCard = ({ item }) => {
  return (
    <div className="border-1 bg-secondary w-full flex mt-2 items-center justify-center hover:-translate-y-3 hover:shadow-[0px_3px_5px_#00000017] duration-300 border rounded-lg  py-6 border-[#eee]">
      <div className="flex flex-col w-full gap-6">
        <div className="flex flex-col gap-6 px-6">
          <h3 className="text-base font-semibold">{item.name}</h3>
          <p className="text-sm text-paragraph">{item.description}</p>
          <p className="text-paragraph">
            <span className="text-3xl font-bold text-primary">${item.price}</span>/mo
          </p>
          <button className="flex items-center justify-center w-full px-6 py-2.5 text-sm rounded-md group shadow-[0px_3px_5px_#00000017] bg-primary text-secondary hover:bg-main">{item.cta}</button>
        </div>
        <div className="w-full h-px bg-paragraph"/>
        <div className="flex flex-col gap-4 px-6">
          <p className="text-[13px] ">WHAT'S INCLUDED</p>
          <div className="flex flex-col gap-4">
          <p className="flex items-center gap-4">
            <div className="w-3.5 h-3.5">
              <svg
                fill="#ff6b81"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path d="M6.53 9.02 4.58 7.07l-.88.89 2.83 2.83.88-.89 4.78-4.77-.89-.88-4.77 4.77z"></path>
                  <path d="M8 .5A7.77 7.77 0 0 0 0 8a7.77 7.77 0 0 0 8 7.5A7.77 7.77 0 0 0 16 8 7.77 7.77 0 0 0 8 .5zm0 13.75A6.52 6.52 0 0 1 1.25 8 6.52 6.52 0 0 1 8 1.75 6.52 6.52 0 0 1 14.75 8 6.52 6.52 0 0 1 8 14.25z"></path>
                </g>
              </svg>
            </div>
              <span className="text-sm text-paragraph">Cras jutso odio</span>
            </p>
            <p className="flex items-center gap-4">
            <div className="w-3.5 h-3.5">
              <svg
                fill="#ff6b81"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path d="M6.53 9.02 4.58 7.07l-.88.89 2.83 2.83.88-.89 4.78-4.77-.89-.88-4.77 4.77z"></path>
                  <path d="M8 .5A7.77 7.77 0 0 0 0 8a7.77 7.77 0 0 0 8 7.5A7.77 7.77 0 0 0 16 8 7.77 7.77 0 0 0 8 .5zm0 13.75A6.52 6.52 0 0 1 1.25 8 6.52 6.52 0 0 1 8 1.75 6.52 6.52 0 0 1 14.75 8 6.52 6.52 0 0 1 8 14.25z"></path>
                </g>
              </svg>
            </div>
              <span className="text-sm text-paragraph">Cras jutso odio</span>
            </p>
            <p className="flex items-center gap-4">
            <div className="w-3.5 h-3.5">
              <svg
                fill="#ff6b81"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path d="M6.53 9.02 4.58 7.07l-.88.89 2.83 2.83.88-.89 4.78-4.77-.89-.88-4.77 4.77z"></path>
                  <path d="M8 .5A7.77 7.77 0 0 0 0 8a7.77 7.77 0 0 0 8 7.5A7.77 7.77 0 0 0 16 8 7.77 7.77 0 0 0 8 .5zm0 13.75A6.52 6.52 0 0 1 1.25 8 6.52 6.52 0 0 1 8 1.75 6.52 6.52 0 0 1 14.75 8 6.52 6.52 0 0 1 8 14.25z"></path>
                </g>
              </svg>
            </div>
              <span className="text-sm text-paragraph">Cras jutso odio</span>
            </p>
            <p className="flex items-center gap-4">
            <div className="w-3.5 h-3.5">
              <svg
                fill="#ff6b81"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path d="M6.53 9.02 4.58 7.07l-.88.89 2.83 2.83.88-.89 4.78-4.77-.89-.88-4.77 4.77z"></path>
                  <path d="M8 .5A7.77 7.77 0 0 0 0 8a7.77 7.77 0 0 0 8 7.5A7.77 7.77 0 0 0 16 8 7.77 7.77 0 0 0 8 .5zm0 13.75A6.52 6.52 0 0 1 1.25 8 6.52 6.52 0 0 1 8 1.75 6.52 6.52 0 0 1 14.75 8 6.52 6.52 0 0 1 8 14.25z"></path>
                </g>
              </svg>
            </div>
              <span className="text-sm text-paragraph">Cras jutso odio</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
