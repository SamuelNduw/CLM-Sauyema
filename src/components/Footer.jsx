import React from 'react';
import ChurchLogo from '../assets/CLMchurchlogo.png';
import SamLogo from '../assets/SamuelLogo transparent.png';

const Footer = () => {
  return (
    <footer className='w-full'>
        <div className='w-full bg-[#00c2ff] flex flex-col items-center'>
            <div className='container flex flex-col items-center justify-center px-8 py-8 gap-5'>
              <h1 className='uppercase text-white text-[1.25rem]'>
                Christ's Love Ministies Sauyemwa
              </h1>
              <img src={ChurchLogo} 
              alt="Church Logo"
              className='w-24'
              />
              <div className='text-white'>
                <ul>
                  <li className='text-center'><span className='font-bold block text-center'>Address:</span>Plot 6100 Sauyemwa Ext.2 <br></br> Turning Opposite WB</li>
                </ul>
              </div>
            </div>
            {/* <div className='pt-8 italic text-white flex flex-col items-center'>
              <h1>Powered by</h1> 
              <a href="https://samuelnduw.netlify.app/">
                <img src={SamLogo} alt="Samuel Nduw Logo" className='w-16 bg-white rounded-full' />
              </a>
            </div>
            <div className='text-white text-center uppercase textShadow pb-4 pt-2'>
              Copyright &copy; 2024 CLM Sauyemwa
            </div> */}
        </div>
    </footer>
  )
}

export default Footer