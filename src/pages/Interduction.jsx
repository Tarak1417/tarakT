import React from 'react';
import hrimage1 from '../assets/Interductionimages/Vector-1.png';
import hrimage2 from '../assets/Interductionimages/Vector-2.png';
import hrimage3 from '../assets/Interductionimages/Vector-3.png';
import hrimage4 from '../assets/Interductionimages/Vector.png';
import characterimage from "../assets/Interductionimages/character.png";
import reload from "../assets/Interductionimages/reaload.png";

const Interduction = () => {
  return (
    <div
      className="bg-[#171717] rounded-[10px] m-2 flex flex-col items-center"
      style={{
        width: '100%',
        width:"auto",
        height: 'auto',
        borderRadius: '10px 0 0 0',
        opacity: 1,
        padding: '20px'
      }}
    >
      {/* Header section with icons */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full p-6">
        <h6 className="text-white text-2xl font-semibold mb-4 m-0 md:mb-0">Introduction</h6>
        <div className="flex gap-4">
          <img src={hrimage1} alt="Vector 1" className="w-5 h-5" />
          <img src={hrimage2} alt="Vector 2" className="w-5 h-5" />
          <img src={hrimage3} alt="Vector 3" className="w-5 h-5" />
          <img src={hrimage4} alt="Vector 4" className="w-5 h-5" />
        </div>
      </div>
      
      {/* Content section */}
      <div className="flex flex-row items-center justify-evenly p-6">
        <img src={characterimage} alt="Character" className="w-24 h-24 mb-4 mr-5" />
        <div className="text-white ml-5">
          <h1 className="text-2xl font-bold">
            Welcome to Clikkle <span className="text-[#3767B1]">HR, Rohit!</span>
          </h1>
          <p>
            We’re excited to have you here. Start with our <span className="text-[#3767B1]">Clikkle HR 101 guide</span> or <span className="text-[#3767B1]">training course</span> to dive right in.
          </p>
          <p className="mt-2">
            And remember, you can <span className="text-[#3767B1]">customize this space</span> anytime in Administration. Welcome aboard!
          </p>
        </div>
      </div>

      {/* Reload section aligned to the right */}
      <div className="flex items-center justify-end w-full gap-1 text-gray-500 text-sm">
        <img src={reload} alt="Reload Icon" className="h-4 w-4" />
        <p>just now</p>
      </div>
    </div>
  );
};

export default Interduction;
