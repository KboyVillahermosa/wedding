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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-emerald-100/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="font-dancing text-2xl font-semibold text-emerald-700 lg:text-3xl tracking-wide hover:text-emerald-600 transition-colors">
            K & E
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10">
            <Link 
              href="/" 
              className={`font-poppins text-sm font-medium transition-colors duration-200 ${
                pathname === '/' ? 'text-emerald-600' : 'text-emerald-800 hover:text-emerald-600'
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
              className="font-poppins text-sm font-medium text-emerald-800 hover:text-emerald-600 transition-colors duration-200"
            >
              Schedule
            </Link>
            <Link 
              href="/#dress-code" 
              onClick={(e) => {
                e.preventDefault();
                handleHashClick(e.nativeEvent as unknown as React.MouseEvent<HTMLAnchorElement, MouseEvent>, '/#dress-code');
              }}
              className="font-poppins text-sm font-medium text-emerald-800 hover:text-emerald-600 transition-colors duration-200"
            >
              Motif & Dress Code
            </Link>
            <Link 
              href="/#qa" 
              onClick={(e) => {
                e.preventDefault();
                handleHashClick(e.nativeEvent as unknown as React.MouseEvent<HTMLAnchorElement, MouseEvent>, '/#qa');
              }}
              className="font-poppins text-sm font-medium text-emerald-800 hover:text-emerald-600 transition-colors duration-200"
            >
              Q & A
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu}
            className="md:hidden p-2 text-emerald-800 hover:text-emerald-600 transition-colors focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
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
          <div className="py-4 space-y-4 border-t border-emerald-100/50">
            <Link 
              href="/" 
              onClick={handleLinkClick}
              className={`block font-poppins text-base font-medium transition-colors duration-200 py-2 ${
                pathname === '/' ? 'text-emerald-600' : 'text-emerald-800 hover:text-emerald-600'
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
              className="block font-poppins text-base font-medium text-emerald-800 hover:text-emerald-600 transition-colors duration-200 py-2"
            >
              Schedule
            </Link>
            <Link 
              href="/#dress-code" 
              onClick={(e) => {
                e.preventDefault();
                handleHashClick(e.nativeEvent as unknown as React.MouseEvent<HTMLAnchorElement, MouseEvent>, '/#dress-code');
              }}
              className="block font-poppins text-base font-medium text-emerald-800 hover:text-emerald-600 transition-colors duration-200 py-2"
            >
              Motif & Dress Code
            </Link>
            <Link 
              href="/#qa" 
              onClick={(e) => {
                e.preventDefault();
                handleHashClick(e.nativeEvent as unknown as React.MouseEvent<HTMLAnchorElement, MouseEvent>, '/#qa');
              }}
              className="block font-poppins text-base font-medium text-emerald-800 hover:text-emerald-600 transition-colors duration-200 py-2"
            >
              Q & A
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}