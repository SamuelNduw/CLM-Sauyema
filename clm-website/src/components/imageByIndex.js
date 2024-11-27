import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';
import image4 from '../assets/image4.jpg';
import image5 from '../assets/image5.jpg';

export const images = [image1, image2, image3, image4, image5];
const imageByIndex = (index) => images[index % images.length];
export default imageByIndex;