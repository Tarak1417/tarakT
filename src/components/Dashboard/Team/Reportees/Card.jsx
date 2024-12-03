import React from "react";
import Reportee from "./Reportee";

export default function Card({ title }) {
  return (
    <div className="h-fit w-96 flex flex-col gap-3 p-3 justify-center rounded-lg border border-gray-800">
      <div>
        <h1>{title}</h1>
      </div>
      <div className=" max-h-60 overflow-y-scroll flex flex-col gap-3 ">
        <Reportee />
        <Reportee />
        <Reportee />
        <Reportee />
        <Reportee />
      </div>
    </div>
  );
}
