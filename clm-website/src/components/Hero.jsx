import { useState, useEffect} from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom'
import image1 from '../assets/image1.webp';
import image2 from '../assets/image2.webp';
import image3 from '../assets/image3.webp';
import image4 from '../assets/image4.webp';
import image5 from '../assets/image5.webp';

const Hero = () => {
  const images = [image1, image5, image3, image4, image2];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // Trigger fade-out effect
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFade(true); // Trigger fade-in effect
      }, 150); // Match the fade-out duration
    }, 3300); // Total time between image changes

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Layer */}
      <div
        className={`absolute inset-0 transition-opacity duration-150 ${
          fade ? 'opacity-100' : ' opacity-85'
        }`}
        style={{
          backgroundImage: `url(${images[currentIndex]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: -1,
        }}
      ></div>

      {/* Hero Content */}
      <Navbar  color="white" />
      <div className="flex flex-col justify-center h-full sm:pt-20 md:pt-36 sm:pb-10 md:pb-24">
        <div className="w-2/3 ml-16 text-white">
          <div>
            <h1 className="md:text-[3.5rem] text-[2.5rem] font-bold textShadow">
              CHRIST'S LOVE <br /> MINISTRIES SAUYEMWA
            </h1>
          </div>
          <div>
            <h2 className="textShadow">
              Surely goodness and mercy shall follow me All the days of my life; <br />
              And I will dwell in the house of the LORD Forever.
              <span className="block text-[#00c2ff]">Psalm 23:6</span>
            </h2>
          </div>
        </div>

        <div className="w-2/3 ml-16 text-white py-10">
          <Link to="/about"
            href=""
            className="px-4 py-2 border border-white hover:bg-slate-500 text-lg font-semibold transition duration-300 ease-in-out"
          >
            ABOUT US
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;