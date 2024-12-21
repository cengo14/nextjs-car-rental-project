import React from "react";
import { models } from "../utils/constant";
import Image from "next/image";
import bgHero from "@/app/assets/bg.jpg";

const Hero = () => {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(#00000084, #00000084), url(${bgHero.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className={`h-[80vh] w-full grid place-items-center p-5`}
    >
      <div className="text-center flex flex-col gap-8 text-white">
        <p>Yakınındaki kiralık araçları keşfet</p>
        <h1 className="text-4xl md:text-5xl font-bold">
          Kendin İçin Mükemmel Aracı Bul
        </h1>
        <p>Kendine uygun modeli belirle</p>
        <div className="flex gap-4 justify-center flex-wrap">
          {models.map((model, i) => (
            <button
              className="flex  gap-1 items-center px-3 py-1 rounded-full bg-gray-100/25 transition hover:bg-gray-100/15"
              key={i}
            >
              <Image src={model.icon} alt={model.name} />
              {model.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
