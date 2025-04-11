import React from "react";

const EventCard = ({image, day, month, time}) => {
  return (
    <div className="flex flex-col sm:flex-row border-l-4 border-[#00c2ff] ">
        <img src={image} alt="" className="w-72 lg:w-[23rem] md:w-[22rem]"/>
        <div className="w-auto sm:w-48 py-4 sm-py-0  flex flex-col place-items-center justify-center shadow-lg shadow-[#0000003b]">
            <h1 className="text-6xl uppercase font-bold text-gray-600">{day}</h1>
            <h1 className="text-5xl uppercase font-bold text-gray-600">{month}</h1>
            <h1 className="text-4xl uppercase font-bold text-gray-600">{time}</h1>
        </div>
    </div>
  );
};

export default EventCard;
