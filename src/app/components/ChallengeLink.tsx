import Link from "next/link";

export const ChallengeLink = ({
  title,
  href,
}: {
  title: string;
  href: string;
}) => {
  return (
    <Link
      href={href}
      className="group rounded-lg border border-transparent px-5 py-4 m-2 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
      target="_blank"
    >
      {title}
    </Link>
  );
};
