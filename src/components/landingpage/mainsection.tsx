"use client";
import React from "react";
import { motion } from "framer-motion";
import CorpsRhenania from "./corps";

const MainSection = () => {
  return (
    <section
      className="flex flex-1 items-center justify-center bg-cover bg-center pb-44 text-slate-50"
      style={{
        backgroundImage: `url('/stifi.jpg')`,
      }}
    >
      <div className="relative w-auto overflow-hidden">
        <CorpsRhenania />
      </div>
    </section>
  );
};

export default MainSection;
