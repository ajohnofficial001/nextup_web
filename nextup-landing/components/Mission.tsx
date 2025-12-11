export default function Mission() {
    return (
        <section id="mission" className="py-32 relative noise-bg">
            <div className="absolute inset-0 radial-gradient"></div>
            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
                    {/* Mission */}
                    <div className="p-10 md:p-12 rounded-3xl border border-[#3B28CC]/10 bg-white/[0.02] glow">
                        <div className="w-16 h-16 mb-8 rounded-2xl bg-[#3B28CC]/5 flex items-center justify-center text-[#3B28CC]">
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                        <span className="text-sm font-medium tracking-widest uppercase text-[#3B28CC]/40 mb-4 block">
                            Our Mission
                        </span>
                        <h3 className="font-syne text-2xl md:text-3xl font-bold mb-6 text-black">
                            Empowering Students
                        </h3>
                        <p className="text-black/60 leading-relaxed text-lg font-dm-sans">
                            To level the playing field and give underclassmen—and any student ready to start early—the tools they need to land their dream opportunities.
                        </p>
                    </div>

                    {/* Vision */}
                    <div className="p-10 md:p-12 rounded-3xl border border-[#3B28CC]/10 bg-white/[0.02] glow">
                        <div className="w-16 h-16 mb-8 rounded-2xl bg-[#3B28CC]/5 flex items-center justify-center text-[#3B28CC]">
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                        </div>
                        <span className="text-sm font-medium tracking-widest uppercase text-[#3B28CC]/40 mb-4 block">
                            Our Vision
                        </span>
                        <h3 className="font-syne text-2xl md:text-3xl font-bold mb-6 text-black">
                            Clear Career Paths
                        </h3>
                        <p className="text-black/60 leading-relaxed text-lg font-dm-sans">
                            No more guessing. No more missed deadlines. Just a clear, guided path from your first year to your first offer.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
