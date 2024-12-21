import { CarType, OrderType } from "./types";

type ResType = Promise<{
  message: string;
  vehicle: CarType;
}>;

export const getDetail = async (id: string): ResType => {
  const res = await fetch(`${process.env.BASE_API_URL}/api/vehicles/${id}`);
  if (!res.ok) {
    throw new Error("Verileri alınırken hata oluştu");
  }
  return res.json();
};

type ReturnType = Promise<{
  message: string;
  data: CarType[];
}>;

export const getCars = async (): ReturnType => {
  try {
    const res = await fetch(`${process.env.BASE_API_URL}/api/vehicles`);
    await new Promise((resolve) => setTimeout(resolve, 3000));
    return res.json();
  } catch (error) {
    throw new Error("Araç lsitesi alınırken bir hata oluştu");
  }
};
type OrderRes = Promise<{
  text: string;
  orders: OrderType[];
}>;

export const getOrders = async (): OrderRes => {
  const res = await fetch(`${process.env.BASE_API_URL}/api/orders`);

  if (!res.ok) {
    throw new Error("Siparişleri alırken bir hata oluştu");
  }

  return res.json();
};
