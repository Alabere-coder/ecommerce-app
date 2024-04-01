"use client";

import Image from "next/image";
import Link from "next/link";
import BannerInfo from "./BannerInfo";

const Banner = () => {
  return (
    <div className="relative mx-10 mt-6 max-sm:mx-2">
      <div className="bg-white max-md:hidden max-sm:bottom-10 h-[250px] z-10 w-[200px] absolute top-20 flex gap-1 flex-col justify-center">
        <h2 className="text-xl mb-4">FEATURED</h2>

        <Link
          href="#"
          className="block transition ease-in-out delay-150 hover:translate-x-6 hover:scale-110 duration-300"
        >
          Men Clothing
        </Link>

        <Link
          href="#"
          className="transition ease-in-out delay-150 hover:translate-x-6 hover:scale-110 duration-300"
        >
          Women Clothing
        </Link>

        <Link
          href="#"
          className="transition ease-in-out delay-150 hover:translate-x-6 hover:scale-110 duration-300"
        >
          Jewelery
        </Link>

        <Link
          href="#"
          className="transition ease-in-out delay-150 hover:translate-x-6 hover:scale-110 duration-300"
        >
          Shoes
        </Link>
        <Link
          href="#"
          className="transition ease-in-out delay-150 hover:translate-x-6 hover:scale-110 duration-300"
        >
          Electronics
        </Link>
      </div>
      <div className=" absolute right-4 bottom-4">
        <BannerInfo />
      </div>

      <div className="flex flex-row max-xl:hidden max-h-[450px] w-[100%]">
        <div className="h-full w-[30%] ">
          <Image
            src="/pic1.jpg"
            className="h-[450px] w-full"
            alt=""
            width={300}
            height={300}
            unoptimized
          />
        </div>
        <div className="h-full w-[40%]">
          <Image
            src="/sneaker2.jpg"
            className="h-[450px] w-full "
            alt=""
            width={300}
            height={300}
            unoptimized
          />
        </div>
        <div className="h-full w-[30%]">
          <Image
            src="/pix-2.jpg"
            className="h-[450px] w-full"
            alt=""
            width={200}
            height={200}
            unoptimized
          />
        </div>
      </div>

      <div className="max-sm:hidden lg:hidden max-h-[500px] w-[100%]">
        <div className="h-full w-full">
          <Image
            src="/gg.png"
            className="h-[450px] w-full rounded-md"
            alt=""
            width={200}
            height={200}
            unoptimized
          />
        </div>
      </div>
      <div className="sm:hidden max-h-[500px] w-[100%]">
        <div className="h-full w-full">
          <Image
            src="/fit.png"
            className="h-[450px] w-full rounded-md"
            alt=""
            width={200}
            height={200}
            unoptimized
          />
        </div>
      </div>

      <div className="flex flex-row  xl:hidden max-lg:hidden max-h-[450px] w-[100%]">
        <div className="h-full w-[50%] ">
          <Image
            src="/pix8.webp"
            className="h-[450px] w-full"
            alt=""
            width={300}
            height={300}
            unoptimized
          />
        </div>
        <div className="h-full w-[50%]">
          <Image
            src="/trainner1.jpg"
            className="h-[450px] w-full "
            alt=""
            width={300}
            height={300}
            unoptimized
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
