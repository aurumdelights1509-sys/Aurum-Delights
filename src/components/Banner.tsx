import Image from 'next/image';
import Link from 'next/link';

interface BannerProps {
  backgroundSrc?: string; // Background image source
  logoSrc?: string; // Logo image source
  headline: string;
  subheadline?: string;
}

export default function Banner({ backgroundSrc, logoSrc, headline, subheadline }: BannerProps) {
  // Default background to 10.png and logo to logo.png if not provided
  const background = backgroundSrc || "/images/10.png";
  const logo = logoSrc || "/images/logo.png";

  return (
    <div className="relative w-full h-[500px] overflow-hidden" suppressHydrationWarning>
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={background}
          alt={headline || "Banner background"}
          fill
          className="object-cover"
          priority
        />
      </div>
      
      {/* Enhanced Overlay with Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/70 flex flex-col items-center justify-center">
        <div className="text-center text-white px-4 max-w-4xl pb-8">
          {/* Logo */}
          <div className="mb-6 flex justify-center">
            <Image 
              src={logo} 
              alt="Aurum Delights Logo" 
              width={180} 
              height={180} 
              className="object-contain drop-shadow-2xl"
            />
          </div>
          
          {/* Headline with Gold Gradient and Glow Effect */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-300 via-amber-200 to-yellow-300 bg-clip-text text-transparent drop-shadow-2xl leading-tight pb-2 text-amber-200">
            {headline}
          </h1>
          
          {/* Subheadline */}
          {subheadline && (
            <p className="text-xl md:text-2xl font-light mb-8 max-w-2xl mx-auto drop-shadow-lg">
              {subheadline}
            </p>
          )}
          
          {/* Call-to-Action Button */}
          <div>
            <Link href="/about">
              <button className="px-8 py-3 bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-amber-900 font-bold rounded-full shadow-2xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group">
                <span className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-amber-400 opacity-0 group-hover:opacity-30 transition-opacity duration-300"></span>
                <span className="absolute inset-0 rounded-full border-2 border-yellow-300 animate-ping opacity-0 group-hover:opacity-20"></span>
                <span className="relative z-10 flex items-center gap-2">
                  About Us
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
                <span className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </button>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-amber-950/80 to-transparent"></div>
      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-amber-950/80 to-transparent"></div>
    </div>
  );
}