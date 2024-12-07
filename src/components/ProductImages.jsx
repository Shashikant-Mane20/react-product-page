import React from "react";

const ProductImages = ({ images, mainImage, setMainImage }) => {
  return (
    <div>
      {/* Main Image */}
      <div className="border rounded-lg">
        <img
          src={mainImage}
          alt="Main"
          className="w-full h-96 object-cover rounded"
        />
      </div>

      {/* Thumbnails */}
      <div className="flex mt-4 gap-2">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Thumbnail ${index + 1}`}
            className="w-20 h-20 object-cover cursor-pointer border rounded hover:border-black"
            onClick={() => setMainImage(img)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
