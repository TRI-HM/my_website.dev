// import Timeline from "./components/timeline/Timeline";

import PortfolioGame from "./(pages)/portfolioGame/page";
// import Profile from "./(pages)/profile/page";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-slate-300">
      {/* <Profile /> */}
      <PortfolioGame />
    </div>
  );
}
