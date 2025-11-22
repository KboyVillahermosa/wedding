import Image from 'next/image';

export default function Header() {
  return (
    <header className="relative overflow-hidden">
      {/* Enhanced Background Layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-green-25 to-teal-50"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-100/40 via-transparent to-green-100/40"></div>
      
      {/* Animated Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-2 h-2 bg-emerald-300/60 rounded-full animate-ping"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-green-400/50 rounded-full animate-pulse delay-700"></div>
        <div className="absolute bottom-32 left-20 w-1 h-1 bg-teal-400/70 rounded-full animate-bounce delay-1000"></div>
        <div className="absolute top-60 left-1/2 w-2 h-2 bg-emerald-200/80 rounded-full animate-ping delay-500"></div>
      </div>
      
      {/* Subtle Pattern Overlay */}
      <div className="absolute inset-0 opacity-30">
        <div className="w-full h-full bg-emerald-50" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(52, 168, 124, 0.15) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Hero Section */}
      <div className="relative z-10 px-6 py-20 lg:px-12 lg:py-32">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <div className="text-center lg:text-left">
              {/* Decorative Element */}
              <div className="flex justify-center lg:justify-start mb-8">
                <svg className="w-16 h-16 text-emerald-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  <path d="M12 5.5c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6 2.69-6 6-6m0-1.5c-4.14 0-7.5 3.36-7.5 7.5s3.36 7.5 7.5 7.5 7.5-3.36 7.5-7.5S16.14 4 12 4z"/>
                  <circle cx="12" cy="12" r="3" fill="none" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M12 8c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2s2-.9 2-2v-4c0-1.1-.9-2-2-2z" fill="none"/>
                  <path d="M8 12h8M12 8v8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
              
              {/* Enhanced Main Heading */}
              <h1 className="font-playfair text-5xl lg:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-emerald-900 via-green-800 to-emerald-900 bg-clip-text text-transparent drop-shadow-sm">
                  Karen & Erin
                </span>
              </h1>
              
              {/* Enhanced Decorative Script */}
              <div className="font-dancing text-2xl lg:text-3xl mb-8 relative">
                <span className="bg-gradient-to-r from-emerald-700 via-green-600 to-emerald-700 bg-clip-text text-transparent">
                  are getting married
                </span>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-transparent via-emerald-400 to-transparent"></div>
              </div>
              
              {/* Date & Location */}
              <div className="font-poppins space-y-4 text-emerald-800 mb-12">
                <p className="text-xl lg:text-2xl font-medium">
                  February 12th, 2026
                </p>
                <p className="text-lg lg:text-xl font-light">
                  Cebu, Philippines • 3:30 PM
                </p>
              </div>
              
              {/* Enhanced CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="group relative bg-gradient-to-r from-emerald-700 to-green-700 hover:from-emerald-800 hover:to-green-800 text-white font-poppins font-medium px-10 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 overflow-hidden">
                  <span className="relative z-10">RSVP Now ✨</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </button>
                <button className="group relative border-2 border-emerald-700 text-emerald-700 hover:bg-emerald-700 hover:text-white font-poppins font-medium px-10 py-4 rounded-full transition-all duration-300 overflow-hidden hover:shadow-lg transform hover:-translate-y-1">
                  <span className="relative z-10">View Details 💕</span>
                  <div className="absolute inset-0 bg-emerald-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </button>
              </div>
            </div>

            {/* Right Content - Enhanced Couple Photo */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative group">
                {/* Enhanced Decorative Background Elements */}
                <div className="absolute -inset-8 bg-gradient-to-r from-emerald-200/20 to-green-200/30 rounded-full transform rotate-6 scale-105 group-hover:rotate-12 transition-transform duration-700"></div>
                <div className="absolute -inset-6 bg-gradient-to-l from-green-100/30 to-teal-100/40 rounded-full transform -rotate-3 scale-110 group-hover:-rotate-6 transition-transform duration-500"></div>
                <div className="absolute -inset-4 bg-emerald-50/50 rounded-full transform rotate-1 scale-108 group-hover:rotate-2 transition-transform duration-300"></div>
                
                {/* Enhanced Main Photo Container */}
                <div className="relative bg-white p-6 rounded-3xl shadow-2xl transform hover:scale-105 transition-all duration-500 hover:shadow-3xl border border-emerald-100/50">
                  <div className="relative w-80 h-96 lg:w-96 lg:h-[480px] rounded-2xl overflow-hidden">
                    <Image
                      src="/couple-photo.jpg"
                      alt="Karen and Erin - Beautiful couple making a heart with their hands"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      priority
                    />
                    {/* Enhanced Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/25 via-transparent to-emerald-50/10"></div>
                    
                    {/* Shimmer Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  </div>
                  
                  {/* Enhanced Floating Hearts with Animation */}
                  <div className="absolute -top-3 -right-3 w-10 h-10 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full flex items-center justify-center text-white text-lg animate-pulse shadow-lg">
                    ♥
                  </div>
                  <div className="absolute -bottom-3 -left-3 w-8 h-8 bg-gradient-to-r from-green-400 to-teal-400 rounded-full flex items-center justify-center text-white text-sm animate-pulse delay-700 shadow-md">
                    ♥
                  </div>
                  <div className="absolute top-4 -left-2 w-6 h-6 bg-gradient-to-r from-teal-300 to-emerald-300 rounded-full flex items-center justify-center text-white text-xs animate-bounce delay-1000 shadow-sm">
                    ♥
                  </div>
                </div>
                
                {/* Enhanced Quote Bubble */}
                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-white/95 to-emerald-50/95 backdrop-blur-lg px-8 py-4 rounded-full shadow-xl border border-emerald-200/50">
                  <p className="font-dancing text-xl whitespace-nowrap bg-gradient-to-r from-emerald-700 to-green-600 bg-clip-text text-transparent font-semibold">
                    Two hearts, one love ✨
                  </p>
                </div>
                
                {/* Magical Sparkles */}
                <div className="absolute top-8 right-8 w-2 h-2 bg-yellow-300 rounded-full animate-ping delay-300"></div>
                <div className="absolute bottom-16 left-8 w-1 h-1 bg-yellow-200 rounded-full animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 -right-4 w-1.5 h-1.5 bg-emerald-300 rounded-full animate-bounce delay-500"></div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </header>
  );
}