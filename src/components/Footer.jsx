import React, { useState, useEffect } from 'react';
import { Typography } from "@material-tailwind/react";

const LINKS = [
  {
    title: "Explore",
    items: ["Menu", "Reservations", "About Us", "Contact"],
  },
  {
    title: "Follow Us",
    items: ["Facebook", "Instagram", "Twitter", "LinkedIn"],
  },
];

const currentYear = new Date().getFullYear();

const Footer = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating delay for demonstration purposes
    const timeout = setTimeout(() => {
      setLoading(false);
    },); // Adjust delay time as needed or remove for real-world usage

    return () => clearTimeout(timeout);
  }, []);

  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left section */}
          <div className="space-y-4">
            <Typography variant="h5">Restaurant Name</Typography>
            <div>
              <Typography variant="subtitle1" color="gray">Location</Typography>
              <div className="flex items-center space-x-2">
                {/* Location Icon */}
                <i className={`fas fa-map-marker-alt ${loading ? 'loading-placeholder' : ''} text-gray-400`}></i>
                <Typography variant="body" className={`text-gray-300 ${loading ? 'invisible' : ''}`}>123 Restaurant St, City, Country</Typography>
              </div>
            </div>
            <div>
              <Typography variant="subtitle1" color="gray">Contact</Typography>
              <div className="flex items-center space-x-2">
                {/* Email Icon */}
                <i className={`fas fa-envelope ${loading ? 'loading-placeholder' : ''} text-gray-400`}></i>
                <Typography variant="body" className={`text-gray-300 ${loading ? 'invisible' : ''}`}>info@restaurant.com</Typography>
              </div>
              <div className="flex items-center space-x-2">
                {/* Phone Icon */}
                <i className={`fas fa-phone ${loading ? 'loading-placeholder' : ''} text-gray-400`}></i>
                <Typography variant="body" className={`text-gray-300 ${loading ? 'invisible' : ''}`}>+1 (123) 456-7890</Typography>
              </div>
            </div>
            {LINKS.map(({ title, items }, index) => (
              <div key={index}>
                <Typography variant="subtitle1" color="gray">{title}</Typography>
                <ul className="space-y-2">
                  {items.map((item, idx) => (
                    <li key={idx}>
                      <Typography as="a" href="#" className={`hover:text-gray-300 ${loading ? 'invisible' : ''}`}>{item}</Typography>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          {/* Right section */}
          <div className="flex flex-col items-center md:items-end space-y-4">
            <div className="flex space-x-4">
              {/* Social media icons */}
              <i className={`fab fa-facebook fa-2x ${loading ? 'loading-placeholder' : ''} text-blue-500 hover:text-blue-700 cursor-pointer`}></i>
              <i className={`fab fa-instagram fa-2x ${loading ? 'loading-placeholder' : ''} text-pink-500 hover:text-pink-700 cursor-pointer`}></i>
              <i className={`fab fa-twitter fa-2x ${loading ? 'loading-placeholder' : ''} text-blue-400 hover:text-blue-600 cursor-pointer`}></i>
            </div>
            {/* Copyright text */}
            <Typography variant="caption">&copy; {currentYear} Restaurant Name. All Rights Reserved.</Typography>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
