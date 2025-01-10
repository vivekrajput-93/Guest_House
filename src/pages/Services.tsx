const Services = () => {
  return (
    <div className="service-container mt-12" id="services">
      <div className="content-container h-[95vh] w-full max-[768px]:bg-cover ">
        <div className="content-section col-start-2 col-end-3 bg-white h-full mr-12  max-[768px]:w-[320px] ">
          <h4 className="flex gap-3 items-center font-medium tracking-widest uppercase">
            Services <div className="w-[60px] h-[0.10rem] bg-pinky"></div>
          </h4>
          <p className="pr-7 text-[2.5rem] font-semibold leading-tight mt-2 max-[768px]:pr-0">
            Strive Only For The Best.
          </p>

          <div className="icon-container">
            <div>
            <span className="bg-blue-100"><i className="ri-shield-star-line text-shieldColor"></i></span>
            <h2 className="text-xl font-medium">High Class Security</h2>
            </div>
            <div>
              <span className="bg-pink-100"><i className="ri-24-hours-line text-babyPink"></i></span>
              <h2 className="text-xl font-medium">24 Hours Room Service</h2>
            </div>
            <div>
              <span className="bg-purple-100"><i className="ri-restaurant-2-fill text-paintColor"></i></span>
              <h2 className="text-xl font-medium">Restaurant</h2>
            </div>
            <div>
              <span className="bg-red-100"><i className="ri-map-2-line text-pinky"></i></span>
              <h2 className="text-xl font-medium">Tourist Guide Support</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="banner-container mt-16  flex py-6 mx-12 rounded-lg shadow-xl max-[768px]:flex-col max-[768px]:gap-4 max-[768px]:items-center" >
        <div className=" flex- flex flex-col justify-center w-1/2 items-center text-center">
          <h2 className="text-[2rem] font-medium">100+</h2>
          <p className="text-neutral-500">Bookings Completed</p>
        </div>
        <div className="flex-1 flex flex-col justify-center w-1/2 items-center">
          <h2 className="text-[2rem] font-medium">150+</h2>
          <p className="text-neutral-500">Happy Customers</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
