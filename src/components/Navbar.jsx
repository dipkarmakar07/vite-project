import React, { useState } from "react";
import { Link as ScrollLink } from 'react-scroll';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bg from "./assets/bar2.png";
import logo from "./assets/cafelogo.png";
import cofebag from "./assets/cofebag.png";
import img48 from "./assets/hotcoffee.png";
import coldcoffee from "./assets/cold coffee.png";
import tea from "./assets/tea.png";

const Navbar = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 5000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <nav className="relative w-full h-screen">
    <section className="w-full h-20 md:flex items-center z-20 relative space-x-8 md:px-64 hidden">
      <div className="pl-4 md:pl-20 w-1/2 h-20">
        <img src={logo} alt="Logo" className="bg-cover h-20" />
      </div>
      <ul className="flex w-1/2 justify-end space-x-4 lg:space-x-16 font-bold text-white mr-24">
        
        <li>
          <ScrollLink to="imgGallery" smooth={true} duration={500}>Gallery</ScrollLink>
        </li>
        <li>
          <ScrollLink to="amenities" smooth={true} duration={500}>Amenities</ScrollLink>
        </li>
        <li>
          <ScrollLink className="flex gap-2" to="aboutUs" smooth={true} duration={500}>About <span>us</span></ScrollLink>
        </li>
        <li>
          <ScrollLink className="flex gap-2"  to="Footer" smooth={true} duration={500}>Contact <span>us</span></ScrollLink>
        </li>
        <li>
          <a href="#">
            <i className="fa-solid fa-cart-shopping"></i>
          </a>
        </li>
      </ul>
    </section>
    <section className="w-full h-20 sm:hidden flex items-center z-20 relative">
      <div className="pl-4 w-1/2 h-20">
        <img src={logo} alt="Logo" className="bg-cover h-20" />
      </div>
      <div className="text-white items-center w-1/2 text-4xl h-20 flex justify-end px-8">
        <p onClick={toggleSidebar} className={!sidebarVisible ? 'block' : 'hidden'}>
          <i className="fa-solid fa-bars"></i>
        </p>
        <p onClick={toggleSidebar} className={sidebarVisible ? 'block' : 'hidden'}>
          <i className="fa-solid fa-xmark"></i>
        </p>
      </div>
    </section>
    {sidebarVisible && (
      <div id="sidebar" className="sm:hidden w-full h-[48rem] absolute left-60 z-20">
        <div className="w-full h-full flex absolute left-6">
          <ul className="font-bold text-black space-y-12 flex flex-col h-2/5 justify-center items-center w-40 rounded-xl bg-gray-50 backdrop-blur-xl">
          <li>
          <ScrollLink to="imgGallery" smooth={true} duration={500}>Gallery</ScrollLink>
        </li>
        <li>
          <ScrollLink to="amenities" smooth={true} duration={500}>Amenities</ScrollLink>
        </li>
        <li>
          <ScrollLink to="aboutUs" smooth={true} duration={500}>About <span> </span>Us</ScrollLink>
        </li>
        <li>
          <ScrollLink to="Footer" smooth={true} duration={500}>Contact us</ScrollLink>
        </li>
          </ul>
        </div>
      </div>
    )}
      <div className="absolute inset-0 w-full h-full z-10">
        <img
          src={bg}
          alt="Background"
          className="w-full h-full object-cover bg-cover bg-no-repeat brightness-50 z-0"
        />
      </div>
      <div className="w-full h-full flex justify-between z-20 text-white relative">
        <div
          id="intro"
          className=" md:w-1/2 w-full h-4/5 flex justify-center items-center px-4"
        >
          <div className="shadow-md rounded-sm hover:translate-x-1">
            <h3 className="text-red-500">WELCOME</h3>
            <h1 className="text-2xl md:text-6xl font-bold">
              Start your day <br /> with a coffee
            </h1>
            <h3 className="text-red-500">ROASTED WITH LOVE</h3>
            <h4>
              Kickstart your day with our aromatic and freshly brewed coffee,
              <br /> made just for you.
            </h4>
            <button className="mt-4 font-bold py-2 px-4 rounded bg-transparent border">
              Order Now
            </button>
          </div>
        </div>

        <div className="w-1/2 h-4/5 md:flex hidden justify-center items-center mt-12">
          <div className="w-4/5 h-2/5">
            <Slider {...settings} className="flex">
              <div className="bg-white text-black p-4 rounded-lg shadow-lg hover:scale-110">
                <img
                  src={img48}
                  alt="Hot Coffee"
                  className="w-full h-48 lg:h-64 object-cover rounded-lg"
                />
                <h3 className="text-xl font-bold mt-4">Hot Coffee</h3>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <a
                  href="#hot-coffee"
                  className="text-red-500 font-bold mt-2 block"
                >
                  Find Out More
                </a>
              </div>
              <div className="bg-white text-black p-4 rounded-lg shadow-lg hover:scale-110">
                <img
                  src={coldcoffee}
                  alt="Cold Coffee"
                  className="w-full h-48 lg:h-64 object-cover rounded-lg"
                />
                <h3 className="text-xl font-bold mt-4">Cold Coffee</h3>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <a
                  href="#cold-coffee"
                  className="text-red-500 font-bold mt-2 block"
                >
                  Find Out More
                </a>
              </div>
              <div className="bg-white text-black p-4 rounded-lg shadow-lg hover:scale-110">
                <img
                  src={tea}
                  alt="Iced Tea"
                  className="w-full h-48 lg:h-64 object-cover rounded-lg"
                />
                <h3 className="text-xl font-bold mt-4">Iced Tea</h3>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <a href="#iced-tea" className="text-red-500 font-bold mt-2 block">
                  Find Out More
                </a>
              </div>
              <div className="bg-white text-black p-4 rounded-lg shadow-lg hover:scale-110">
                <img
                  src={cofebag}
                  alt="Coffee Bag"
                  className="w-full h-48 lg:h-64 object-cover rounded-lg"
                />
                <h3 className="text-xl font-bold mt-4">Coffee Bag</h3>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <a href="#coffee-bag" className="text-red-500 font-bold mt-2 block">
                  Find Out More
                </a>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
