import Image from "next/image";
import { Hanken_Grotesk } from "next/font/google";
import IconMemory from "./assets/icons/icon-memory.svg";
import IconReaction from "./assets/icons/icon-reaction.svg";
import IconVerbal from "./assets/icons/icon-verbal.svg";
import IconVisual from "./assets/icons/icon-visual.svg";

const hanken_grotesk = Hanken_Grotesk({
  weight: ["500", "700", "800"],
  subsets: ["latin"],
  display: "swap",
});

export default function Home() {
  return (
    <main className={`bg-White min-h-screen pt-8 ${hanken_grotesk.className}`}>
      <section className="mx-auto w-[374px] md:w-[590px] md:h-[420px] md:flex rounded-3xl shadow-xl shadow-Cobalt-blue-alpha">
        <div className="bg-gradient-to-b from-Light-slate-blue to-Light-royal-blue text-center pb-8 pt-8 px-10 rounded-b-3xl md:rounded-3xl md:w-[300px]">
          <h2 className="text-Light-lavender text-[18px] mb-6">Your Result</h2>
          <div className="grid place-content-center rounded-full bg-gradient-to-t from-Light-slate-blue to-Light-royal-blue h-[140px] w-[140px] mb-6 mx-auto">
            <p className="text-White text-4xl font-bold">76</p>
            <p className="text-[13px] text-Light-lavender">of 100</p>
          </div>
          <p className="text-White text-[23px] mb-3">Great</p>
          <p className="text-Light-lavender text-[15px]">
            You scored higher than 65% of the people who have taken these tests.
          </p>
        </div>
        <div className="p-8 md:w-[300px] text-Dark-gray-blue">
          <h2 className=" text-[18px]">Summary</h2>
          <div className="bg-Light-red-alpha w-full flex justify-between p-3 mt-4 text-[14px] rounded-md">
            <p className="flex text-Light-red">
              <Image src={IconReaction} alt="Icon Reaction" />
              <span className="ml-2 ">Reaction</span>
            </p>
            <p>
              80 <span className="text-Dark-gray-blue-alpha">/ 100</span>
            </p>
          </div>
          <div className="bg-Orangey-yellow-alpha w-full flex justify-between p-3 mt-4 text-[14px] rounded-md">
            <p className="flex text-Orangey-yellow">
              <Image src={IconMemory} alt="Icon Memory" />
              <span className="ml-2 ">Memory</span>
            </p>
            <p>
              92 <span className="text-Dark-gray-blue-alpha">/ 100</span>
            </p>
          </div>
          <div className="bg-Green-teal-alpha w-full flex justify-between p-3 mt-4 text-[14px] rounded-md">
            <p className="flex text-Green-teal">
              <Image src={IconVerbal} alt="Icon Verbal" />
              <span className="ml-2 ">Verbal</span>
            </p>
            <p>
              61 <span className="text-Dark-gray-blue-alpha">/ 100</span>
            </p>
          </div>
          <div className="bg-Cobalt-blue-alpha w-full flex justify-between p-3 mt-4 text-[14px] rounded-md">
            <p className="flex text-Cobalt-blue">
              <Image src={IconVisual} alt="Icon Visual" />
              <span className="ml-2 ">Visual</span>
            </p>
            <p>
              72 <span className="text-Dark-gray-blue-alpha">/ 100</span>
            </p>
          </div>
          <button className=" bg-Dark-gray-blue hover:bg-gradient-to-b from-Light-slate-blue to-Light-royal-blue text-White text-[14px] w-full p-3 mt-12 rounded-3xl">
            Continue
          </button>
        </div>
      </section>

      <div className="text-md text-center mt-20 text-Off-black">
        Challenge by{" "}
        <a
          className="text-Violet-blue"
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a className="text-Violet-blue" href="#">
          Emanuel Mason
        </a>
        .
      </div>
    </main>
  );
}
