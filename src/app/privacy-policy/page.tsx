import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PrivacyPolicySection from "@/components/PrivacyPolicySection";
import TryFrybixSection from "@/components/TryFrybixSection";
import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
    <div
      className="min-h-screen overflow-x-hidden dot-pattern w-full flex flex-col items-center"
      style={{ backgroundColor: "#f8f7fc" }}
    >
      <div className="w-full">
        <Navbar />
      </div>
      {/* Top title block */}
      <div className="w-full max-w-[1600px] px-4 sm:px-6 lg:px-12 pt-8 pb-4 mt-10 flex flex-col items-center text-center">
        <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold text-[#5B4B8A] border-2 border-[#5B4B8A] bg-transparent">
          Privacy & Policy
        </span>
        <h1 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
          Privacy & Policy
        </h1>
        <p className="mt-6 text-slate-600 text-sm">
          Last Updated: 25 December 2025
        </p>
      </div>
      <main className="w-full max-w-[1600px] flex flex-col items-center flex-1 px-4 sm:px-6 lg:px-12 py-8 lg:py-16">
        <div className="w-full">
          <PrivacyPolicySection />
        </div>
        <p className="mt-8 text-center text-slate-500 text-sm">
          <Link href="/" className="text-[#5B4B8A] hover:underline">
            ← Back to home
          </Link>
        </p>
      </main>
      <div className="w-full">
        <TryFrybixSection />
      </div>
      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
}
