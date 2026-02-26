import Navbar from "@/components/Navbar";
import LandingContent from "@/components/LandingContent";
import TrustedBy from "@/components/TrustedBy";
import OnePlatformSection from "@/components/OnePlatformSection";
import TasksAndProgressSection from "@/components/TasksAndProgressSection";
import ConnectionsSection from "@/components/ConnectionsSection";
import BusinessSegmentSection from "@/components/BusinessSegmentSection";
import TryFrybixSection from "@/components/TryFrybixSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div
      className="min-h-screen overflow-x-hidden dot-pattern w-full flex flex-col items-center"
      style={{ backgroundColor: "#f8f7fc" }}
    >
      <div className="w-full">
        <Navbar />
      </div>
      <div className="w-full max-w-[1600px] flex flex-col items-center flex-1">
        <LandingContent />
        <TrustedBy />
        <OnePlatformSection />
        <TasksAndProgressSection />
        <ConnectionsSection />
        <BusinessSegmentSection />
        <TryFrybixSection />
        <Footer />
      </div>
    </div>
  );
}
