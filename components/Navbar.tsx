'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleLinkClick = () => {
    closeMenu();
  };

  const handleHashClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    e.preventDefault();
    closeMenu();
    
    const hash = href.split('#')[1];
    
    if (pathname !== '/') {
      router.push('/');
      setTimeout(() => {
        scrollToSection(hash);
      }, 100);
    } else {
      scrollToSection(hash);
    }
  };

  const scrollToSection = (hash: string) => {
    const element = document.getElementById(hash);
    if (element) {
      const offset = 80; // Account for fixed navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    // Handle hash on page load
    if (typeof window !== 'undefined') {
      const hash = window.location.hash.substring(1);
      if (hash) {
        setTimeout(() => {
          scrollToSection(hash);
        }, 100);
      }
    }
  }, [pathname]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-lg border-b-2 border-emerald-100/50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="font-dancing text-2xl font-semibold lg:text-3xl tracking-wide transition-all duration-300 group">
            <span className="bg-gradient-to-r from-emerald-600 via-emerald-700 to-rose-500 bg-clip-text text-transparent group-hover:from-emerald-700 group-hover:via-rose-500 group-hover:to-emerald-700">
              K & E
            </span>
            <span className="ml-2 text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity">💕</span>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className={`font-poppins text-sm font-semibold transition-all duration-300 relative group ${
                pathname === '/' 
                  ? 'text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-emerald-700' 
                  : 'text-emerald-800 hover:text-emerald-600'
              }`}
            >
              Home
              {pathname === '/' && (
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-500 to-rose-400 rounded-full"></span>
              )}
              <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-500 to-rose-400 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </Link>
            <Link 
              href="/#schedule" 
              onClick={(e) => {
                e.preventDefault();
                handleHashClick(e.nativeEvent as unknown as React.MouseEvent<HTMLAnchorElement, MouseEvent>, '/#schedule');
              }}
              className="font-poppins text-sm font-semibold text-emerald-800 hover:text-emerald-600 transition-all duration-300 relative group"
            >
              Schedule
              <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-500 to-rose-400 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </Link>
            <Link 
              href="/#dress-code" 
              onClick={(e) => {
                e.preventDefault();
                handleHashClick(e.nativeEvent as unknown as React.MouseEvent<HTMLAnchorElement, MouseEvent>, '/#dress-code');
              }}
              className="font-poppins text-sm font-semibold text-emerald-800 hover:text-emerald-600 transition-all duration-300 relative group"
            >
              Motif & Dress Code
              <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-500 to-rose-400 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </Link>
            <Link 
              href="/#qa" 
              onClick={(e) => {
                e.preventDefault();
                handleHashClick(e.nativeEvent as unknown as React.MouseEvent<HTMLAnchorElement, MouseEvent>, '/#qa');
              }}
              className="font-poppins text-sm font-semibold text-emerald-800 hover:text-emerald-600 transition-all duration-300 relative group"
            >
              Q & A
              <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-500 to-rose-400 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu}
            className="md:hidden p-2 text-emerald-800 hover:text-emerald-600 transition-all duration-300 focus:outline-none rounded-lg hover:bg-emerald-50"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6 transform rotate-90 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="py-4 space-y-2 border-t-2 border-emerald-100/50 bg-gradient-to-b from-white to-emerald-50/20">
            <Link 
              href="/" 
              onClick={handleLinkClick}
              className={`block font-poppins text-base font-semibold transition-all duration-300 py-3 px-4 rounded-lg ${
                pathname === '/' 
                  ? 'text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-emerald-700 bg-emerald-50' 
                  : 'text-emerald-800 hover:text-emerald-600 hover:bg-emerald-50/50'
              }`}
            >
              Home
            </Link>
            <Link 
              href="/#schedule" 
              onClick={(e) => {
                e.preventDefault();
                handleHashClick(e.nativeEvent as unknown as React.MouseEvent<HTMLAnchorElement, MouseEvent>, '/#schedule');
              }}
              className="block font-poppins text-base font-semibold text-emerald-800 hover:text-emerald-600 transition-all duration-300 py-3 px-4 rounded-lg hover:bg-emerald-50/50"
            >
              Schedule
            </Link>
            <Link 
              href="/#dress-code" 
              onClick={(e) => {
                e.preventDefault();
                handleHashClick(e.nativeEvent as unknown as React.MouseEvent<HTMLAnchorElement, MouseEvent>, '/#dress-code');
              }}
              className="block font-poppins text-base font-semibold text-emerald-800 hover:text-emerald-600 transition-all duration-300 py-3 px-4 rounded-lg hover:bg-emerald-50/50"
            >
              Motif & Dress Code
            </Link>
            <Link 
              href="/#qa" 
              onClick={(e) => {
                e.preventDefault();
                handleHashClick(e.nativeEvent as unknown as React.MouseEvent<HTMLAnchorElement, MouseEvent>, '/#qa');
              }}
              className="block font-poppins text-base font-semibold text-emerald-800 hover:text-emerald-600 transition-all duration-300 py-3 px-4 rounded-lg hover:bg-emerald-50/50"
            >
              Q & A
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}