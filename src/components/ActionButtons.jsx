import React from "react";

const ActionButtons = () => {
  return (
    <div className="mt-8 flex space-x-4">
      <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800">
        Add to Cart
      </button>
      <button className="bg-yellow-600 text-white px-6 py-3 rounded-lg hover:bg-yellow-500">
        Buy It Now
      </button>
    </div>
  );
};

export default ActionButtons;

