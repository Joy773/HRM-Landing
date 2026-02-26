export default function TryFrybixSection() {
  return (
    <section className="relative w-full dot-pattern pt-16 lg:pt-20 pb-10 lg:pb-12 px-6 overflow-hidden" style={{ backgroundColor: "#f0efef" }}>
      {/* Decorative shapes - top left (purple + pink), bottom right (orange + amber) */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-[#5B4B8A]/90 opacity-90" />
        <div className="absolute -top-12 -left-12 w-72 h-72 rounded-full bg-pink-400/90 opacity-90" />
        <div className="absolute -right-32 -bottom-32 w-[420px] h-[420px] rounded-full bg-orange-400/90 opacity-90" />
        <div className="absolute -right-16 -bottom-16 w-80 h-80 rounded-full bg-amber-200/90 opacity-90" />
      </div>

      <div className="relative max-w-3xl mx-auto text-center">
        <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight">
          Try{" "}
          <span className="bg-[#F0E7D2] px-2 py-0.5 rounded">Frybix</span>
          {" "}For Free
        </h2>
        <p className="mt-6 text-gray-600 text-lg leading-relaxed">
          Frybix Is Hub For Managing Productivity
          <br />
          Tasks Professionaly And Efficiently
        </p>
        <div className="mt-10">
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-xl border-2 border-gray-900 bg-white px-8 py-4 text-gray-900 font-medium hover:bg-gray-50 transition-colors"
          >
            Get Frybix App
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
