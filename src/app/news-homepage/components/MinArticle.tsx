import Image, { StaticImageData } from "next/image";

export const MinArticle = ({
  src,
  alt,
  title,
  subTitile,
}: {
  src: StaticImageData;
  alt: string;
  title: string;
  subTitile: string;
}) => {
  return (
    <div className="flex md:w-[370px] mb-[30px] lg:mb-[0px]">
      <Image
        className="w-[120px] h-[130px] md:w-[140px] md:h-[150px] mr-[15px] md:mr-[25px]"
        src={src}
        alt={alt}
      />
      <div>
        <p className="text-[40px] font-bold text-Grayish-blue ">02</p>
        <p className="font-bold text-Very-dark-blue text-[14px] md:text-[15px]">
          {title}
        </p>
        <p className="text-[13px] md:text-[15px] mt-[9px] md:mt-[15px] text-Dark-grayish-blue">
          {subTitile}
        </p>
      </div>
    </div>
  );
};
