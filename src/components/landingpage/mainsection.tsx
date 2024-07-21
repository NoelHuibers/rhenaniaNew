"use client";
import React from "react";
import Zirkel from "./zirkel";

const MainSection = () => {
  return (
    <section
      className="flex flex-1 items-center justify-center bg-cover bg-center text-slate-50"
      style={{
        backgroundImage: `url('/stifi.jpg')`,
      }}
    >
      <div className="relative w-auto overflow-hidden">
        <Zirkel />
      </div>
    </section>
  );
};

export default MainSection;
