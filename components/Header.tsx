import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="relative min-h-screen flex items-center pt-5 bg-gradient-to-b from-emerald-50/50 via-white to-emerald-50/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-6">
              <h1 className="font-playfair text-6xl lg:text-8xl font-bold text-emerald-900 leading-tight">
                Karen & Erin
              </h1>
              
              <div className="font-dancing text-3xl lg:text-4xl text-emerald-700">
                are getting married
              </div>
              
              <div className="w-20 h-px bg-gradient-to-r from-emerald-400 to-transparent mx-auto lg:mx-0"></div>
            </div>
            
            {/* Date & Location */}
            <div className="font-poppins space-y-3 text-emerald-800">
              <p className="text-2xl lg:text-3xl font-light">
                February 12th, 2026
              </p>
              <p className="text-lg lg:text-xl text-emerald-700">
                Cebu, Philippines • 3:30 PM
              </p>
            </div>
            
            {/* CTA Button */}
            <div className="flex justify-center lg:justify-start pt-4">
              <Link 
                href="/#rsvp"
                className="inline-block bg-emerald-700 hover:bg-emerald-800 text-white font-poppins font-medium px-8 py-3.5 rounded-full transition-all duration-200 shadow-md hover:shadow-lg text-center"
              >
                RSVP Now
              </Link>
            </div>
          </div>

          {/* Right Content - Couple Photo */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              <div className="relative w-full pb-[133.33%] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/couple-photo.jpg"
                  alt="Karen and Erin"
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"></div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </header>
  );
}