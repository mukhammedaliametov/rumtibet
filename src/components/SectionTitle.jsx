import React from "react";

const SectionTitle = (props) => {
  return (
    <div className={`text-${props.content}`}>
      <p className={`text-[#F2BE22] text-[16px] md:text-[20px] mb-[3px]`}>
        {props.name}
      </p>
      <h2 className="text-[20px]/[26px] md:text-[32px]/[37px] pb-[10px] font-bold">{props.title}</h2>
    </div>
  );
};

export default SectionTitle;
