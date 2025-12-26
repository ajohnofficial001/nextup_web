import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-12 border-t border-[#3B28CC]/10 bg-white text-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col gap-8">
          {/* Top Section */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <Image
                src="/nextup_logo.png"
                alt="NextUp Logo"
                width={32}
                height={32}
                className="object-contain rounded-lg"
              />
              <div className="flex items-center gap-2">
                <span className="font-syne text-xl font-bold">
                  NEXTUP<span className="text-[#3B28CC]">.</span>
                </span>
                <span className="text-black/30 text-sm">Career App</span>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
              <div className="flex items-center gap-2 text-black/40 text-sm font-dm-sans">
                <a href="#waitlist" className="hover:text-[#3B28CC] transition-colors">Join Waitlist</a>
              </div>
              <div className="flex items-center gap-2 text-black/40 text-sm font-dm-sans">
                <a href="mailto:support@nextup.com" className="hover:text-[#3B28CC] transition-colors">Contact Support</a>
              </div>
              <div className="flex items-center gap-2 text-black/40 text-sm font-dm-sans">
                <Link href="/privacy-policy" className="hover:text-[#3B28CC] transition-colors">Privacy Policy</Link>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6 border-t border-[#3B28CC]/5">
            <p className="text-black/40 text-sm text-center md:text-left font-dm-sans">
              Built for students, by students.
            </p>
            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
              <Link href="/privacy-policy" className="text-black/40 text-sm font-dm-sans hover:text-[#3B28CC] transition-colors">
                Privacy Policy
              </Link>
              <span className="hidden md:inline text-black/20">•</span>
              <p className="text-black/40 text-sm font-dm-sans">
                © {new Date().getFullYear()} NextUp. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}