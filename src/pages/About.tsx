import out from "../assets/out.jpg";

const About = () => {
  return (
    <div className="about-container mt-16 flex py-8 gap-8 max-[768px]:flex-col " id="about">
      <div className="image-container flex-1 rounded-lg flex justify-center max-[536px]:mx-4">
        <img src={out} alt="about-image" className="rounded-lg max-[536px]:h-[600px] " width={450} height={800}  />
      </div>
      <div className="text-container mt-6 w-fit flex-1 flex flex-col justify-center px-5 gap-6 ">
        <h4 className="flex gap-3 items-center font-medium tracking-widest uppercase">
          About us <div className="w-[60px] h-[0.10rem] bg-pinky"></div>
        </h4>
        <h2 className=" pr-7 text-[2.5rem] font-semibold leading-tight">The Best Holidays Start Here!</h2>
        <p className="pr-7 text-neutral-500 font-medium">
          Embark on a tranquil journey at our Kingsukh Guest House, enveloped by
          the scenic allure of Biharinath Hill, Baranti Hill, Susunia Hill,
          Joychandi Hill, Garhpanchkot, Baranti Dam, Maithon Dam, and the
          captivating Panchat Dam. Revel in the embrace of comfort, relish
          delightful meals, and unwind in our verdant garden oasis. Your ideal
          retreat beckons, promising a harmonious blend of nature's beauty and
          heartfelt hospitality. Explore the hidden gems of Purulia, creating
          memories that linger long after your stay.
        </p>
        <a className="text-blue-700 font-bold" href="https://maps.app.goo.gl/7wYUEB4tvR7NMHbcA">Address: Beside Barshal Water Tank, Manpur, Barhanti, West Bengal 723156</a>
        <a className="text-blue-700 font-bold" href="tel:+91 9007062180">Contact us: +91 9007062180</a>
        <button className="w-fit text-white font-medium px-8 py-3 bg-pinky rounded-lg hover:bg-buttonPinky transition-colors duration-300">Book Now</button>

      </div>
    </div>
  );
};

export default About;
