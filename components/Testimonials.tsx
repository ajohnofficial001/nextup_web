export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Sophomore, CS Major",
      university: "UC Berkeley",
      image: "👩‍💻",
      quote: "NextUp helped me land a Google internship in my freshman year. The AI roadmap was a game-changer!",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      name: "Marcus Johnson",
      role: "Junior, Business",
      university: "Howard University",
      image: "👨‍💼",
      quote: "Found 3 scholarships worth $15K total through NextUp. Couldn't have done it without the deadline tracker.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      name: "Aisha Patel",
      role: "Sophomore, Biology",
      university: "MIT",
      image: "👩‍🔬",
      quote: "The research opportunities feed is incredible. Got into a lab position at Mass General Hospital!",
      gradient: "from-pink-500 to-orange-500"
    }
  ];

  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-sm font-semibold">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            Student Success Stories
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Real Students, Real Results
          </h2>
          <p className="mt-6 text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            Join hundreds of underclassmen who've accelerated their careers with NextUp
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative"
            >
              {/* Gradient border effect */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${testimonial.gradient} rounded-3xl blur opacity-30 group-hover:opacity-60 transition duration-300`}></div>
              
              <div className="relative bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border border-gray-100 dark:border-gray-700 h-full">
                <div className="flex items-start gap-4 mb-6">
                  <div className={`text-4xl w-16 h-16 flex items-center justify-center rounded-2xl bg-gradient-to-br ${testimonial.gradient}`}>
                    {testimonial.image}
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 dark:text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-500">{testimonial.university}</div>
                  </div>
                </div>
                
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="mt-20 text-center">
          <div className="text-sm text-gray-500 dark:text-gray-400 mb-6 font-medium">Trusted by students from</div>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {["🎓 Ivy League", "🏛️ HBCUs", "🌟 Top 50 Universities", "🌎 Community Colleges"].map((badge, i) => (
              <div key={i} className="text-lg font-semibold text-gray-600 dark:text-gray-400">
                {badge}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
