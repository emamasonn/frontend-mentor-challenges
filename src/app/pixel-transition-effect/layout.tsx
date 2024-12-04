"use client";

import { useState } from "react";
import Header from "./components/Header";
import Menu from "./components/Menu";
import MeshBackground from "./meshBackground";
import { AnimatePresence } from "framer-motion";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [menuIsActive, setMenuIsActive] = useState(false);
  return (
    <main>
      <Header menuIsActive={menuIsActive} setMenuIsActive={setMenuIsActive} />
      <AnimatePresence mode="wait" initial={true}>
        {menuIsActive && (
          <>
            <Menu key="menu" setMenuIsActive={setMenuIsActive} />
            <MeshBackground key="mesh-background" />
          </>
        )}
      </AnimatePresence>

      {!menuIsActive && children}
    </main>
  );
}
