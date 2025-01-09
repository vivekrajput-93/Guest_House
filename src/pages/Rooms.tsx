import Small from "../assets/small.jpg";
import Large from "../assets/large.jpg";
import Room from "../assets/room1.jpg";

const Rooms = () => {
  return (
    <div className="rooms-container" id="rooms">
      <div className="header-container px-12 max-[768px]:px-5">
        <h4 className="flex gap-3 items-center font-medium tracking-widest uppercase">
          OUR LIVING ROOMS <div className="w-[60px] h-[0.10rem] bg-pinky"></div>
        </h4>
        <p className=" pr-7 text-[2.5rem] font-semibold leading-tight w-1/2 mt-2 max-[768px]:w-full ">
          The Most Memorable Rest Time Starts Here.
        </p>
      </div>
      <div className="card-container flex mt-16 px-12 gap-8 max-[768px]:flex-col max-[768px]:px-5">
        <div className="card-section flex-1 ">
          <div className="image-section">
            <img src={Room} alt="room-image" className="w-fit" height={300} />
            <div className="icon-section flex gap-2">
              <span>
                <i className="ri-heart-fill" ></i>
              </span>
              <span>
                <i className="ri-paint-fill"></i>
              </span>
              <span>
                <i className="ri-shield-star-line"></i>
              </span>
            </div>
          </div>
          <div className="text-container">
            <h2>Cozy Haven Room</h2>
            <p className="text-neutral-500 font-medium">
              Escape to comfort in our Cozy Haven Room, a snug retreat designed
              for intimate relaxation.
            </p>
            <p className="text-neutral-500 font-medium">
              Starting from{" "}
              <span className="text-black font-medium"> Rs. 1000/night</span>
            </p>
            <button className="book-button">BOOK NOW</button>
          </div>
        </div>
        <div className="card-section  flex-1 ">
          <div className="image-section ">
            <img src={Small} alt="room-image" className="w-fit" height={300} />
            <div className="icon-section">
              <span>
                <i className="ri-heart-fill"></i>
              </span>
              <span>
                <i className="ri-paint-fill"></i>
              </span>
              <span>
                <i className="ri-shield-star-line"></i>
              </span>
            </div>
          </div>
          <div className="text-container">
            <h2>Spacious Serenity Suite</h2>
            <p className="text-neutral-500 font-medium">
              Indulge in luxury and ample space in our Spacious Serenity Suite,
              where tranquility meets roomy elegance.
            </p>
            <p className="text-neutral-500 font-medium">
              Starting from{" "}
              <span className="text-black font-medium">Rs. 1500/night</span>
            </p>
            <button className="book-button">BOOK NOW</button>
          </div>
        </div>
        <div className="card-section flex-1 ">
          <div className="image-section">
            <img src={Large} alt="room-image" className="w-fit" height={300} />
            <div className="icon-section">
              <span>
                <i className="ri-heart-fill"></i>
              </span>
              <span>
                <i className="ri-paint-fill"></i>
              </span>
              <span>
                <i className="ri-shield-star-line"></i>
              </span>
            </div>
          </div>
          <div className="text-container">
            <h2>Elegant Urban Room</h2>
            <p className="text-neutral-500 font-medium">
              Experience modern living in our Elegant Urban Studio, perfectly
              designed for comfort and style in the heart of the city.
            </p>
            <p className="text-neutral-500 font-medium">
              Starting from{" "}
              <span className="text-black font-medium">Rs. 2000/night</span>
            </p>
            <button className="book-button">BOOK NOW</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rooms;
