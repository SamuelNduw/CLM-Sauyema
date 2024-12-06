import { React, useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import ChurchLogo from '../assets/CLMchurchlogo.png';
import { FaHome } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { BiSolidChurch } from "react-icons/bi";
import { FaInfoCircle } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';


const Navbar = () => {
    
  const [nav, setNav] = useState(true);
  const handleNav = () => {
    setNav(!nav)
    console.log("You have clicked the Menu button")
  }  

  return (
    <div className='font-workSans flex justify-between md:justify-around items-center h-20 max-w-[1240px] mx-auto px-4'>
        
        <div>
          <img src={ChurchLogo} alt="" className='w-14' />
        </div>
        <ul className='gap-5 text-white uppercase hidden md:flex bg-[#00c2ff] rounded-full py-2 px-0 custom-1'>
          <li className='cursor-pointer hover:bg-black hover:text-white transition duration-200 ease-in-out px-2 custom-1:px-4 py-2 rounded-full'>
            <NavLink to="/">
              Home
            </NavLink>
          </li>
          <li className='cursor-pointer hover:bg-black hover:text-white transition duration-200 ease-in-out px-2 custom-1:px-4 py-2 rounded-full'>
            Upcoming Events
          </li>
          <li className='cursor-pointer hover:bg-black hover:text-white transition duration-200 ease-in-out px-2 custom-1:px-4 py-2 rounded-full'>
            <NavLink to="/youth">
              Youth
            </NavLink>
          </li>
          <li className='cursor-pointer hover:bg-black hover:text-white transition duration-200 ease-in-out px-2 custom-1:px-4 py-2 rounded-full'>
            <NavLink to="/about">
              About
            </NavLink>
          </li>
          <li className='cursor-pointer hover:bg-black hover:text-white transition duration-200 ease-in-out px-2 custom-1:px-4 py-2 rounded-full'>
            <NavLink to="/find-us">
              Find Us
            </NavLink>
          </li>
        </ul>
        <div onClick={handleNav} className='block md:hidden'>
          {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20}/>}
        </div>
        <div className={!nav ? 'fixed z-20 left-0 top-0 w-[60%] h-full border-r border-r-gray-600 glass-effect translate-x-0 transition duration-300 ease-in-out block md:hidden' : 'fixed -translate-x-full transition duration-200 ease-in block md:hidden'}>
          <div className='ml-5 mt-5 text-white flex items-center gap-5'>
            <img src={ChurchLogo} alt="" className='w-14' />
            <div>
              <h1>CLM</h1>
              <h1>Sauyemwa</h1>
            </div>
          </div>
          <ul className='uppercase p-4 text-white'>
            <li className='p-4 border-b border-gray-600'>
              <NavLink to="/" className="flex items-center gap-3">
                <FaHome/>
                Home
              </NavLink>
            </li>
            <li className='p-4 border-b border-gray-600 flex items-center gap-3'>
              <FaCalendarAlt/>Upcoming Events
            </li>
            <li className='p-4 border-b border-gray-600'>
              <NavLink to="/youth" className="flex items-center gap-3">
                <BiSolidChurch/>Youth
              </NavLink>
            </li>
            <li className='p-4 border-b border-gray-600 '>
              <NavLink to="/about" className="flex items-center gap-3">
                <FaInfoCircle/>About
              </NavLink>
            </li>
            <li className='p-4 '>
              <NavLink to="/find-us" className="flex items-center gap-3">
                <FaLocationDot/>Find Us
              </NavLink>
            </li>
          </ul>
        </div>

    </div>
  )
}

export default Navbar