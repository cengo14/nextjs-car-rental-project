"use client";
import React, { useState } from "react";
import { CarType } from "../utils/types";
import Loader from "./Loader";

type Props = {
  car: CarType;
};

const Button = ({ car }: Props) => {
  const [loading, setLoading] = useState(false);
  const handleClick = async () => {
    setLoading(true);
    await fetch("http://localhost:3000/api/checkout", {
      method: "POST",
      body: JSON.stringify(car),
    })
      .then((res) => res.json())

      .then((data) => (window.location.href = data.url))
      .finally(() => setLoading(false));
  };
  return (
    <button
      onClick={handleClick}
      className="bg-blue-500 w-full text-center p-2 rounded-lg text-white font-bold transition hover:bg-blue-600"
    >
      {loading ? <Loader /> : "Kirala"}
    </button>
  );
};

export default Button;
