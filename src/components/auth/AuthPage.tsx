import React, { useState } from 'react';
import { Database, Code2, Copy, Check, X, Shield } from 'lucide-react';
import { saveStoredAuthSession } from '../../lib/storage';
import { SUPABASE_SQL_EDITOR_SCHEMA } from '../../lib/supabase';

interface AuthPageProps {
  onAuthSuccess: (session: {
    email: string;
    name?: string;
    phone?: string;
    provider?: 'google' | 'email';
  }) => void;
}

export const AuthPage: React.FC<AuthPageProps> = ({ onAuthSuccess }) => {
  const [mode, setMode] = useState<'login' | 'signup'>('login');
  const [email, setEmail] = useState('fitforlifevitthal@gmail.com');
  const [password, setPassword] = useState('••••••••••');
  const [phone, setPhone] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSqlModalOpen, setIsSqlModalOpen] = useState(false);
  const [copiedSql, setCopiedSql] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setIsLoading(true);
    setTimeout(() => {
      const displayName = email.split('@')[0] || 'User';
      const formattedName = displayName.charAt(0).toUpperCase() + displayName.slice(1);

      const session = {
        isLoggedIn: true,
        email: email.trim(),
        name: formattedName,
        phone: phone.trim(),
        provider: 'email' as const,
      };

      saveStoredAuthSession(session);
      setIsLoading(false);
      onAuthSuccess(session);
    }, 400);
  };

  const handleGoogleSignIn = () => {
    setIsLoading(true);
    setTimeout(() => {
      const session = {
        isLoggedIn: true,
        email: 'fitforlifevitthal@gmail.com',
        name: 'Vitthal',
        phone: '',
        provider: 'google' as const,
      };
      saveStoredAuthSession(session);
      setIsLoading(false);
      onAuthSuccess(session);
    }, 400);
  };

  const handleCopySql = () => {
    navigator.clipboard?.writeText(SUPABASE_SQL_EDITOR_SCHEMA);
    setCopiedSql(true);
    setTimeout(() => setCopiedSql(false), 2000);
  };

  return (
    <div className="min-h-screen w-full bg-[#fdfdfe] sm:bg-[#fafbfc] flex flex-col justify-between items-center py-8 sm:py-12 px-4 sm:px-6 relative select-none">
      {/* Top Bar with Supabase SQL Editor Helper */}
      <div className="w-full max-w-4xl flex items-center justify-between px-2 shrink-0">
        <div className="flex items-center gap-2">
          <img
            src="/assets/ai-ashokra-logo.png"
            alt="AI Ashokra"
            className="w-7 h-7 object-contain"
            onError={(e) => {
              const target = e.currentTarget;
              target.style.display = 'none';
            }}
          />
          <span className="font-semibold text-neutral-800 text-sm tracking-tight">
            AI Ashokra
          </span>
        </div>

        <button
          type="button"
          onClick={() => setIsSqlModalOpen(true)}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-neutral-200/80 bg-white hover:bg-neutral-50 text-xs font-medium text-neutral-600 hover:text-neutral-900 transition-colors shadow-2xs cursor-pointer"
        >
          <Database className="w-3.5 h-3.5 text-emerald-600" />
          <span>Supabase SQL Setup</span>
        </button>
      </div>

      {/* Main Center Auth Container */}
      <div className="w-full max-w-[480px] my-auto flex flex-col items-center animate-in fade-in zoom-in-95 duration-200">
        {/* Colorful AI Ashokra Spiral Logo */}
        <div className="flex justify-center mb-5 sm:mb-6">
          <img
            src="/assets/ai-ashokra-logo.png"
            alt="AI Ashokra Logo"
            className="w-14 h-14 sm:w-16 sm:h-16 object-contain drop-shadow-xs"
            onError={(e) => {
              const target = e.currentTarget;
              target.style.display = 'none';
              const parent = target.parentElement;
              if (parent && !parent.querySelector('.fallback-logo')) {
                const fallback = document.createElement('div');
                fallback.className =
                  'fallback-logo w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-tr from-violet-500 via-fuchsia-500 to-cyan-400 flex items-center justify-center text-white font-bold text-2xl shadow-md';
                fallback.innerText = 'A';
                parent.appendChild(fallback);
              }
            }}
          />
        </div>

        {/* Heading */}
        <h1 className="text-3xl sm:text-[35px] font-bold text-[#0c1424] text-center tracking-tight leading-tight mb-2">
          Welcome to AI Ashokra
        </h1>

        {/* Subtitle */}
        <p className="text-sm sm:text-[15px] text-neutral-500 text-center mb-7 sm:mb-8 font-normal">
          Choose how you would like to sign in
        </p>

        {/* Continue with Google Button (Exact match to Image 2 & 3) */}
        <button
          type="button"
          id="auth-google-btn"
          onClick={handleGoogleSignIn}
          disabled={isLoading}
          className="w-full py-3.5 sm:py-4 px-6 rounded-full bg-[#1c1f26] hover:bg-[#111317] active:scale-[0.99] text-white font-semibold text-sm sm:text-base flex items-center justify-center gap-3 transition-all shadow-xs cursor-pointer mb-7"
        >
          {/* Google G Logo matching the screenshot */}
          <span className="w-5 h-5 flex items-center justify-center font-bold text-blue-400 text-base leading-none">
            G
          </span>
          <span>Continue with Google</span>
        </button>

        {/* Divider: OR CONTINUE WITH YOUR EMAIL */}
        <div className="relative flex py-2 items-center w-full mb-6 sm:mb-7">
          <div className="flex-grow border-t border-neutral-200/90" />
          <span className="flex-shrink mx-4 text-[10px] sm:text-[11px] font-semibold tracking-wider text-neutral-400 uppercase select-none">
            OR CONTINUE WITH YOUR EMAIL
          </span>
          <div className="flex-grow border-t border-neutral-200/90" />
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="w-full flex flex-col">
          {/* Email Address */}
          <div className="mb-4">
            <label
              htmlFor="auth-email-input"
              className="block text-xs sm:text-[13.5px] font-semibold text-neutral-900 mb-2"
            >
              Email Address
            </label>
            <input
              id="auth-email-input"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@example.com"
              className="w-full px-5 py-3.5 sm:py-4 rounded-2xl bg-[#edf3ff] border-2 border-transparent focus:border-blue-300 focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-100 text-[15px] sm:text-base text-neutral-900 placeholder:text-neutral-400 transition-all"
            />
          </div>

          {/* Password */}
          <div className={mode === 'signup' ? 'mb-4' : 'mb-6'}>
            <label
              htmlFor="auth-password-input"
              className="block text-xs sm:text-[13.5px] font-semibold text-neutral-900 mb-2"
            >
              Password
            </label>
            <input
              id="auth-password-input"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••••"
              className="w-full px-5 py-3.5 sm:py-4 rounded-2xl bg-[#edf3ff] border-2 border-transparent focus:border-blue-300 focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-100 text-[15px] sm:text-base text-neutral-900 placeholder:text-neutral-400 transition-all"
            />
          </div>

          {/* Phone Number Field (Only present in Sign Up mode - Image 3) */}
          {mode === 'signup' && (
            <div className="mb-6 animate-in fade-in slide-in-from-top-2 duration-150">
              <label
                htmlFor="auth-phone-input"
                className="block text-xs sm:text-[13.5px] font-semibold text-neutral-900 mb-2"
              >
                Phone Number
              </label>
              <input
                id="auth-phone-input"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Enter your phone number"
                className="w-full px-5 py-3.5 sm:py-4 rounded-2xl bg-white border border-neutral-200 focus:border-blue-400 focus:outline-none focus:ring-4 focus:ring-blue-100 text-[15px] sm:text-base text-neutral-900 placeholder:text-neutral-400 transition-all"
              />
            </div>
          )}

          {/* Submit Action Button */}
          {mode === 'login' ? (
            <button
              type="submit"
              id="auth-login-submit-btn"
              disabled={isLoading || !email.trim()}
              className="w-full py-4 px-6 rounded-full bg-[#1c1f26] hover:bg-black active:scale-[0.99] text-white font-semibold text-sm sm:text-base transition-all shadow-xs cursor-pointer mb-5 disabled:opacity-50"
            >
              {isLoading ? 'Signing in...' : 'Log in'}
            </button>
          ) : (
            <button
              type="submit"
              id="auth-signup-submit-btn"
              disabled={isLoading || !email.trim()}
              className={`w-full py-4 px-6 rounded-full font-semibold text-sm sm:text-base transition-all shadow-xs cursor-pointer mb-5 active:scale-[0.99] ${
                phone.trim()
                  ? 'bg-[#1c1f26] hover:bg-black text-white'
                  : 'bg-[#d7dce5] hover:bg-[#cbd2dc] text-[#8c96a6]'
              }`}
            >
              {isLoading ? 'Creating account...' : 'Create account'}
            </button>
          )}

          {/* Switch Mode Link */}
          <div className="flex justify-center mb-8">
            {mode === 'login' ? (
              <button
                type="button"
                id="switch-to-signup-btn"
                onClick={() => setMode('signup')}
                className="text-xs sm:text-[13.5px] text-neutral-700 hover:text-neutral-950 underline underline-offset-4 font-medium cursor-pointer transition-colors"
              >
                Create a new account
              </button>
            ) : (
              <button
                type="button"
                id="switch-to-login-btn"
                onClick={() => setMode('login')}
                className="text-xs sm:text-[13.5px] text-neutral-700 hover:text-neutral-950 underline underline-offset-4 font-medium cursor-pointer transition-colors"
              >
                Already have an account? Log in
              </button>
            )}
          </div>
        </form>

        {/* Footer Terms & Policy */}
        <p className="text-xs sm:text-[13px] text-neutral-500 text-center leading-relaxed max-w-sm">
          By continuing, you agree to our{' '}
          <a
            href="#terms"
            onClick={(e) => e.preventDefault()}
            className="underline underline-offset-2 hover:text-neutral-800"
          >
            Terms of Service
          </a>{' '}
          and{' '}
          <a
            href="#privacy"
            onClick={(e) => e.preventDefault()}
            className="underline underline-offset-2 hover:text-neutral-800"
          >
            Privacy Policy
          </a>
          .
        </p>
      </div>

      {/* Supabase SQL Editor Setup Modal */}
      {isSqlModalOpen && (
        <div
          id="supabase-sql-modal-backdrop"
          className="fixed inset-0 z-70 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={(e) => {
            if (e.target === e.currentTarget) setIsSqlModalOpen(false);
          }}
        >
          <div
            id="supabase-sql-modal-card"
            className="bg-white rounded-3xl p-6 sm:p-8 max-w-2xl w-full shadow-2xl relative flex flex-col max-h-[90vh] border border-neutral-100"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <Database className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-neutral-900">
                    Supabase SQL Editor Ready Script
                  </h3>
                  <p className="text-xs text-neutral-500">
                    Run this query in your Supabase SQL Editor to support email, phone, and user profiles.
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setIsSqlModalOpen(false)}
                className="p-1 rounded-lg text-neutral-400 hover:text-neutral-700 hover:bg-neutral-100 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-hidden flex flex-col my-2">
              <div className="flex items-center justify-between pb-2">
                <span className="text-xs font-semibold text-neutral-700 flex items-center gap-1.5">
                  <Code2 className="w-4 h-4 text-neutral-500" />
                  PostgreSQL Schema (`public.profiles`)
                </span>
                <button
                  type="button"
                  onClick={handleCopySql}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-neutral-900 hover:bg-black text-white text-xs font-medium transition-colors cursor-pointer"
                >
                  {copiedSql ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy SQL</span>
                    </>
                  )}
                </button>
              </div>

              <pre className="flex-1 overflow-y-auto bg-neutral-900 text-neutral-100 text-xs p-4 rounded-2xl font-mono leading-relaxed select-all">
                {SUPABASE_SQL_EDITOR_SCHEMA}
              </pre>
            </div>

            <div className="mt-4 pt-3 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-500">
              <div className="flex items-center gap-1.5">
                <Shield className="w-4 h-4 text-emerald-500" />
                <span>Includes Row Level Security (RLS) and automatic auth trigger.</span>
              </div>
              <button
                type="button"
                onClick={() => setIsSqlModalOpen(false)}
                className="px-4 py-2 rounded-xl bg-neutral-100 hover:bg-neutral-200 text-neutral-800 font-medium cursor-pointer transition-colors"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Bottom Subtle copyright spacer */}
      <div className="h-4 shrink-0" />
    </div>
  );
};
