import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/thumbs"; 
import { Thumbs } from "swiper/modules";

const ProductImages = ({ images }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null); 

  return (
    <div>
   
      <Swiper
        modules={[Thumbs]}
        thumbs={{ swiper: thumbsSwiper }}
        loop={true} 
        className="main-slider"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img
              src={img}
              alt={`Image ${index + 1}`}
              className="w-full h-96 object-cover rounded"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        modules={[Thumbs]}
        onSwiper={setThumbsSwiper} 
        slidesPerView={4}
        spaceBetween={10}
        watchSlidesProgress
        loop={true} 
        className="thumb-slider mt-4"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index} className="cursor-pointer">
            <img
              src={img}
              alt={`Thumbnail ${index + 1}`}
              className="w-full h-20 object-cover rounded border"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductImages;






