import React from "react";
import SectionTitle from "./SectionTitle";
import Services1 from "../assets/services1.png";
import Services2 from "../assets/services2.png";
import Services3 from "../assets/services3.png";
import { FaStar } from "react-icons/fa";
import Button from "./Button";

const Services = () => {
  const servicesItems = [
    {
      name: "Озеро возле гор",
      desc: "романтическое приключение",
      price: "480 $",
      rating: "4.9",
      img: Services1,
    },
    {
      name: "Ночь в горах",
      desc: "в компании друзей",
      price: "500 $",
      rating: "4.5",
      img: Services2,
    },
    {
      name: "Йога в горах",
      desc: "для тех, кто забоится о себе",
      price: "230 $",
      rating: "5.0",
      img: Services3,
    },
  ];
  return (
    <div className="max-w-[1220px] mx-auto px-[16px] xl:px-0 py-[50px]">
      <SectionTitle
        name="по версии отдыхающих"
        title="Популярные направления"
        content="center"
      />
      <div className="grid grid-cols-3 overflow-x-scroll xl:overflow-x-visible gap-[320px] md:gap-[40px] w-full mt-[20px]">
        {servicesItems.map((item, index) => (
          <div key={index} className="relative flex-shrink-0 w-[300px] md:w-[380px] rounded-[32px] overflow-hidden">
            <img src={item.img} alt="img" className="w-full" />
            <div className="absolute bottom-0 flex h-[80px] bg-[#FFFFFF33] backdrop-blur-[6px] items-center justify-between px-[30px] w-full">
              <div className="text-white">
                <h3 className="text-[18px] md:text-[24px] mb-[-8px]">{item.name}</h3>
                <p className="text-[14px]">{item.desc}</p>
              </div>
              <p className="bg-[#FFFFFF4D] text-[14px] md:text-[18px] text-white py-[6px] px-[14px] rounded-[5px]">{item.price}</p>
            </div>
            <span className="absolute top-[50px] bg-[#FDFDFD66] backdrop-blur-[4px] py-[8px] px-[15px] rounded-tl-[4px] rounded-bl-[4px] right-0 flex items-center gap-[10px]">
              <FaStar className="text-yellow-300" /> {item.rating}
            </span>
          </div>
        ))}
      </div>
      <div className="text-center mt-[30px]">
        <Button name='Рейтинг направлений' />
      </div>
    </div>
  );
};

export default Services;
