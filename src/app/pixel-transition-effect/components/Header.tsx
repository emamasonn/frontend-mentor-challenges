"use client";
import IconMenu from "../assets/icons/icon-menu.svg";
import IconMenuClose from "../assets/icons/icon-menu-close.svg";
import Image from "next/image";
const Header = ({
  menuIsActive,
  setMenuIsActive,
}: {
  menuIsActive: boolean;
  setMenuIsActive: (menuIsActive: boolean) => void;
}) => {
  return (
    <button
      className="bg-white rounded-full p-[10px] fixed top-8 right-8 z-50"
      onClick={() => setMenuIsActive(!menuIsActive)}
    >
      {menuIsActive ? (
        <Image src={IconMenuClose} alt="icon-menu-close" />
      ) : (
        <Image src={IconMenu} alt="icon-menu" />
      )}
    </button>
  );
};

export default Header;
