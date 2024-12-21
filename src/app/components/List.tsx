import React from "react";
import { CarType } from "../utils/types";
import { resolve } from "path";
import Card from "./Card";
import { getCars } from "../utils/service";

const List = async () => {
  const res = await getCars();
  return (
    <div className="container">
      <h1 className="text-2xl md:text-3xl font-bold">BütünAraçları Keşfedin</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
        {res.data.map((item) => (
          <Card key={item._id} car={item} />
        ))}
      </div>
    </div>
  );
};

export default List;
