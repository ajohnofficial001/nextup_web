"use client";

import { useState } from "react";

const services = [
    {
        number: "01",
        title: "Automated Roadmap",
        description:
            "Personalized, semester-by-semester roadmap based on your major, year, and goals—so you always know what to do next.",
        items: [
            "Dynamic semester planning",
            "Goal-based milestone tracking",
            "Major-specific requirements",
            "Extracurricular recommendations",
            "Progress visualization",
        ],
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        ),
    },
    {
        number: "02",
        title: "Opportunities Feed",
        description:
            "Curated scholarships, internships, and conferences tailored for underclassmen but useful for any driven student.",
        items: [
            "Real-time scholarship alerts",
            "Internship matching engine",
            "Conference & event listings",
            "Organization partnerships (TMCF, UNCF)",
            "Smart filtering by eligibility",
        ],
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
        ),
    },
    {
        number: "03",
        title: "Deadline Tracker",
        description:
            "Smart reminders so you never miss an application deadline again—especially during your first and second year.",
        items: [
            "Automated deadline alerts",
            "Application status tracking",
            "Document requirement checklists",
            "Interview scheduling",
            "Calendar integration",
        ],
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
        ),
    },
    {
        number: "04",
        title: "AI Career Agent",
        description:
            "Get instant resume feedback, career advice, and opportunity suggestions 24/7—no matter your major.",
        items: [
            "Instant resume review",
            "Cover letter generation",
            "Mock interview practice",
            "Career path exploration",
            "24/7 chat assistance",
        ],
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
        ),
    },
];

export default function Services() {
    const [activeService, setActiveService] = useState(0);

    return (
        <section id="services" className="py-32 relative bg-[#3B28CC] text-white">
            {/* 
         Updated background to primary color as requested.
      */}
            <div className="max-w-7xl mx-auto px-6 lg:px-12 text-white">
                <div className="mb-20 text-center">
                    <span className="text-sm font-medium tracking-widest uppercase text-white/60 mb-4 block">
                        What We Offer
                    </span>
                    <h2 className="font-syne text-4xl md:text-5xl lg:text-6xl font-bold">
                        Everything You Need
                    </h2>
                </div>

                {/* Service Tabs - Desktop */}
                <div className="hidden lg:grid lg:grid-cols-2 gap-16 items-start">
                    {/* Service List */}
                    <div className="space-y-4">
                        {services.map((service, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveService(index)}
                                className={`w-full text-left p-6 rounded-2xl border transition-all cursor-pointer duration-300 ${activeService === index
                                    ? "bg-white text-[#3B28CC] border-white"
                                    : "bg-transparent border-white/10 hover:border-white/30 text-white"
                                    }`}
                            >
                                <div className="flex items-center gap-4">
                                    <span className={`text-sm font-mono ${activeService === index ? "text-[#3B28CC]/60" : "text-white/40"}`}>
                                        {service.number}
                                    </span>
                                    <span className="font-syne text-xl font-semibold">
                                        {service.title}
                                    </span>
                                </div>
                            </button>
                        ))}
                    </div>

                    {/* Active Service Detail */}
                    <div className="sticky top-32 p-10 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm">
                        <div className="mb-6 p-4 rounded-2xl bg-white/10 text-white w-fit">
                            {services[activeService].icon}
                        </div>
                        <h3 className="font-syne text-3xl font-bold mb-4 text-white">
                            {services[activeService].title}
                        </h3>
                        <p className="text-white/70 mb-8 text-lg leading-relaxed font-dm-sans">
                            {services[activeService].description}
                        </p>
                        <ul className="space-y-4">
                            {services[activeService].items.map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-white/80 font-dm-sans">
                                    <svg className="w-5 h-5 text-white/60 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Service Cards - Mobile */}
                <div className="lg:hidden grid gap-6">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="service-card p-8 rounded-3xl border border-white/10 bg-white/5"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 rounded-xl bg-white/10 text-white">
                                    {service.icon}
                                </div>
                                <span className="text-sm font-mono text-white/40">{service.number}</span>
                            </div>
                            <h3 className="font-syne text-2xl font-bold mb-3 text-white">
                                {service.title}
                            </h3>
                            <p className="text-white/60 mb-6 font-dm-sans">
                                {service.description}
                            </p>
                            <ul className="space-y-3">
                                {service.items.map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-white/70 text-sm font-dm-sans">
                                        <svg className="w-4 h-4 text-white/60 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
