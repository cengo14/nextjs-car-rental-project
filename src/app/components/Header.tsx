import Link from "next/link";
import React from "react";

const Header = ({}) => {
  return (
    <div className={` absolute text-white w-full`}>
      <div className="container flex justify-between items-center w-full">
        <h1 className="font-bold text-2xl md:text-3xl">DRIVE</h1>
        <nav className="flex text-sm md:text-base gap-2 md:gap-4">
          <Link href="/">Keşfet</Link>
          <Link href="/orders">Siparişlerim</Link>
          <Link href="/">Hakkımızda</Link>
          <Link className="max-md:hidden" href="/">
            Fiyatlandırma
          </Link>
        </nav>
        <div className="flex gap-5">
          <button className="max-md:hidden">İletişim</button>
          <button className="bg-white text-sm text-black rounded-full px-3 py-1 text-nowrap transition hover:bg-gray-100">
            Kayıt Ol
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
