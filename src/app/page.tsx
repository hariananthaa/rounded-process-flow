import React, { ReactElement } from "react";

export default function Home(): ReactElement {
  return (
    <section className="w-full h-max py-10 overflow-hidden">
      <div className="w-[1100px] h-max mx-auto flex flex-col justify-center items-center relative">
        <div className="h-[800px] w-[800px] mx-auto relative flex justify-center items-center">
          <div className="animate-spin_anticlockwise w-full h-full m-auto border-gray-300 rounded-full border-2 border-dashed"></div>
        </div>
        <div className="custom-border p-[1px] animate-border_dance w-full border-none absolute bottom-0 flex-shrink-0"></div>
        <div className=" absolute -bottom-5 left-0 w-max h-max px-3 py-1 animate-path_animation">
          <div className=" animate-spin_clockwise rounded-full w-20 h-8 px-3 py-1 bg-rose-300 flex justify-center items-center">
            New
          </div>
        </div>
      </div>
    </section>
  );
}
