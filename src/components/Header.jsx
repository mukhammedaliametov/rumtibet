import React, { useEffect, useState } from "react";
import Logo from "../assets/logo.svg";
import Button from "./Button";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { FaAngleRight } from "react-icons/fa6";

const Header = () => {
  const [nav, setNav] = useState();
  const [isScrolled, setIsScrolled] = useState(false);
  const handleClick = () => setNav(!nav);
    useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const navItems = [
    { name: "Главная", link: "#" },
    { name: "Про гида", link: "#" },
    { name: "Программа тура", link: "#" },
    { name: "Стоимость", link: "#" },
    { name: "Блог", link: "#" },
    { name: "Контакты", link: "#" },
  ];
  return (
    <div className={`fixed w-full z-999 ${isScrolled ? 'bg-[#0000003a] backdrop-blur-[6px]' : 'bg-transparent'}`}>
      <div className="max-w-[1220px] mx-auto px-[16px] xl:px-0 flex items-center justify-between py-[10px] md:py-0">
        <a href="/">
          <img src={Logo} alt="logo" className="w-[90px] md:w-[137px]" />
        </a>
        <nav className="hidden md:flex items-center gap-[15px] md:gap-[30px]">
          {navItems.map((item, index) => {
            return (
              <a
                key={index}
                href={item.link}
                className="text-white hover:opacity-80"
              >
                {item.name}
              </a>
            );
          })}
          <div className="hidden lg:block">
            <Button name="Консультация" />
          </div>
        </nav>
        <div
          className="block md:hidden text-[25px] text-white"
          onClick={handleClick}
        >
          <HiOutlineMenuAlt3 />
        </div>
      </div>
      <nav className={`fixed top-0 w-full px-[16px] bg-[#1A3E3E] h-screen text-white duration-500 ${nav ? 'left-0' : 'left-[-100%]'}`}>
        <IoClose onClick={handleClick} className="absolute right-0 m-[20px] text-white text-[25px]" />
        <div className="mt-[70px] flex flex-col gap-[20px] text-[18px]">
          {navItems.map((item, index) => {
            return (
              <div key={index} className="flex items-center gap-[8px]">
                <FaAngleRight />
                <a
                  key={index}
                  href={item.link}
                  className="text-white hover:opacity-80"
                >
                  {item.name}
                </a>
              </div>
            );
          })}
        </div>
      </nav>
    </div>
  );
};

export default Header;
