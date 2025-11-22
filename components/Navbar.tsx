'use client';

export default function Navbar() {
  return (
    <nav className="relative z-10 flex items-center justify-between px-6 py-6 lg:px-12">
      <div className="flex items-center space-x-8">
        <div className="font-dancing text-2xl font-semibold text-emerald-700 lg:text-3xl">
          S & A
        </div>
      </div>
      <div className="hidden md:flex items-center space-x-8">
        <a href="#home" className="font-poppins text-sm font-medium text-emerald-800 hover:text-emerald-600 transition-colors">
          Home
        </a>
        <a href="#story" className="font-poppins text-sm font-medium text-emerald-800 hover:text-emerald-600 transition-colors">
          Our Story
        </a>
        <a href="#details" className="font-poppins text-sm font-medium text-emerald-800 hover:text-emerald-600 transition-colors">
          Details
        </a>
        <a href="#gallery" className="font-poppins text-sm font-medium text-emerald-800 hover:text-emerald-600 transition-colors">
          Gallery
        </a>
        <a href="#rsvp" className="font-poppins text-sm font-medium text-emerald-800 hover:text-emerald-600 transition-colors">
          RSVP
        </a>
      </div>
      <button className="md:hidden p-2 text-emerald-800">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </nav>
  );
}