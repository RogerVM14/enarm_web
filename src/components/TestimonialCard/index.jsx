import React, { useEffect, useState } from "react";
import ui from "./index.module.css";

const TestimonialCard = () => {

  const [current, setCurrent] = useState(0);
  const [position, setPosition] = useState(0);
  const [dots] = useState([1, 1, 1])
  const [imageList] = useState(() => {
    const testimonials = getTestimonials(require.context("./Testimonials", false, /\.(png|jpe?g|svg)$/))
    return Object.entries(testimonials);
  });


  useEffect(() => {
    const TIMER_INTERVAL = 3000;
    const interval = setInterval(() => {
      if (current === imageList.length - 1) {
        setCurrent(0);
        setPosition(0);
        return;
      }
      setCurrent(current + 1);
      if (position === 2) {
        setPosition(0);
        return;
      }
      setPosition(position + 1);
    }, TIMER_INTERVAL);

    return () => clearInterval(interval);
  }, [current, position, imageList])


  return (
    <div id={ui.testimonialCard} className={ui.carrousel}>
      <div className={ui.carrouselContainer}>
        {
          imageList?.map((image, index) => {
            const isSelected = index === current;
            return (
              <div className={ui.imageContainer} key={index} data-selected={isSelected}>
                <img src={image[1]} alt="testimonial" />
              </div>
            )
          })
        }
      </div>
      <div className={ui.carrouselFooter}>
        <div className={ui.footerDots}>
          {
            dots?.map((item, index) => {
              const isSelected = index === position;
              return (
                <div className={ui.dot} data-selected={isSelected} key={index}></div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

const getTestimonials = (list) => {
  let images = {};
  list.keys().map(item => { return images[item.replace("./", "")] = list(item); });
  return images;
}


export default TestimonialCard