import Avatar from "./assets/images/avatar-jessica.jpeg";
import Image from "next/image";
import Link from "next/link";

const CustomLink = ({
  text,
  href,
}: {
  text: string;
  href: string;
}): JSX.Element => {
  return (
    <Link
      className="bg-Grey w-full mb-[15px] p-[10px] rounded-md text-center hover:bg-Green hover:text-Grey"
      href={href}
      target="_blank"
    >
      {text}
    </Link>
  );
};

export default function Home() {
  return (
    <main>
      <section className="w-[326px] h-[581px] bg-Dark-grey mx-auto mt-10 rounded-xl flex flex-col items-center px-[20px] py-[30px] md:px-[30px] text-White text-[14px] ">
        <Image
          src={Avatar}
          alt="Avatar image"
          className="w-[100px] h-[100px] rounded-full mb-[20px]"
        />
        <h2 className="text-[25px] mb-[5px]">Jessica Randall</h2>
        <p className="text-Green mb-[20px]">London, United Kingdom</p>
        <p className="text-[12px] mb-[20px]">{`"Front-end developer and avid reader."`}</p>
        <CustomLink href="#" text="GitHub" />
        <CustomLink href="#" text="Frontend Mentor" />
        <CustomLink href="#" text="LinkedIn" />
        <CustomLink href="#" text="Twitter" />
        <CustomLink href="#" text="Instagram" />
      </section>

      <div className="text-center mt-[50px] text-White">
        Challenge by{" "}
        <Link
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          className="text-Green"
        >
          Frontend Mentor
        </Link>
        . Coded by{" "}
        <Link href="#" className="text-Green">
          Emanuel Mason
        </Link>
        .
      </div>
    </main>
  );
}
