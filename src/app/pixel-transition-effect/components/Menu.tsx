"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const anim = {
  initial: {
    opacity: 0,
  },
  open: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};

const Menu = ({
  setMenuIsActive,
}: {
  setMenuIsActive: (value: boolean) => void;
}) => {
  return (
    <motion.div
      className="w-full h-[90vh] flex flex-col items-center justify-center fixed z-10"
      variants={anim}
      initial="initial"
      animate="open"
      exit="exit"
    >
      <Link
        href="/pixel-transition-effect"
        className="text-[5vw] text-black"
        onClick={() => setMenuIsActive(false)}
      >
        Home
      </Link>
      <Link
        href="/pixel-transition-effect/about"
        className="text-[5vw] text-black"
        onClick={() => setMenuIsActive(false)}
      >
        About
      </Link>
      <Link
        href="/pixel-transition-effect/contact"
        className="text-[5vw] text-black"
        onClick={() => setMenuIsActive(false)}
      >
        Contact
      </Link>
    </motion.div>
  );
};

export default Menu;
