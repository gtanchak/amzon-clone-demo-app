import { StarIcon } from "@heroicons/react/solid";
import Image from "next/image";
import React from "react";
import Currency from "react-currency-formatter";
import useProduct from "./useProduct";

const Product = ({ id, title, price, description, category, image }) => {
  const { rating, hasPrime } = useProduct();

  return (
    <div className="relative flex flex-col m-5 bg-white z-30 p-10">
      <p className="absolute top-2 right-2  text-xs italic text-gray-400">
        {category}
      </p>
      <Image
        src={image}
        height={200}
        width={200}
        style={{ objectFit: "contain" }}
      />
      <h4 className="my-3">{title}</h4>
      <div className="flex">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <StarIcon className="h-5 text-yellow-500" />
          ))}
      </div>
      <p className="text-xs my-2 line-clamp-2">{description}</p>
      <div>
        <Currency quantity={price} currency="GBP" />
      </div>
      {hasPrime && (
        <div>
          <img src="/prime-tag.png" alt="prime tag" />
          <p>FREE Next-day Delivery</p>
        </div>
      )}
      <button>Add to Basket</button>
    </div>
  );
};

export default Product;
