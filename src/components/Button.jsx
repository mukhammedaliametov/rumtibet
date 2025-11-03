import React from 'react';

const Button = (props) => {
    return (
        <button className='bg-[#1A3E3E] text-white py-[12px] px-[24px] rounded-[5px] cursor-pointer hover:opacity-80'>
            {props.name}
        </button>
    );
};

export default Button;