import React from 'react';
import PaintImg from '../assets/paintbg2.webp';
import DiscipleshipImg from '../assets/discipleshipImg.webp';

const Discipleship = () => {
  return (
    <div className=''>
        <div className='w-full bg-cover bg-center px-10 py-12 md:py-24 flex flex-col md:flex-row items-center justify-around'
            style={{backgroundImage: `url(${PaintImg})`}}
        >

            <div className='hidden sm:block'>
                <img src={DiscipleshipImg} alt="" className='w-72 mdl:w-80 xl:w-[26rem] rounded-md shadow-lg shadow-gray-800'/>
            </div>
            <div className='text-white uppercase font-bold'>
                <h1 className='text-[2rem] sm:text-[3rem] text-[#03BEF9] textShadowDark'>Love Faith Hope</h1>
                <h1 className='text-[2rem] sm:text-[4rem] textShadow'>Discipleship</h1>
                <h1 className='text-[2rem] sm:text-[3rem] text-[#03BEF9] textShadowDark'>Togetherness</h1>
            </div>

        </div>
    </div> 
  )
}

export default Discipleship