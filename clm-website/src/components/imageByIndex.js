import image1 from '../assets/youthImg5.webp';
import image2 from '../assets/youthImg6.webp';
import image3 from '../assets/youthImg7.webp';
import image4 from '../assets/youthImg8.webp';
import image5 from '../assets/youthImg4.webp';

export const images = [image1, image2, image3, image4, image5];
const imageByIndex = (index) => images[index % images.length];
export default imageByIndex;