// src/components/ProductInfo.js

import React from "react";

const ProductInfo = ({ product, selectedOption, onOptionChange }) => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-black">{product.name}</h1>
      <p className="text-red-600 text-lg font-semibold mt-2">₹{product.price}</p>
      <p className="text-gray-500 mt-1">12 sold in last 9 hours</p>
      <p className="text-gray-700 mt-4">{product.description}</p>

      {/* Options: 1L or 5L */}
      <div className="mt-6">
        <p className="font-bold text-gray-700 mb-2">Choose Size:</p>
        <div className="flex items-center space-x-4">
          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="radio"
              name="size"
              value="1L"
              checked={selectedOption === "1L"}
              onChange={() => onOptionChange("1L")}
              className="form-radio"
            />
            <span>1L</span>
          </label>
          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="radio"
              name="size"
              value="5L"
              checked={selectedOption === "5L"}
              onChange={() => onOptionChange("5L")}
              className="form-radio"
            />
            <span>5L</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
