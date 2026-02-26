export default function TrustedBy() {
  const stars = [1, 2, 3, 4, 5];

  const clients = [
    // Row 1
    {
      name: "jitter",
      icon: (
        <div className="w-8 h-8 rounded-full bg-gray-900 flex-shrink-0" />
      ),
    },
    {
      name: "krisp",
      icon: null,
    },
    {
      name: "feedly",
      icon: (
        <svg className="w-8 h-8 flex-shrink-0 text-green-500" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
        </svg>
      ),
    },
    {
      name: "draftbit",
      icon: (
        <div className="w-8 h-8 flex-shrink-0 rounded bg-[#6B4EFF] transform rotate-12" style={{ boxShadow: "2px 2px 0 rgba(0,0,0,0.2)" }} />
      ),
    },
    {
      name: "HELLOSIGN",
      icon: (
        <svg className="w-8 h-8 flex-shrink-0 text-cyan-500" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 4l-8 8 2.83 2.83L12 9.66l5.17 5.17L20 12 12 4z" />
          <path d="M4 18h16v2H4v-2z" />
        </svg>
      ),
    },
    {
      name: "grammarly",
      icon: (
        <div className="w-8 h-8 rounded-full bg-emerald-500 flex-shrink-0 flex items-center justify-center text-white font-bold text-sm">G</div>
      ),
    },
    // Row 2
    {
      name: "Square",
      icon: null,
    },
    {
      name: "people.ai",
      icon: null,
      nameElement: (
        <>
          people.<span className="text-blue-500 text-sm font-medium">ai</span>
        </>
      ),
    },
    {
      name: "LiveChat",
      icon: (
        <svg className="w-8 h-8 flex-shrink-0 text-orange-500" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z" />
        </svg>
      ),
    },
    {
      name: "Sketch",
      icon: (
        <svg className="w-8 h-8 flex-shrink-0 text-amber-400" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L2 12l10 10 10-10L12 2z" />
        </svg>
      ),
    },
    {
      name: "mapbox",
      icon: (
        <div className="w-8 h-8 rounded-full bg-gray-900 flex-shrink-0 flex items-center justify-center">
          <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
          </svg>
        </div>
      ),
    },
    {
      name: "METAMASK",
      icon: (
        <svg className="w-8 h-8 flex-shrink-0" viewBox="0 0 24 24" fill="none">
          <path d="M20.5 3l-6 4.5 1.2-2.8L20.5 3zM3.5 3l6 4.5-1.2-2.8L3.5 3zm17 0l-2.2 16-6.3-4.5 8.5-11.5zm-17 0l8.5 11.5-6.3 4.5L3.5 3zm8 10.5l3.5 5 1.5-7.5-5 2.5zm-1 0l5 2.5 1.5 7.5 3.5-5-10-5z" fill="#E2761B" stroke="#E2761B" strokeWidth="0.5" />
        </svg>
      ),
    },
    {
      name: "per",
      icon: null,
      nameElement: <span className="text-pink-500 font-medium">per</span>,
    },
  ];

  return (
    <section className="w-full dot-pattern py-16 lg:py-24 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Subtitle + stars */}
        <p className="text-gray-700 text-base font-medium flex items-center justify-center gap-2 flex-wrap">
          Trusted By 20,000+ Clients
          <span className="flex items-center gap-0.5 ml-2" aria-label="4.5 out of 5 stars">
            {stars.map((i) => (
              <span
                key={i}
                className={i <= 4 ? "text-[#5B4B8A]" : "text-gray-300"}
                aria-hidden
              >
                {i <= 4 ? "★" : "☆"}
              </span>
            ))}
          </span>
        </p>

        {/* Main heading */}
        <h2 className="mt-3 text-4xl lg:text-5xl font-bold text-gray-900">
          They{" "}
          <span className="bg-[#F0E7D2] px-2 py-0.5 rounded">Trust</span>
          {" "}Us.
        </h2>

        {/* Logo marquee – scrolls right to left infinitely */}
        <div className="mt-12 lg:mt-16 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <div className="flex gap-4 w-max animate-trusted-by-scroll">
            {[...clients, ...clients].map((client, index) => (
              <div
                key={`${client.name}-${index}`}
                className="flex-shrink-0 rounded-xl bg-white p-5 flex items-center justify-center gap-3 min-h-[80px] w-[180px] shadow-sm border border-gray-100/80 hover:shadow-md transition-shadow"
                style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}
              >
                {client.icon}
                <span className="text-gray-900 font-medium text-sm uppercase tracking-tight whitespace-nowrap">
                  {client.nameElement ?? client.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
