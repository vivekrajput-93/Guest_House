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
        className="contact-container h-[90vh] max-[768px]:mt-[550px] max-[991px]:mt-[700px] flex max-[768px]:flex-col-reverse max-[768px]:mx-5"
        id="contact"
      >
        <div
          className="info-container relative top-4 left-20 w-[450px] h-[85vh] p-10 rounded-xl ml-12 bg-pinky flex flex-col justify-between 
          max-[768px]:w-auto max-[768px]:left-0 max-[768px]:ml-0 max-[768px]:top-0 max-[768px]:rounded-none  max-[768px]:flex-row max-[586px]:flex-col  max-[768px]:gap-14 "
        >
          <div className="data-container max-[768px]:flex-1">
            <h2 className="text-2xl font-medium text-white">Contact Info</h2>
            <ul className="flex flex-col gap-4 mt-4 text-white">
              <li className="info-link">
                <span>
                  <img src={location} alt="icons" width={20} height={20} />
                </span>
                <span className="w-full max-[768px]:w-1/2">
                  Beside Barshal Water Tank, Manpur, Barhanti, West Bengal
                  723156
                </span>
              </li>
              <li className="info-link">
                <span>
                  <img
                    src={mail}
                    alt="icons"
                    className=""
                    width={20}
                    height={20}
                  />
                </span>
                <span>kkghosh0099@gmail.com</span>
              </li>
              <li className="info-link">
                <span>
                  <img src={call} alt="icons" width={20} height={20} />
                </span>
                <span>+91 9007062180</span>
              </li>
            </ul>
          </div>
          <div className="social-icon-container  max-[768px]:flex-4">
            <ul className="flex gap-2 items-center ">
              <li></li>
              <img
                src={facebook}
                alt="icons"
                width={20}
                height={20}
                className="object-contain"
              />
              <li></li>
              <img
                src={instagram}
                alt="icons"
                width={20}
                height={20}
                className="object-contain"
              />
              <li></li>
              <img
                src={tweeter}
                alt="icons"
                width={20}
                height={20}
                className="object-contain"
              />
              <li></li>
              <img
                src={linkedIn}
                alt="icons"
                width={20}
                height={20}
                className="object-contain"
              />
            </ul>
          </div>
        </div>
        <div className="temp-container flex w-full mr-24 shadow-xl rounded-2xl max-[768px]:rounded-none">
          <div className="empty-container w-[150px] h-full bg-white rounded-xl max-[768px]:hidden "></div>
          <div className="message-container flex-1 flex flex-col p-8 gap-6 ">
            <h2 className="text-2xl text-pinky">Send a Message</h2>
            <div className="input-container flex gap-3 max-[586px]:flex-col ">
              <div className="relative w-1/2 max-[568px]:w-full ">
                <input
                  type="text"
                  id="first-name"
                  className="peer w-full border-b border-black outline-none  px-3 pt-8 pb-1  text-black placeholder-transparent  focus:text-black text-xl"
                  placeholder="First Name"
                  required
                />
                <label className="absolute left-1 top-2.5  text-black text-xl transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-black peer-placeholder-shown:text-xl peer-focus:top-2.5 peer-focus:text-pinky peer-focus:text-sm">
                  First Name
                </label>
              </div>
              <div className="relative w-1/2 max-[568px]:w-full ">
                <input
                  type="text"
                  id="first-name"
                  className="peer w-full border-b border-black outline-none  px-3 pt-8 pb-1  text-black placeholder-transparent  focus:text-black text-xl"
                  placeholder="First Name"
                  required
                />
                <label className="absolute left-1 top-2.5  text-black text-xl transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-black peer-placeholder-shown:text-xl peer-focus:top-2.5 peer-focus:text-pinky peer-focus:text-sm">
                  Last Name
                </label>
              </div>
            </div>
            <div className="input-container max-[586px]:flex-col max-[586px]:relative max-[586px]:bottom-6">
              <div className="relative w-full max-[586px]:mb-6">
                <input
                  type="text"
                  id="first-name"
                  className="peer w-full border-b border-black outline-none  px-3 pt-8 pb-1  text-black placeholder-transparent  focus:text-black text-xl"
                  placeholder="First Name"
                  required
                />
                <label className="absolute left-1 top-2.5  text-black text-xl transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-black peer-placeholder-shown:text-xl peer-focus:top-2.5 peer-focus:text-pinky peer-focus:text-sm">
                  Email Address
                </label>
              </div>
              <div className="relative w-full">
                <input
                  type="text"
                  id="first-name"
                  className="peer w-full border-b border-black outline-none  px-3 pt-8 pb-1  text-black placeholder-transparent  focus:text-black text-xl"
                  placeholder="First Name"
                  required
                />
                <label className="absolute left-1 top-2.5  text-black text-xl transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-black peer-placeholder-shown:text-xl peer-focus:top-2.5 peer-focus:text-pinky peer-focus:text-sm">
                  Mobile Phone
                </label>
              </div>
            </div>
            <div className="textarea-container  max-[586px]:flex-col  max-[586px]:relative max-[586px]:bottom-4">
              <div className="relative w-full">
                <textarea
                  id="message"
                  className="peer w-full border-b border-black outline-none  px-3 pt-8 pb-1  text-black placeholder-transparent  focus:text-black text-xl"
                  placeholder="Your message"
                  required
                ></textarea>
                <label className="absolute left-1 top-2.5  text-black text-xl transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-black peer-placeholder-shown:text-xl peer-focus:top-2.5 peer-focus:text-pinky peer-focus:text-sm">
                  Write your message here...
                </label>
              </div>
            </div>
            <button className="w-fit bg-pinky px-10 text-white font-medium rounded-xl py-4">
              Send
            </button>
          </div>
        </div>
      </div>
      <div className="map-container relative bottom-10">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.5017351225647!2d86.85721547510981!3d23.586332378782714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f6e3fdd3ff9ebb%3A0x517a57e3f93c1807!2sKingsukh%20Guest%20House!5e0!3m2!1sen!2sin!4v1705088034844!5m2!1sen!2sin"
          width="100%"
          height="400"
          loading="lazy"
        ></iframe>
      </div>
    </>
  );
};

export default Contact;
