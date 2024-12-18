import { ChallengeLink } from "./components/ChallengeLink";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <ChallengeLink title="News Homepage Challenge" href="/news-homepage" />
      <ChallengeLink
        title="Results Summary Component Challenge"
        href="/results-summary-component"
      />
      <ChallengeLink
        title="Social Links Profile Challenge"
        href="/social-links-profile"
      />
      <ChallengeLink
        title="Pixel Transition Effect"
        href="/pixel-transition-effect"
      />
    </main>
  );
}
