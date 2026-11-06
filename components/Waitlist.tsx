"use client";
import { useState } from "react";

export default function Waitlist() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [school, setSchool] = useState("");
  const [classYear, setClassYear] = useState("");
  const [major, setMajor] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !school.trim() || !classYear) {
      setError("Please fill in all required fields.");
      return;
    }

    setError("");
    setLoading(true);

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          school: school.trim(),
          classYear,
          major: major.trim() || undefined
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to join waitlist');
      }

      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="waitlist" className="py-32 relative bg-white">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#3B28CC]/20 to-transparent"></div>

      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="font-syne text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-black">
            Ready to Launch
            <br />
            <span className="gradient-text">Your Career?</span>
          </h2>
          <p className="text-xl text-black/50 font-dm-sans max-w-2xl mx-auto">
            NextUp is especially powerful for freshmen and sophomores, but we welcome students from any class year.
          </p>
        </div>

        <div className="relative rounded-3xl bg-white border border-[#3B28CC]/10 p-8 sm:p-12 shadow-2xl shadow-[#3B28CC]/5">
          {!submitted ? (
            <form onSubmit={onSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-black/70 mb-2 font-syne">
                    Full Name <span className="text-[#3B28CC]">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="John Doe"
                    required
                    className="w-full rounded-xl border border-black/10 px-5 py-3.5 text-black placeholder-black/30 focus:border-[#3B28CC] focus:ring-4 focus:ring-[#3B28CC]/10 transition-all outline-none font-dm-sans"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-black/70 mb-2 font-syne">
                    School Email <span className="text-[#3B28CC]">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@university.edu"
                    required
                    className="w-full rounded-xl border border-black/10 px-5 py-3.5 text-black placeholder-black/30 focus:border-[#3B28CC] focus:ring-4 focus:ring-[#3B28CC]/10 transition-all outline-none font-dm-sans"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="school" className="block text-sm font-medium text-black/70 mb-2 font-syne">
                  School/University <span className="text-[#3B28CC]">*</span>
                </label>
                <input
                  id="school"
                  type="text"
                  value={school}
                  onChange={(e) => setSchool(e.target.value)}
                  placeholder="e.g., Stanford University"
                  required
                  className="w-full rounded-xl border border-black/10 px-5 py-3.5 text-black placeholder-black/30 focus:border-[#3B28CC] focus:ring-4 focus:ring-[#3B28CC]/10 transition-all outline-none font-dm-sans"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="classYear" className="block text-sm font-medium text-black/70 mb-2 font-syne">
                    Class Year <span className="text-[#3B28CC]">*</span>
                  </label>
                  <div className="relative">
                    <select
                      id="classYear"
                      value={classYear}
                      onChange={(e) => setClassYear(e.target.value)}
                      required
                      className="w-full rounded-xl border border-black/10 px-5 py-3.5 text-black focus:border-[#3B28CC] focus:ring-4 focus:ring-[#3B28CC]/10 transition-all outline-none font-dm-sans appearance-none bg-white"
                    >
                      <option value="">Select your class year</option>
                      <option value="Freshman">Freshman</option>
                      <option value="Sophomore">Sophomore</option>
                      <option value="Junior">Junior</option>
                      <option value="Senior">Senior</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-black/40">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="major" className="block text-sm font-medium text-black/70 mb-2 font-syne">
                    Major (Optional)
                  </label>
                  <input
                    id="major"
                    type="text"
                    value={major}
                    onChange={(e) => setMajor(e.target.value)}
                    placeholder="e.g., Computer Science"
                    className="w-full rounded-xl border border-black/10 px-5 py-3.5 text-black placeholder-black/30 focus:border-[#3B28CC] focus:ring-4 focus:ring-[#3B28CC]/10 transition-all outline-none font-dm-sans"
                  />
                </div>
              </div>

              {error && (
                <div className="flex items-center gap-2 text-red-600 bg-red-50 px-4 py-3 rounded-lg font-dm-sans">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm font-medium">{error}</span>
                </div>
              )}

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-full bg-[#3B28CC] px-8 py-4 text-white font-bold transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 font-syne"
                >
                  {loading ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    'Join the Waitlist'
                  )}
                </button>
              </div>

              <p className="text-center text-sm text-black/40 mt-6 font-dm-sans">
                We respect your privacy. No spam, just opportunities.
              </p>
            </form>
          ) : (
            <div className="text-center py-16">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 mb-8">
                <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-black mb-4 font-syne">You're on the list!</h3>
              <p className="text-xl text-black/60 font-dm-sans">
                We'll reach out when NextUp is ready. Get excited! 🚀
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
