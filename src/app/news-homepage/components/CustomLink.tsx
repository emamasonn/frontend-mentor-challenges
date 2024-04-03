import Link from "next/link";

export const CustomLink = ({
  name,
  href,
}: {
  name: string;
  href: string;
}): JSX.Element => {
  return (
    <Link className="text-Dark-grayish-blue hover:text-Soft-red" href={href}>
      {name}
    </Link>
  );
};
