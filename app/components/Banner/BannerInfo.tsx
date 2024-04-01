import { Button } from "@arco-design/web-react";
import React from "react";

const BannerInfo = () => {
  return (
    <div className="flex flex-col  p-4">
      <div className="bg-black opacity-45 mb-2">
        <div className=" text-white z-10 tracking-[.05em] max-lg:text-xl text-3xl px-4 py-6 flex flex-col">
          <p className=" leading-12 font-bold">Men Ready To Wear</p>
          <p className=" leading-12 font-bold">Women Outfit</p>
          <p className=" leading-12 font-bold ">Unisex Sneakers</p>
          <p className=" leading-12 font-bold">Jewelry & Watches</p>
        </div>
      </div>
      <div className="flex gap-8">
        <Button size="large" className="drop-shadow-xl font-medium">
          SHOP MEN
        </Button>
        <Button
          onClick={() => alert("Please Log In to Continue")}
          size="large"
          className="drop-shadow-xl font-medium"
        >
          SHOP WOMEN
        </Button>
      </div>
    </div>
  );
};

export default BannerInfo;
