import { ChallengeLink } from "./components/ChallengeLink";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ChallengeLink title="News Homepage Challenge" href="/news-homepage" />{" "}
    </main>
  );
}
