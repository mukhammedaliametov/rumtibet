import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import Telegram from '../assets/telegram.svg';
import Winkin from '../assets/winkin.svg';
import Pinterest from '../assets/pinterest.svg';
import Skype from '../assets/skype.svg';

const Footer = () => {
  return (
    <div>
      <div className="bg-[#1A3E3E] py-[60px] text-white">
        <div className="max-w-[1220px] mx-auto px-[16px] xl:px-0 flex flex-col md:flex-row gap-[20px] justify-between items-start">
          <div className="w-full md:w-[480px] flex flex-col justify-between gap-[20px]">
            <div className="">
              <p className="text-[20px] font-bold mb-[20px]">Компания «РумТибет»</p>
              <p>
                Его корни уходят в один фрагмент классической латыни 45 года
                н.э., то есть более двух тысячелетий назад. Ричард МакКлинток,
                профессор латыни из колледжа Hampden-Sydney.
              </p>
            </div>
            <div>
              <div className="mb-[15px]">
                <a href="mailto: info@domain.com" className="underline mr-[10px]">info@domain.com</a>
                <a href="tel: +7 (123) 456-78-90" className="underline">+7 (123) 456-78-90</a>
              </div>
              <div className="flex items-center gap-[15px]">
                <a href="#"><img src={Telegram} alt="telegram" /></a>
                <a href="#"><img src={Winkin} alt="telegram" /></a>
                <a href="#"><img src={Pinterest} alt="telegram" /></a>
                <a href="#"><img src={Skype} alt="telegram" /></a>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[10px]">
            <p>Наши услуги</p>
            <a href="#" className="flex items-center gap-[10px]">
              <FaAngleRight /> Прогулки в горы летом
            </a>
            <a href="#" className="flex items-center gap-[10px]">
              <FaAngleRight /> Зимние походы в горы
            </a>
            <a href="#" className="flex items-center gap-[10px]">
              <FaAngleRight /> Посещение храмов в горах
            </a>
            <a href="#" className="flex items-center gap-[10px]">
              <FaAngleRight /> Экстремальные виды туризма
            </a>
            <a href="#" className="flex items-center gap-[10px]">
              <FaAngleRight /> Походы в джунглях Амазонии
            </a>
            <a href="#" className="flex items-center gap-[10px]">
              <FaAngleRight /> Поездка в Африку
            </a>
          </div>
          <div className="flex flex-col gap-[10px]">
            <p>Важно для путешествий</p>
            <a href="#" className="flex items-center gap-[10px]">
              <FaAngleRight /> Как собрать в долгий поход?
            </a>
            <a href="#" className="flex items-center gap-[10px]">
              <FaAngleRight /> Жизненно важные предметы для похода
            </a>
            <a href="#" className="flex items-center gap-[10px]">
              <FaAngleRight /> Медицинская страховка, гарантии безопасности
            </a>
            <a href="#" className="flex items-center gap-[10px]">
              <FaAngleRight /> Если вы врач - загляните сюда
            </a>
          </div>
        </div>
      </div>
      <div className="bg-[#18121E] text-white">
        <div className="max-w-[1220px] mx-auto px-[16px] flex items-center justify-between py-[18px]">
            <p>ИП Константинопольский К.К., 2023</p>
        <p className="hidden md:block">Политика обработки персональных данных</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
