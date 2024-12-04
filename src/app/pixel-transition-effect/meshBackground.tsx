"use client";
import { motion } from "framer-motion";
import { useCallback, useMemo } from "react";

const anim = {
  initial: {
    opacity: 0,
  },
  open: (i: number[]) => ({
    opacity: 1,
    transition: { duration: 0, delay: 0.03 * i[0] },
  }),
  closed: (i: number[]) => ({
    opacity: 0,
    transition: { duration: 0, delay: 0.03 * i[1] },
  }),
};

const MeshBackground = () => {
  const shuffle = useMemo(
    () => (a: Array<number>) => {
      let j, x, i;
      for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
      }
      return a;
    },
    []
  );

  const getBlocks = useCallback(
    (index: number) => {
      const { innerWidth, innerHeight } = window;
      const sizeBlock = innerWidth * 0.05;
      const blocks = Math.ceil(innerHeight / sizeBlock);

      const shuffledIndexes = shuffle([...Array(blocks)].map((_, i) => i));

      return shuffledIndexes.map((randomIndex, index) => (
        <motion.div
          key={index}
          className="w-full h-[5vw] bg-orange-400"
          variants={anim}
          initial="initial"
          animate="open"
          exit="closed"
          custom={[index + randomIndex, 20 - index + randomIndex]}
        ></motion.div>
      ));
    },
    [shuffle]
  );

  return (
    <div className="w-[100vw] h-[100vh] flex overflow-hidden relative pointer-events-none z-5">
      {[...Array(20)].map((_, index) => (
        <div key={index} className="w-[5vw] h-full flex flex-col">
          {getBlocks(index)}
        </div>
      ))}
    </div>
  );
};

export default MeshBackground;
