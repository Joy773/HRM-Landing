import FadeOnView from "@/components/FadeOnView";

export default function OnePlatformSection() {
  const features = [
    {
      title: "Appointments",
      description: "Many desktop publishing packages and web page editors now use for them.",
      iconBg: "bg-pink-100",
      iconColor: "text-pink-600",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2z" />
        </svg>
      ),
    },
    {
      title: "Class Bookings",
      description: "Many desktop publishing packages and web page editors now use for them.",
      iconBg: "bg-emerald-100",
      iconColor: "text-emerald-600",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z" />
        </svg>
      ),
    },
    {
      title: "Fast Support",
      description: "Many desktop publishing packages and web page editors now use for them.",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z" />
        </svg>
      ),
    },
  ];

  const barHeights = [40, 120, 80, 180, 140, 220, 160];

  return (
    <section className="relative w-full dot-pattern py-16 lg:py-24 px-6 overflow-hidden">
      {/* Decorative background shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-purple-200/30 blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-gray-300/40 blur-3xl" />
        <div className="absolute top-1/2 right-1/3 w-48 h-48 rounded-full bg-purple-100/50 blur-2xl" />
        {/* Purple accent dots */}
        <div className="absolute top-[28%] right-[32%] w-3 h-3 rounded-full bg-[#5B4B8A]" />
        <div className="absolute bottom-[22%] right-[18%] w-3 h-3 rounded-full bg-[#5B4B8A]" />
      </div>

      <FadeOnView direction="zoom" className="relative max-w-6xl mx-auto">
        {/* Title */}
        <h2 className="text-center text-[48px] font-bold text-gray-900 mb-12 lg:mb-16 leading-tight">
          One Platform For Any Business
        </h2>

        {/* Two columns: features left, analytics right */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 lg:items-center">
          {/* Left - Feature blocks (vertically centered) */}
          <div className="lg:col-span-2 flex flex-col justify-center space-y-8">
            {features.map((feature) => (
              <div key={feature.title} className="flex gap-4">
                <div
                  className={`flex-shrink-0 w-12 h-12 rounded-xl ${feature.iconBg} ${feature.iconColor} flex items-center justify-center shadow-sm`}
                >
                  {feature.icon}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg">{feature.title}</h3>
                  <p className="text-gray-500 text-sm mt-1 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right - Analytics cards */}
          <div className="lg:col-span-3 relative">
            {/* Users Activity card */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-4">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-bold text-gray-900">Users Activity</h3>
                <button type="button" className="text-gray-500 text-sm flex items-center gap-1">
                  This Week <span className="text-gray-400">▾</span>
                </button>
              </div>
              <div className="flex gap-2 h-[180px]">
                <div className="flex flex-col justify-between text-xs text-gray-400 py-1">
                  <span>300</span>
                  <span>200</span>
                  <span>100</span>
                  <span>0</span>
                </div>
                <div className="flex-1 flex items-end justify-between gap-1">
                  {barHeights.map((h, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center gap-2">
                      <div
                        className={`w-full rounded-t-md min-h-[20px] ${
                          i === 3 || i === 5 ? "bg-amber-400" : "bg-[#5B4B8A]/80"
                        }`}
                        style={{ height: `${h}px` }}
                      />
                      <span className="text-xs text-gray-500">
                        {["M", "T", "W", "T", "F", "S", "S"][i]}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Ratings + Earnings row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Ratings chart card */}
              <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 relative overflow-hidden">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <p className="text-2xl font-bold text-gray-900">5,560$</p>
                    <p className="text-sm text-gray-500">Ratings</p>
                  </div>
                  <button
                    type="button"
                    className="rounded-lg bg-[#5B4B8A] text-white text-xs font-medium px-3 py-1.5"
                  >
                    Monthly
                  </button>
                </div>
                <div className="h-20 mt-2 relative">
                  <svg viewBox="0 0 200 40" className="w-full h-full" preserveAspectRatio="none">
                    <path
                      d="M0 30 Q30 25 50 28 T100 20 T150 15 T200 22"
                      fill="none"
                      stroke="#5B4B8A"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <circle cx="200" cy="22" r="4" fill="#5B4B8A" />
                  </svg>
                </div>
              </div>

              {/* Earnings card */}
              <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-amber-500 font-bold text-lg">
                      $
                    </div>
                    <div>
                      <p className="text-xl font-bold text-gray-900">$4,250</p>
                      <p className="text-sm text-gray-500">Earned this month</p>
                    </div>
                  </div>
                  <button type="button" className="text-gray-400 p-1 hover:bg-gray-100 rounded" aria-label="More options">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom metrics bar - deep purple */}
        <div
          className="mt-12 lg:mt-16 rounded-2xl px-8 lg:px-16 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
          style={{
            background: "linear-gradient(135deg, #5B4B8A 0%, #4A3D72 100%)",
            boxShadow: "0 10px 40px rgba(91, 75, 138, 0.3)",
          }}
        >
          <div>
            <p className="text-4xl lg:text-5xl font-bold text-white">110+</p>
            <p className="text-white/80 text-sm mt-1 max-w-xs mx-auto">
              Automation Templates For Creating Your Campaigns Quickly
            </p>
          </div>
          <div>
            <p className="text-4xl lg:text-5xl font-bold text-white">4M</p>
            <p className="text-white/80 text-sm mt-1 max-w-xs mx-auto">
              Automation Templates For Creating Your Campaigns Quickly
            </p>
          </div>
          <div>
            <p className="text-4xl lg:text-5xl font-bold text-white">99.99%</p>
            <p className="text-white/80 text-sm mt-1 max-w-xs mx-auto">
              Automation Templates For Creating Your Campaigns Quickly
            </p>
          </div>
        </div>
      </FadeOnView>
    </section>
  );
}
