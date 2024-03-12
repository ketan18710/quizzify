import React from "react";
import { Link } from "react-router-dom";
import { APP_ROUTES } from "../../utils";
import { Button } from "@mui/base";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = (props) => {
  return (
    <footer className=" bottom-0 w-full bg-[#191A23] rounded-[10px] text-white px-20 py-8">
<<<<<<< HEAD
      <div className="container mx-auto max-w-5xl flex justify-between items-center">
        {/* Quizzify on the left */}
        <Link
          className="font-normal flex items-center text-white hover:underline"
=======
      <div className="container w-full max-w-5xl flex justify-between items-center">
        {/* Quizzify on the left */}
        <Link
          className="font-semibold text-3xl flex items-center  text-white  text-start"
>>>>>>> 067f24541cd0a9469184c0135db433c4d640064c
          to={APP_ROUTES.HOME}
        >
          Quizzify
        </Link>
<<<<<<< HEAD
        
        {/* Navigation links in the center */}
        <nav className="flex items-center space-x-4"> 
=======

        {/* Navigation links in the center */}
        <nav className="flex justify-between gap-8 items-center ">
>>>>>>> 067f24541cd0a9469184c0135db433c4d640064c
          <Link
            className="font-normal text-white hover:underline"
            to={APP_ROUTES.ABOUT}
          >
<<<<<<< HEAD
            About Us
=======
            Features
>>>>>>> 067f24541cd0a9469184c0135db433c4d640064c
          </Link>
          <Link
            className="font-normal text-white hover:underline"
            to={APP_ROUTES.CONTACT}
          >
<<<<<<< HEAD
            Contact
=======
            Use Cases
          </Link>
          <Link
            className="font-normal text-white hover:underline"
            to={APP_ROUTES.CONTACT}
          >
            Testimonials
          </Link>
          <Link
            className="font-normal text-white hover:underline"
            to={APP_ROUTES.CONTACT}
          >
            FAQs
>>>>>>> 067f24541cd0a9469184c0135db433c4d640064c
          </Link>
        </nav>

        {/* Social media icons on the right */}
        <div className="flex space-x-2">
          <FaFacebook className="text-xl hover:text-blue-500" />
          <FaTwitter className="text-xl hover:text-blue-500" />
          <FaInstagram className="text-xl hover:text-red-500" />
        </div>
      </div>
<<<<<<< HEAD
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
=======
      {/* Contact information and form section */}
      <div className="flex items-start justify-between py-20">
        <div className="flex flex-col gap-2 items-start ">
          <p className=" text-start text-black py-1 px-2 mr-8 justify-start bg-[#B9FF66] leading-4 text-xl items-center ">
            Contact Us
            {/* <span className="w-fit bg-[#B9FF66] text-start text-black py-1 px-2 mr-8">
            </span> */}
          </p>
          <p className="text-sm !ml-0">
            {/* Replace with your contact information */}
            Email: contact@quizzify.com
          </p>
          <p className="text-sm !ml-0 ">
            {/* Replace with your contact information */}
            Phone: +1 234 567 890
          </p>
        </div>
        <div className="py-8 px-8 bg-[#292A32]">
>>>>>>> 067f24541cd0a9469184c0135db433c4d640064c
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
<<<<<<< HEAD
=======
      </div>
>>>>>>> 067f24541cd0a9469184c0135db433c4d640064c
    </footer>
  );
};

export default Footer;
