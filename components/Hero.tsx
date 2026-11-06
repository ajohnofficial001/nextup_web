import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center noise-bg overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 grid-pattern opacity-[0.3]"></div>
      <div className="absolute inset-0 radial-gradient opacity-60"></div>

      {/* Animated Blobs */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-[#3B28CC] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-[#604FEF] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 pt-32 pb-20 text-center">
        <div>
          <span className="inline-block px-4 py-2 mb-8 text-xs font-medium tracking-widest uppercase border border-[#3B28CC]/20 rounded-full text-[#3B28CC]/60 bg-white/50 backdrop-blur-sm">
            Now accepting early access applications
          </span>
        </div>

        <h1 className="font-syne text-5xl sm:text-5xl md:text-6xl lg:text-8xl font-bold tracking-tight leading-[1.05] mb-8 text-black!">
          Launch Your Career
          <br />
          <span className="gradient-text">Before You Graduate</span>
        </h1>

        <p className="max-w-2xl mx-auto text-lg md:text-xl text-black leading-relaxed mb-12 font-dm-sans">
          An AI-powered mobile app designed for <span className="font-semibold text-[#3B28CC]">underclassmen</span>—and any student—who wants to land internships, scholarships, and research opportunities early.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#waitlist"
            className="group px-8 py-4 bg-[#3B28CC] text-white font-medium rounded-full hover:bg-[#3B28CC]/90 transition-all hover:scale-105 flex items-center justify-center gap-2 font-syne"
          >
            Join the Waitlist
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="#services"
            className="px-8 py-4 border border-[#3B28CC]/20 text-[#3B28CC] font-medium rounded-full hover:bg-[#3B28CC]/5 transition-all font-syne"
          >
            Explore Features
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden sm:block">
        <svg className="w-6 h-6 text-[#3B28CC]/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}