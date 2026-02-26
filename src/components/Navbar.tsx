"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { toast } from "react-toastify";
import SignInSection from "@/components/SignInSection";

type SessionUser = { email: string | null; name: string | null; picture: string | null } | null;

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [signInOpen, setSignInOpen] = useState(false);
  const [user, setUser] = useState<SessionUser>(null);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const userMenuDesktopRef = useRef<HTMLDivElement>(null);
  const userMenuMobileRef = useRef<HTMLDivElement>(null);
  const searchParams = useSearchParams();

  const fetchSession = () => {
    fetch("/api/auth/session")
      .then((res) => res.json())
      .then((data) => setUser(data.user ?? null))
      .catch(() => setUser(null));
  };

  useEffect(() => {
    fetchSession();
  }, []);

  useEffect(() => {
    if (!signInOpen) fetchSession();
  }, [signInOpen]);

  useEffect(() => {
    if (searchParams.get("signin") === "1") {
      setSignInOpen(true);
      window.history.replaceState(null, "", window.location.pathname || "/");
    }
  }, [searchParams]);

  useEffect(() => {
    if (!signInOpen) return;
    const onEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSignInOpen(false);
    };
    window.addEventListener("keydown", onEscape);
    return () => window.removeEventListener("keydown", onEscape);
  }, [signInOpen]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node;
      const inDesktop = userMenuDesktopRef.current?.contains(target);
      const inMobile = userMenuMobileRef.current?.contains(target);
      if (!inDesktop && !inMobile) setUserMenuOpen(false);
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const handleLogout = () => {
    fetch("/api/auth/logout", { method: "POST" }).then(() => {
      toast.success("Logged out successfully");
      fetchSession();
      setUserMenuOpen(false);
      setMobileOpen(false);
    });
  };

  const initial = user?.name?.charAt(0)?.toUpperCase() ?? user?.email?.charAt(0)?.toUpperCase() ?? "?";
  const userMenu = user ? (
    <div ref={userMenuDesktopRef} className="relative shrink-0">
      <button
        type="button"
        onClick={() => setUserMenuOpen((o) => !o)}
        className="w-9 h-9 rounded-full bg-[#5B4B8A] flex items-center justify-center text-white text-sm font-medium shrink-0 hover:bg-[#4A3D72] transition-colors"
        title={user.email ?? undefined}
        aria-label="Account menu"
        aria-expanded={userMenuOpen}
      >
        {initial}
      </button>
      {userMenuOpen && (
        <div className="absolute right-0 top-full mt-1.5 min-w-[120px] rounded-lg border border-gray-200 bg-white py-1 shadow-lg z-50">
          <button
            type="button"
            onClick={handleLogout}
            className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
          >
            Log out
          </button>
        </div>
      )}
    </div>
  ) : null;

  return (
    <header className="relative z-20 w-full py-6 border-b border-slate-200/80">
      <div className="w-full max-w-[1600px] mx-auto flex items-center justify-between gap-4 pl-6 pr-8 lg:px-12 min-w-0">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 flex-shrink-0">
          <svg
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-[#4F7CAC]"
          >
            <path
              d="M8 18c0-5 4-10 10-10s10 5 10 10-4 10-10 10"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M12 18c0-3 2.5-6 6-6s6 3 6 6-2.5 6-6 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
              opacity="0.7"
            />
            <path
              d="M16 18c0-1.5 1-3 2-3s2 1.5 2 3-1 3-2 3"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              fill="none"
              opacity="0.5"
            />
          </svg>
          <span className="text-xl font-bold text-gray-900">Frybix</span>
        </Link>

        {/* Desktop nav - no background */}
        <nav className="relative hidden md:flex items-center gap-6 lg:gap-8 flex-wrap justify-end">
          <Link href="/" className="text-gray-700 hover:text-gray-900 font-medium text-sm">
            Home
          </Link>
          <Link href="/pricing" className="text-gray-600 hover:text-gray-900 text-sm">
            Pricing
          </Link>
          <Link href="/docs" className="text-gray-600 hover:text-gray-900 text-sm">
            Docs
          </Link>
          <Link href="/FAQs" className="text-gray-600 hover:text-gray-900 text-sm">
            FAQs
          </Link>
          <Link href="/privacy-policy" className="text-gray-600 hover:text-gray-900 text-sm">
            Privacy Policy
          </Link>
          {userMenu ?? (
            <button
              type="button"
              onClick={() => setSignInOpen(true)}
              className="rounded-lg bg-[#5B4B8A] hover:bg-[#4A3D72] text-white text-sm font-medium px-5 py-2.5 transition-colors"
            >
              Sign In
            </button>
          )}
        </nav>

        {/* Hamburger / close - mobile only */}
        <button
          type="button"
          onClick={() => setMobileOpen((o) => !o)}
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 min-w-[2.5rem] min-h-[2.5rem] rounded-lg text-gray-700 hover:bg-gray-100 transition-colors shrink-0"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          <span
            className={`block w-5 h-0.5 bg-current rounded-full transition-transform ${
              mobileOpen ? "rotate-45 translate-y-1" : ""
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-current rounded-full my-1 ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-current rounded-full transition-transform ${
              mobileOpen ? "-rotate-45 -translate-y-1" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-200 ease-out bg-[#f8f7fc] border-t border-gray-200/80 ${
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="w-full max-w-[1600px] mx-auto px-6 pb-4 pt-2">
          <nav className="flex flex-col gap-1">
            <Link
              href="/"
              className="py-3 text-gray-700 font-medium"
              onClick={() => setMobileOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/pricing"
              className="py-3 text-gray-600 hover:text-gray-900"
              onClick={() => setMobileOpen(false)}
            >
              Pricing
            </Link>
            <Link
              href="/docs"
              className="py-3 text-gray-600 hover:text-gray-900"
              onClick={() => setMobileOpen(false)}
            >
              Docs
            </Link>
            <Link
              href="/FAQs"
              className="py-3 text-gray-600 hover:text-gray-900"
              onClick={() => setMobileOpen(false)}
            >
              FAQs
            </Link>
            <Link
              href="/privacy-policy"
              className="py-3 text-gray-600 hover:text-gray-900"
              onClick={() => setMobileOpen(false)}
            >
              Privacy Policy
            </Link>
            {user ? (
              <div className="mt-2 flex justify-center relative" ref={userMenuMobileRef}>
                <button
                  type="button"
                  onClick={() => setUserMenuOpen((o) => !o)}
                  className="w-9 h-9 rounded-full bg-[#5B4B8A] flex items-center justify-center text-white text-sm font-medium shrink-0 hover:bg-[#4A3D72] transition-colors"
                  aria-label="Account menu"
                  aria-expanded={userMenuOpen}
                >
                  {initial}
                </button>
                {userMenuOpen && (
                  <div className="absolute left-6 right-6 mt-1.5 rounded-lg border border-gray-200 bg-white py-1 shadow-lg z-50">
                    <button
                      type="button"
                      onClick={handleLogout}
                      className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Log out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <button
                type="button"
                className="mt-2 rounded-lg bg-[#5B4B8A] hover:bg-[#4A3D72] text-white text-sm font-medium py-3 w-full transition-colors"
                onClick={() => {
                  setMobileOpen(false);
                  setSignInOpen(true);
                }}
              >
                Sign In
              </button>
            )}
          </nav>
        </div>
      </div>

      {/* Sign In modal - blurry overlay */}
      {signInOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/30 backdrop-blur-sm"
          onClick={() => setSignInOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="signin-dialog-title"
        >
          <div
            className="relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSignInOpen(false)}
              className="absolute -top-2 -right-2 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 text-gray-600 hover:bg-gray-300 transition-colors"
              aria-label="Close sign in"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
            <SignInSection onSuccess={() => setSignInOpen(false)} />
          </div>
        </div>
      )}
    </header>
  );
}
