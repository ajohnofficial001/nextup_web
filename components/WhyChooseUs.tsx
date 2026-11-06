const reasons = [
    {
        title: "10K+ Opportunities",
        description: "Curated internships, scholarships, and events from top organizations.",
    },
    {
        title: "Lightning Fast",
        description: "Get matched with relevant opportunities in seconds.",
    },
    {
        title: "Verified Results",
        description: "Real opportunities from trusted organizations like TMCF and UNCF.",
    },
    {
        title: "AI Powered",
        description: "Instant resume feedback and career advice 24/7.",
    },
    {
        title: "Student First",
        description: "Built specifically for the needs of underclassmen and ambitious students.",
    },
];

export default function WhyChooseUs() {
    return (
        <section id="why-us" className="py-32 relative bg-gradient-to-br from-gray-50 to-white text-black">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <span className="text-sm font-medium tracking-widest uppercase text-[#3B28CC]/60 mb-4 block">
                            Why NextUp
                        </span>
                        <h2 className="font-syne text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
                            Built for
                            <br />
                            <span className="text-black/30">Excellence</span>
                        </h2>
                        <p className="text-lg text-black/60 leading-relaxed font-dm-sans">
                            We combine technology, expertise, and innovation to empower your career growth
                            from day one. Don't wait until senior year to start building your future.
                        </p>
                    </div>

                    <div className="grid gap-6">
                        {reasons.map((item, index) => (
                            <div
                                key={index}
                                className="group p-6 rounded-2xl border border-black/5 bg-white hover:bg-[#3B28CC] hover:text-white transition-all duration-300 shadow-sm"
                            >
                                <div className="flex items-start gap-4">
                                    <span className="flex-shrink-0 w-10 h-10 rounded-full border border-black/10 group-hover:border-white/20 flex items-center justify-center text-sm font-mono group-hover:bg-white group-hover:text-[#3B28CC] transition-all">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>
                                    <div>
                                        <h3 className="font-syne text-xl font-semibold mb-2">
                                            {item.title}
                                        </h3>
                                        <p className="text-black/50 group-hover:text-white/80 transition-colors font-dm-sans">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
