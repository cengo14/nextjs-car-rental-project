import React from "react";
import { CarType } from "../utils/types";
import Image from "next/image";
import pp from "@/app/assets/images/pp.png";
import tel from "@/app/assets/icons/tel.svg";
import loc from "@/app/assets/icons/loc.svg";
import Button from "./Button";
type Props = {
  car: CarType;
};

const OrderBox = ({ car }: Props) => {
  return (
    <div className="border shadow rounded-md p-5 max-xl:mt-10 w-full xl:col-span-2">
      <div className="flex items-center mt-2 gap-5">
        <Image src={pp} alt="Profile" />
        <div className="text-xl">
          <h2 className="font-semibold">Aydemir Gallery</h2>
          <p>Bolu, Dörtdivan</p>
        </div>
      </div>
      <div className="flex justify-between my-5">
        <div className="flex gap-1 items-center cursor-pointer">
          <Image src={loc} alt="konum" />
          <p>Konumu gör</p>
        </div>
        <div className="flex gap-1 items-center cursor-pointer">
          <Image src={tel} alt="telefon" />
          <p>+90555 666 77 88</p>
        </div>
      </div>
      <Button car={car} />
      <button className="bg-green-500 w-full text-center p-2 rounded-lg text-white font-bold transition hover:bg-green-600 mt-5">
        Whatsapp
      </button>
    </div>
  );
};

export default OrderBox;
