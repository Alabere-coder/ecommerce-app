"use client";

import React, { useState } from "react";
import { Button, Card, Carousel } from "@arco-design/web-react";
import Image from "next/image";
const imageSrc = [
  "//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/cd7a1aaea8e1c5e3d26fe2591e561798.png~tplv-uwbnlip3yd-webp.webp",
  "//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/6480dbc69be1b5de95010289787d64f1.png~tplv-uwbnlip3yd-webp.webp",
  "//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/0265a04fddbd77a19602a15d9d55d797.png~tplv-uwbnlip3yd-webp.webp",
  "//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/24e0dd27418d2291b65db1b21aa62254.png~tplv-uwbnlip3yd-webp.webp",
];

const HeroData = [
  {
    id: 1,

    subtitle: "Beats Solo",
    title: "Wireless",
    title2: "Men's Dress",
  },
  {
    id: 2,

    subtitle: "Beats Solo",
    title: "Wireless",
    title2: "Women' Dress",
  },
  {
    id: 1,

    subtitle: "Beats Solo",
    title: "Branded",
    title2: "Laptops",
  },
];

const Hero = () => {
  return (
    <div className="px-6 py-4 grid grid-cols-3 gap-4">
      <div className="overflow-hidden col-span-2 rounded-xl sm:min-h-[550px] hero-bg-color">
        <Carousel
          autoPlay={true}
          indicatorType="dot"
          showArrow="hover"
          style={{ height: "100%" }}
        >
          {imageSrc.map((src, index) => (
            <div key={index}>
              <Image
                src={src}
                width={200}
                height={200}
                alt=""
                style={{ width: "100%", height: "100%" }}
              />
            </div>
          ))}
        </Carousel>
      </div>
      <div className="grid grid-cols-2 gap-4 rounded-xl">
        <div className="py-10 pl-5 bg-gradient-to-br from-yellow-900 to-yellow-600 text-white rounded-xl relative h-[320px] flex items-end">
          <div>
            <div className="mb-4">
              <p className="mb-[2px] text-white">Enjoy</p>
              <p className="text-2xl font-semibold mb-[2px]">With</p>
              <p className="text-4xl xl:text-5xl font-bold opacity-40 mb-2">
                Gadget
              </p>

              <Button>Browse</Button>
            </div>
          </div>
          {/* <img
            src={Image2}
            alt=""
            className="w-[320px] absolute -right-4 lg:top-[40px]"
          /> */}
        </div>
        <div className="py-10 pl-5 bg-gradient-to-br from-yellow-900 to-yellow-600 text-white rounded-xl relative h-[320px] flex items-end">
          <div>
            <div className="mb-4">
              <p className="mb-[2px] text-white">Enjoy</p>
              <p className="text-2xl font-semibold mb-[2px]">With</p>
              <p className="text-4xl xl:text-5xl font-bold opacity-40 mb-2">
                Gadget
              </p>

              <Button>Browse</Button>
            </div>
          </div>
          {/* <img
            src={Image2}
            alt=""
            className="w-[320px] absolute -right-4 lg:top-[40px]"
          /> */}
        </div>
        <div className="py-10 pl-5 bg-gradient-to-br from-yellow-900 to-yellow-600 text-white rounded-xl relative h-[320px] flex items-end">
          <div>
            <div className="mb-4">
              <p className="mb-[2px] text-white">Enjoy</p>
              <p className="text-2xl font-semibold mb-[2px]">With</p>
              <p className="text-4xl xl:text-5xl font-bold opacity-40 mb-2">
                Gadget
              </p>

              <Button>Browse</Button>
            </div>
          </div>
          {/* <img
            src={Image2}
            alt=""
            className="w-[320px] absolute -right-4 lg:top-[40px]"
          /> */}
        </div>
        <div className="py-10 pl-5 bg-gradient-to-br from-yellow-900 to-yellow-600 text-white rounded-xl relative h-[320px] flex items-end">
          <div>
            <div className="mb-4">
              <p className="mb-[2px] text-white">Enjoy</p>
              <p className="text-2xl font-semibold mb-[2px]">With</p>
              <p className="text-4xl xl:text-5xl font-bold opacity-40 mb-2">
                Gadget
              </p>

              <Button>Browse</Button>
            </div>
          </div>
          {/* <img
            src={Image2}
            alt=""
            className="w-[320px] absolute -right-4 lg:top-[40px]"
          /> */}
        </div>
      </div>
    </div>
    // <Card className="min-h-[450px] sm:min-h-[550px]">

    //   <Carousel

    //     autoPlay={true}
    //     indicatorType="dot"
    //     showArrow="hover"
    //   >
    //     {HeroData.map((data) => (
    //       <div key={data.id}>
    //         <div className="">

    //           <div className="flex flex-col justify-center gap-4 sm:pl-3 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10 ">
    //             <h1
    //               data-aos="zoom-out"
    //               data-aos-duration="500"
    //               data-aos-once="true"
    //               className="text-2xl sm:text-6xl lg:text-2xl font-bold"
    //             >
    //               {data.subtitle}
    //             </h1>
    //             <h1
    //               data-aos="zoom-out"
    //               data-aos-duration="500"
    //               data-aos-once="true"
    //               className="text-5xl sm:text-6xl lg:text-7xl font-bold"
    //             >
    //               {data.title}
    //             </h1>
    //             <h1
    //               data-aos="zoom-out"
    //               data-aos-duration="500"
    //               data-aos-once="true"
    //               className="text-5xl uppercase text-white dark:text-white/5 sm:text-[80px] md:text-[100px] xl:text-[150px] font-bold"
    //             >
    //               {data.title2}
    //             </h1>
    //             <div
    //               data-aos="fade-up"
    //               data-aos-offset="0"
    //               data-aos-duration="500"
    //               data-aos-delay="300"
    //             >
    //               <Button type="primary" shape="round" size="large">
    //                 Shop By Category
    //               </Button>
    //             </div>
    //           </div>

    //           <div className="order-1 sm:order-2">
    //             <div
    //               data-aos="zoom-in"
    //               data-aos-once="true"
    //               className="relative z-10"
    //             ></div>
    //           </div>
    //         </div>
    //       </div>
    //     ))}
    //   </Carousel>

    // </Card>
  );
};

export default Hero;
