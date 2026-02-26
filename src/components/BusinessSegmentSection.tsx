const DESCRIPTION =
  "Many desktop publishing packages and web page editors now use for them.";

const segments = [
  {
    title: "Education System",
    iconBg: "bg-pink-100",
    icon: (
      <svg className="w-6 h-6 text-pink-600" fill="currentColor" viewBox="0 0 24 24">
        <path d="M8 5v14l11-7z" />
      </svg>
    ),
  },
  {
    title: "Sports & Fitness",
    iconBg: "bg-orange-100",
    icon: (
      <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Beauty & Wellness",
    iconBg: "bg-blue-100",
    icon: (
      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Officials & Financial",
    iconBg: "bg-amber-100",
    icon: (
      <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Medical Services",
    iconBg: "bg-purple-100",
    icon: (
      <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: "Events & Entertainment",
    iconBg: "bg-sky-100",
    icon: (
      <svg className="w-6 h-6 text-sky-600" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />
      </svg>
    ),
  },
];

import FadeOnView from "@/components/FadeOnView";

const TESTIMONIAL_QUOTE =
  "Build your financial literacy within a transparent community. Follow other investors, share insights with people from different professional backgrounds, and never be alone.";

const orbitingAvatars = [
  { position: "top", color: "#E8D5B7" },
  { position: "left", color: "#93C5FD" },
  { position: "right", color: "#1E293B" },
  { position: "bottom-right", color: "#C4B5FD" },
];

export default function BusinessSegmentSection() {
  return (
    <>
      {/* Business Segment section */}
      <section className="relative w-full dot-pattern py-16 lg:py-24 px-6 overflow-hidden">
        <FadeOnView direction="zoom" className="max-w-5xl mx-auto">
          <h2 className="text-center text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight mb-12 lg:mb-16">
            Frybix Has The Ability To Serve Any
            <br />
            <span className="bg-[#F0E7D2] px-2 py-0.5 rounded">Business Segment</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {segments.map((segment) => (
              <div
                key={segment.title}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100/80 flex gap-4 items-start hover:shadow-md transition-shadow"
                style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}
              >
                <div
                  className={`flex-shrink-0 w-12 h-12 rounded-full ${segment.iconBg} flex items-center justify-center`}
                >
                  {segment.icon}
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-bold text-gray-900 text-lg">{segment.title}</h3>
                  <p className="text-gray-500 text-sm mt-2 leading-relaxed">{DESCRIPTION}</p>
                </div>
              </div>
            ))}
          </div>
        </FadeOnView>
      </section>

      {/* Client Testimonials section */}
      <section className="relative w-full dot-pattern py-16 lg:py-24 px-6 overflow-hidden">
        <FadeOnView direction="zoomOut" className="relative max-w-4xl mx-auto text-center">
          <p className="text-gray-600 text-base font-medium">Trusted By 20,000+ Clients</p>
          <div className="flex items-center justify-center gap-0.5 mt-2" aria-label="4.5 out of 5 stars">
            {[1, 2, 3, 4, 5].map((i) => (
              <span key={i} className={i <= 4 ? "text-amber-400" : "text-gray-300"}>
                {i <= 4 ? "★" : "☆"}
              </span>
            ))}
          </div>
          <h2 className="mt-4 text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
            What Our Client Think
            <br />
            About Us?
          </h2>

          <div className="relative mt-12 lg:mt-16 flex flex-col items-center">
            <div className="relative w-48 h-48 lg:w-56 lg:h-56 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full border-[3px] border-[#5B4B8A]" />
              <div className="absolute inset-4 rounded-full border-[2px] border-[#5B4B8A]/40" />
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <div
                  className="w-28 h-28 lg:w-32 lg:h-32 rounded-full border-4 border-white shadow-lg flex items-center justify-center text-2xl font-bold text-gray-600 overflow-hidden"
                  style={{ backgroundColor: "#C4B5FD" }}
                >
                  <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                </div>
              </div>
              {orbitingAvatars.map((avatar, i) => (
                <div
                  key={i}
                  className="absolute z-20 w-12 h-12 rounded-full border-2 border-white shadow-md"
                  style={{
                    backgroundColor: avatar.color,
                    ...(avatar.position === "top" && { top: -8, left: "50%", transform: "translateX(-50%)" }),
                    ...(avatar.position === "left" && { left: -8, top: "50%", transform: "translateY(-50%)" }),
                    ...(avatar.position === "right" && { right: -8, top: "50%", transform: "translateY(-50%)" }),
                    ...(avatar.position === "bottom-right" && { right: 8, bottom: -4 }),
                  }}
                />
              ))}
            </div>
          </div>

          <div className="mt-8 max-w-2xl mx-auto bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <p className="text-gray-600 leading-relaxed">{TESTIMONIAL_QUOTE}</p>
            <p className="mt-5 font-bold text-gray-900 text-lg">Jony Scotty</p>
            <p className="text-gray-500 text-sm">UI Designer</p>
          </div>
        </FadeOnView>
      </section>
    </>
  );
}
