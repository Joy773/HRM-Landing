"use client";

import { useState } from "react";

export type FAQItem = {
  id: string;
  question: string;
  answer: string;
};

const defaultFAQs: FAQItem[] = [
  {
    id: "1",
    question: "What is Frybix?",
    answer: "Frybix is a productivity hub designed to help you manage tasks professionally and efficiently. It brings your workflow, appointments, and team collaboration into one place.",
  },
  {
    id: "2",
    question: "How do I get started?",
    answer: "Sign up for a free account, choose a plan that fits your needs, and start adding your first tasks or projects. You can invite your team and connect your tools in a few clicks.",
  },
  {
    id: "3",
    question: "Can I change my plan later?",
    answer: "Yes. You can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle, and we'll prorate any difference.",
  },
  {
    id: "4",
    question: "Is there a free trial?",
    answer: "Our Pro plan comes with a 7-day free trial. No credit card is required to start. You can explore all Pro features before deciding to subscribe.",
  },
  {
    id: "5",
    question: "How can I contact support?",
    answer: "You can reach us at Help@Frybix.Com or use the in-app chat. Pro and Advanced plan users get priority support with faster response times.",
  },
  {
    id: "6",
    question: "How does the AI Scheduling Assistant work?",
    answer: "Our AI analyzes your calendar, preferences, and priorities to suggest optimal meeting times, reschedule conflicts, and send smart reminders so you stay on track without the manual work.",
  },
  {
    id: "7",
    question: "What is your cancellation policy?",
    answer: "You can cancel your plan at any time. We'll refund the unused portion of your subscription. No long-term contracts or cancellation fees.",
  },
  {
    id: "8",
    question: "Do you offer onboarding or training?",
    answer: "Yes. Pro and Advanced plans include a free onboarding call. We also provide in-app guides, video tutorials, and a help center to get you and your team up to speed quickly.",
  },
  {
    id: "9",
    question: "Can I use Frybix with my existing tools?",
    answer: "Frybix integrates with popular calendars, email, and project tools. Connect your workspace in settings and we'll sync your events and tasks so everything stays in one place.",
  },
  {
    id: "10",
    question: "Is my data secure?",
    answer: "We take security seriously. Your data is encrypted in transit and at rest. We're compliant with industry standards and never sell or share your information with third parties.",
  },
  {
    id: "11",
    question: "How many team members can I add?",
    answer: "Free plans support up to 3 members. Pro allows unlimited members per workspace. Advanced includes dedicated seats and team management tools.",
  },
  {
    id: "12",
    question: "Can I export my data?",
    answer: "Yes. You can export tasks, calendars, and reports as CSV or PDF from the settings or report sections. Advanced plans also support API access for custom exports.",
  },
  {
    id: "13",
    question: "Does Frybix work offline?",
    answer: "The web app works best online. Our mobile apps support limited offline access for viewing and editing tasks; changes sync when you're back online.",
  },
  {
    id: "14",
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, debit cards, and PayPal. Annual plans can be paid by invoice for Advanced and enterprise customers.",
  },
  {
    id: "15",
    question: "How often do you release updates?",
    answer: "We ship new features and improvements regularly. You'll get release notes in the app and by email. All plans include access to the latest updates at no extra cost.",
  },
  {
    id: "16",
    question: "Can I set up recurring tasks?",
    answer: "Yes. You can create daily, weekly, monthly, or custom recurring tasks. The AI Scheduling Assistant can suggest the best times based on your availability.",
  },
  {
    id: "17",
    question: "Is there a mobile app?",
    answer: "Frybix is available on iOS and Android. Download from the App Store or Google Play to manage tasks, get reminders, and sync with your desktop workspace.",
  },
  {
    id: "18",
    question: "How do reminders work?",
    answer: "You can set reminders by time or location. We send push notifications, email, and in-app alerts. Pro and Advanced users get smart reminders powered by the AI assistant.",
  },
  {
    id: "19",
    question: "Can I customize my workspace?",
    answer: "Yes. You can rename workspaces, set colors and icons, create custom views, and configure notifications. Advanced plans include custom fields and workflows.",
  },
  {
    id: "20",
    question: "What happens when my trial ends?",
    answer: "We'll notify you before the trial ends. You can subscribe to keep Pro features or switch to the free plan. Your data is never deleted; you just lose access to Pro-only features.",
  },
  {
    id: "21",
    question: "Do you have an API?",
    answer: "Advanced and enterprise plans include API access for integrating Frybix with your own apps, scripts, or internal tools. Documentation and support are included.",
  },
  {
    id: "22",
    question: "How do I invite someone to my workspace?",
    answer: "Go to Settings > Team, then click Invite. Enter their email and choose a role (admin, member, or viewer). They'll receive an email to join the workspace.",
  },
  {
    id: "23",
    question: "Can I use Frybix for personal and work?",
    answer: "Yes. You can create separate workspaces for personal and work. Each workspace has its own members, tasks, and settings. One account can have multiple workspaces.",
  },
  {
    id: "24",
    question: "What's the difference between Free and Pro?",
    answer: "Free includes core tasks and basic features. Pro adds the AI Scheduling Assistant, unlimited members, advanced analytics, priority support, and more integrations.",
  },
  {
    id: "25",
    question: "How do I delete my account?",
    answer: "You can delete your account from Account settings. We'll ask you to confirm and then remove your data within 30 days. Export any data you need before deleting.",
  },
  {
    id: "26",
    question: "Can I import from other tools?",
    answer: "We support import from popular task and project tools via CSV or our migration guides. Pro and Advanced users can request assisted migration from our team.",
  },
  {
    id: "27",
    question: "Are there keyboard shortcuts?",
    answer: "Yes. Frybix supports keyboard shortcuts for quick actions like creating tasks, switching views, and searching. View the full list in the app under Help > Shortcuts.",
  },
  {
    id: "28",
    question: "What languages does Frybix support?",
    answer: "The app is available in English, Spanish, French, and German. More languages are on the roadmap. You can change the language in your account settings.",
  },
  {
    id: "29",
    question: "How do I get an invoice?",
    answer: "Invoices are available in the Billing section of your account. You can download them as PDF and set up automatic forwarding to your finance team or email.",
  },
  {
    id: "30",
    question: "Can I try Advanced before upgrading?",
    answer: "Contact our team for a custom demo or pilot. We can arrange a short-term trial of Advanced features for teams evaluating enterprise needs.",
  },
];

type FAQSectionProps = {
  items?: FAQItem[];
};

const INITIAL_VISIBLE = 10;

export default function FAQSection({ items = defaultFAQs }: FAQSectionProps) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null);
  const [search, setSearch] = useState("");
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE);
  const filteredItems = search.trim()
    ? items.filter(
        (item) =>
          item.question.toLowerCase().includes(search.toLowerCase()) ||
          item.answer.toLowerCase().includes(search.toLowerCase())
      )
    : items;
  const visibleItems = filteredItems.slice(0, visibleCount);
  const hasMore = visibleCount < filteredItems.length;
  const canShowLess = visibleCount >= filteredItems.length && filteredItems.length > INITIAL_VISIBLE;

  const loadMore = () => {
    setVisibleCount(filteredItems.length);
  };

  const showLess = () => {
    setVisibleCount(INITIAL_VISIBLE);
  };

  return (
    <section className="w-full max-w-[1600px] mx-auto">
      {/* FAQs tag */}
      <div className="text-center">
        <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold text-[#5B4B8A] border-2 border-[#5B4B8A] bg-transparent">
          FAQs
        </span>
      </div>
      <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight text-center">
        What can we help you find?
      </h2>
      {/* Search bar */}
      <div className="relative mt-6 max-w-md mx-auto">
        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" aria-hidden>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </span>
        <input
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search"
          className="w-full pl-12 pr-4 py-3.5 rounded-full border border-slate-200 bg-slate-50/80 text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#5B4B8A]/30 focus:border-[#5B4B8A]"
          aria-label="Search FAQs"
        />
      </div>
      <p className="mt-4 text-center text-slate-600 text-sm max-w-lg mx-auto">
        Find quick answers to common questions about our AI Scheduling Assistant.
      </p>

      {filteredItems.length === 0 ? (
        <p className="mt-8 py-8 text-center text-slate-500 text-sm">
          No matching questions. Try a different search.
        </p>
      ) : (
        <>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {[
              visibleItems.slice(0, Math.ceil(visibleItems.length / 3)),
              visibleItems.slice(Math.ceil(visibleItems.length / 3), Math.ceil((2 * visibleItems.length) / 3)),
              visibleItems.slice(Math.ceil((2 * visibleItems.length) / 3)),
            ].map((columnItems, colIndex) => (
              <div key={colIndex} className="flex flex-col gap-5 lg:gap-6">
                {columnItems.map((item) => {
                  const isOpen = openId === item.id;
                  return (
                    <article
                      key={item.id}
                      className="rounded-xl border border-slate-200/80 bg-white shadow-sm overflow-hidden hover:shadow-md hover:border-slate-300/80 transition-shadow transition-colors"
                    >
                      <button
                        type="button"
                        onClick={() => setOpenId(isOpen ? null : item.id)}
                        className="w-full flex items-start justify-between gap-4 p-5 text-left hover:bg-slate-50/50 transition-colors"
                        aria-expanded={isOpen}
                        aria-controls={`faq-answer-${item.id}`}
                        id={`faq-question-${item.id}`}
                      >
                        <span className="font-semibold text-slate-900 text-base pr-4 flex-1 text-left">
                          {item.question}
                        </span>
                        <span
                          className="shrink-0 w-6 h-6 flex items-center justify-center text-slate-400 transition-transform duration-300 ease-in-out"
                          style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                          aria-hidden
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </span>
                      </button>
                      <div
                        id={`faq-answer-${item.id}`}
                        role="region"
                        aria-labelledby={`faq-question-${item.id}`}
                        className="grid faq-accordion-rows"
                        style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                      >
                        <div className="min-h-0 overflow-hidden">
                          <p className="px-5 pb-5 text-slate-600 text-sm leading-relaxed pr-8 transition-opacity duration-300 ease-in-out" style={{ opacity: isOpen ? 1 : 0 }}>
                            {item.answer}
                          </p>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            ))}
          </div>
          {(hasMore || canShowLess) && (
            <div className="mt-10 flex justify-center">
              <button
                type="button"
                onClick={hasMore ? loadMore : showLess}
                className="rounded-xl border-2 border-slate-300 bg-white px-6 py-3 text-slate-700 font-medium hover:bg-slate-50 hover:border-slate-400 transition-colors"
              >
                {hasMore ? "Load more" : "Show less"}
              </button>
            </div>
          )}
        </>
      )}
    </section>
  );
}
