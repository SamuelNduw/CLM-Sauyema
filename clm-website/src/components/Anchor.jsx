import React from 'react';
import image2 from '../assets/image2.jpg';

const Anchor = () => {
  return (
    <div>
        <div className='w-full bg-[#e1f3f9] flex md:flex-row flex-col-reverse justify-center items-center md:items-start gap-8 md:gap-16 lg:gap-24 px-16 py-16 md:py-24'>
            <div 
            className='w-[275px] min-h-[175px] sm:w-[350px] sm:h-[250px] md:w-[500px] md:h-[300px] bg-cover bg-center rounded-md'
            style={{
              backgroundImage: `url(${image2})`,
            }}>
            </div>
            <div className=' text-[#2ea7e4] flex flex-col gap-5'>
                <h1 className='text-[2.5rem] md:text-[3rem] font-semibold'>2024 ANCHOR</h1>
                <h2>
                    “This is eternal life, that they may know you, <br></br>
                    the only true God, and Jesus Christ <br></br>
                    whom you have sent.” <br></br> 
                    - John 17:3
                </h2>
            </div>
        </div>
    </div>
  )
}

export default Anchor