import React from "react";
import EventCard from "./EventCard"
import Ester from "../assets/Ester.jpg"
import MenMeeting from "../assets/Mens_Meeting.jpg";

const UpcomingEvents = () => {
  return (
    <div className="flex justify-center">
        <div className="w-full py-16 md:py-14 flex flex-col place-items-center">
            <div className="text-center pb-10">
                <h1 className="font-semibold uppercase text-[2.5rem] md:text-[3rem]">
                    Upcoming Events
                </h1>
            </div>
            <div className="container grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-5 justify-items-center">
                <EventCard image = {MenMeeting} day={"12"} month={"April"} time={"14H30"}/>
                <EventCard image = {Ester} day={"18-20"} month={"April"}/>
            </div>
        </div>
    </div>
  );
};

export default UpcomingEvents;
