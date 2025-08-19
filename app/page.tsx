import LeftSection from "@/components/UI/profile/leftSection/LeftSection";
import RightSection from "@/components/UI/profile/rightSection/RightSection";

export default function Home() {
  return (
    <section className="flex flex-row">
      {/* Left section - Fixed position */}
      <div className="w-1/4 bg-gray-300 h-screen fixed top-0 left-0 z-10">
        <LeftSection />
      </div>
      {/* Right section - Scrollable with left margin to avoid overlap */}
      <div className="w-3/4 ml-[50%] h-auto overflow-y-auto">
        <RightSection />
      </div>
    </section>
  );
}
