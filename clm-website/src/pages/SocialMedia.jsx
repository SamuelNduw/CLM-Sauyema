import React from "react";
import InstagramEmbed from "../components/InstagramEmbed";

const SocialMedia = () => {
  return (
    <>
        <div className="container mx-auto pt-16 pb-5 md:pt-14 md:pb-14 flex flex-col gap-5 items-center text-center w-4/5 md:w-2/3">
          <h1 className="font-semibold uppercase text-[2.5rem] md:text-[3rem]">
            Connect with Us
          </h1>
          <h2>
            Follow us on Instagram to connect with us
          </h2>
        </div>
        <div className="grid grid-cols-1  gap-0 p-4 justify-items-center">
            <InstagramEmbed/>
            {/* <InstagramEmbed/>
            <InstagramEmbed/> */}
        </div>
    </>
  );
};

export default SocialMedia;
