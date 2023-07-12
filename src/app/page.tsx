import Image from "next/image";
import React, { ReactElement } from "react";
import Human from "public/human.jpg";

export default function Home(): ReactElement {
  return (
    <section className="w-full h-max pb-40 relative flex justify-center">
      <div className="w-[1100px] h-screen mx-auto flex flex-col justify-end items-center relative overflow-x-hidden overflow-y-clip pb-40">
        <div className="h-[800px] w-[1100px] absolute top-0 bottom-0 my-auto left-1/2 -translate-x-1/2">
          <div className="w-[800px] h-full mx-auto relative flex justify-center items-center overflow-y-clip  -translate-x-1/2">
            <div className="animate-spin_anticlockwise w-full h-full m-auto border-gray-300 rounded-full border-2 border-dashed absolute -bottom-28 left-[50%] right-0 mx-auto"></div>
          </div>
          <div
            // key={`arrow_${index + 1}`}
            className="w-6 h-6 rotate-[155deg] rounded-full absolute bottom-[110px] left-44 flex justify-center items-center bg-white z-40"
          >
            <i className="fa-solid text-gray-500 fa-angle-down"></i>
          </div>
          <div className="custom-border p-[1px] animate-border_dance w-full border-none flex-shrink-0"></div>
          <div className="w-[550px] h-1 bg-white absolute -bottom-1 left-0 right-0 mx-auto "></div>
          <div className="w-full h-max">
            {[...Array(5)].map((_, index) => {
              const delay = index * -10;
              return (
                <div
                  style={{
                    animationDelay: `${delay}s`,
                  }}
                  key={`animate_element_${index + 1}`}
                  className={`absolute -bottom-10 left-0 w-max h-20 px-3 py-1 animate-path_animation z-40 flex justify-center items-center`}
                >
                  <div className="w-full h-full relative">
                    <Image
                      src={Human}
                      alt=""
                      height={60}
                      width={60}
                      style={{
                        animationDelay: `${delay}s`,
                      }}
                      className={`animate-spin_clockwise rounded-full flex-shrink-0 aspect-square`}
                    />
                    <div
                      style={{
                        animationDelay: `${delay}s`,
                      }}
                      className={`animate-debt w-max h-max py-1 px-3 bg-red-100 text-red-800 rounded-full text-sm absolute -top-9 -right-10 my-auto`}
                    >
                      Debt
                      <div
                        className={` w-max h-max py-1 px-3 text-xl absolute -top-4 -right-6 my-auto`}
                      >
                        😫
                      </div>
                    </div>
                    <div
                      style={{
                        animationDelay: `${delay}s`,
                      }}
                      className={`animate-debtAlternate w-20 h-10 py-1 px-3 rounded-full absolute -top-9 -right-10 my-auto text-center`}
                    >
                      <div className="w-full h-full relative">
                        <div className="absolute -bottom-1 left-[0%] mx-auto text-xl">
                          🥰
                        </div>
                        <div className="absolute top-0 right-[40%] mx-auto text-sm">
                          🥰
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        animationDelay: `${delay}s`,
                      }}
                      className={`animate-highInterestRate w-20 h-max py-1 px-3 bg-teal-100 text-teal-700 rounded-lg text-sm absolute -bottom-10 -left-16 text-center`}
                    >
                      High Interest
                      <div
                        className={` w-max h-max py-1 px-3 text-xl absolute -top-4 -left-6 my-auto`}
                      >
                        😥
                      </div>
                    </div>
                    <div
                      style={{
                        animationDelay: `${delay}s`,
                      }}
                      className={`animate-highInterestRateAlternate w-20 h-10 py-1 px-3 rounded-full absolute -bottom-8 -left-12 text-center leading-4`}
                    >
                      <div className="w-full h-full relative">
                        <div className="absolute -bottom-1 left-[10%] mx-auto text-base">
                          👍
                        </div>
                        <div className="absolute -top-1 -right-2 text-3xl">
                          👍
                        </div>
                        <div className="absolute -top-2 left-[35%] text-xl">
                          👍
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        animationDelay: `${delay}s`,
                      }}
                      className={`animate-money w-20 h-10 py-1 px-3 rounded-full absolute -bottom-8 -left-12 text-center leading-4`}
                    >
                      <div className="w-full h-full relative">
                        <div className="absolute -bottom-1 left-[10%] mx-auto text-base">
                          💵
                        </div>
                        <div className="absolute -top-1 -right-2 text-3xl">
                          💵
                        </div>
                        <div className="absolute -top-2 left-[35%] text-xl">
                          💵
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        animationDelay: `${delay}s`,
                      }}
                      className={`animate-noSavings w-max h-max py-1 px-3 bg-blue-100 text-blue-700 rounded-full text-sm absolute -top-9 -left-16 my-auto`}
                    >
                      No Savings
                    </div>
                    <div
                      style={{
                        animationDelay: `${delay}s`,
                      }}
                      className={`animate-noSavingsAlternate w-8 h-max py-1 px-3 rounded-full text-sm absolute -top-5 -left-20 my-auto`}
                    >
                      <div className="w-full h-full relative">
                        <div className="absolute text-2xl -top-8 -right-10 my-auto">
                          💰
                        </div>
                        <div className="absolute text-3xl -bottom-5 -right-16 my-auto">
                          💰
                        </div>
                        <div className="absolute text-xl -bottom-7 -right-7 my-auto">
                          💰
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        animationDelay: `${delay}s`,
                      }}
                      className={`animate-noLifeProt w-24 h-12 py-1 px-4 bg-violet-100 text-violet-700 rounded-lg text-sm absolute  -bottom-7 -right-20 my-auto text-center`}
                    >
                      No life protection
                    </div>
                    <div
                      style={{
                        animationDelay: `${delay}s`,
                      }}
                      className={`animate-noLifeProtAlternate w-24 h-12 py-1 px-4  rounded-lg text-sm absolute  -bottom-7 -right-20 my-auto text-center`}
                    >
                      <div className="w-full h-full relative">
                        <div className="absolute text-3xl top-[20%] bottom-0 my-auto">
                          🛡️
                        </div>
                      </div>
                    </div>
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
