import React from "react";
import { OrderType } from "../utils/types";
import Image from "next/image";
import millify from "millify";

type Props = {
  order: OrderType;
};

const OrderCard = ({ order }: Props) => {
  return (
    <div className="border p-4 rounded-md gap-5 shadow items-center justify-between grid grid-cols-3 xl:grid-cols-5 hover:bg-zinc-300/10 transition cursor-pointer ">
      <Image
        src={order.product.imageUrl}
        width={200}
        height={200}
        alt={order.product.make + " " + order.product.model}
        unoptimized
      />
      <Info title={order.product.make} value={order.product.model} />
      <Info
        title={"Ödenen Tutar:"}
        value={millify(order.money_spend) + "₺"}
        design="text-green-600"
      />
      <Info
        title={"Alım Tarihi:"}
        value={new Date(order.createdAt).toLocaleDateString()}
        design="text-blue-600"
      />
      <Info title={"Ödeme Tipi"} value={order.type} design="text-blue-600" />
    </div>
  );
};

type InfoProps = {
  title: string;
  value: string;
  design?: string;
};

const Info = ({ title, value, design }: InfoProps) => {
  return (
    <p className="flex max-md:flex-col gap-1">
      <span className="whitespace-nowrap">{title}</span>
      <span className={`font-semibold ${design}`}>{value}</span>
    </p>
  );
};

export default OrderCard;
