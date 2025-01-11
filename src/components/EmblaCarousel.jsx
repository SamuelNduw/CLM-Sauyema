import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import imageByIndex from '../components/imageByIndex';

const EmblaCarousel = (props) => {
    const { slides, options } = props
    const [emblaRef] = useEmblaCarousel(options, [Autoplay()])

  return (
    <div className='embla'>
        <div className="embla--viewport" ref={emblaRef}>
            <div className="embla__container">
                {slides.map((index) =>(
                    <div className="embla__slide" key={index}>
                        <div className="embla__slide__number">
                            <span>{index + 1}</span>
                        </div>
                        <img src={imageByIndex(index)} 
                        alt="Church Image" 
                        className="embla__slide__img" 
                        />
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default EmblaCarousel