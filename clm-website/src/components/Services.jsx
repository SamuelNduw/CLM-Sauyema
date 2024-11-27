import React from 'react';
import Service1 from '../assets/serviceImg1.webp';
import Service2 from '../assets/serviceImg2.jpg';
import Service3 from '../assets/serviceImg3.webp';
import Service4 from '../assets/serviceImg4.webp';
import ServiceCard from './ServiceCard';


const Services = () => {
  return (
    <div className='flex justify-center'>
        <div className='container py-16 md:py-14 flex flex-col '>
            <div className='text-center pb-10'>
                <h1 className='text-[2.5rem] md:text-[3rem] font-semibold uppercase'>Services</h1>
            </div>
            <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-20 place-items-center'>
                <ServiceCard image={Service1} cardText={<>Sunday <br></br>Celebration <br></br> Service</>} cardTime={'09h00'} />
                <ServiceCard image={Service2} cardText={<>Wednesday <br></br> Bible Study </>} cardTime={'18h00'}  />
                <ServiceCard image={Service3} cardText={<>Friday <br></br> Prayer <br></br> Meeting</>} cardTime={'18h00'} />
                <ServiceCard image={Service4} cardText={<>Night Vigil<br></br> Every last<br></br> Friday of<br></br> the month</>} />
               
            </div>
            <div className='text-center pt-10'>
                <h1>God bless you as you continue to fellowship with us!</h1>
            </div>
        </div>
    </div>
  )
}

export default Services