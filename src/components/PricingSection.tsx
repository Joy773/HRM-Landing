"use client";

import { useState } from "react";
import Link from "next/link";
import FadeOnView from "@/components/FadeOnView";

const featureIcons = {
  document: (
    <svg className="w-4 h-4 shrink-0 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  ),
  globe: (
    <svg className="w-4 h-4 shrink-0 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  support: (
    <svg className="w-4 h-4 shrink-0 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  ),
  chart: (
    <svg className="w-4 h-4 shrink-0 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  ),
  bell: (
    <svg className="w-4 h-4 shrink-0 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 00-6-6 6 6 0 00-6 6v3.159c0 .538-.214 1.055-.595 1.436L5 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
    </svg>
  ),
  star: (
    <svg className="w-4 h-4 shrink-0 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
    </svg>
  ),
  zap: (
    <svg className="w-4 h-4 shrink-0 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
  users: (
    <svg className="w-4 h-4 shrink-0 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  ),
  cog: (
    <svg className="w-4 h-4 shrink-0 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  export: (
    <svg className="w-4 h-4 shrink-0 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
    </svg>
  ),
};

const plans = [
  {
    id: "free",
    name: "Free Plan",
    priceMonthly: 0,
    priceYearly: 0,
    customPrice: false,
    description: "Perfect for individuals getting started with productivity tools.",
    cta: "Start for Free",
    ctaHref: "/",
    popular: false,
    accent: "slate",
    features: [
      { text: "Up to 3 projects", icon: "document" as keyof typeof featureIcons },
      { text: "Basic templates", icon: "globe" as keyof typeof featureIcons },
      { text: "Email support", icon: "support" as keyof typeof featureIcons },
      { text: "Core analytics", icon: "chart" as keyof typeof featureIcons },
    ],
  },
  {
    id: "pro",
    name: "Pro Plan",
    priceMonthly: 80,
    priceYearly: 768,
    customPrice: false,
    description: "For teams that need advanced features and priority support.",
    cta: "Buy Now",
    ctaHref: "https://buy.stripe.com/cN25nR89U9o65v2fYY",
    popular: true,
    accent: "primary",
    features: [
      { text: "Unlimited projects", icon: "document" as keyof typeof featureIcons },
      { text: "Advanced analytics", icon: "chart" as keyof typeof featureIcons },
      { text: "Smart notifications", icon: "bell" as keyof typeof featureIcons },
      { text: "Priority support", icon: "star" as keyof typeof featureIcons },
      { text: "Export & integrations", icon: "export" as keyof typeof featureIcons },
    ],
  },
  {
    id: "advance",
    name: "Advance Plan",
    priceMonthly: null,
    priceYearly: null,
    customPrice: true,
    description: "Tailored for large organizations with custom needs.",
    cta: "Contact Us",
    ctaHref: "#",
    popular: false,
    accent: "emerald",
    features: [
      { text: "Dedicated account manager", icon: "users" as keyof typeof featureIcons },
      { text: "Custom workflows", icon: "cog" as keyof typeof featureIcons },
      { text: "API & SSO", icon: "zap" as keyof typeof featureIcons },
      { text: "SLA guarantee", icon: "star" as keyof typeof featureIcons },
    ],
  },
];

type CompareCell = { type: "check" } | { type: "minus" } | { type: "text"; value: string } | { type: "checkText"; value: string };
const compareRows: { feature: string; free: CompareCell; pro: CompareCell; advanced: CompareCell }[] = [
  { feature: "Portfolio Tracking", free: { type: "text", value: "Up to 5 stocks" }, pro: { type: "text", value: "Unlimited" }, advanced: { type: "text", value: "Unlimited + Multiple Portfolios" } },
  { feature: "Real-Time Stock Data", free: { type: "check" }, pro: { type: "check" }, advanced: { type: "check" } },
  { feature: "AI-Powered Insights", free: { type: "minus" }, pro: { type: "check" }, advanced: { type: "checkText", value: "Advanced AI Models" } },
  { feature: "Custom Alerts & Notifications", free: { type: "text", value: "Limited" }, pro: { type: "text", value: "Unlimited" }, advanced: { type: "text", value: "Priority Alert Routing" } },
  { feature: "Advanced Analytics & Visualization", free: { type: "minus" }, pro: { type: "check" }, advanced: { type: "checkText", value: "Custom Dashboards" } },
  { feature: "Sector & Risk Analysis", free: { type: "text", value: "Basic" }, pro: { type: "text", value: "Full" }, advanced: { type: "text", value: "Full + Risk Scoring Model" } },
  { feature: "Watchlist Management", free: { type: "text", value: "Basic" }, pro: { type: "text", value: "Full" }, advanced: { type: "text", value: "Team Collaboration Tools" } },
  { feature: "Export Reports (PDF/CSV)", free: { type: "minus" }, pro: { type: "check" }, advanced: { type: "checkText", value: "API Access" } },
  { feature: "Customer Support", free: { type: "text", value: "Email Support" }, pro: { type: "text", value: "Priority Chat Support" }, advanced: { type: "text", value: "Dedicated Account Manager" } },
];

const comparePlanHeaders = [
  { name: "Free Plan", price: 29, description: "Free for all users", descriptionAnnual: "Free for all users" },
  { name: "Pro Plan", price: 79, description: "For growing teams", descriptionAnnual: "billed yearly" },
  { name: "Advanced Plan", price: 199, description: "For enterprises", descriptionAnnual: "billed yearly" },
];

const testimonials = [
  { name: "James L", role: "Professional Trader", avatar: "JL", quote: "This platform has completely transformed the way I manage my portfolio. The AI-driven insights and real-time tracking have helped me maximize my returns effortlessly!" },
  { name: "Sarah M", role: "Investment Analyst", avatar: "SM", quote: "Best decision I made for my investments. The analytics and support are top-notch." },
  { name: "David K", role: "Portfolio Manager", avatar: "DK", quote: "Real-time data and clean UI make my workflow so much faster. Highly recommend." },
  { name: "Emma R", role: "Retail Investor", avatar: "ER", quote: "Started as a beginner and the platform made it easy to learn and grow my portfolio." },
  { name: "Michael T", role: "Day Trader", avatar: "MT", quote: "Speed and reliability matter. This platform delivers on both every single day." },
];

function CompareCellContent({ cell, iconCircleClassName = "bg-slate-200/80" }: { cell: CompareCell; iconCircleClassName?: string }) {
  if (cell.type === "check") {
    return (
      <span className={`inline-flex w-7 h-7 items-center justify-center rounded-full ${iconCircleClassName} text-[#5B4B8A]`} aria-hidden>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
      </span>
    );
  }
  if (cell.type === "minus") {
    return (
      <span className={`inline-flex w-7 h-7 items-center justify-center rounded-full ${iconCircleClassName} text-slate-400`} aria-hidden>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" /></svg>
      </span>
    );
  }
  if (cell.type === "checkText") {
    return (
      <span className="inline-flex items-center gap-2 flex-wrap justify-center">
        <span className={`inline-flex w-7 h-7 shrink-0 items-center justify-center rounded-full ${iconCircleClassName} text-[#5B4B8A]`}>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
        </span>
        <span className="text-slate-600 text-sm">+ {cell.value}</span>
      </span>
    );
  }
  return <span className="text-slate-600 text-sm">{cell.value}</span>;
}

export default function PricingSection() {
  const [billingAnnual, setBillingAnnual] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  return (
    <section className="w-full max-w-[1600px] mx-auto px-6 lg:px-12 pt-8 pb-16 lg:pt-10 lg:pb-20">
      {/* Plans and Pricing cards */}
      <FadeOnView direction="zoomOutUp" className="text-center mb-12 lg:mb-16">
        <span className="inline-block px-4 py-1.5 border-2 border-[#5B4B8A] rounded-full text-xs font-semibold tracking-wider text-slate-600 bg-slate-100 mb-6">
          PRICING
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
          Plans and Pricing
        </h2>
        <p className="mt-4 text-slate-600 text-lg max-w-2xl mx-auto">
          Choose a plan that fits your goals, whether you&apos;re just starting or scaling your workflow.
        </p>
        <div className="mt-8 flex justify-center">
          <div className="relative inline-flex p-1 rounded-full bg-[#F0F2F9] border border-[#D7DBE6]">
            {/* Sliding pill */}
            <div
              aria-hidden
              className="absolute inset-y-1 left-1 w-[calc(50%-4px)] rounded-full bg-white shadow-sm transition-[transform] duration-300 ease-out"
              style={{ transform: billingAnnual ? "translateX(100%)" : "translateX(0)" }}
            />
            <button
              type="button"
              onClick={() => setBillingAnnual(false)}
              className={`relative z-10 min-w-[120px] px-6 py-2.5 rounded-full text-sm font-semibold transition-colors duration-300 ease-out ${!billingAnnual ? "text-[#1E202B]" : "text-[#5F647D] hover:text-slate-700"}`}
            >
              Bill Monthly
            </button>
            <button
              type="button"
              onClick={() => setBillingAnnual(true)}
              className={`relative z-10 min-w-[120px] px-6 py-2.5 rounded-full text-sm font-semibold transition-colors duration-300 ease-out ${billingAnnual ? "text-[#1E202B]" : "text-[#5F647D] hover:text-slate-700"}`}
            >
              Bill Annually
            </button>
          </div>
        </div>
      </FadeOnView>

      <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
        {plans.map((plan) => {
          const price = plan.customPrice ? null : billingAnnual ? plan.priceYearly : plan.priceMonthly;
          const period = plan.customPrice ? null : billingAnnual ? "/year" : "/month";
          return (
            <FadeOnView key={plan.id} direction={plan.id === "pro" ? "flipDown" : plan.id === "advance" ? "flipRight" : "flipLeft"} className="[perspective:800px]">
              <article
                className={`relative overflow-hidden rounded-2xl border bg-white p-8 flex flex-col transition-all duration-200 hover:shadow-lg hover:shadow-slate-200/50 ${plan.popular ? "border-[#5B4B8A] shadow-lg shadow-[#5B4B8A]/10 ring-1 ring-[#5B4B8A]/20" : "border-slate-200/80 hover:border-slate-300"}`}
              >
              {plan.popular && (
                <div className="absolute top-6 right-6">
                  <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-semibold text-white shadow-sm" style={{ background: "linear-gradient(135deg, #5B4B8A 0%, #7B6BA8 50%, #6B4BE7 100%)" }}>
                    ★ Popular
                  </span>
                </div>
              )}
              <div className="relative">
                <h3 className="text-xl font-bold text-slate-900">{plan.name}</h3>
                <div className="mt-4">
                  {plan.customPrice ? (
                    <span className="text-3xl lg:text-4xl font-bold text-slate-900">Custom</span>
                  ) : (
                    <>
                      <span className="text-3xl lg:text-4xl font-bold text-slate-900">${typeof price === "number" ? price.toLocaleString() : price}</span>
                      <span className="text-slate-500 font-medium text-lg ml-1">{period}</span>
                    </>
                  )}
                </div>
                <p className="mt-3 text-slate-600 text-sm leading-relaxed">{plan.description}</p>
                <Link href={plan.ctaHref} className={`mt-6 block w-full text-center rounded-xl py-3.5 text-sm font-semibold transition-all ${plan.popular ? "bg-[#5B4B8A] text-white hover:bg-[#4A3D72] shadow-md hover:shadow-lg" : "bg-slate-100 text-slate-800 hover:bg-slate-200 border border-slate-200/80"}`}>
                  {plan.cta}
                </Link>
                <div className="mt-8 pt-6 border-t border-slate-100">
                  <p className="text-xs font-semibold tracking-wider text-slate-400 uppercase text-center mb-4">Stand out features</p>
                  <ul className="space-y-3">
                    {plan.features.map((f) => (
                      <li key={f.text} className="flex items-center gap-3 text-slate-600 text-sm">
                        {featureIcons[f.icon]}
                        <span>{f.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
            </FadeOnView>
          );
        })}
      </div>

      <p className="mt-12 lg:mt-16 text-center text-slate-500 text-sm">
        Start your journey risk free — No credit card needed.
      </p>

      {/* Compare Plans section - commented out (uncomment to show) */}
      {false && (
      <div className="mt-16 lg:mt-20">
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider text-slate-600 bg-slate-100 border border-slate-200/80 mb-4">
            <svg className="w-3.5 h-3.5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            COMPARE
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
            Compare Plans
          </h2>
        </div>
        <div className="rounded-2xl border border-slate-200/80 bg-white overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px] text-center">
              <thead>
                <tr className="border-b border-slate-200/80">
                  <th className="py-4 px-4 sm:px-6 font-semibold text-slate-900 bg-slate-200/80 w-1/4 text-left" scope="col">Feature</th>
                  {comparePlanHeaders.map((plan, colIndex) => (
                    <th key={plan.name} className={`py-4 px-4 sm:px-6 font-semibold text-slate-900 ${colIndex % 2 === 0 ? "bg-white" : "bg-slate-200/80"}`} scope="col">
                      <div>{plan.name}</div>
                      <div className="text-2xl font-bold text-slate-900 mt-1">${plan.price} <span className="text-slate-500 font-normal text-base">/ month</span></div>
                      <div className="text-slate-500 text-sm font-normal mt-0.5">{billingAnnual ? plan.descriptionAnnual : plan.description}</div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {compareRows.map((row) => (
                  <tr key={row.feature} className="border-b border-slate-100">
                    <td className="py-3.5 px-4 sm:px-6 font-medium text-slate-900 text-sm bg-slate-200/80 text-left">{row.feature}</td>
                    <td className="py-3.5 px-4 sm:px-6 bg-white"><CompareCellContent cell={row.free} /></td>
                    <td className="py-3.5 px-4 sm:px-6 bg-slate-200/80"><CompareCellContent cell={row.pro} iconCircleClassName="bg-white" /></td>
                    <td className="py-3.5 px-4 sm:px-6 bg-white"><CompareCellContent cell={row.advanced} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      )}

      {/* Testimonials - below compare table */}
      <FadeOnView direction="zoomOut" className="mt-16 lg:mt-24">
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider text-slate-600 bg-slate-100 border-2 border-[#5B4B8A] mb-4">
            <svg className="w-3.5 h-3.5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            TESTIMONIALS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
            Trusted by Investors
            <br />
            Worldwide
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative rounded-2xl border border-slate-200/80 bg-white/90 shadow-lg shadow-slate-200/50 p-8 sm:p-10 overflow-hidden">
            {/* Decorative top-left: rotated rounded square in our colors */}
            <div className="absolute top-4 left-4 w-5 h-5 rounded-md bg-[#5B4B8A]/20 rotate-12" aria-hidden />
            {/* Large quotation mark top-right */}
            <span className="absolute top-4 right-6 text-slate-200/80 text-8xl font-serif leading-none select-none" aria-hidden>&rdquo;</span>
            {/* Decorative bottom-right: same style as top-left */}
            <div className="absolute bottom-4 right-4 w-5 h-5 rounded-md bg-[#5B4B8A]/20 -rotate-12" aria-hidden />

            <div className="relative" aria-live="polite" aria-atomic="true">
              {/* Sizer: keeps card height equal to active testimonial */}
              <div className="invisible">
                <blockquote className="text-slate-700 text-lg sm:text-xl leading-relaxed mb-6 pr-16">
                  &ldquo;{testimonials[activeTestimonial].quote}&rdquo;
                </blockquote>
                <div>
                  <p className="font-semibold text-slate-900 text-lg">{testimonials[activeTestimonial].name}</p>
                  <p className="text-slate-500 text-sm mt-0.5">{testimonials[activeTestimonial].role}</p>
                </div>
              </div>
              {/* Stacked layers: crossfade via opacity */}
              {testimonials.map((t, i) => (
                <div
                  key={t.name}
                  className="absolute inset-0 transition-opacity duration-300 ease-out"
                  style={{
                    opacity: i === activeTestimonial ? 1 : 0,
                    pointerEvents: i === activeTestimonial ? "auto" : "none",
                  }}
                >
                  <blockquote className="text-slate-700 text-lg sm:text-xl leading-relaxed mb-6 pr-16">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <div>
                    <p className="font-semibold text-slate-900 text-lg">{t.name}</p>
                    <p className="text-slate-500 text-sm mt-0.5">{t.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Connecting line */}
          <div className="flex justify-center mt-6">
            <div className="w-px h-6 bg-slate-200/80" />
          </div>
          {/* Avatar row */}
          <div className="flex justify-center gap-4 mt-4">
            {testimonials.map((t, i) => (
              <button
                key={t.name}
                type="button"
                onClick={() => setActiveTestimonial(i)}
                className={`relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0 transition-all duration-300 ease-out ${
                  i === activeTestimonial
                    ? "ring-2 ring-amber-400 ring-offset-2 scale-110"
                    : "opacity-70 hover:opacity-100"
                }`}
                aria-label={`View testimonial from ${t.name}`}
                aria-pressed={i === activeTestimonial}
              >
                <span className="block w-full h-full bg-slate-300 flex items-center justify-center text-slate-600 font-semibold text-sm">
                  {t.avatar}
                </span>
              </button>
            ))}
          </div>
        </div>
      </FadeOnView>
    </section>
  );
}
