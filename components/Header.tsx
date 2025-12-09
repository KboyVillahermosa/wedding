import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="relative min-h-screen flex items-center pt-5 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/80 via-rose-50/40 via-amber-50/30 to-emerald-50/60"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-200/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-rose-200/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-amber-200/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      
      {/* Decorative hearts */}
      <div className="absolute top-32 right-32 text-4xl opacity-10 animate-float">💕</div>
      <div className="absolute bottom-40 left-24 text-3xl opacity-10 animate-float" style={{ animationDelay: '1s' }}>💖</div>
      <div className="absolute top-1/3 right-1/4 text-2xl opacity-10 animate-float" style={{ animationDelay: '3s' }}>✨</div>
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 w-full py-20 lg:py-32 z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8 animate-fade-in-up">
            <div className="space-y-6">
              <div className="inline-block mb-4">
                <span className="font-dancing text-2xl lg:text-3xl text-rose-400 animate-pulse">💐</span>
              </div>
              <h1 className="font-playfair text-6xl lg:text-8xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-emerald-700 via-emerald-600 to-rose-500 bg-clip-text text-transparent">
                Karen & Erin
                </span>
              </h1>
              
              <div className="font-dancing text-3xl lg:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-rose-500 to-emerald-600 animate-shimmer">
                are getting married
              </div>
              
              <div className="flex items-center justify-center lg:justify-start gap-2 pt-2">
                <div className="w-12 h-px bg-gradient-to-r from-transparent via-emerald-400 to-emerald-400"></div>
                <span className="text-emerald-400 text-xl">❦</span>
                <div className="w-12 h-px bg-gradient-to-r from-emerald-400 via-rose-400 to-transparent"></div>
              </div>
            </div>
            
            {/* Date & Location */}
            <div className="font-poppins space-y-4 text-emerald-800">
              <div className="flex items-center justify-center lg:justify-start gap-3">
                <span className="text-2xl">📅</span>
              <p className="text-2xl lg:text-3xl font-light">
                February 12th, 2026
              </p>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-3">
                <span className="text-xl">📍</span>
              <p className="text-lg lg:text-xl text-emerald-700">
                Cebu, Philippines • 3:30 PM
              </p>
              </div>
            </div>
            
            {/* CTA Button */}
            <div className="flex justify-center lg:justify-start pt-6">
              <Link 
                href="/#rsvp"
                className="group relative inline-block bg-gradient-to-r from-emerald-600 via-emerald-700 to-emerald-600 hover:from-emerald-700 hover:via-emerald-800 hover:to-emerald-700 text-white font-poppins font-semibold px-10 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-2xl text-center btn-romantic overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                RSVP Now
                  <span className="group-hover:translate-x-1 transition-transform">💌</span>
                </span>
              </Link>
            </div>
          </div>

          {/* Right Content - Couple Photo */}
          <div className="flex justify-center lg:justify-end animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="relative w-full max-w-md group">
              {/* Decorative frame elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-emerald-300/30 rounded-lg rotate-12 animate-float"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 border-2 border-rose-300/30 rounded-lg -rotate-12 animate-float" style={{ animationDelay: '1s' }}></div>
              
              <div className="relative w-full pb-[133.33%] rounded-3xl overflow-hidden shadow-2xl group-hover:shadow-emerald-200/50 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-100/20 via-transparent to-rose-100/20 z-10"></div>
                <Image
                  src="/couple-photo.jpg"
                  alt="Karen and Erin"
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none z-10"></div>
                
                {/* Shimmer effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shimmer pointer-events-none z-20"></div>
              </div>
              
              {/* Floating decorative elements */}
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-3xl opacity-20 animate-float">🌸</div>
              <div className="absolute -bottom-8 right-1/4 text-2xl opacity-20 animate-float" style={{ animationDelay: '2s' }}>🌿</div>
            </div>
          </div>

        </div>
      </div>
    </header>
  );
}