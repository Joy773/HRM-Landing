import CountUp from "@/components/CountUp";

export default function LandingContent() {
  return (
    <main className="relative grid grid-cols-1 lg:grid-cols-2 min-h-[calc(100vh-100px)] gap-8 lg:gap-0 w-full min-w-0">
      {/* Left section - Hero content */}
      <div className="flex flex-col justify-center px-6 lg:px-12 xl:px-16 py-12 lg:py-0 order-2 lg:order-1 min-w-0 animate-fade-right">
        <h1 className="text-4xl xl:text-5xl 2xl:text-6xl font-bold text-gray-900 leading-tight max-w-xl">
          Simplified{" "}
          <span className="bg-[#F5E6C8] px-2 py-0.5 rounded">Productivity</span>
          {" "}App For All.
        </h1>
        <p className="mt-5 text-gray-600 text-lg max-w-md leading-relaxed">
          Frybix Is Hub For Managing Productivity Tasks Professionaly And Efficiently
        </p>

        {/* CTA - Email input + button */}
        <div className="mt-8 flex flex-wrap gap-3">
          <input
            type="email"
            placeholder="Enter your email"
            defaultValue="Hamzashahzad@Xeon.Com"
            className="flex-1 min-w-[240px] rounded-xl border border-gray-200 bg-white px-5 py-4 text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#5B4B8A]/30 focus:border-[#5B4B8A]"
          />
          <button
            type="button"
            className="flex-shrink-0 w-14 h-14 rounded-full bg-[#5B4B8A] hover:bg-[#4A3D72] text-white flex items-center justify-center transition-colors shadow-lg"
            aria-label="Submit"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>

        <p className="mt-4 text-gray-600 text-sm">
          Already Using Frybix?{" "}
          <a href="#" className="text-[#5B4B8A] font-medium hover:underline">Sign In</a>
        </p>

        {/* Social proof */}
        <div className="mt-12 flex flex-wrap items-center gap-8">
          <div className="flex items-center gap-4">
            <div className="flex -space-x-2">
              {["#E8D5B7", "#C4B5FD", "#A5B4FC"].map((bg, i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full border-2 border-white shadow"
                  style={{ backgroundColor: bg }}
                />
              ))}
            </div>
            <div>
              <CountUp end={2291} className="text-2xl font-bold text-gray-900" />
              <p className="text-sm text-gray-500">Happy Customers</p>
            </div>
          </div>
          <div>
            <p className="text-2xl font-bold text-gray-900">4.8/5</p>
            <div className="flex items-center gap-1 mt-0.5">
              {[1, 2, 3, 4, 5].map((i) => (
                <span key={i} className="text-amber-400" aria-hidden>★</span>
              ))}
            </div>
            <p className="text-sm text-gray-500">Rating</p>
          </div>
        </div>
      </div>

      {/* Right section - Purple blob + Dashboard mockup */}
      <div className="relative order-1 lg:order-2 min-h-[500px] lg:min-h-0 flex items-center justify-center px-4 lg:px-8 py-8 overflow-hidden min-w-0 animate-fade-left">
        {/* Organic purple flowing shape (background) */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 600 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMaxYMid meet"
        >
          <defs>
            <linearGradient id="blobGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#9B8BC4" />
              <stop offset="50%" stopColor="#6B5B95" />
              <stop offset="100%" stopColor="#5B4B8A" />
            </linearGradient>
            <linearGradient id="blobGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#7B6BA8" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#4A3D72" />
            </linearGradient>
          </defs>
          <path
            d="M600 0v800H200c0-120 80-280 180-380 100-100 220-180 220-420V0z"
            fill="url(#blobGrad1)"
          />
          <path
            d="M600 0v800H350c50-80 100-200 100-350V150C450 50 520 0 600 0z"
            fill="url(#blobGrad2)"
            opacity="0.9"
          />
        </svg>

        {/* Dashboard card */}
        <div
          className="relative z-10 w-full max-w-lg rounded-2xl bg-white/95 backdrop-blur shadow-2xl border border-gray-100 overflow-hidden"
          style={{ boxShadow: "0 25px 50px -12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0,0,0,0.05)" }}
        >
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-900">Dashboard</h2>
            <div className="flex gap-6 mt-4 border-b border-gray-200">
              {["All", "Live", "Recent", "History"].map((tab, i) => (
                <button
                  key={tab}
                  type="button"
                  className={`pb-3 text-sm font-medium transition-colors ${
                    i === 0
                      ? "text-[#5B4B8A] border-b-2 border-[#5B4B8A]"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mt-5">
              <div className="rounded-xl bg-gray-50 p-4 border border-gray-100">
                <p className="text-2xl font-bold text-gray-900">2034</p>
                <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mt-1">Completed</p>
                <div className="mt-2 h-2 w-12 rounded-full bg-blue-200 overflow-hidden">
                  <div className="h-full w-3/4 rounded-full bg-blue-500" />
                </div>
              </div>
              <div className="rounded-xl bg-gray-50 p-4 border border-gray-100">
                <p className="text-2xl font-bold text-gray-900">234</p>
                <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mt-1">Completed</p>
                <div className="mt-2 h-2 w-12 rounded-full bg-amber-200 overflow-hidden">
                  <div className="h-full w-2/3 rounded-full bg-amber-500" />
                </div>
              </div>
              <div className="rounded-xl bg-gray-50 p-4 border border-gray-100">
                <p className="text-2xl font-bold text-gray-900">32000+</p>
                <div className="flex items-center gap-1 mt-1">
                  <span className="text-green-500 text-xs">●</span>
                  <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Customers</p>
                </div>
                <svg className="mt-2 w-full h-8 text-[#5B4B8A]/40" viewBox="0 0 100 20" preserveAspectRatio="none">
                  <path d="M0 15 Q25 5 50 10 T100 8" fill="none" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </div>
              <div className="rounded-xl bg-gray-50 p-4 border border-gray-100">
                <p className="text-2xl font-bold text-gray-900">3420</p>
                <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mt-1">Completed</p>
                <div className="mt-2 h-2 w-12 rounded-full bg-blue-200 overflow-hidden">
                  <div className="h-full w-4/5 rounded-full bg-blue-500" />
                </div>
              </div>
            </div>

            <div className="mt-5 rounded-xl border border-gray-200 overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 text-gray-500 text-left">
                    <th className="px-4 py-2 font-medium">Name</th>
                    <th className="px-4 py-2 font-medium">Value</th>
                    <th className="px-4 py-2 font-medium">%</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr className="border-t border-gray-100">
                    <td className="px-4 py-2">Mary Adants</td>
                    <td className="px-4 py-2">321</td>
                    <td className="px-4 py-2">100.0%</td>
                  </tr>
                  <tr className="border-t border-gray-100">
                    <td className="px-4 py-2">Oscar Wilson</td>
                    <td className="px-4 py-2">12.0%</td>
                    <td className="px-4 py-2">8.0%</td>
                  </tr>
                  <tr className="border-t border-gray-100">
                    <td className="px-4 py-2">—</td>
                    <td className="px-4 py-2">73.2%</td>
                    <td className="px-4 py-2">—</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-5 rounded-xl border border-gray-200 p-4 bg-gray-50/50">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-gray-900">Based Instagram</span>
                <div className="flex gap-2">
                  <button type="button" className="p-1.5 rounded-lg bg-white border border-gray-200 text-gray-500 hover:bg-gray-50" aria-label="Grid">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6z" /><path d="M14 6h6v6h-6zM14 14h6v6h-6z" /></svg>
                  </button>
                  <button type="button" className="p-1.5 rounded-lg bg-white border border-gray-200 text-gray-500 hover:bg-gray-50" aria-label="Download">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                  </button>
                </div>
              </div>
              <div className="flex items-center gap-6 mt-4">
                <div className="relative w-20 h-20 flex-shrink-0">
                  <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
                    <circle cx="18" cy="18" r="14" fill="none" stroke="#E5E7EB" strokeWidth="6" />
                    <circle cx="18" cy="18" r="14" fill="none" stroke="#5B4B8A" strokeWidth="6" strokeDasharray="55 33" strokeLinecap="round" />
                    <circle cx="18" cy="18" r="14" fill="none" stroke="#EAB308" strokeWidth="6" strokeDasharray="0 22 33 55" strokeLinecap="round" />
                  </svg>
                </div>
                <div className="flex-1">
                  <input
                    type="range"
                    min="0"
                    max="100"
                    defaultValue="60"
                    className="w-full h-2 rounded-full appearance-none bg-gray-200 accent-[#5B4B8A]"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1 flex flex-col gap-4 py-4 pl-2 bg-white/80 rounded-r-lg border border-l-0 border-gray-100">
            <button type="button" className="p-2 rounded-lg text-gray-500 hover:bg-gray-100 hover:text-[#5B4B8A]" aria-label="Mail">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            </button>
            <button type="button" className="p-2 rounded-lg text-gray-500 hover:bg-gray-100 hover:text-[#5B4B8A]" aria-label="Profile">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
            </button>
            <button type="button" className="p-2 rounded-lg text-gray-500 hover:bg-gray-100 hover:text-[#5B4B8A]" aria-label="Settings">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
