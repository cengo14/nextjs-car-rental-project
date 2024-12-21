import React from "react";
import { CarType } from "../utils/types";

type Props = {
  car: CarType;
};

const Overview = ({ car }: Props) => {
  const arr = Object.entries(car).filter(
    (i) => i[0] !== "_id" && i[0] !== "imageUrl"
  );

  return (
    <div className="grid md:grid-cols-2 mt-5 gap-5">
      {arr.map(([key, value]) => (
        <div key={key} className="flex items-center justify-between capitalize">
          <p>{key}</p>
          <p className="font-semibold">{value}</p>
        </div>
      ))}
    </div>
  );
};

export default Overview;
