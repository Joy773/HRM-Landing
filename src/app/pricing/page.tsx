import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PricingSection from "@/components/PricingSection";
import TryFrybixSection from "@/components/TryFrybixSection";
import Link from "next/link";

export default function PricingPage() {
  return (
    <div
      className="min-h-screen overflow-x-hidden dot-pattern w-full flex flex-col items-center"
      style={{ backgroundColor: "#f8f7fc" }}
    >
      <div className="w-full">
        <Navbar />
      </div>
      <main className="w-full max-w-[1600px] flex flex-col items-center flex-1">
        <PricingSection />
        <p className="pt-4 pb-4 text-center text-slate-500 text-sm">
          <Link href="/" className="text-[#5B4B8A] hover:underline">
            ← Back to home
          </Link>
        </p>
        <TryFrybixSection />
      </main>
      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
}
