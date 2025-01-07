import  Facebook  from "../assets/socials/facebook.png"
import Instagram from "../assets/socials/instagram.png"
import Twitter from "../assets/socials/twitter.png"
import Youtube from "../assets/socials/youtube.png"

const Footer = () => {
  return (
    <div className="footer-container mt-4 bg-black text-white">
      <div className="link-container flex gap-1  mt-14 max-[768px]:flex-col">
        <div>
            <h2 className="w-1/3"><a href="#home">Kingsukh Guest House</a></h2>
            <p className="text-neutral-500">Discover a world of comfort, luxury, and adventure as you explore our curated 
            selection of hotels, making every moment of your getaway truly extraordinary.</p>
            <button className="w-fit px-8 py-3 bg-pinky rounded-lg hover:bg-buttonPinky transition-colors duration-300">Book Now</button>
        </div>
        <div>
            <h2>QUICK LINKS</h2>
            <ul className="link-list">
                <li>Browse Destinations</li>
                <li>Special Offers & Packages</li>
                <li>Room Types & Amenities</li>
                <li>Customer Reviews & Ratings</li>
                <li>Travel Tips & Guides</li>
            </ul>
        </div>
        <div>
            <h2>OUR SERVICES</h2>
            <ul className="link-list">
                <li>Concierge Assistance</li>
                <li>Flexible Booking Options</li>
                <li>Airport Transfers</li>
                <li>Wellness & Recreation</li>
            </ul>
        </div>
        <div>
            <h2>CONTACT US</h2>
            <ul className="flex flex-col gap-4 link-list">
                <li>Address: Beside Barshal Water Tank, Manpur, Barhanti, West Bengal 723156</li>
                <li><a href="mailto:kkghosh0099@gmail.com">kkghosh0099@gmail.com</a></li>
                <li><a href="tel:+91 9007062180">+91 9007062180</a></li>
            </ul>
            <ul className="flex gap-4 items-center">
                <li>
                    <a href="#"><img src={Facebook} alt="social-icons" width={25} height={25} /></a>
                </li>
                <li>
                   <a href="https://www.instagram.com/kingsukhguesthouse/"> <img src={Instagram} alt="social-icons" width={25} height={25} /></a>
                </li>
                <li>
                    <a href="#"><img src={Youtube} alt="social-icons" width={25} height={25} /></a>
                </li>
                <li>
                    <a href="#"><img src={Twitter} alt="social-icons" width={25} height={25} /></a>
                </li>
            </ul>
        </div>
      </div>
      <div className="copyright-container text-center mt-20 mb-3 text-neutral-500">
      Copyright © 2024 Kingsukh Guest House. All rights reserved.
      </div>
    </div>
  )
}

export default Footer
