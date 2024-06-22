import React, { useState } from "react";
import tony from "./assets/tony.jpg";
import kai from "./assets/kai.jpg";
import nathan from "./assets/nathan.jpg";
import uliana from "./assets/uliana.jpg";
import jay from "./assets/jay.jpg";

export function ImageGallery() {
  const data = [
    { imgelink: kai },
    { imgelink: nathan },
    { imgelink: jay },
    { imgelink: uliana },
    { imgelink: tony },
  ];

  const [active, setActive] = useState(tony);
  const [loading, setLoading] = useState(false); // Initially set to false

  const handleImageClick = (imgelink) => {
    setLoading(true); // Set loading to true when a thumbnail is clicked
    setTimeout(() => {
      setActive(imgelink);
      setLoading(false); // Set loading to false after a delay (simulating loading time)
    }, ); 
  };

  return (
    <div className="flex flex-col items-center w-full px-4 mt-[24rem] sm:mt-12  ">
      <div className="relative">
        {/* Main image */}
        <img
          className={`h-auto w-full rounded-lg object-cover object-center md:h-[900px] cursor-pointer transform hover:scale-105 transition duration-300 ${loading ? 'opacity-0' : 'opacity-100'}`}
          src={active}
          alt=""
          onLoad={() => setLoading(false)} // Hide loading indicator when main image is loaded
        />
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Loading spinner or placeholder */}
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-gray-900"></div>
          </div>
        )}
      </div>
      <div className="grid grid-cols-5 gap-4 sm:gap-2 md:gap-1 mt-4 w-full max-w-2xl">
        {data.map(({ imgelink }, index) => (
          <div key={index}>
            <img
              onClick={() => handleImageClick(imgelink)}
              src={imgelink}
              className="h-20 w-full max-w-full cursor-pointer rounded-lg object-cover object-center"
              alt="gallery-thumbnail"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImageGallery;
