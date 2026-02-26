import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DocumentSection from "@/components/DocumentSection";
import TryFrybixSection from "@/components/TryFrybixSection";
import Link from "next/link";

export default function DocsPage() {
  return (
    <div
      className="min-h-screen overflow-x-hidden dot-pattern w-full flex flex-col items-center"
      style={{ backgroundColor: "#f8f7fc" }}
    >
      <div className="w-full">
        <Navbar />
      </div>
      <div className="w-full max-w-[1600px] px-4 sm:px-6 lg:px-12 pt-8 pb-4 mt-10 flex flex-col items-center text-center">
        <span className="text-xs font-bold text-slate-500 border-2 border-[#5B4B8A] rounded-full px-4 py-1 uppercase tracking-wider">
          DOCUMENTATION
        </span>
        <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
          Documentation Guide
        </h1>
        <p className="mt-6 text-slate-600 text-lg max-w-2xl">
          Get started with Frybix by following our documentation guide.
        </p>
      </div>
      <main className="w-full max-w-[1600px] flex flex-col items-center flex-1 px-4 sm:px-6 lg:px-12 py-8 lg:py-16">
        <div className="w-full">
          <DocumentSection />
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
