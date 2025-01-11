import React from 'react';
import ChurchLogo from '../assets/CLMchurchlogo.png';

const Footer = () => {
  return (
    <footer className='w-full'>
        <div className='w-full bg-[#00c2ff] flex flex-col items-center'>
            <div className='container flex flex-col items-center justify-center px-8 py-8 gap-5'>
              <h1 className='uppercase text-white text-[1.25rem]'>
                Christ's Love Ministries Sauyemwa
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
        </div>
    </footer>
  )
}

export default Footer