import React, { useEffect, useState } from "react";

const TestimonialCarousel = ({ visibleItems = 3, interval = 3000 }) => {
  const images = [
    "https://enarm-landing-resources.s3.us-east-1.amazonaws.com/testimonios/Picsart_24-09-27_12-38-57-905.jpg",
    "https://enarm-landing-resources.s3.us-east-1.amazonaws.com/testimonios/Picsart_24-09-27_12-40-58-466.jpg",
    "https://enarm-landing-resources.s3.us-east-1.amazonaws.com/testimonios/Picsart_24-09-27_12-41-54-411.jpg",
    "https://enarm-landing-resources.s3.us-east-1.amazonaws.com/testimonios/Picsart_24-09-30_11-15-58-740.jpg",
    "https://enarm-landing-resources.s3.us-east-1.amazonaws.com/testimonios/Picsart_24-09-30_11-48-22-064.jpg",
    "https://enarm-landing-resources.s3.us-east-1.amazonaws.com/testimonios/Picsart_24-09-30_11-49-36-068.jpg",
    "https://enarm-landing-resources.s3.us-east-1.amazonaws.com/testimonios/Picsart_24-10-03_11-31-42-790.jpg",
    "https://enarm-landing-resources.s3.us-east-1.amazonaws.com/testimonios/Picsart_24-10-03_11-34-43-160.jpg",
    "https://enarm-landing-resources.s3.us-east-1.amazonaws.com/testimonios/Picsart_24-10-03_11-44-29-498.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(slideInterval);
  }, [images.length, interval]);

  const getVisibleItems = () => {
    const startIndex = currentIndex;
    const endIndex = (currentIndex + visibleItems) % images.length;

    if (endIndex > startIndex) {
      return images.slice(startIndex, endIndex);
    } else {
      return [...images.slice(startIndex), ...images.slice(0, endIndex)];
    }
  };

  return (
    <div className="relative w-full overflow-hidden py-8">
      <div className="flex justify-center items-center">
        <button
          className="absolute left-0 z-30 flex items-center justify-center w-10 h-10 bg-gray-300 rounded-full shadow-md hover:bg-gray-400"
          onClick={() =>
            setCurrentIndex(
              (prevIndex) =>
                (prevIndex - visibleItems + images.length) % images.length
            )
          }
        >
          ◀
        </button>
        <div className="flex space-x-4 transition-transform ease-in-out duration-700">
          {getVisibleItems().map((src, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-64 h-64 bg-white rounded-lg shadow-lg"
            >
              <img
                src={src}
                alt={`Testimonial ${index + 1}`}
                className="object-cover w-full h-full rounded-lg"
              />
            </div>
          ))}
        </div>
        <button
          className="absolute right-0 z-30 flex items-center justify-center w-10 h-10 bg-gray-300 rounded-full shadow-md hover:bg-gray-400"
          onClick={() =>
            setCurrentIndex((prevIndex) => (prevIndex + visibleItems) % images.length)
          }
        >
          ▶
        </button>
      </div>

      <div className="flex justify-center mt-4 space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex
                ? "bg-gray-800"
                : "bg-gray-400 hover:bg-gray-600"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;
