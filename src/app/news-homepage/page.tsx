"use client";

import { useState } from "react";
import Image from "next/image";
import Logo from "./assets/icons/logo.svg";
import Web3Desktop from "./assets/images/image-web-3-desktop.jpg";
import ImageWeb3Mobile from "./assets/images/image-web-3-mobile.jpg";
import ImageRetroPcs from "./assets/images/image-retro-pcs.jpg";
import ImageTopLaptops from "./assets/images/image-top-laptops.jpg";
import ImageGamingGrowth from "./assets/images/image-gaming-growth.jpg";
import IconMenu from "./assets/icons/icon-menu.svg";
import IconMenuClose from "./assets/icons/icon-menu-close.svg";
import { CustomLink } from "./components/CustomLink";
import { NewArticle } from "./components/NewArticle";
import { MinArticle } from "./components/MinArticle";

export default function Home() {
  const [open, setOpenMenu] = useState<boolean>(false);
  return (
    <div className={`relative bg-Off-white ${!open ? "overflow-hidden" : ""}`}>
      <div
        className={`w-full flex justify-end z-10 absolute h-full top-[-40px] bg-Very-dark-blue-alpha ${
          !open ? "hidden" : ""
        }`}
      >
        <div className="w-[260px]  bg-Off-white p-[25px]">
          <div className="w-full flex justify-end mb-[80px]">
            <button className="" onClick={() => setOpenMenu(false)}>
              <Image src={IconMenuClose} alt="" />
            </button>
          </div>
          <div className="flex flex-col">
            <CustomLink name="Home" href="#" />
            <CustomLink name="New" href="#" />
            <CustomLink name="Popular" href="#" />
            <CustomLink name="Trending" href="#" />
            <CustomLink name="Categories" href="#" />
          </div>
        </div>
      </div>

      <div className="mx-[30px] md:mx-[80px] my-[40px]">
        <header>
          <nav className="flex justify-between items-center text-[15px]">
            <Image className="w-[50px]" src={Logo} alt="Logo" />
            <button
              className="block md:hidden"
              onClick={() => setOpenMenu(true)}
            >
              <Image src={IconMenu} alt="" />
            </button>

            <div className="w-[450px] md:flex justify-between hidden">
              <CustomLink name="Home" href="#" />
              <CustomLink name="New" href="#" />
              <CustomLink name="Popular" href="#" />
              <CustomLink name="Trending" href="#" />
              <CustomLink name="Categories" href="#" />
            </div>
          </nav>
        </header>
        <main className="mt-[40px]">
          <div className="flex gap-[30px] w-full flex-col lg:grid lg:grid-cols-12">
            <div className="lg:col-span-8">
              <Image
                className="w-full block md:hidden"
                src={ImageWeb3Mobile}
                alt="Image desktop"
              />
              <Image
                className="w-full h-[300px] hidden md:block"
                src={Web3Desktop}
                alt="Image desktop"
              />
              <div className="flex flex-col lg:flex-row mt-[25px] md:mt-[60px] justify-between">
                <p className="text-[40px] text-Very-dark-blue md:text-[60px] font-bold leading-[40px] md:leading-[70px] lg:w-[388px] lg:leading-[60px] lg:text-[60px]">
                  The Bright Future of Web 3.0?
                </p>
                <div className="flex flex-col items-start justify-between mt-[15px] md:mt-[30px] md:mb-[20px] lg:pl-[50px] lg:pr-[30px] lg:mt-[0px]">
                  <p className="text-Dark-grayish-blue lg:w-[360px] text-[13px] md:text-[15px] md:mb-[20px]">
                    We dive into the next evolution of the web that claims to
                    put the power of the platforms back into the hands of the
                    people. But is it really fulfilling its promise?
                  </p>
                  <button className="bg-Soft-red px-[25px] md:px-[50px] py-[7px] md:py-[10px] md:mr-[50px] text-Off-white tracking-widest mt-[25px] text-[13px] md:text-[15px]">
                    READ MORE
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-Very-dark-blue p-[15px] md:p-[30px] lg:col-span-4">
              <p className="text-Soft-orange text-[40px] mb-[15px] font-semibold">
                New
              </p>
              <NewArticle
                title="Hydrogen VS Electric Cars"
                subTitle="Will hydrogen-fueled cars ever catch up to EVs?"
              />
              <NewArticle
                title="The Downsides of AI Artistry"
                subTitle="What are the possible adverse effects of on-demand AI image
                  generation?"
              />
              <NewArticle
                title="Is VC Funding Drying Up?"
                subTitle=" Private funding by VC firms is down 50% YOY. We take a look at
                  what that means."
              />
            </div>
          </div>
          <div className="flex mt-[60px] md:mt-[50px] justify-between flex-col lg:flex-row">
            <MinArticle
              src={ImageRetroPcs}
              alt="Imagen"
              title="Reviving Retro PCs"
              subTitile=" What happens when old PCs are given modern upgrades?"
            />
            <MinArticle
              src={ImageTopLaptops}
              alt="Image"
              title="Top 10 Laptops of 2022"
              subTitile="Our best picks for various needs and budgets."
            />
            <MinArticle
              src={ImageGamingGrowth}
              alt="Image"
              title="The Growth of Gaming"
              subTitile=" How the pandemic has sparked fresh opportunities."
            />
          </div>
        </main>
      </div>
    </div>
  );
}
