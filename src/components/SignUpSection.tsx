"use client";

import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { toast } from "react-toastify";

// Common countries with dial code and flag (emoji from ISO code)
const COUNTRIES: { code: string; name: string; dial: string }[] = [
  { code: "US", name: "United States", dial: "+1" },
  { code: "GB", name: "United Kingdom", dial: "+44" },
  { code: "IN", name: "India", dial: "+91" },
  { code: "CA", name: "Canada", dial: "+1" },
  { code: "AU", name: "Australia", dial: "+61" },
  { code: "DE", name: "Germany", dial: "+49" },
  { code: "FR", name: "France", dial: "+33" },
  { code: "ES", name: "Spain", dial: "+34" },
  { code: "IT", name: "Italy", dial: "+39" },
  { code: "NL", name: "Netherlands", dial: "+31" },
  { code: "BR", name: "Brazil", dial: "+55" },
  { code: "MX", name: "Mexico", dial: "+52" },
  { code: "JP", name: "Japan", dial: "+81" },
  { code: "CN", name: "China", dial: "+86" },
  { code: "KR", name: "South Korea", dial: "+82" },
  { code: "SG", name: "Singapore", dial: "+65" },
  { code: "AE", name: "UAE", dial: "+971" },
  { code: "ZA", name: "South Africa", dial: "+27" },
  { code: "NG", name: "Nigeria", dial: "+234" },
  { code: "PK", name: "Pakistan", dial: "+92" },
  { code: "BD", name: "Bangladesh", dial: "+880" },
];

function flagEmoji(code: string) {
  return [...code.toUpperCase()].map((c) => String.fromCodePoint(0x1f1e6 - 65 + c.charCodeAt(0))).join("");
}

function CheckIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="shrink-0 text-green-500">
      <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <path d="M6 10l3 3 5-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}

function GoogleIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" className="shrink-0">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
    </svg>
  );
}

type SignUpSectionProps = {
  onClose?: () => void;
};

export default function SignUpSection({ onClose }: SignUpSectionProps) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(COUNTRIES[0]);
  const [countryOpen, setCountryOpen] = useState(false);
  const [dropdownRect, setDropdownRect] = useState({ top: 0, left: 0, width: 0 });
  const [submitting, setSubmitting] = useState(false);
  const countryRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const dropdownRef = useRef<HTMLUListElement | null>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as Node;
      const trigger = triggerRef.current;
      const dropdown = dropdownRef.current;

      const insideTrigger = trigger?.contains(target);
      const insideDropdown = dropdown?.contains(target);

      if (insideTrigger || insideDropdown) return;
      setCountryOpen(false);
    };

    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, []);

  const openCountryDropdown = () => {
    if (triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect();
      setDropdownRect({ top: rect.bottom + 4, left: rect.left, width: Math.max(rect.width, 256) });
    }
    setCountryOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedFirst = firstName.trim();
    const trimmedLast = lastName.trim();
    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();
    const trimmedPhone = phone.trim();
    if (!trimmedFirst || !trimmedLast || !trimmedEmail || !trimmedPassword || !trimmedPhone) {
      toast("Fill up the form");
      return;
    }
    setSubmitting(true);
    try {
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: trimmedFirst,
          lastName: trimmedLast,
          email: trimmedEmail,
          password: trimmedPassword,
          phone: trimmedPhone,
          countryCode: selectedCountry.code,
          countryDial: selectedCountry.dial,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        const message = data.error ?? "Something went wrong. Please try again.";
        if (res.status === 409 || message === "Account Already Exists") {
          toast("Account Already Exists");
        } else {
          toast.error(message);
        }
        return;
      }
      toast.success("Account created successfully!");
      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");
      setPhone("");
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="w-full rounded-2xl overflow-hidden flex flex-col md:flex-row dot-pattern">
      {/* Left column - Illustration + Features */}
      <div className="md:w-1/2 border-b md:border-b-0 md:border-r border-slate-200/60 p-6 md:p-8 flex flex-col items-center text-center">
        <div className="mb-6 w-full">
          <img
            src="/dashboard.png"
            alt="Dashboard"
            className="w-full min-w-0 h-auto max-h-72 md:max-h-96 object-contain object-center rounded-xl"
          />
        </div>
        <h3 className="text-lg font-bold text-gray-900 mb-4">Our Virtual Employee</h3>
        <ul className="space-y-3 text-sm text-gray-700 flex flex-col items-start w-full max-w-xs mx-auto">
          <li className="flex items-center gap-2">
            <CheckIcon />
            <span>Highly Trained Virtual Assistants</span>
          </li>
          <li className="flex items-center gap-2">
            <CheckIcon />
            <span>Wishup protection</span>
          </li>
          <li className="flex items-center gap-2">
            <CheckIcon />
            <span>Account Manager to Assist You</span>
          </li>
        </ul>
      </div>

      {/* Right column - Form */}
      <div className="md:w-3/5 p-6 md:p-8 relative">
        {onClose && (
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 rounded-lg text-gray-500 hover:bg-gray-100 transition-colors"
            aria-label="Close"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>
        )}

        <h2 className="text-2xl font-bold text-gray-900 mb-6 pr-10">Get Started</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full px-4 py-2.5 rounded-lg border border-gray-300 bg-white text-gray-800 placeholder-gray-500 outline-none focus:ring-2 focus:ring-[#5B4B8A]/30 focus:border-[#5B4B8A]"
            />
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full px-4 py-2.5 rounded-lg border border-gray-300 bg-white text-gray-800 placeholder-gray-500 outline-none focus:ring-2 focus:ring-[#5B4B8A]/30 focus:border-[#5B4B8A]"
            />
          </div>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2.5 rounded-lg border border-gray-300 bg-white text-gray-800 placeholder-gray-500 outline-none focus:ring-2 focus:ring-[#5B4B8A]/30 focus:border-[#5B4B8A] border-r-4 border-r-green-400/50"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2.5 rounded-lg border border-gray-300 bg-white text-gray-800 placeholder-gray-500 outline-none focus:ring-2 focus:ring-[#5B4B8A]/30 focus:border-[#5B4B8A]"
          />
          <div ref={countryRef} className="flex items-center rounded-lg border border-gray-300 bg-white overflow-hidden focus-within:ring-2 focus-within:ring-[#5B4B8A]/30 focus-within:border-[#5B4B8A]">
            <div className="shrink-0">
              <button
                ref={triggerRef}
                type="button"
                onClick={() => (countryOpen ? setCountryOpen(false) : openCountryDropdown())}
                className="flex items-center gap-1.5 pl-3 pr-2 py-2.5 border-r border-gray-200 hover:bg-gray-50 min-w-[72px]"
                aria-haspopup="listbox"
                aria-expanded={countryOpen}
                aria-label={`Country: ${selectedCountry.name}`}
              >
                <span key={selectedCountry.code} className="text-lg leading-none" role="img" aria-label={selectedCountry.name}>
                  {flagEmoji(selectedCountry.code)}
                </span>
                <span key={`dial-${selectedCountry.code}`} className="text-xs text-gray-500 tabular-nums">
                  {selectedCountry.dial}
                </span>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={`text-gray-500 transition-transform shrink-0 ${countryOpen ? "rotate-180" : ""}`}>
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>
            </div>
            {countryOpen && typeof document !== "undefined" && createPortal(
              <ul
                ref={dropdownRef}
                data-country-dropdown
                role="listbox"
                className="fixed z-[9999] max-h-60 w-64 overflow-y-auto overflow-x-hidden rounded-lg border border-gray-200 bg-white py-1 shadow-lg"
                style={{ top: dropdownRect.top, left: dropdownRect.left }}
                aria-label="Country list"
              >
                {COUNTRIES.map((c) => (
                  <li key={c.code} role="option" aria-selected={selectedCountry.code === c.code}>
                    <button
                      type="button"
                      onMouseDown={(e) => e.preventDefault()}
                      onClick={() => {
                        setSelectedCountry({ code: c.code, name: c.name, dial: c.dial });
                        setCountryOpen(false);
                      }}
                      className={`flex w-full items-center gap-2 px-3 py-2 text-left text-sm hover:bg-gray-100 ${selectedCountry.code === c.code ? "bg-[#5B4B8A]/10 text-[#5B4B8A]" : "text-gray-800"}`}
                    >
                      <span className="text-lg">{flagEmoji(c.code)}</span>
                      <span className="flex-1 truncate">{c.name}</span>
                      <span className="text-gray-500 text-xs">{c.dial}</span>
                    </button>
                  </li>
                ))}
              </ul>,
              document.body
            )}
            <input
              type="tel"
              placeholder="Phone No"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="flex-1 min-w-0 px-4 py-2.5 text-gray-800 placeholder-gray-500 outline-none"
            />
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="w-full flex items-center justify-center gap-2 bg-[#5B4B8A] hover:bg-[#4A3D72] disabled:opacity-70 disabled:cursor-not-allowed text-white font-medium py-3 rounded-lg transition-colors"
          >
            {submitting ? "Creating…" : "Create Account"}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </button>
        </form>

        <div className="flex items-center gap-3 my-6">
          <span className="flex-1 h-px bg-gray-200" />
          <span className="text-sm text-gray-500">Or</span>
          <span className="flex-1 h-px bg-gray-200" />
        </div>

        <button
          type="button"
          onClick={() => {
            const clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;
            if (!clientId) {
              console.warn("NEXT_PUBLIC_GOOGLE_CLIENT_ID is not set. Add it in .env.local to enable Google sign-in.");
              return;
            }
            const redirectUri = typeof window !== "undefined" ? `${window.location.origin}/api/auth/callback/google` : "";
            const scope = encodeURIComponent("openid email profile");
            const url = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&response_type=code&scope=${scope}&access_type=offline&prompt=consent`;
            window.location.href = url;
          }}
          className="flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-lg border border-gray-300 bg-white text-gray-700 font-medium hover:bg-gray-50 transition-colors"
        >
          <GoogleIcon />
          <span className="text-sm">Login With Google</span>
        </button>

        <p className="text-center mt-6 text-sm text-gray-600">
          Already have an account?{" "}
          <Link href="/?signin=1" className="text-[#5B4B8A] font-medium underline hover:no-underline">
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
}
