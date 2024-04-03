export const NewArticle = ({
  title,
  subTitle,
}: {
  title: string;
  subTitle: string;
}): JSX.Element => {
  return (
    <div className="border-2 border-transparent border-b-Dark-grayish-blue mb-[30px]">
      <p className="text-Off-white font-semibold">{title}</p>
      <p className="text-Dark-grayish-blue text-[15px] mt-[10px] mb-[30px]">
        {subTitle}
      </p>
    </div>
  );
};
