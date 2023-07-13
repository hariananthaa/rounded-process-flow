import Image from "next/image";
import React, { ReactElement } from "react";
import Human from "public/human.jpg";

export default function Home(): ReactElement {
  return (
    <section className="w-full h-max relative flex justify-center">
      <div className="w-[1300px] h-[900px] mx-auto flex flex-col justify-start items-center relative overflow-x-hidden overflow-y-clip">
        <div className="h-[800px] w-[1100px] absolute top-0 m-auto left-1/2 -translate-x-1/2">
          <div className="w-[800px]  h-full mx-auto relative flex justify-center items-center overflow-y-clip  -translate-x-1/2">
            <div className="animate-spin_anticlockwise w-full h-full m-auto border-gray-300 rounded-full border-2 border-dashed absolute -bottom-28 left-[50%] right-0 mx-auto"></div>
          </div>
          <div
            key={`arrow_1`}
            className="w-6 h-6 -rotate-90 rounded-full absolute -bottom-[13px] left-36 flex justify-center items-center bg-white z-40"
          >
            <i className="fa-solid text-gray-400 fa-angle-down"></i>
          </div>
          <div
            key={`arrow_2`}
            className="w-6 h-6 rotate-[162deg] rounded-full absolute bottom-[160px] left-[156px] flex justify-center items-center bg-white z-40"
          >
            <i className="fa-solid text-gray-400 fa-angle-down"></i>
          </div>
          <div
            key={`arrow_3`}
            className="w-6 h-6 rotate-[220deg] rounded-full absolute top-[250px] left-[228px] flex justify-center items-center bg-white z-40"
          >
            <i className="fa-solid text-gray-400 fa-angle-down"></i>
          </div>
          <div
            key={`arrow_4`}
            className="w-6 h-6 rotate-[-90deg] rounded-full absolute top-[102px] left-0 right-0 mx-auto flex justify-center items-center bg-white z-40"
          >
            <i className="fa-solid text-gray-400 fa-angle-down"></i>
          </div>
          <div
            key={`arrow_5`}
            className="w-6 h-6 rotate-[-47deg] rounded-full absolute top-[250px] right-[228px] flex justify-center items-center bg-white z-40"
          >
            <i className="fa-solid text-gray-400 fa-angle-down"></i>
          </div>
          <div
            key={`arrow_6`}
            className="w-6 h-6 rotate-[20deg] rounded-full absolute bottom-[160px] right-[156px] flex justify-center items-center bg-white z-40"
          >
            <i className="fa-solid text-gray-400 fa-angle-down"></i>
          </div>
          <div
            key={`arrow_7`}
            className="w-6 h-6 -rotate-90 rounded-full absolute -bottom-[13px] right-36 flex justify-center items-center bg-white z-40"
          >
            <i className="fa-solid text-gray-400 fa-angle-down"></i>
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
                      className={`animate-highInterestRate w-20 h-max py-1 px-3 bg-teal-100 text-teal-700 rounded-lg text-sm absolute -bottom-8 -left-20 text-center`}
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

          {/* Main content */}
          <div className="w-1/2 h-max absolute top-0 bottom-0 left-0 right-0 m-auto space-y-[7%] bg-red-30 pt-[15%]">
            <div className="w-full text-center space-y-[5%]">
              <h1 className="text-4xl sm:text-5xl font-black text-gray-700 text-center md:text-6xl lg:text-6xl lg:w-[80%] mx-auto ">
                Put your content here!
                {/* <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-[#7EE687]">
                  Your Dream{" "}
                </span>
                Home <br />
                Our Expert{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-[#7EE687]">
                  Guidance{" "}
                </span> */}
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis consequatur excepturi aliquid qui maxime neque minus
                hic ullam soluta aperiam illum nesciunt ipsa fuga doloribus
                quis, sunt aut at odio consequuntur odit dolore! Culpa enim
              </p>
            </div>
            <div className="w-full flex justify-center items-center space-x-3">
              <button
                className={`bg-gray-800 text-white rounded-md py-3 w-72 font-medium text-lg lg:w-60 lg:text-xl`}
              >
                Get started for free
                <i className="fa-solid fa-angle-right ml-2"></i>
              </button>
              <button
                className={` text-gray-600 border border-[#8c949e] rounded-md py-3 w-72 font-medium text-lg lg:w-60 lg:text-xl hover:border-[#8c949e]`}
              >
                Plans & Pricing
                <i className="fa-solid fa-angle-right ml-2"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="px-3 bg-gray-50 py-1 w-max h-max absolute bottom-[9.5%] left-2 rounded-full text-gray-700 border border-gray-400 text-sm">
          Before
          <i className="fa-solid fa-forward ml-2 text-gray-500" />
        </div>
        <div className="px-3 bg-gray-50 py-1 w-max h-max absolute bottom-[9.5%] right-5 rounded-full text-gray-700 border border-gray-400 text-sm">
          <i className="fa-solid fa-backward mr-2 text-gray-500" />
          After
        </div>
      </div>
    </section>
  );
}
