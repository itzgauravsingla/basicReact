import { useEffect, useRef, useState } from 'react';

import './Carousel.css';
import data from './data.json';

const DATA_LENGTH = data.length;
function Carousel() {
  const [imgIndex, setImgIndex] = useState(0);
  const intervalId = useRef<null | number>(null);

  const handlePrev = () => {
    if (imgIndex === 0)
      setImgIndex(DATA_LENGTH - 1)
    else
      setImgIndex(imgIdx => imgIdx - 1)
  }

  const handleNext = () => {
    setImgIndex(prevIdx => {
      if (prevIdx === DATA_LENGTH - 1)
        return 0;
      return prevIdx + 1;
    })
  }

  useEffect(() => {
    intervalId.current = setInterval(handleNext, 1000);
    return () => {
      clearInterval(intervalId.current!);
    }
  }, [])

  return (
    <div className="container">
      <button onClick={handlePrev} className='carousel-btn'>{'<'}</button>
      <button onClick={handleNext} className='carousel-btn right-0'>{'>'}</button>
      <img onMouseEnter={() => clearInterval(intervalId.current!)}
        onMouseLeave={() => (intervalId.current = setInterval(handleNext, 2000))}
        src={data[imgIndex].download_url}
        alt={`Carousel Image ${imgIndex}`} />
    </div>
  )
}

export default Carousel;