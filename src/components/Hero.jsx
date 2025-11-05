import React from "react";
import { FaAngleDown } from "react-icons/fa6";
import { HiOutlineCalendarDateRange } from "react-icons/hi2";
import background from "../assets/background.png";

const Hero = () => {
  return (
    <div
      style={{ background: `url(${background})` }}
      className="w-full h-screen bg-center bg-no-repeat bg-cover flex justify-end items-end"
    >
      <div className="w-full md:max-w-[1220px] mx-auto px-[16px] xl:px-0 text-white">
        <div className="mb-[30px]">
          <h1 className="text-[25px]/[30px] md:text-[50px]/[57px] tracking-[1.5px] font-bold mb-[15px] w-full lg:w-[920px]">
            Насладись прогулкой в горах с командой единомышленников
          </h1>
          <div className="inline-block">
            <button className="block md:hidden w-full bg-white text-[#1A3E3E] font-semibold h-full rounded-[10px] py-[10px] px-[25px] hover:text-white hover:bg-[#1A3E3E] cursor-pointer">Найти программу</button>
          </div>
          <div className="hidden md:flex items-center backdrop-blur-[6px] bg-[#FFFFFF33] rounded-[10px] h-[121px] px-[40px]">
            <div className="flex items-start w-full justify-between gap-[40px] ">
              <div className="w-full">
                <div className="flex items-center border border-white rounded-[10px] py-[10px] px-[24px] justify-between w-full mb-[3px] cursor-pointer">
                  <p>Локация для тура</p>
                  <FaAngleDown />
                </div>
                <span className="text-[14px] font-[400] tracking-[.8px]">
                  выберите из списка
                </span>
              </div>
              <div className="w-full">
                <div className="flex items-center border border-white rounded-[10px] py-[10px] px-[24px] justify-between w-full mb-[3px] cursor-pointer">
                  <p>Дата похода</p>
                  <HiOutlineCalendarDateRange />
                </div>
                <span className="text-[14px] font-[400] tracking-[.8px]">
                  укажите диапазон
                </span>
              </div>
              <div className="hidden lg:block w-full">
                <div className="flex items-center border border-white rounded-[10px] py-[10px] px-[24px] justify-between w-full mb-[3px] cursor-pointer">
                  <p>Участники </p>
                  <FaAngleDown />
                </div>
                <span className="text-[14px] font-[400] tracking-[.8px]">
                  минимум 4 человека
                </span>
              </div>
              <button className="w-full bg-white text-[#1A3E3E] font-semibold h-full rounded-[10px] py-[10px] hover:text-white hover:bg-[#1A3E3E] cursor-pointer">Найти программу</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
