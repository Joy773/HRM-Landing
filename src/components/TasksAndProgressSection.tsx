import FadeOnView from "@/components/FadeOnView";

const LOREM =
  "Pellentesque Blandit Augue Facilisis Malesuada Interdum Eleifend Risus, Commodo. Egestas Senectus Vehicula Vel Consectetur Eu. Sit Pulvinar Urna Diam Lacus Fringilla Eu Cursus.";

export default function TasksAndProgressSection() {
  const tasks = [
    {
      title: "UI Design",
      icon: "monitor",
      iconBg: "bg-[#5B4B8A]",
      tags: [{ label: "Work", bg: "bg-pink-100 text-pink-700" }, { label: "Rasion Project", bg: "bg-purple-100 text-purple-700" }],
    },
    {
      title: "100x Sit-Up",
      icon: "dumbbell",
      iconBg: "bg-orange-500",
      tags: [{ label: "Personal", bg: "text-gray-500" }, { label: "Workout", bg: "bg-gray-100 text-gray-700" }],
      time: "00:14:06",
    },
    {
      title: "Learn HTML & CSS",
      icon: "code",
      iconBg: "bg-red-500",
      tags: [{ label: "Personal", bg: "text-gray-500" }, { label: "Coding", bg: "bg-red-100 text-red-700" }],
      time: "00:24:52",
    },
    {
      title: "Read 10 pages of book",
      icon: "book",
      iconBg: "bg-emerald-500",
      tags: [{ label: "Personal", bg: "text-gray-500" }, { label: "Reading", bg: "bg-emerald-100 text-emerald-700" }],
      time: "00:21:09",
    },
  ];

  const teamMembers = [
    { name: "Angela Smith", count: "16 task on progress", color: "#E8D5B7" },
    { name: "Karen William", count: "2", color: "#C4B5FD" },
    { name: "Samantha William", count: "3", color: "#A5B4FC" },
    { name: "Andy Hope", count: "1", color: "#86EFAC" },
  ];

  const progressBars = [
    { label: "Copywriting", value: "3/8", pct: 37.5, color: "bg-emerald-500" },
    { label: "Illustrati", value: "6/10", pct: 60, color: "bg-blue-500" },
    { label: "UI", value: "2/?", pct: 40, color: "bg-emerald-400" },
    { label: "Design", value: "2/7", pct: 28.5, color: "bg-blue-700" },
  ];

  return (
    <>
      {/* Section 1: Manage Your Tasks Online Easily */}
      <section className="relative w-full dot-pattern py-16 lg:py-24 px-6 overflow-hidden">
        <div className="relative max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <FadeOnView direction="left" className="flex flex-col justify-center order-2 lg:order-1">
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight">
              Manage Your Tasks{" "}
              <span className="bg-gray-200 px-2 py-0.5 rounded">Online Easily.</span>
            </h2>
            <p className="mt-6 text-gray-500 text-lg leading-relaxed max-w-xl">{LOREM}</p>
          </FadeOnView>
          <FadeOnView direction="right" className="relative order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg">
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="font-bold text-gray-900 text-lg">Today</h3>
                  <a href="#" className="text-[#5B4B8A] text-sm font-medium hover:underline">See All</a>
                </div>
                <ul className="space-y-4">
                  {tasks.map((task) => (
                    <li key={task.title} className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 transition-colors">
                      <div className={`w-10 h-10 rounded-lg ${task.iconBg} flex items-center justify-center flex-shrink-0 text-white`}>
                        {task.icon === "monitor" && (
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M21 2H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7v2h2v-2h2v2h2v-2h7c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H3V4h18v12z" /></svg>
                        )}
                        {task.icon === "dumbbell" && (
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M6.5 4v2H4v2H2v2h2v8h2v-8h2v-2h2V6H6.5V4zm9 0v2h2v2h2v2h-2v8h-2v-8h-2V8h2V6h-2V4zm-3 4v2h2v6h-2v2h-2v-2H9v-6h2V8h2z" /></svg>
                        )}
                        {task.icon === "code" && (
                          <span className="text-sm font-mono font-bold">&lt;/&gt;</span>
                        )}
                        {task.icon === "book" && (
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z" /></svg>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-gray-900 truncate">{task.title}</p>
                        <div className="flex flex-wrap gap-1.5 mt-1">
                          {task.tags.map((t) => (
                            <span key={t.label} className={`text-xs px-2 py-0.5 rounded ${t.bg}`}>{t.label}</span>
                          ))}
                        </div>
                      </div>
                      {task.time && (
                        <div className="flex items-center gap-2 flex-shrink-0">
                          <span className="text-sm text-gray-500">{task.time}</span>
                          <button type="button" className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200" aria-label="Play">
                            <svg className="w-4 h-4 ml-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                          </button>
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="absolute -top-2 -right-4 lg:right-0 w-40 bg-gray-100 rounded-xl p-4 shadow-md border border-gray-200">
                <div className="flex items-center gap-2 text-gray-700 font-medium text-sm">
                  <svg className="w-5 h-5 text-gray-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                  Report analysis
                </div>
              </div>
              <div className="absolute -bottom-2 -right-2 lg:right-4 w-40 bg-gray-100 rounded-xl p-4 shadow-md border border-gray-200">
                <div className="flex items-center gap-2 text-gray-700 font-medium text-sm">
                  <svg className="w-5 h-5 text-gray-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  Timesheets make
                </div>
              </div>
            </div>
          </FadeOnView>
        </div>
      </section>

      {/* Section 2: Keep Track Of All Your Progress */}
      <section className="relative w-full dot-pattern py-16 lg:py-24 px-6 overflow-hidden">
        <div className="relative max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <FadeOnView direction="left" className="relative order-2 lg:order-1 flex justify-center lg:justify-start">
            <div className="relative w-full max-w-lg">
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#5B4B8A] flex-shrink-0" />
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                      <button type="button" className="text-gray-500 text-sm">Select team members</button>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="font-bold text-gray-900 text-sm">Task Progress</span>
                    {progressBars.map((p) => (
                      <div key={p.label} className="flex items-center gap-2 text-xs">
                        <span className="text-gray-600 w-20 truncate">{p.label}</span>
                        <span className="text-gray-400 w-8">({p.value})</span>
                        <div className="w-14 h-1.5 rounded-full bg-gray-200 overflow-hidden">
                          <div className={`h-full rounded-full ${p.color}`} style={{ width: `${p.pct}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="border-t border-gray-100 pt-4">
                  <div className="relative rounded-lg border border-gray-200 px-3 py-2 mb-4 flex items-center gap-2 text-gray-400">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    <span className="text-sm">Search</span>
                  </div>
                  <ul className="space-y-3">
                    {teamMembers.map((m) => (
                      <li key={m.name} className="flex items-center gap-3 py-2">
                        <div className="w-9 h-9 rounded-full flex-shrink-0 border-2 border-white shadow" style={{ backgroundColor: m.color }} />
                        <div className="flex-1 min-w-0">
                          <p className="font-medium text-gray-900 text-sm">{m.name}</p>
                          <p className="text-xs text-gray-500">{m.count}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="absolute -right-4 top-1/2 -translate-y-1/2 w-56 bg-white rounded-xl shadow-lg border border-gray-100 p-4">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-semibold text-gray-900 text-sm">Konsep design homepage</h4>
                  <button type="button" className="p-1 text-gray-400 hover:bg-gray-100 rounded" aria-label="Menu">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" /></svg>
                  </button>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                  Due Nov 24
                </div>
                <p className="text-xs text-gray-500 leading-relaxed mb-3 line-clamp-2">{LOREM}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">Project Progress</span>
                  <span className="text-xs font-medium text-gray-700">32%</span>
                </div>
                <div className="flex items-center gap-1 mt-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="w-6 h-6 rounded-full border-2 border-white bg-gray-200 flex-shrink-0" style={{ marginLeft: i > 1 ? -8 : 0 }} />
                  ))}
                  <span className="text-xs text-gray-500 ml-1">+ 15 people</span>
                </div>
              </div>
            </div>
          </FadeOnView>
          <FadeOnView direction="right" className="flex flex-col justify-center order-1 lg:order-2 text-left lg:text-right">
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight">
              Keep{" "}
              <span className="bg-[#F0E7D2] px-2 py-0.5 rounded">Track Of All</span>
              {" "}Your Progress.
            </h2>
            <p className="mt-6 text-gray-500 text-lg leading-relaxed max-w-xl lg:ml-auto">{LOREM}</p>
          </FadeOnView>
        </div>
      </section>
    </>
  );
}
