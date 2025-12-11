export default function Marquee() {
    const keywords = ["Automated Roadmap", "Opportunities Feed", "Deadline Tracker", "AI Career Agent", "Student Success"];

    return (
        <section className="py-8 border-y border-[#3B28CC]/10 bg-[#3B28CC]/[0.02] overflow-hidden">
            <div className="flex animate-marquee whitespace-nowrap">
                {[...Array(4)].map((_, i) => (
                    <div key={i} className="flex items-center gap-12 px-6">
                        {keywords.map((text, j) => (
                            <span key={j} className="font-syne text-2xl md:text-3xl font-bold text-[#3B28CC] flex items-center gap-12">
                                {text}
                                <span className="w-2 h-2 bg-[#3B28CC] rounded-full"></span>
                            </span>
                        ))}
                    </div>
                ))}
            </div>
        </section>
    );
}
