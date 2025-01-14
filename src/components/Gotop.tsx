import  { useEffect, useState } from "react";


const GotoTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleFunction = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const readtheScroll = () => {
    const windowHeight = 350;

    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (windowHeight > winScroll) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", readtheScroll);
  });

  return (
    <>
      {!isVisible && (
        <div
          className="cursor-pointer fixed z-10 bottom-[2rem] right-[2rem] border-2  shadow-2xl w-10 h-10 rounded-full flex justify-center items-center text-white  bg-pinky"
          onClick={handleFunction}
        >
         <i className="ri-arrow-up-line"></i>
        </div>
      )}
    </>
  );
};

export default GotoTop;