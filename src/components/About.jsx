import React, { useEffect, useState } from "react";
import AboutImg from "../assets/about_image.png";
import Button from './Button';
import SectionTitle from "./SectionTitle";
import MobileAboutImg from '../assets/about_mobile_image.png';

const About = () => {
  return (
    <div className="max-w-[1220px] mx-auto px-[16px] xl:px-0 flex md:flex-row flex-col-reverse items-center justify-between gap-[30px] py-[60px]">
      <div className="cursor-pointer">
        <img src={AboutImg} alt="about_image" className="hidden md:block" />
        <img src={MobileAboutImg} alt="mobile_about_image" className="block md:hidden" />
      </div>
      <div className="w-full md:w-[540px]">
        <SectionTitle name='O нашем походе' title='Исследуйте все горные массивы мира вместе с нами' content='left' />
        <p className="mt-[15px] mb-[25px]">   
          Его корни уходят в один фрагмент классической латыни 45 года н.э., то
          есть более двух тысячелетий назад. Ричард МакКлинток, профессор латыни
          из колледжа Hampden-Sydney, штат Вирджиния, взял одно из самых
          странных слов в Lorem Ipsum, "consectetur"и занялся его поисками в
          классической латинской литературе.
        </p>
        <div className="flex justify-center md:justify-start"> 
            <Button name='Программа тура' />
        </div>
      </div>
    </div>
  );
};

export default About;
