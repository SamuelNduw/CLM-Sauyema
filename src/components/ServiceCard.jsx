import React from 'react'

const ServiceCard = ({image, cardText, cardTime}) => {
  return (
    <div>
        <div className='w-72 xs:w-80 h-48 bg-gray-100 flex border-l-4 border-[#00c2ff] shadow-md'>
            <div
            className='w-3/5 h-full bg-cover bg-right'
            style={{backgroundImage: `url(${image})`}}
            ></div>
            <div className='pl-2 pt-5'>
                <h1 className='uppercase'>
                    {cardText}
                    <span className='block font-semibold'>{cardTime}</span>
                </h1>
            </div>
        </div>
    </div>
  )
}

export default ServiceCard