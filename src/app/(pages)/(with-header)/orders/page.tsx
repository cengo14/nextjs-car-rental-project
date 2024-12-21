import OrderCard from "@/app/components/OrderCard";
import { getOrders } from "@/app/utils/service";
import React from "react";

const Orders = async () => {
  const { orders } = await getOrders();

  return (
    <div>
      <div className="h-[70px] md:h-[110px] bg-black"></div>
      <div className="container">
        <h1 className="text-3xl font-bold">Siparişlerim</h1>
        <div className="grid gap-10 mt-10">
          {orders.map((order, key) => (
            <OrderCard key={key} order={order} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Orders;
