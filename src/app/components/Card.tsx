import React from "react";
import { CarType } from "../utils/types";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import arrow from "@/app/assets/icons/arrow.svg";
import mile from "@/app/assets/icons/mile.svg";
import transmission from "@/app/assets/icons/transmission.svg";
import gas from "@/app/assets/icons/gas.svg";

type Props = {
  car: CarType;
};

const Card = ({ car }: Props) => {
  type InfoObject = {
    icon: StaticImageData;
    name: string;
  };
  const arr: InfoObject[] = [
    { name: car.mileage + "Miles", icon: mile },
    { name: car.fuelType, icon: gas },
    { name: car.transmission, icon: transmission },
  ];
  return (
    <div className="border shadow rounded hover:shadow-lg">
      <div className="relative h-[250px]">
        <Image
          unoptimized
          fill
          src={car.imageUrl}
          alt={car.make}
          className="object-contain"
        />
      </div>
      <div className="py-5 px-10 sm:px-5">
        <h2 className="text-2xl font-semibold">
          {car.make} {car.model}
        </h2>
        <hr className=" border-[#E9E9E9]  mt-2 mb-4" />
        <div className="flex justify-between">
          {arr.map((i, key) => (
            <div
              key={key}
              className="flex flex-col justify-center items-center gap-2"
            >
              <Image src={i.icon} alt={i.name} />
              <p className="font-normal">{i.name}</p>
            </div>
          ))}
        </div>
        <hr className=" border-[#E9E9E9]  mt-4 mb-2" />
        <div className="flex justify-between items-center text-2xl sm:text-xl">
          <p className="font-semibold">₺{car.price}</p>
          <div className="flex gap-1 items-center text-blue-500 hover:text-blue-800">
            <Link href={`/car/${car._id}`}>Detay</Link>
            <Image src={arrow} alt="sağ ok" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
