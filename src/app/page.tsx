import Image from "next/image";
import React, { ReactElement } from "react";
import Human from "public/human.jpg";

export default function Home(): ReactElement {
  return (
    <section className="w-full h-max pt-10 py-40 overflow-hidden">
      <div className="w-[1100px] h-max mx-auto flex flex-col justify-center items-center relative">
        <div className="h-[800px] w-[800px] mx-auto relative flex justify-center items-center">
          <div className="animate-spin_anticlockwise w-full h-full m-auto border-gray-300 rounded-full border-2 border-dashed"></div>
        </div>
        <div className="custom-border p-[1px] animate-border_dance w-full border-none absolute bottom-0 flex-shrink-0"></div>
        <div className=" absolute -bottom-10 left-0 w-max h-20 px-3 py-1 animate-path_animation flex justify-center items-center">
          <div className="w-full h-full relative">
            <Image
              src={Human}
              alt=""
              height={60}
              width={60}
              className="rounded-full flex-shrink-0 aspect-square animate-spin_clockwise"
            />
            <div className="animate-spin_clockwise w-max h-max py-1 px-3 bg-orange-100 text-orange-800 rounded-full text-sm absolute -top-9 -right-10 my-auto">
              Debt
            </div>
            <div className="animate-spin_clockwise w-max h-max py-1 px-3 bg-blue-100 text-blue-800 rounded-full text-sm absolute -bottom-7 -left-7 whitespace-pre-wrap">
              Hight Interest
            </div>
            <div className="animate-spin_clockwise w-max h-max py-1 px-3 bg-yellow-100 text-yellow-700 rounded-full text-sm absolute -top-9 -left-14 my-auto">
              No Savings
            </div>
          </div>
        </div>
        <div
          style={{
            animationDelay: "8s",
          }}
          className=" absolute -bottom-10 left-0 w-max h-20 px-3 py-1 animate-path_animation flex justify-center items-center"
        >
          <div className="w-full h-full relative">
            <Image
              src={Human}
              alt=""
              height={60}
              width={60}
              className="rounded-full flex-shrink-0 aspect-square animate-spin_clockwise"
            />
            <div className="animate-spin_clockwise w-max h-max py-1 px-3 bg-orange-100 text-orange-800 rounded-full text-sm absolute -top-9 -right-10 my-auto">
              Debt1
            </div>
            <div className="animate-spin_clockwise w-max h-max py-1 px-3 bg-blue-100 text-blue-800 rounded-full text-sm absolute -bottom-7 -left-7 whitespace-pre-wrap">
              Hight Interest1
            </div>
            <div className="animate-spin_clockwise w-max h-max py-1 px-3 bg-yellow-100 text-yellow-700 rounded-full text-sm absolute -top-9 -left-14 my-auto">
              No Savings
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
