import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { LegalDocLayout } from "@/components/PrivacyPolicySection";
import Link from "next/link";

const POLICY_TITLES: Record<string, string> = {
  "terms-of-service": "Terms of Service",
  "user-content-agreement": "User Content Agreement",
  "cookies-policy": "Cookies Policy",
  "data-protection-policy": "Data Protection Policy",
  "refund-policy": "Refund Policy",
  "intellectual-property-rights": "Intellectual Property Rights",
  "dispute-resolution": "Dispute Resolution",
  "accessibility-statement": "Accessibility Statement",
  "third-party-links": "Third-Party Links",
  "policy-updates": "Policy Updates",
};

export default async function LegalPolicyPage({
  params,
}: {
  params: Promise<{ policy: string }>;
}) {
  const { policy: slug } = await params;
  const title = POLICY_TITLES[slug] ?? slug.replace(/-/g, " ");

  return (
    <div
      className="min-h-screen overflow-x-hidden dot-pattern w-full flex flex-col items-center"
      style={{ backgroundColor: "#f8f7fc" }}
    >
      <div className="w-full">
        <Navbar />
      </div>
      <div className="w-full max-w-[1600px] px-4 sm:px-6 lg:px-12 pt-8 pb-4 mt-10 flex flex-col items-center text-center">
        <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold text-[#5B4B8A] border-2 border-[#5B4B8A] bg-transparent">
          {title}
        </span>
        <h1 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
          {title}
        </h1>
      </div>
      <main className="w-full max-w-[1600px] flex flex-col items-center flex-1 px-4 sm:px-6 lg:px-12 py-8 lg:py-16">
        <div className="w-full">
          <LegalDocLayout breadcrumbTitle={title}>
            <p className="text-slate-600 leading-relaxed">
              This policy is currently being updated. Please check back soon or
              contact us if you need assistance.
            </p>
          </LegalDocLayout>
        </div>
        <p className="mt-8 text-center text-slate-500 text-sm">
          <Link href="/" className="text-[#5B4B8A] hover:underline">
            ← Back to home
          </Link>
        </p>
      </main>
      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
}
