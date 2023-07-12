import Image from "next/image";
import React, { ReactElement } from "react";
import Human from "public/human.jpg";

export default function Home(): ReactElement {
  return (
    <section className="w-full h-max pb-40 relative flex justify-center">
      <div className="w-[1100px] h-screen mx-auto flex flex-col justify-end items-center relative overflow-x-hidden overflow-y-clip pb-40">
        <div className="h-[800px] w-[1100px] absolute top-0 bottom-0 my-auto left-1/2 -translate-x-1/2">
          <div className="w-[800px] h-full mx-auto relative flex justify-center items-center overflow-y-clip bg-red-30 -translate-x-1/2">
            <div className="animate-spin_anticlockwise w-full h-full m-auto border-gray-300 rounded-full border-2 border-dashed absolute -bottom-28 left-[50%] right-0 mx-auto"></div>
          </div>
          <div className="custom-border p-[1px] animate-border_dance w-full border-none flex-shrink-0"></div>
          <div className="w-[550px] h-1 bg-white absolute -bottom-1 left-0 right-0 mx-auto "></div>
          <div className="w-full h-max">
            {[...Array(5)].map((_, index) => {
              const delay = index * 10;
              return (
                <div
                  style={{
                    animationDelay: `${delay}s`,
                  }}
                  key={`animate_element_${index + 1}`}
                  className={`absolute -bottom-10 left-0 w-max h-20 px-3 py-1 animate-path_animation z-40 flex justify-center items-center`}
                >
                  <div className="w-full h-full relative">
                    <div
                      style={{
                        animationDelay: `${delay}s`,
                      }}
                      className={`animate-spin_clockwise rounded-full flex-shrink-0 aspect-square text-6xl`}
                    >
                      😩
                    </div>
                    {/* <Image
                      src={Human}
                      alt=""
                      height={60}
                      width={60}
                      style={{
                        animationDelay: `${delay}s`,
                      }}
                      className={`animate-spin_clockwise rounded-full flex-shrink-0 aspect-square`}
                    /> */}
                    <div
                      style={{
                        animationDelay: `${delay}s`,
                      }}
                      className={`animate-debt w-max h-max py-1 px-3 bg-red-100 text-red-800 rounded-full text-sm absolute -top-9 -right-10 my-auto`}
                    >
                      Debt
                    </div>
                    {/* <div
                      style={{
                        animationDelay: `${delay}s`,
                      }}
                      className={`animate-debt w-max h-max py-1 text-2xl px-3  rounded-full absolute top-0 -right-10 my-auto`}
                    >
                      😩
                    </div> */}
                    <div
                      style={{
                        animationDelay: `${delay}s`,
                      }}
                      className={`animate-highInterestRate w-20 h-max py-1 px-3 bg-teal-100 text-teal-700 rounded-full text-sm absolute -bottom-10 -left-16 text-center leading-4`}
                    >
                      High Interest
                    </div>
                    <div
                      style={{
                        animationDelay: `${delay}s`,
                      }}
                      className={`animate-noSavings w-max h-max py-1 px-3 bg-blue-100 text-blue-700 rounded-full text-sm absolute -top-9 -left-16 my-auto`}
                    >
                      No Savings
                    </div>
                  </div>
                  <div
                    style={{
                      animationDelay: `${delay}s`,
                    }}
                    className={`animate-noSavings w-24 h-max py-1 px-3 bg-violet-100 text-violet-700 rounded-full text-sm absolute -bottom-9 -right-16 my-auto text-center`}
                  >
                    No life protection
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
