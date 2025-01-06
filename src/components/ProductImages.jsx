import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/thumbs"; 
import { Thumbs } from "swiper/modules";

const ProductImages = ({ images }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null); // Reference for the thumbnail Swiper

  return (
    <div>
      {/* Main Image Slider without Navigation and Pagination */}
      <Swiper
        modules={[Thumbs]}
        thumbs={{ swiper: thumbsSwiper }}
        loop={true} // Enables infinite looping
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

      {/* Thumbnail Slider without Navigation */}
      <Swiper
        modules={[Thumbs]}
        onSwiper={setThumbsSwiper} // Bind the thumbnail Swiper
        slidesPerView={4}
        spaceBetween={10}
        watchSlidesProgress
        loop={true} // Enables infinite looping for thumbnails
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






