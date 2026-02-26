import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQSection from "@/components/FAQSection";
import TryFrybixSection from "@/components/TryFrybixSection";
import Link from "next/link";

export default function FAQsPage() {
  return (
    <div
      className="min-h-screen overflow-x-hidden dot-pattern w-full flex flex-col items-center"
      style={{ backgroundColor: "#f8f7fc" }}
    >
      <div className="w-full">
        <Navbar />
      </div>
      <main className="w-full max-w-[1600px] flex flex-col items-center flex-1 px-6 lg:px-12 py-16">
        <div className="w-full">
          <FAQSection />
        </div>
        <p className="mt-12 text-center text-slate-500 text-sm">
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
