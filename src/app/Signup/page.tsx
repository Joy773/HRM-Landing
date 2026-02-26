import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SignUpSection from "@/components/SignUpSection";
import TryFrybixSection from "@/components/TryFrybixSection";

export default function SignupPage() {
  return (
    <div
      className="min-h-screen overflow-x-hidden dot-pattern w-full flex flex-col items-center"
      style={{ backgroundColor: "#f8f7fc" }}
    >
      <div className="w-full">
        <Navbar />
      </div>
      <main className="w-full max-w-[1600px] flex flex-col items-center flex-1 px-4 sm:px-6 lg:px-12 py-12 lg:py-20">
        <SignUpSection />
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
