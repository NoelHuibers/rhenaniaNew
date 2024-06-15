"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const ContactButton = () => {
  const buttonVariants = {
    initial: {
      background: "rgb(17 24 39)",
      backgroundPosition: "0% 50%",
    },
    hover: {
      background: [
        "linear-gradient(-135deg, #fecaca 33%, #ffffff 33%, #ffffff 66%, #ebf8ff 66%)",
      ],
      transition: {
        duration: 2.5,
        ease: "linear",
        backgroundPosition: {
          delay: 0, // Start moving the background immediately
          duration: 2.5, // Keep the duration consistent with the color change
        },
      },
      backgroundPosition: "100% 50%", // End at the right
    },
  };

  return (
    <motion.div
      className="inline-flex h-12 items-center justify-center rounded-md px-10 text-base font-semibold text-slate-50 shadow-lg hover:text-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
      variants={buttonVariants}
      initial="initial"
      whileHover="hover"
      style={{
        backgroundSize: "300% 300%",
      }}
    >
      <Link
        href="/contact"
        className="flex h-full w-full items-center justify-center bg-transparent"
      >
        Bewerb dich
      </Link>
    </motion.div>
  );
};

export default ContactButton;
