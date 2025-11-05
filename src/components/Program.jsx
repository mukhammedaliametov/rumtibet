import React from "react";
import Program1 from '../assets/program1.svg';
import Program2 from '../assets/program2.svg';
import Program3 from '../assets/program3.svg';
import SectionTitle from "./SectionTitle";
import ProgramImg from '../assets/program_image.png';
import Button from "./Button";

const Program = () => {
    const program = [
        {
            title: 'Опытный гид',
            bio: 'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.',
            img: Program1
        },
        {
            title: 'Безопасный поход',
            bio: 'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.',
            img: Program2
        },
        {
            title: 'Лояльные цены',
            bio: 'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.',
            img: Program3
        },
    ]
  return (
    <div className="bg-[#F3F5F4] py-[50px] md:py-[80px] px-[16px] lg:px-0">
      <div className="max-w-[1220px] mx-auto flex items-center justify-between gap-[20px] md:gap-[90px]">
        <div className="w-full md:w-[580px]">
          <SectionTitle
            name="наше предложение"
            title="Лучшие программы для тебя"
            content="left"
          />
          <p className="mt-[0px] md:mt-[42px]">
            Его корни уходят в один фрагмент классической латыни 45 года н.э.,
            то есть более двух тысячелетий назад. Ричард МакКлинток, профессор
            латыни из колледжа.
          </p>
          <div className="flex flex-col gap-[30px] my-[30px]">
            {program.map((itm, idx) => (
                <div key={idx} className="flex items-start gap-[20px]">
                    <img src={itm.img} alt="img" className="w-[50px] h-[50px]" />
                    <div>
                        <p className="font-[700] text-[16px] md:text-[18px]">{itm.title}</p>
                        <p className="text-[12px] md:text-[14px]">{itm.bio}</p>
                    </div>
                </div>
            ))}
          </div>
          <div className="flex justify-center md:justify-start">
            <Button name='Стоимость программ' />
          </div>
        </div>
        <img src={ProgramImg} alt="program_image" className="hidden lg:block" />
      </div>
    </div>
  );
};

export default Program;
