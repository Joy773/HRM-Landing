"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

function ShareIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="18" cy="5" r="3" />
      <circle cx="6" cy="12" r="3" />
      <circle cx="18" cy="19" r="3" />
      <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
      <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
    </svg>
  );
}

function InfoIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="16" x2="12" y2="12" />
      <line x1="12" y1="8" x2="12.01" y2="8" />
    </svg>
  );
}

export function LegalDocLayout({
  breadcrumbTitle,
  children,
}: {
  breadcrumbTitle: string;
  children: React.ReactNode;
}) {
  const [shareCopied, setShareCopied] = useState(false);
  const [infoOpen, setInfoOpen] = useState(false);

  useEffect(() => {
    if (!infoOpen) return;
    const onEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setInfoOpen(false);
    };
    window.addEventListener("keydown", onEscape);
    return () => window.removeEventListener("keydown", onEscape);
  }, [infoOpen]);

  const handleShare = () => {
    const url = typeof window !== "undefined" ? window.location.href : "";
    const title = `${breadcrumbTitle} – Legal Notes`;

    const doShare = async () => {
      try {
        if (typeof navigator !== "undefined" && navigator.share) {
          await navigator.share({
            title,
            url,
            text: `View ${breadcrumbTitle}`,
          });
        } else {
          await navigator.clipboard.writeText(url);
          setShareCopied(true);
          setTimeout(() => setShareCopied(false), 2000);
        }
      } catch {
        if (typeof navigator !== "undefined" && navigator.clipboard) {
          await navigator.clipboard.writeText(url);
          setShareCopied(true);
          setTimeout(() => setShareCopied(false), 2000);
        }
      }
    };

    setTimeout(() => void doShare(), 0);
  };

  return (
    <div className="w-full overflow-hidden">
      <header className="flex flex-wrap items-center justify-between gap-4 px-6 lg:px-10 py-4 border-b border-slate-200/60">
        <nav className="text-sm text-slate-600" aria-label="Breadcrumb">
          <Link
            href="/"
            className="text-[#5B4B8A] hover:underline font-medium"
          >
            Legal Notes
          </Link>
          <span className="mx-2 text-slate-400">›</span>
          <span className="text-slate-900 font-medium">{breadcrumbTitle}</span>
        </nav>
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={handleShare}
            className="p-2 text-slate-500 hover:text-slate-700 hover:bg-white/50 active:scale-95 rounded-lg transition-transform duration-75 relative touch-manipulation"
            aria-label="Share this page"
          >
            <ShareIcon />
            {shareCopied && (
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-slate-800 text-white text-xs rounded whitespace-nowrap">
                Link copied
              </span>
            )}
          </button>
          <button
            type="button"
            onClick={() => setInfoOpen(true)}
            className="p-2 text-slate-500 hover:text-slate-700 hover:bg-white/50 rounded-lg transition-colors"
            aria-label="Information"
          >
            <InfoIcon />
          </button>
        </div>
      </header>

      {infoOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40"
          onClick={() => setInfoOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="info-dialog-title"
        >
          <div
            className="bg-white rounded-xl shadow-lg max-w-md w-full p-6 border border-slate-200"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 id="info-dialog-title" className="text-lg font-semibold text-slate-900 mb-2">
              About this document
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              This page is part of our legal documentation. For questions about these policies or to request assistance, please contact us through the contact information provided on our website or in the relevant policy.
            </p>
            <button
              type="button"
              onClick={() => setInfoOpen(false)}
              className="w-full py-2 px-4 rounded-lg bg-[#5B4B8A] text-white font-medium hover:opacity-90 transition-opacity"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <main className="min-h-[60vh] p-6 lg:p-10 overflow-auto">{children}</main>
    </div>
  );
}

export default function PrivacyPolicySection() {
  return (
    <LegalDocLayout breadcrumbTitle="Privacy Policy">
      <p className="text-slate-600 leading-relaxed mb-10">
        At Frybix (&quot;we,&quot; &quot;our,&quot; &quot;us&quot;), we value your privacy and are committed to protecting your personal information. This Privacy Policy outlines our practices regarding the collection, use, disclosure, and protection of your data when you visit our website. By using our services, you agree to the terms of this policy. Please read it carefully to understand how we handle your information.
      </p>

      <section id="introduction" className="mb-10">
        <h2 className="text-xl lg:text-2xl font-bold text-slate-900 mb-4">
          1. Introduction
        </h2>
        <p className="text-slate-600 leading-relaxed">
          Frybix is dedicated to creating a safe and secure online environment for users and website visitors. We understand the importance of privacy and are committed to safeguarding your personal information. This Privacy Policy explains our practices concerning the collection, use, and sharing of your data. We encourage you to review this policy regularly as we may update it periodically to reflect changes in our practices and legal requirements.
        </p>
      </section>

      <section id="information-we-collect" className="mb-10">
        <h2 className="text-xl lg:text-2xl font-bold text-slate-900 mb-4">
          2. Information We Collect
        </h2>
        <p className="text-slate-600 leading-relaxed mb-4">
          We may collect information that you provide directly to us, such as when you create an account, fill out a form, or contact us. This may include your name, email address, company name, job title, and any other information you choose to provide.
        </p>
        <p className="text-slate-600 leading-relaxed">
          We also automatically collect certain information when you visit our website, including your IP address, browser type, device information, and usage data through cookies and similar technologies. We use this information to improve our services and your experience.
        </p>
      </section>

      <section id="how-we-use" className="mb-10">
        <h2 className="text-xl lg:text-2xl font-bold text-slate-900 mb-4">
          3. How We Use Your Information
        </h2>
        <p className="text-slate-600 leading-relaxed">
          We use the information we collect to provide, maintain, and improve our services; to communicate with you; to personalize your experience; and to comply with legal obligations. We do not sell your personal information to third parties.
        </p>
      </section>

      <section id="data-protection" className="mb-10">
        <h2 className="text-xl lg:text-2xl font-bold text-slate-900 mb-4">
          4. Data Protection and Security
        </h2>
        <p className="text-slate-600 leading-relaxed">
          We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. Your data is stored securely and accessed only by authorized personnel.
        </p>
      </section>

      <section id="contact" className="mb-10">
        <h2 className="text-xl lg:text-2xl font-bold text-slate-900 mb-4">
          5. Contact Us
        </h2>
        <p className="text-slate-600 leading-relaxed">
          If you have questions about this Privacy Policy or our practices, please contact us at the email address provided on our website. We will respond to your request in accordance with applicable law.
        </p>
      </section>
    </LegalDocLayout>
  );
}
