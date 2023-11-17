import React, { useState, useEffect } from 'react';

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "https://logan.nnnow.com/content/dam/nnnow-project/03-nov-2023/04NOV23-SephoraDiwali-TopBanner-Desktop-1125x500px.jpg",
    "https://logan.nnnow.com/content/dam/nnnow-project/03-nov-2023/Nars_LightRef1125X500.jpg",
    "https://logan.nnnow.com/content/dam/nnnow-project/29-sep-2023/SCSummerlaunch_TopBanner_Desktop_1125x500(1).jpg",
    "https://logan.nnnow.com/content/dam/nnnow-project/29-sep-2023/SCSummerlaunch_TopBanner_Desktop_1125x500(1).jpg",
    "https://logan.nnnow.com/content/dam/nnnow-project/17-oct-2023/Benefit_SephoraEtail_Homepage_Desktop_1125x500.jpg",
    "https://logan.nnnow.com/content/dam/nnnow-project/08-nov-2023/Lancom_TopBanner_Desktop_1125x500.jpg"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // 2000ms = 2 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className='container'>
    <div className="slider-container">
      <div className="slider" style={{ transform: `translateX(-${currentIndex * 100}%) `}}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            style={{
              transform:` translateX(${index}%)`,
              transition: 'transform 1s ease-in-out',
            }}
          />
        ))}
      </div>
    </div>
    </div>
  );
};

export default ImageSlider;