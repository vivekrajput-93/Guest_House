import { AlignJustify, X } from "lucide-react";
import { useState } from "react";

const Home = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const handleLinkClick = (sectionId: string) => {
    setClick(false);
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 50, // Adjust the offset as needed
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="main-container">
      {/* Header */}
      <div className="w-full h-[90px]  top-3 left-0 z-10 px-12 max-[968px]:bg-pinky ">
        <div className="flex justify-between items-center h-full ">
          {/* Logo */}
          <h1 className="flex flex-col text-lg text-white ">
            Kingsukh <span className="">Guest House</span>
          </h1>

          {/* Navigation Menu */}
          <ul
            className={`${
              click ? " active flex flex-col justify-center items-center gap-5 font-medium text-white absolute top-[90px] right-0 w-full bg-pinky  z-20" : "hidden md:flex md:justify-center text-white"
            }`}
          >
            <li className="px-4 py-2 font-semibold">
            <a href="#" onClick={(e) => { e.preventDefault(); handleLinkClick("home"); }}>
                Home
              </a>
            </li>
            <li className="px-4 py-2 font-semibold">
            <a href="#" onClick={(e) => { e.preventDefault(); handleLinkClick("home"); }}>
                About
              </a>
            </li>
            <li className="px-4 py-2 font-semibold">
            <a href="#" onClick={(e) => { e.preventDefault(); handleLinkClick("home"); }}>
                Services
              </a>
            </li>
            <li className="px-4 py-2 font-semibold">
            <a href="#" onClick={(e) => { e.preventDefault(); handleLinkClick("home"); }}>
                Rooms
              </a>
            </li>
            <li className="px-4 py-2 font-semibold">
            <a href="#" onClick={(e) => { e.preventDefault(); handleLinkClick("home"); }}>
                Gallery
              </a>
            </li>
            <li className="px-4 py-2 font-semibold">
            <a href="#" onClick={(e) => { e.preventDefault(); handleLinkClick("home"); }}>
                Contact
              </a>
            </li>
          </ul>

          {/* Book Now Button */}
          <button className="hidden md:block bg-pinky px-10 py-3 font-medium text-white rounded">
            Book Now
          </button>

          {/* Hamburger Icon */}
          <div className="md:hidden flex cursor-pointer" aria-expanded={click ? "true" : "false"} onClick={handleClick}>
            {click ? <X color="white" /> : <AlignJustify color="white" />}
          </div>
        </div>
      </div>

      <div className="text-container flex flex-col gap-1 justify-center items-center h-[100vh]">
        <span className="text-xl mb-4 text-gray-300">Simple - Unique - Friendly</span>
        <p className="text-[4rem] text-white font-[500] leading-none w-2/3 text-center" >Make Yourself At Home In Our <span className="font-[500] text-pinky">Guest House.</span></p>
      </div>

      <div className="bg-white shadow-lg relative top-12 rounded-xl py-8 mx-14 flex justify-center items-center">
        <button className="px-7 py-3 bg-pinky font-medium rounded-lg text-white">Book Now</button>
      </div>
    </div>
  );
};

export default Home;
