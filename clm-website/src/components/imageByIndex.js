import image1 from '../assets/image1.webp';
import image2 from '../assets/image2.webp';
import image3 from '../assets/image3.webp';
import image4 from '../assets/image4.webp';
import image5 from '../assets/image5.webp';

export const images = [image1, image2, image3, image4, image5];
const imageByIndex = (index) => images[index % images.length];
export default imageByIndex;