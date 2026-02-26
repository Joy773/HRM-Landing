import FadeOnView from "@/components/FadeOnView";

const LOREM =
  "Pellentesque Blandit Augue Facilisis Malesuada Interdum Eleifend Risus, Commodo. Egestas Senectus Vehicula Vel Consectetur Eu. Sit Pulvinar Urna Diam Lacus Fringilla Eu Cursus.";

export default function ConnectionsSection() {
  const inboxItems = [
    {
      type: "New Message",
      icon: "speech",
      iconColor: "text-emerald-500",
      text: "Hey Alex, are you free now?",
      avatar: true,
      avatarPosition: "left",
      avatarColor: "#E8D5B7",
    },
    {
      type: "New Email",
      icon: "envelope",
      iconColor: "text-red-500",
      text: "Alex, your order replaced ID # 45321",
      avatar: false,
    },
    {
      type: "Facebook Messenger",
      icon: "messenger",
      iconColor: "text-blue-500",
      text: "How can I see the tracking number?",
      avatar: true,
      avatarPosition: "right",
      avatarColor: "#C4B5FD",
    },
    {
      type: "New Message",
      icon: "speech",
      iconColor: "text-emerald-500",
      text: "How can I renew my subscription?",
      avatar: true,
      avatarPosition: "bottom",
      avatarColor: "#A5B4FC",
    },
  ];

  return (
    <section className="relative w-full dot-pattern py-16 lg:py-24 px-6 overflow-hidden">
      <FadeOnView direction="zoom" className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left column */}
        <div className="flex flex-col justify-center order-2 lg:order-1">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight">
            More{" "}
            <span className="bg-amber-200/80 px-2 py-0.5 rounded">Connections</span>
            , No More Cancellations
          </h2>
          <p className="mt-6 text-gray-500 text-lg leading-relaxed max-w-xl">{LOREM}</p>
          <a
            href="#"
            className="mt-8 inline-flex items-center justify-center rounded-xl bg-[#5B4B8A] hover:bg-[#4A3D72] text-white font-medium px-8 py-4 transition-colors w-fit"
          >
            Get Started
          </a>
        </div>

        {/* Right column - Inbox card */}
        <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end min-h-[420px]">
          {/* Inbox card */}
          <div className="relative z-10 w-full max-w-sm bg-white rounded-2xl shadow-xl border border-gray-100 overflow-visible">
            <div className="p-5">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <h3 className="font-bold text-gray-900 text-lg">Inbox</h3>
                  <div className="w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center text-orange-600">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
                <button type="button" className="p-1.5 text-gray-400 hover:bg-gray-100 rounded-lg" aria-label="Menu">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                  </svg>
                </button>
              </div>
              <ul className="space-y-4">
                {inboxItems.map((item, i) => (
                  <li key={i} className="relative pl-6">
                    {item.avatarPosition === "left" && item.avatar && (
                      <div
                        className="absolute -left-2 top-0 w-9 h-9 rounded-full border-2 border-white shadow z-10"
                        style={{ backgroundColor: item.avatarColor }}
                      />
                    )}
                    {item.avatarPosition === "bottom" && item.avatar && (
                      <div
                        className="absolute left-2 -bottom-2 w-9 h-9 rounded-full border-2 border-white shadow z-10"
                        style={{ backgroundColor: item.avatarColor }}
                      />
                    )}
                    <div className="flex gap-3">
                      <div className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center ${item.iconColor === "text-emerald-500" ? "bg-emerald-100" : item.iconColor === "text-red-500" ? "bg-red-100" : "bg-blue-100"}`}>
                        {item.icon === "speech" && (
                          <svg className="w-4 h-4 text-emerald-500" fill="currentColor" viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z" /></svg>
                        )}
                        {item.icon === "envelope" && (
                          <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" /></svg>
                        )}
                        {item.icon === "messenger" && (
                          <svg className="w-4 h-4 text-blue-500" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.36 2 2 6.13 2 11.7c0 3.19 1.59 6 4.07 7.73l-1.07 3.12 3.9-2.06C11.46 21.2 11.72 21.25 12 21.25c5.64 0 10-4.13 10-9.55C22 6.13 17.64 2 12 2zm5.5 7.25l-2.78 2.94-4.97-2.94L5.5 12.5l2.78-2.94 4.97 2.94L17.5 9.25z" /></svg>
                        )}
                      </div>
                      <div className="min-w-0 flex-1 pr-8">
                        <p className="text-xs font-medium text-gray-500">{item.type}</p>
                        <p className="text-sm text-gray-900 mt-0.5 truncate">{item.text}</p>
                      </div>
                    </div>
                    {item.avatarPosition === "right" && item.avatar && (
                      <div
                        className="absolute -right-2 top-0 w-9 h-9 rounded-full border-2 border-white shadow z-10"
                        style={{ backgroundColor: item.avatarColor }}
                      />
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Small blue dot */}
          <div className="absolute bottom-8 right-12 lg:right-24 w-2 h-2 rounded-full bg-blue-600 z-0" />
        </div>
      </FadeOnView>
    </section>
  );
}
