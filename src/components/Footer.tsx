"use client";

export default function Footer() {
  return (
    <footer className="w-full bg-white">
      {/* Upper section - five columns */}
      <div className="max-w-6xl mx-auto px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10">
          {/* Column 1 - Brand / Contact */}
          <div className="lg:col-span-1 space-y-4">
            <div className="flex items-center gap-2">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-[#6B4BE7]"
              >
                <path d="M6 16c0-4 3-8 8-8s8 4 8 8-3 8-8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
                <path d="M10 16c0-2 1.5-4 4-4s4 2 4 4-1.5 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" fill="none" opacity="0.8" />
                <path d="M14 16c0-1 0.5-2 2-2s2 1 2 2-0.5 2-2 2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" fill="none" opacity="0.6" />
              </svg>
              <span className="text-lg font-bold text-gray-900">Frybix</span>
            </div>
            <div className="flex items-center gap-2 text-gray-900">
              <svg className="w-5 h-5 text-[#6B4BE7] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <a href="mailto:Help@Frybix.Com" className="hover:text-[#6B4BE7] transition-colors">Help@Frybix.Com</a>
            </div>
            <div className="flex items-center gap-2 text-gray-900">
              <svg className="w-5 h-5 text-[#6B4BE7] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <a href="tel:+123445667889" className="hover:text-[#6B4BE7] transition-colors">+1 234 456 678 89</a>
            </div>
          </div>

          {/* Column 2 - Links */}
          <div>
            <h3 className="font-bold text-gray-900 text-lg mb-4">Links</h3>
            <ul className="space-y-2">
              {["Home", "About Us", "Bookings", "Blog"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-700 hover:text-[#6B4BE7] transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Legal */}
          <div>
            <h3 className="font-bold text-gray-900 text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              {["Terms Of Use", "Privacy Policy", "Cookie Policy"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-700 hover:text-[#6B4BE7] transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Product */}
          <div>
            <h3 className="font-bold text-gray-900 text-lg mb-4">Product</h3>
            <ul className="space-y-2">
              {["Take Tour", "Live Chat", "Reviews"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-700 hover:text-[#6B4BE7] transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5 - Newsletter */}
          <div>
            <h3 className="font-bold text-gray-900 text-lg mb-4">Newsletter</h3>
            <p className="text-gray-700 mb-4">Stay Up To Date</p>
            <form className="flex gap-2 flex-wrap" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 min-w-[180px] rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#6B4BE7]/30 focus:border-[#6B4BE7]"
              />
              <button
                type="submit"
                className="rounded-lg bg-[#5B4B8A] hover:bg-[#4A3D72] text-white font-medium px-5 py-3 transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Lower section - copyright */}
      <div
        className="border-t border-gray-200 py-6 text-center"
        style={{
          background: "linear-gradient(to bottom, #f9fafb 0%, #f3f4f6 100%)",
        }}
      >
        <p className="text-gray-500 text-sm">
          Copyright 2022 Frybix Inc. All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
