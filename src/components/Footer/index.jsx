import React from "react";
import { Link } from "react-router-dom";
import { APP_ROUTES } from "../../utils";
import { Button } from "@mui/base";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = (props) => {
  return (
    <footer className=" bottom-0 w-full bg-[#191A23] rounded-[10px] text-white px-20 py-8">
      <div className="container mx-auto max-w-5xl flex justify-between items-center">
        {/* Quizzify on the left */}
        <Link
          className="font-normal flex items-center text-white hover:underline"
          to={APP_ROUTES.HOME}
        >
          Quizzify
        </Link>
        
        {/* Navigation links in the center */}
        <nav className="flex items-center space-x-4"> 
          <Link
            className="font-normal text-white hover:underline"
            to={APP_ROUTES.ABOUT}
          >
            About Us
          </Link>
          <Link
            className="font-normal text-white hover:underline"
            to={APP_ROUTES.CONTACT}
          >
            Contact
          </Link>
        </nav>

        {/* Social media icons on the right */}
        <div className="flex space-x-2">
          <FaFacebook className="text-xl hover:text-blue-500" />
          <FaTwitter className="text-xl hover:text-blue-500" />
          <FaInstagram className="text-xl hover:text-red-500" />
        </div>
      </div>
              {/* Contact information and form section */}
              <div className="flex items-center justify-between py-20">
          <div className="flex items-center space-x-4">
            <p className="my-4 flex leading-4 text-xl items-center text-start">
              <span className="w-fit bg-[#B9FF66] text-start text-black py-1 px-2 mr-8">
                Contact Us
              </span>
            </p>
            <p className="text-sm">
              {/* Replace with your contact information */}
              Email: contact@quizzify.com <br /> Phone: +1 234 567 890
            </p>
          </div>
          <form className="flex items-center">
            <input
              type="text"
              className="rounded-md px-3 py-2 border border-gray-500 bg-white text-black"
              placeholder="Enter your email"
            />
            <Button className="ml-2 py-2 my-auto px-4 border bg-[#B9FF66] text-black rounded-md border-black border-1">
              Subscribe
            </Button>
          </form>
        </div>
    </footer>
  );
};

export default Footer;
