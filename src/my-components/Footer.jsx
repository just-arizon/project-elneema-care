import React from 'react';
import Logo from "../assets/El-neema.png";
import { FaLinkedinIn } from "react-icons/fa6";
import { RiTwitterXFill } from "react-icons/ri";
import { FaFacebookF } from "react-icons/fa";
import BackgroundImage from "../assets/footer-bg.jpg"; // Replace with your actual image path

const Footer = () => {
  const footerItems = [
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/contact" },
    { name: "Testimonials", href: "#pricing" },
    { name: "Meet The Team", href: "/team-members" },
    { name: "Resources", href: "/resources" },
    { name: "Community Support", href: "/community" },
  ];
  
  const footerIntro = [
    { number: "+234 907 547-12-97", href: "#home" },
    { email: "elneemacaresinitiative@gmail.com", href: "#pricing" },
  ];
  
  const footerIcons = [
    { img: <FaLinkedinIn />, href: "#linkedIn" },
    { img: <FaFacebookF />, href: "#linkedIn" },
    { img: <RiTwitterXFill />, href: "#twitter" },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <div className='relative'>
      <div
        className='absolute inset-0'
        style={{
          backgroundImage: `url(${BackgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(.4) contrast(1.1)', // Adjust these values as needed
          zIndex: -1,
        }}
      >
        </div>
      <div className='flex flex-col py-12 relative bg-gray-900'>
        <div className="lg:flex justify-between container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="footer-logo flex flex-col justify-center border-b-2 lg:border-none border-b-[#fefefe] border-opacity-30 pb-7">
            <img src={Logo} alt="Logo" className="w-32 py-5" />
            <div className="footer-nav_links grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1">
              {footerIntro.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="text-white hover:text-gray-600 py-2 rounded-md text-sm font-medium"
                >
                  {item.number}
                  {item.email}
                </a>
              ))}
            </div>
          </div>

          <div className="footer-links flex flex-col justify-center">
            <div className="footer-link_heading py-5">
              <h4 className='text-white opacity-70 mt-5'>Quick Links</h4>
            </div>
            <div className="footer-nav_links grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4">
              {footerItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="text-white hover:text-gray-600 py-2 rounded-md text-sm font-medium"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          <div className="footer-social flex items-center pt-5">
            {footerIcons.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="text-white hover:text-gray-600 p-2 text-sm font-medium border-2 rounded-full gap-5 mr-6"
              >
                {item.img}
              </a>
            ))}
          </div>
        </div>

        <div className="text-white lg:mt-20 mt-15 px-10 justify-center">
          <h4 className='lg:border-t-2 border-t-[#fefefe] opacity-50 pt-7 text-center'>© {currentYear} El-Neema Care Initiative. All rights reserved</h4>
        </div>
      </div>
    </div>
  );
}

export default Footer;
