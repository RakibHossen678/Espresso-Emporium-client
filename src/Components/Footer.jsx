import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationDot,
  FaTwitter,
} from "react-icons/fa6";
import logo from "../assets/more/logo1.png";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
const Footer = () => {
  return (
    <div className="">
      <div
        className=" "
        style={{ backgroundImage: `url(/src/assets/more/13.jpg)` }}
      >
        <div className="flex justify-between gap-10 pt-20 pb-10 items-center w-9/12 mx-auto">
          <div className=" flex-1 ">
            <img className="w-16" src={logo} alt="" />
            <h1 className="font-rancho text-5xl font-semibold drop-shadow-2xl text-[#331A15] py-5">
              Espresso Emporium
            </h1>
            <p className="font-raleway font-medium max-w-xl">
              Always ready to be your friend. Come & Contact with us to share
              your memorable moments, to share with your best companion.
            </p>
            <div className="flex items-center space-x-4 py-6">
              <span>
                <FaFacebook className="text-3xl text-[#331A15]" />
              </span>
              <span>
                <FaTwitter className="text-3xl text-[#331A15]" />
              </span>
              <span>
                <FaInstagram className="text-3xl text-[#331A15]" />
              </span>
              <span>
                <FaLinkedin className="text-3xl text-[#331A15]" />
              </span>
            </div>
            <h1 className="font-rancho text-5xl font-semibold drop-shadow-2xl text-[#331A15] py-3">
              Get in Touch
            </h1>
            <div className="space-y-4 py-5">
              <div className="flex items-center space-x-2">
                <span>
                  <IoCall className="text-3xl text-[#331A15]" />
                </span>
                <span className="font-raleway text-lg">+88 01533 333 333</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>
                  <MdEmail className="text-3xl text-[#331A15]" />
                </span>
                <span className="font-raleway text-lg">info@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>
                  <FaLocationDot className="text-3xl text-[#331A15]" />
                </span>
                <span className="font-raleway text-lg">
                  72, Wall street, King Road, Dhaka
                </span>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <h1 className="font-rancho text-5xl drop-shadow-2xl font-semibold text-[#331A15] py-5">Connect with Us</h1>
            <form  className="space-y-6">
              <div>
                
                <input
                  id="name"
                  type="text"
                  placeholder="Name"
                  className="w-full p-3 rounded border-none outline-none"
                />
              </div>
              <div>
              
                <input
                  id="email"
                  type="email"
                  placeholder="Email"
                  className="w-full p-3 rounded border-none outline-none"
                />
              </div>
              <div>
                
                <textarea
                
                placeholder="Message"
                  id="message"
                  rows="3"
                  className="w-full p-3 border-none outline-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className=" font-rancho  border-2 border-[#331A15] rounded-full  px-6 py-2 font-bold text-start"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="" style={{backgroundImage:`url(/src/assets/more/28.jpg)`}}>
        <h1 className="text-white text-center py-4 font-rancho text-lg">Copyright Espresso Emporium ! All Rights Reserved</h1>

      </div>
    </div>
  );
};

export default Footer;
