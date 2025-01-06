import React, { useState } from "react";
import ProductImages from "./ProductImages";
import ProductInfo from "./ProductInfo";
import CountdownTimer from "./CountdownTimer";
import ActionButtons from "./ActionButtons";

const productOptions = {
  "1L": {
    name: "Premium Almond (Wood-Pressed) Oil - 1L",
    price: 500,
    images: [
    //   "/assets/1L/main.jpg",
    //   "/assets/1L/thumb1.jpg",
    //   "/assets/1L/thumb2.jpg",
    //   "/assets/1L/thumb3.jpg",
    //   "/assets/1L/thumb4.jpg",
   "https://images.unsplash.com/photo-1697115355157-c95fbd5250fd?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
   "https://images.unsplash.com/photo-1697115355219-310cbdde03f3?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
   "https://images.unsplash.com/photo-1697115355190-c0048a1f1c17?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
   "https://images.unsplash.com/photo-1697115355152-e0a3a380f387?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
   "https://images.unsplash.com/photo-1697115355150-46dd3a5df633?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

    ],
    description:
      "Indulge in the luxurious goodness of Orovita Wood-Pressed Almond Oil, crafted through traditional wood-pressing techniques to preserve its natural richness. Known for its myriad health benefits.",
  },
  "5L": {
    name: "Premium Almond (Wood-Pressed) Oil - 5L",
    price: 2400,
    images: [
    //   "/assets/5L/main.jpg",
    //   "/assets/5L/thumb1.jpg",
    //   "/assets/5L/thumb2.jpg",
    //   "/assets/5L/thumb3.jpg",
    //   "/assets/5L/thumb4.jpg",
   "https://images.unsplash.com/photo-1695634580282-4aeca01aeb57?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
   "https://images.unsplash.com/photo-1695634580569-e4b2823d750b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
   "https://images.unsplash.com/photo-1695634580461-e0c36a2df4f0?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
   "https://images.unsplash.com/photo-1695634580700-a840538b17ce?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
   "https://images.unsplash.com/photo-1695634580398-96b54cd51179?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",



    ],
    description:
      "Orovita's Wood-Pressed Almond Oil in 5L packaging offers extended use for families and culinary needs, packed with the same richness and health benefits.",
  },
};

const ProductDetails = () => {
  const [selectedOption, setSelectedOption] = useState("1L");
  const [mainImage, setMainImage] = useState(
    productOptions["1L"].images[0]
  );

  const handleOptionChange = (option) => {
    setSelectedOption(option);
    setMainImage(productOptions[option].images[0]);
  };

  return (
    <div className="container mx-auto p-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Left: Images */}
      <ProductImages
        images={productOptions[selectedOption].images}
        mainImage={mainImage}
        setMainImage={setMainImage}
      />

      {/* Right: Product Info */}
      <div>
        <ProductInfo
          product={productOptions[selectedOption]}
          selectedOption={selectedOption}
          onOptionChange={handleOptionChange}
        />
        <CountdownTimer initialTime={86400} />
        <ActionButtons />
      </div>
    </div>
  );
};

export default ProductDetails;
