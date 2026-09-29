"use client"; // Required for stateful hooks like useState in Next.js App Router

import Link from "next/link";
import { useState, useEffect } from "react";

export default function HomePage() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    // Sync document root class for dark/light styling
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className={`min-h-screen flex flex-col transition-colors duration-300 ${darkMode ? "bg-slate-950 text-slate-100" : "bg-slate-50 text-slate-900"}`}>
      
      {/* Navigation Bar */}
      <header className={`border-b sticky top-0 z-50 backdrop-blur transition-colors duration-300 ${darkMode ? "border-slate-800 bg-slate-950/80" : "border-slate-200 bg-white/80"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="h-8 w-8 rounded-lg bg-indigo-600 flex items-center justify-center font-bold text-lg text-white shadow-lg shadow-indigo-500/30">
               RG
            </div>
            <span className="font-semibold text-lg tracking-tight">RiskGuard</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
            <Link href="/features" className={`transition ${darkMode ? "text-slate-400 hover:text-slate-100" : "text-slate-600 hover:text-slate-900"}`}>Features</Link>
            <Link href="/pricing" className={`transition ${darkMode ? "text-slate-400 hover:text-slate-100" : "text-slate-600 hover:text-slate-900"}`}>Pricing</Link>
            <Link href="/docs" className={`transition ${darkMode ? "text-slate-400 hover:text-slate-100" : "text-slate-600 hover:text-slate-900"}`}>API Docs</Link>
          </nav>

          <div className="flex items-center space-x-4">
            {/* Dark/Light Mode Toggle Button */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              aria-label="Toggle Theme"
              className={`p-2 rounded-lg border transition ${darkMode ? "border-slate-800 bg-slate-900 text-yellow-400 hover:bg-slate-800" : "border-slate-200 bg-slate-100 text-slate-700 hover:bg-slate-200"}`}
            >
              {darkMode ? (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>

            <Link href="/login" className={`text-sm font-medium transition ${darkMode ? "text-slate-300 hover:text-white" : "text-slate-600 hover:text-slate-900"}`}>
              Sign In
            </Link>
            <Link href="/signup" className="bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium px-4 py-2 rounded-lg transition shadow-md shadow-indigo-600/20">
              Get Started
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-24 lg:pt-32 lg:pb-32">
        <div className={`absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] ${darkMode ? "from-indigo-900/20 via-slate-950/0 to-slate-950" : "from-indigo-100/60 via-slate-50/0 to-slate-50"} pointer-events-none`} />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className={`inline-flex items-center space-x-2 border px-3 py-1 rounded-full text-xs font-medium mb-8 shadow-inner ${darkMode ? "bg-indigo-950/60 border-indigo-800/60 text-indigo-300" : "bg-indigo-50 border-indigo-200 text-indigo-700"}`}>
            <span className="h-2 w-2 rounded-full bg-indigo-500 animate-pulse" />
            <span>Real-Time Velocity Checks & Risk Scoring Engine</span>
          </div>
          
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight max-w-4xl mx-auto leading-[1.1]">
            Stop Fraud Before It Hits Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-cyan-500">Bottom Line</span>
          </h1>
          
          <p className={`mt-6 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
            Enterprise-grade fraud detection, multi-tenant risk engines, and real-time transaction scoring designed for high-growth digital platforms.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/signup" className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-500 text-white font-medium px-8 py-3.5 rounded-xl transition shadow-lg shadow-indigo-600/30 text-center">
              Start Free Trial
            </Link>
            <Link href="/docs" className={`w-full sm:w-auto border font-medium px-8 py-3.5 rounded-xl transition text-center ${darkMode ? "bg-slate-900 hover:bg-slate-800 border-slate-800 text-slate-300 hover:text-white" : "bg-white hover:bg-slate-100 border-slate-300 text-slate-700"}`}>
              Explore API Docs
            </Link>
          </div>
        </div>
      </section>

      {/* Feature Highlights Grid */}
      <section className={`py-20 border-t transition-colors ${darkMode ? "border-slate-900 bg-slate-950/50" : "border-slate-200 bg-white/50"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight">Engineered for Absolute Reliability</h2>
            <p className={`mt-4 ${darkMode ? "text-slate-400" : "text-slate-600"}`}>Everything you need to secure user onboarding, checkout flows, and API requests.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className={`border p-8 rounded-2xl transition ${darkMode ? "bg-slate-900/40 border-slate-800/80 hover:border-indigo-500/50" : "bg-slate-50 border-slate-200 hover:border-indigo-400/50"}`}>
              <div className="h-12 w-12 rounded-xl bg-indigo-600/10 border border-indigo-500/20 flex items-center justify-center text-indigo-500 mb-6 font-bold text-xl">
                ⚡
              </div>
              <h3 className="text-xl font-semibold mb-2">Sub-Millisecond Velocity</h3>
              <p className={`text-sm leading-relaxed ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
                Powered by Redis caching and edge-ready lookups to analyze request frequency without adding latency to your checkout.
              </p>
            </div>

            <div className={`border p-8 rounded-2xl transition ${darkMode ? "bg-slate-900/40 border-slate-800/80 hover:border-indigo-500/50" : "bg-slate-50 border-slate-200 hover:border-indigo-400/50"}`}>
              <div className="h-12 w-12 rounded-xl bg-cyan-600/10 border border-cyan-500/20 flex items-center justify-center text-cyan-500 mb-6 font-bold text-xl">
                🛡️
              </div>
              <h3 className="text-xl font-semibold mb-2">Multi-Tenant Isolation</h3>
              <p className={`text-sm leading-relaxed ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
                Secure organization scoping, role-based access control, and granular API keys built for modern SaaS teams.
              </p>
            </div>

            <div className={`border p-8 rounded-2xl transition ${darkMode ? "bg-slate-900/40 border-slate-800/80 hover:border-indigo-500/50" : "bg-slate-50 border-slate-200 hover:border-indigo-400/50"}`}>
              <div className="h-12 w-12 rounded-xl bg-emerald-600/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500 mb-6 font-bold text-xl">
                💳
              </div>
              <h3 className="text-xl font-semibold mb-2">Paddle Billing Integration</h3>
              <p className={`text-sm leading-relaxed ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
                Seamless subscription management, webhook verification, and automated tier provisioning out of the box.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Professional SaaS Footer */}
      <footer className={`mt-auto border-t transition-colors ${darkMode ? "border-slate-900 bg-slate-950 text-slate-400" : "border-slate-200 bg-slate-100 text-slate-600"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="h-7 w-7 rounded-lg bg-indigo-600 flex items-center justify-center font-bold text-white text-sm">
                  RG
                </div>
                <span className={`font-semibold text-lg tracking-tight ${darkMode ? "text-white" : "text-slate-900"}`}>RiskGuard</span>
              </div>
              <p className="text-sm">
                Next-generation automated fraud scoring and multi-tenant security architecture for high-growth tech enterprises.
              </p>
            </div>

            <div>
              <h4 className={`text-sm font-semibold uppercase tracking-wider mb-4 ${darkMode ? "text-white" : "text-slate-900"}`}>Product</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/features" className="hover:underline">Risk Engine</Link></li>
                <li><Link href="/features" className="hover:underline">Velocity Checks</Link></li>
                <li><Link href="/pricing" className="hover:underline">Pricing Plans</Link></li>
                <li><Link href="/docs" className="hover:underline">Changelog</Link></li>
              </ul>
            </div>

            <div>
              <h4 className={`text-sm font-semibold uppercase tracking-wider mb-4 ${darkMode ? "text-white" : "text-slate-900"}`}>Developers</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/docs" className="hover:underline">API Documentation</Link></li>
                <li><Link href="/docs" className="hover:underline">Webhook Status</Link></li>
                <li><Link href="/docs" className="hover:underline">SDK Libraries</Link></li>
                <li><Link href="/docs" className="hover:underline">System Status</Link></li>
              </ul>
            </div>

            <div>
              <h4 className={`text-sm font-semibold uppercase tracking-wider mb-4 ${darkMode ? "text-white" : "text-slate-900"}`}>Legal & Compliance</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/privacy" className="hover:underline">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:underline">Terms of Service</Link></li>
                <li><Link href="/security" className="hover:underline">Security Whitepaper</Link></li>
              </ul>
            </div>
          </div>

          <div className={`border-t pt-8 flex flex-col sm:flex-row items-center justify-between text-xs ${darkMode ? "border-slate-900" : "border-slate-200"}`}>
            <p>&copy; {new Date().getFullYear()} SentinelRisk Platform. All rights reserved.</p>
            <p className="mt-4 sm:mt-0">Secured with enterprise SSL and real-time Redis edge validation.</p>
          </div>
        </div>
      </footer>

    </div>
  );
}