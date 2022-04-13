
import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import car1 from '../assets/car1.png'
import car2 from '../assets/car2.png'
import car3 from '../assets/car3.png'


// const responsive = {
//   0: { items: 3 },
// };

const imgs = [
  car1,
  car2,
  car3,
  car2,
  car1,
  car2,
  car3,
]
const handleDragStart = (e) => e.preventDefault();

const items2 = imgs.map((value, index) => {
  const style = { width: 150 };
  return (<img src={value} style={style} onDragStart={handleDragStart} alt={index}></img>);
});

// const items = [
//   <img src={car1} onDragStart={handleDragStart} role="presentation" />,
//   <img src={car2} onDragStart={handleDragStart} role="presentation" />,
//   <img src={car3} onDragStart={handleDragStart} role="presentation" />,
//   <img src={car2} onDragStart={handleDragStart} role="presentation" />,
//   <img src={car1} onDragStart={handleDragStart} role="presentation" />,
//   <img src={car3} onDragStart={handleDragStart} role="presentation" />,
// ];

export const Gallery = () => {
  return (
    <AliceCarousel
      autoWidth={true}
      mouseTracking
      // responsive={responsive}
      // innerWidth={150}
      items={items2}
      controlsStrategy="alternate"
      disableButtonsControls={true}
      disableDotsControls={true}
      infinite={true}
    />
  );
}