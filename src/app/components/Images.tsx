import Image from "next/image";
import React from "react";
import car1 from "@/app/assets/images/car1.png";
import car2 from "@/app/assets/images/car2.png";
import car3 from "@/app/assets/images/car3.png";
import car4 from "@/app/assets/images/car4.png";
type Props = {
  url: string;
};

const Images = ({ url }: Props) => {
  const cars = [car1, car2, car3, car4];
  return (
    <div className="mx-auto">
      <div className="relative h-[300px] md:h-[500px]">
        <Image
          unoptimized
          src={url}
          alt="car detail"
          fill
          className="object-contain"
        />
      </div>
      <div className="grid grid-cols-2 gap-5">
        {cars.map((car, key) => (
          <Image key={key} src={car} alt="car" className="rounded-md" />
        ))}
      </div>
    </div>
  );
};

export default Images;
