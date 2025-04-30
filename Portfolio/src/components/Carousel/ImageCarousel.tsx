// import { useEffect, useState } from 'react';

// interface ImageCarouselProps {
//   images: string[];
//   autoPlayInterval?: number;
// }

// export const ImageCarousel = ({
//   images,
//   autoPlayInterval,
// }: ImageCarouselProps) => {
//   const [current, setCurrent] = useState(0);
//   const length = images.length;

//   const nextSlide = () => setCurrent((i) => (i === length - 1 ? 0 : i + 1));
//   const prevSlide = () => setCurrent((i) => (i === 0 ? length - 1 : i - 1));

//   useEffect(() => {}, []);
//   return <>carousel</>;
// };
