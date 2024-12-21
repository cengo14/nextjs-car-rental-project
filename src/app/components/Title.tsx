import React from "react";
import { CarType } from "@/app/utils/types";
import year from "@/app/assets/icons/year.svg";
import mile from "@/app/assets/icons/mile.svg";
import gas from "@/app/assets/icons/gas.svg";
import transmission from "@/app/assets/icons/transmission.svg";
import Image from "next/image";

type Props = {
  car: CarType;
};

const Title = ({ car }: Props) => {
  const arr = [
    {
      icon: year,
      name: car.year,
    },
    {
      icon: mile,
      name: car.mileage,
    },
    {
      icon: transmission,
      name: car.transmission,
    },
    {
      icon: gas,
      name: car.fuelType,
    },
  ];
  return (
    <div className="mt-10">
      <div className="flex justify-between items-center">
        <h1 className="font-semibold text-3xl md:text-4xl">
          {car.make + " " + car.model}
        </h1>

        <div className="font-semibold text-3xl md:Text-4xl">
          ₺{car.price.toLocaleString()}
        </div>
      </div>
      <div className="flex gap-5 mt-5">
        {arr.map((i, key) => (
          <div
            key={key}
            className="py-1 px-3 rounded-full bg-blue-500/30 flex gap-1 items-center md:mb-5"
          >
            <Image src={i.icon} alt={i.icon} />
            <span>{i.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Title;
