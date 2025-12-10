export default function Demo() {
  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="mx-auto max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Your Career Companion
          </h2>
          <p className="mt-6 text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            NextUp mobile app guides you from freshman year to landing your dream opportunity
          </p>
        </div>

        {/* Mobile Phone Mockups */}
        <div className="relative flex justify-center items-center gap-8 py-16">
          {/* Floating background blobs */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-400/20 dark:bg-blue-600/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-400/20 dark:bg-purple-600/20 rounded-full blur-3xl"></div>
          </div>

          {/* Left Phone - iOS */}
          <div className="relative animate-float hidden md:block" style={{ animationDelay: '0s' }}>
            <div className="w-64 h-[500px] bg-gray-900 dark:bg-gray-800 rounded-[3rem] p-3 shadow-2xl border-8 border-gray-800 dark:border-gray-900">
              <div className="w-full h-full bg-gradient-to-br from-blue-100 via-purple-100 to-white dark:from-gray-900 dark:via-blue-900/30 dark:to-gray-800 rounded-[2.3rem] overflow-hidden">
                <div className="flex justify-center pt-4 pb-2">
                  <div className="w-24 h-6 bg-gray-900 dark:bg-black rounded-full"></div>
                </div>
                <div className="px-4 space-y-3">
                  <div className="h-16 bg-white/80 dark:bg-gray-700/50 rounded-2xl backdrop-blur-sm"></div>
                  <div className="h-32 bg-white/80 dark:bg-gray-700/50 rounded-2xl backdrop-blur-sm"></div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="h-24 bg-white/80 dark:bg-gray-700/50 rounded-2xl backdrop-blur-sm"></div>
                    <div className="h-24 bg-white/80 dark:bg-gray-700/50 rounded-2xl backdrop-blur-sm"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -top-4 -left-4 bg-white dark:bg-gray-800 rounded-full p-3 shadow-xl border border-gray-200 dark:border-gray-700">
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
            </div>
          </div>

          {/* Center Phone - Featured */}
          <div className="relative animate-float z-10" style={{ animationDelay: '1s' }}>
            <div className="w-72 h-[560px] bg-gray-900 dark:bg-gray-800 rounded-[3rem] p-3 shadow-2xl border-8 border-gray-800 dark:border-gray-900">
              <div className="w-full h-full bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-gray-800 rounded-[2.3rem] overflow-hidden">
                <div className="flex justify-center pt-4 pb-2">
                  <div className="w-28 h-6 bg-gray-900 dark:bg-black rounded-full"></div>
                </div>
                <div className="px-5 space-y-4">
                  <div className="h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    NextUp
                  </div>
                  <div className="h-36 bg-white/90 dark:bg-gray-700/50 rounded-2xl backdrop-blur-sm border border-gray-200 dark:border-gray-600 p-4">
                    <div className="h-3 w-3/4 bg-gray-300 dark:bg-gray-600 rounded mb-3"></div>
                    <div className="h-3 w-1/2 bg-gray-300 dark:bg-gray-600 rounded mb-3"></div>
                    <div className="h-20 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-xl mt-3"></div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="h-28 bg-white/90 dark:bg-gray-700/50 rounded-2xl backdrop-blur-sm border border-gray-200 dark:border-gray-600"></div>
                    <div className="h-28 bg-white/90 dark:bg-gray-700/50 rounded-2xl backdrop-blur-sm border border-gray-200 dark:border-gray-600"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full px-6 py-2 shadow-xl text-sm font-semibold whitespace-nowrap">
              Coming Soon
            </div>
          </div>

          {/* Right Phone - Android */}
          <div className="relative animate-float hidden md:block" style={{ animationDelay: '2s' }}>
            <div className="w-64 h-[500px] bg-gray-900 dark:bg-gray-800 rounded-[3rem] p-3 shadow-2xl border-8 border-gray-800 dark:border-gray-900">
              <div className="w-full h-full bg-gradient-to-br from-green-100 via-blue-100 to-white dark:from-gray-900 dark:via-green-900/30 dark:to-gray-800 rounded-[2.3rem] overflow-hidden">
                <div className="flex justify-center pt-3 pb-2">
                  <div className="w-8 h-8 bg-gray-900 dark:bg-black rounded-full"></div>
                </div>
                <div className="px-4 space-y-3">
                  <div className="h-16 bg-white/80 dark:bg-gray-700/50 rounded-2xl backdrop-blur-sm"></div>
                  <div className="h-32 bg-white/80 dark:bg-gray-700/50 rounded-2xl backdrop-blur-sm"></div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="h-24 bg-white/80 dark:bg-gray-700/50 rounded-2xl backdrop-blur-sm"></div>
                    <div className="h-24 bg-white/80 dark:bg-gray-700/50 rounded-2xl backdrop-blur-sm"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 bg-white dark:bg-gray-800 rounded-full p-3 shadow-xl border border-gray-200 dark:border-gray-700">
              <svg className="w-8 h-8" viewBox="0 0 800 800" fill="#a4c639">
                <path d="M146.7 288.3c0-22.3 18-40.3 40.3-40.3s40.3 18 40.3 40.3v143.5c0 22.3-18 40.3-40.3 40.3s-40.3-18-40.3-40.3V288.3zm466.6 0c0-22.3 18-40.3 40.3-40.3s40.3 18 40.3 40.3v143.5c0 22.3-18 40.3-40.3 40.3s-40.3-18-40.3-40.3V288.3z"/>
                <path d="M254.6 711.2c0 22.3 18 40.3 40.3 40.3s40.3-18 40.3-40.3V567.7h129.6v143.5c0 22.3 18 40.3 40.3 40.3s40.3-18 40.3-40.3V567.7h-290.8v143.5z"/>
                <path d="M254.6 231.4c0-22.3 18-40.3 40.3-40.3h210.2c22.3 0 40.3 18 40.3 40.3v305h-290.8v-305zm273.4-89.7L568.7 72c4.8-8.1 2.1-18.5-6-23.3-8.1-4.8-18.5-2.1-23.3 6l-44.7 75.1c-31.9-14.2-67.4-22.1-105-22.1s-73.1 7.9-105 22.1l-44.7-75.1c-4.8-8.1-15.2-10.8-23.3-6-8.1 4.8-10.8 15.2-6 23.3l40.7 69.7C174 182.8 125 250.4 125 328.5h550c0-78.1-49-145.7-126.4-186.8zM315 254c-11.3 0-20.5-9.2-20.5-20.5s9.2-20.5 20.5-20.5 20.5 9.2 20.5 20.5-9.2 20.5-20.5 20.5zm170 0c-11.3 0-20.5-9.2-20.5-20.5s9.2-20.5 20.5-20.5 20.5 9.2 20.5 20.5-9.2 20.5-20.5 20.5z"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Feature highlights */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl shadow-lg mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Lightning Fast</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Get matched with opportunities in seconds</p>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl shadow-lg mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Verified Results</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Real opportunities from trusted organizations</p>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl shadow-lg mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Never Miss Out</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Smart reminders keep you on track</p>
          </div>
        </div>
      </div>
    </section>
  );
}
