"use client";
import CoupleImageSection from "./components/coupleImage/page";
import EventInfoSection from "./components/eventInfo/page";
import FooterSection from "./components/footer/page";
import HeroSection from "./components/hero/page";
import LoveStorySection from "./components/loveStory/page";
import MapSection from "./components/map/page";
import RSVPSection from "./components/rsvpFrom/page";
import TimelineSection from "./components/timeline/page";
import WishesSection from "./components/wishes/page";

export default function WeddingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 via-rose-50 to-white text-gray-800 font-sans text-center px-6 py-16">
      <div className="max-w-3xl mx-auto">
        <HeroSection />
        <EventInfoSection />
        <LoveStorySection />
        <CoupleImageSection />
        <TimelineSection />
        <RSVPSection />
        <WishesSection />
        <MapSection />
        <FooterSection />
      </div>
    </div>
  );
}
