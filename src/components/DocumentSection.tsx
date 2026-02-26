"use client";

import Link from "next/link";
import { useState, useEffect, useRef, useCallback } from "react";

type DocLink = { label: string; sectionId: string };

const docSidebarSections: { title: string; links: DocLink[] }[] = [
  {
    title: "Getting Started",
    links: [
      { label: "Introduction", sectionId: "introduction" },
      { label: "Quick Start", sectionId: "getting-started" },
      { label: "Installation", sectionId: "installation" },
    ],
  },
  {
    title: "Guides",
    links: [
      { label: "User Guide", sectionId: "how-it-works" },
      { label: "Best Practices", sectionId: "api-integrations" },
      { label: "Troubleshooting", sectionId: "contact-support" },
    ],
  },
  {
    title: "API Reference",
    links: [
      { label: "API Overview", sectionId: "api-integrations" },
      { label: "Authentication", sectionId: "api-integrations" },
      { label: "Endpoints", sectionId: "api-integrations" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Changelog", sectionId: "contact-support" },
      { label: "FAQ", sectionId: "contact-support" },
      { label: "Support", sectionId: "contact-support" },
    ],
  },
];

const SECTION_IDS: string[] = [
  "introduction",
  "getting-started",
  "installation",
  "how-it-works",
  "api-integrations",
  "contact-support",
];

function DocumentIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <line x1="10" y1="9" x2="8" y2="9" />
    </svg>
  );
}

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

export default function DocumentSection() {
  const [shareCopied, setShareCopied] = useState(false);
  const [infoOpen, setInfoOpen] = useState(false);
  const [activeSectionId, setActiveSectionId] = useState<string>("introduction");
  const mainRef = useRef<HTMLElement>(null);
  const breadcrumbTitle = "Documentation";

  const scrollToSection = useCallback((sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      setActiveSectionId(sectionId);
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  useEffect(() => {
    if (!infoOpen) return;
    const onEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setInfoOpen(false);
    };
    window.addEventListener("keydown", onEscape);
    return () => window.removeEventListener("keydown", onEscape);
  }, [infoOpen]);

  useEffect(() => {
    const main = mainRef.current;
    if (!main) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const id = entry.target.getAttribute("id");
          if (id && SECTION_IDS.includes(id)) setActiveSectionId(id);
        }
      },
      { root: main, rootMargin: "-20% 0px -60% 0px", threshold: 0 }
    );

    const timer = setTimeout(() => {
      SECTION_IDS.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.observe(el);
      });
    }, 100);
    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  const handleShare = () => {
    const url = typeof window !== "undefined" ? window.location.href : "";
    const title = `${breadcrumbTitle} – Docs`;

    const doShare = async () => {
      try {
        if (typeof navigator !== "undefined" && navigator.share) {
          await navigator.share({ title, url, text: `View ${breadcrumbTitle}` });
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
      {/* Header: breadcrumbs + share/info icons */}
      <header className="flex flex-wrap items-center justify-between gap-4 px-6 lg:px-10 py-4 border-b border-slate-200/60">
        <nav className="text-sm text-slate-600" aria-label="Breadcrumb">
          <Link href="/docs" className="text-[#5B4B8A] hover:underline font-medium">
            Docs
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

      {/* Info modal */}
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
              About this documentation
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              This is the Frybix documentation. Find guides, API references, and resources to get the most out of the platform. For questions or support, contact us through the website.
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

      <div className="flex flex-col lg:flex-row min-h-[60vh]">
        {/* Left sidebar */}
        <aside className="lg:w-72 shrink-0 border-b lg:border-b-0 lg:border-r border-slate-200/60">
          <nav className="p-4 lg:p-6 sticky top-0" aria-label="Documentation navigation">
            {docSidebarSections.map((section) => (
              <div key={section.title} className="mb-6 last:mb-0">
                <h2 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">
                  {section.title}
                </h2>
                <ul className="space-y-1">
                  {section.links.map((link) => {
                    const isActive = activeSectionId === link.sectionId;
                    return (
                      <li key={`${link.sectionId}-${link.label}`}>
                        <button
                          type="button"
                          onClick={() => scrollToSection(link.sectionId)}
                          className={`w-full flex items-center gap-2 py-2 px-3 rounded-lg text-sm transition-colors text-left ${
                            isActive
                              ? "bg-white/70 text-slate-900 font-medium"
                              : "text-slate-600 hover:bg-white/50 hover:text-slate-900"
                          }`}
                        >
                          <DocumentIcon className="shrink-0 text-slate-500" />
                          {link.label}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </nav>
        </aside>

        {/* Main content */}
        <main ref={mainRef} className="flex-1 p-6 lg:p-10 overflow-auto">
          <p className="text-slate-600 leading-relaxed mb-10">
            Welcome to the Frybix documentation. Frybix is a hub for managing productivity tasks professionally and efficiently. This guide will help you get started, integrate with your workflow, and make the most of the platform.
          </p>

          <section id="introduction" className="mb-10">
            <h2 className="text-xl lg:text-2xl font-bold text-slate-900 mb-4">
              1. Introduction
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Frybix is designed to bring your tasks, appointments, and team collaboration into one place. We provide a secure and intuitive environment so you can focus on what matters. This documentation explains how to set up your account, use key features, and connect with the tools you already use.
            </p>
          </section>

          <section id="getting-started" className="mb-10">
            <h2 className="text-xl lg:text-2xl font-bold text-slate-900 mb-4">
              2. Getting Started
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Sign up for a free account, choose a plan that fits your needs, and start adding your first tasks or projects. You can invite your team and connect your calendar and other tools in a few clicks.
            </p>
            <p className="text-slate-600 leading-relaxed">
              We recommend completing the in-app onboarding tour and exploring the dashboard before diving into advanced features.
            </p>
          </section>

          <section id="installation" className="mb-10">
            <h2 className="text-xl lg:text-2xl font-bold text-slate-900 mb-4">
              3. Installation
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Install the Frybix app from the web dashboard or your device&apos;s app store. Sign in with your account to sync your data. For team plans, an admin can invite members and manage access from the settings page.
            </p>
          </section>

          <section id="how-it-works" className="mb-10">
            <h2 className="text-xl lg:text-2xl font-bold text-slate-900 mb-4">
              4. How It Works
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Frybix organizes your work into tasks, projects, and timelines. Use the AI scheduling assistant to optimize your calendar, set priorities, and get reminders. All your data is synced across devices and protected with industry-standard security.
            </p>
          </section>

          <section id="api-integrations" className="mb-10">
            <h2 className="text-xl lg:text-2xl font-bold text-slate-900 mb-4">
              5. API & Integrations
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Developers can use our API to build custom integrations, automate workflows, and connect Frybix with other services. Authentication is handled via API keys. See the API Reference section in the sidebar for endpoints and examples.
            </p>
          </section>

          <section id="contact-support" className="mb-10">
            <h2 className="text-xl lg:text-2xl font-bold text-slate-900 mb-4">
              6. Contact & Support
            </h2>
            <p className="text-slate-600 leading-relaxed">
              If you have questions about the documentation or need assistance, contact us at Help@Frybix.Com or use the in-app chat. We also provide video tutorials and a help center for common tasks and troubleshooting.
            </p>
          </section>
        </main>
      </div>
    </div>
  );
}
