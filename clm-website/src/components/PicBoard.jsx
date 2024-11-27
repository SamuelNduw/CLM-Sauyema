import React from 'react';
import EmblaCarousel from '../components/EmblaCarousel';

const PicBoard = () => {
    const OPTIONS = {loop: true}
    const SLIDE_COUNT = 5
    const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

  return (
    <div className='w-full flex justify-center'>
        <div className='sm:container flex justify-center items-center px-5'>
            <div className='w-full sm:w-4/5 overflow-hidden'>
                <EmblaCarousel slides={SLIDES} options={OPTIONS} />
            </div>
        </div>
    </div>
  )
}

export default PicBoard