import React from "react";

const Card = ({ item }) => {
  return (
    <div className="border-1 flex mt-2 items-center justify-center hover:-translate-y-3 hover:shadow-[0px_3px_5px_#00000017] duration-300 border rounded-lg p-4 py-10 border-[#eee]">
      <div className="flex flex-col w-[90%] gap-6 ">
        <div className="flex items-center shadow-[0px_4px_6px_#0000002a] justify-center rounded-lg w-14 h-14 bg-main">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h5"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="M16.61 19.9999C17.95 20.0099 19.24 19.5099 20.23 18.6099C23.5 15.7499 21.75 10.0099 17.44 9.46995C15.9 0.129949 2.42998 3.66995 5.61998 12.5599"
                stroke="#fff"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>{" "}
              <path
                d="M7.28011 12.97C6.75011 12.7 6.16011 12.56 5.57011 12.57C0.910109 12.9 0.920108 19.68 5.57011 20.01"
                stroke="#fff"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>{" "}
              <path
                d="M15.8201 9.88998C16.3401 9.62998 16.9001 9.48998 17.4801 9.47998"
                stroke="#fff"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>{" "}
              <path
                d="M12.97 20H8.96997"
                stroke="#fff"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>{" "}
              <path
                d="M10.97 22V18"
                stroke="#fff"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>{" "}
            </g>
          </svg>
        </div>
        <h2 className="text-lg font-[600]">{item.name}</h2>
        <p className="text-base text-gray-500">
          It is a long established fact that a reader will be distracted by the
          readable content of a page at its layout.
        </p>
      </div>
    </div>
  );
};

export default Card;
