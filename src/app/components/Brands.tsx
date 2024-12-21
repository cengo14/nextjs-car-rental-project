import React from "react";
import { brands } from "../utils/constant";
import Image from "next/image";

const Brands = () => {
  return (
    <div className="container ">
      <h1 className="text-2xl md:text-3xl font-bold text-black">
        Premium Markalarımızı Keşfedin
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 mt-5">
        {brands.map((brand, i) => (
          <div
            className="bg-white shadow rounded-lg flex flex-col items-center text-black p-3 cursor-pointer transition hover:shadow-lg "
            key={i}
          >
            <Image src={brand.icon} alt={brand.name} width={70} height={70} />
            <h4 className="text-base">{brand.name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brands;
