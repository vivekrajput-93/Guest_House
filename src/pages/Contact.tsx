import location from "../assets/contact/location.png";
import call from "../assets/contact/call.png";
import mail from "../assets/contact/mail.png";
import facebook from "../assets/contact/1.png";
import instagram from "../assets/contact/3.png";
import tweeter from "../assets/contact/2.png";
import linkedIn from "../assets/contact/5.png";

const Contact = () => {
  return (
    <>
      <div
        className="contact-container h-[90vh] flex bg-green-500"
        id="contact"
      >
        <div className="info-container w-[400px] p-10 rounded-xl ml-12 bg-pinky flex flex-col justify-between ">
          <div className="data-container">
            <h2 className="text-2xl font-medium text-white">Contact Info</h2>
            <ul className="flex flex-col gap-4 mt-4 text-white">
              <li className="info-link">
                <span>
                  <img src={location} alt="icons" width={30} height={30} />
                </span>
                <span className="w-1/2">
                  Beside Barshal Water Tank, Manpur, Barhanti, West Bengal
                  723156
                </span>
              </li>
              <li className="info-link">
                <span>
                  <img src={mail} alt="icons" width={30} height={30} />
                </span>
                <span>kkghosh0099@gmail.com</span>
              </li>
              <li className="info-link">
                <span>
                  <img src={call} alt="icons" width={30} height={30} />
                </span>
                <span>+91 9007062180</span>
              </li>
            </ul>
          </div>
          <div className="social-icon-container">
            <ul className="flex gap-1 items-center ">
              <li></li>
              <img
                src={facebook}
                alt="icons"
                width={30}
                height={30}
                className="object-contain"
              />
              <li></li>
              <img
                src={instagram}
                alt="icons"
                width={30}
                height={30}
                className="object-contain"
              />
              <li></li>
              <img
                src={tweeter}
                alt="icons"
                width={30}
                height={30}
                className="object-contain"
              />
              <li></li>
              <img
                src={linkedIn}
                alt="icons"
                width={30}
                height={30}
                className="object-contain"
              />
            </ul>
          </div>
        </div>
        <div className="temp-container flex w-full">
          <div className="empty-container w-[200px] h-full bg-yellow-400"></div>
          <div className="message-container flex-1 border border-black ">
            <h2>Send a Message</h2>
            <div className="input-container">
              <div className="relative w-full">
                <input
                  type="text"
                  id="first-name"
                  className="peer w-full border border-gray-300 rounded-md px-3 pt-5 pb-2 text-sm text-gray-900 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="First Name"
                  required
                />
                <label className="absolute left-3 top-2.5 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2.5 peer-focus:text-blue-500 peer-focus:text-sm">
                  First Name
                </label>
              </div>
              <div className="relative w-full">
                <input
                  type="text"
                  id="first-name"
                  className="peer w-full border border-gray-300 rounded-md px-3 pt-5 pb-2 text-sm text-gray-900 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="First Name"
                  required
                />
                <label className="absolute left-3 top-2.5 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2.5 peer-focus:text-blue-500 peer-focus:text-sm">
                  Last Name
                </label>
              </div>
            </div>
            <div className="input-container">
              <div className="relative w-full">
                <input
                  type="text"
                  id="first-name"
                  className="peer w-full border border-gray-300 rounded-md px-3 pt-5 pb-2 text-sm text-gray-900 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="First Name"
                  required
                />
                <label className="absolute left-3 top-2.5 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2.5 peer-focus:text-blue-500 peer-focus:text-sm">
                  Email Address
                </label>
              </div>
              <div className="relative w-full">
                <input
                  type="text"
                  id="first-name"
                  className="peer w-full border border-gray-300 rounded-md px-3 pt-5 pb-2 text-sm text-gray-900 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="First Name"
                  required
                />
                <label className="absolute left-3 top-2.5 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2.5 peer-focus:text-blue-500 peer-focus:text-sm">
                  Mobile Phone
                </label>
              </div>
            </div>
            <div className="textarea-container">
              <div className="relative w-full">
                <textarea
                  id="message"
                  className="peer w-full border border-gray-300 rounded-md px-3 pt-5 pb-2 text-sm text-gray-900 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Your message"
                  rows="4"
                  required
                ></textarea>
                <label
                  for="message"
                  className="absolute left-3 top-2.5 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2.5 peer-focus:text-blue-500 peer-focus:text-sm"
                >
                  Your message
                </label>
              </div>
            </div>
            <button>Send</button>
          </div>
        </div>
      </div>
      {/* <div className="map-container"></div> */}
    </>
  );
};

export default Contact;
