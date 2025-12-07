'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import ImageModal from './ImageModal';
import RSVPForm from './RSVPForm';

export default function WeddingDetails() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [paymentModalOpen, setPaymentModalOpen] = useState(false);
  const [selectedPaymentImage, setSelectedPaymentImage] = useState('');
  const [selectedPaymentTitle, setSelectedPaymentTitle] = useState('');
  const [showScrollTop, setShowScrollTop] = useState(false);

  // All images for the carousel
  const allImages = [
    '/mens-attire.jpg',
    '/womens-attire.jpg',
    '/color-palette.jpg',
  ];

  const openModal = (index: number) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Find image index in allImages array
  const getImageIndex = (imagePath: string) => {
    return allImages.indexOf(imagePath);
  };

  // Add to Calendar function - opens Google Calendar
  const addToCalendar = (eventType: 'ceremony' | 'reception') => {
    const ceremonyEvent = {
      title: 'Karen & Erin Wedding - Ceremony',
      date: '20260212',
      startTime: '153000',
      endTime: '173000',
      location: 'The Archdiocesan Shrine of the Most Sacred Heart of Jesus, Dionisio Jakosalem Street, Cebu City, Cebu, Philippines',
      description: 'Wedding Ceremony - Karen and Erin',
    };

    const receptionEvent = {
      title: 'Karen & Erin Wedding - Reception',
      date: '20260212',
      startTime: '170000',
      endTime: '230000',
      location: 'City Sports Club Cebu, Inc., Cardinal Rosales Avenue, Cebu City, Cebu, Philippines',
      description: 'Wedding Reception - Karen and Erin',
    };

    const event = eventType === 'ceremony' ? ceremonyEvent : receptionEvent;

    // Format dates for Google Calendar URL
    const startDateTime = `${event.date}T${event.startTime}`;
    const endDateTime = `${event.date}T${event.endTime}`;

    // Create Google Calendar URL
    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.title)}&dates=${startDateTime}Z/${endDateTime}Z&location=${encodeURIComponent(event.location)}&details=${encodeURIComponent(event.description)}`;

    window.open(googleCalendarUrl, '_blank');
  };

  // Directions function
  const openDirections = (venueName: string, coordinates: string) => {
    window.open(`https://www.google.com/maps/search/${encodeURIComponent(venueName)}/@${coordinates},13z`, '_blank');
  };

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen py-24 z-10">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        
        {/* Header */}
        <div className="text-center mb-24 relative">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8 text-4xl opacity-20 animate-float">💐</div>
          <h1 className="font-playfair text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-emerald-700 via-emerald-600 to-rose-500 bg-clip-text text-transparent">
              Wedding Details
            </span>
          </h1>
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-emerald-400 to-emerald-400"></div>
            <span className="text-emerald-400 text-2xl">❦</span>
            <div className="w-16 h-px bg-gradient-to-r from-emerald-400 via-rose-400 to-transparent"></div>
          </div>
          <div className="font-dancing text-3xl lg:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-rose-500 mb-3">
            Thursday, February 12, 2026
          </div>
          <p className="font-poppins text-lg text-emerald-800 flex items-center justify-center gap-2">
            <span>📍</span>
            Cebu, Philippines
          </p>
        </div>

        {/* Story Section - Placeholder for Our Story */}
        <section id="story" className="mb-32 relative">
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 text-6xl opacity-5">💕</div>
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 text-6xl opacity-5">💖</div>
          <div className="text-center max-w-3xl mx-auto relative z-10">
            <div className="inline-block mb-6">
              <span className="text-4xl animate-float">💑</span>
            </div>
            <h2 className="font-playfair text-4xl lg:text-5xl font-bold mb-8">
              <span className="bg-gradient-to-r from-emerald-700 to-rose-500 bg-clip-text text-transparent">
                Our Story
              </span>
            </h2>
            <div className="bg-gradient-to-br from-emerald-50/50 via-rose-50/30 to-emerald-50/50 rounded-3xl p-8 lg:p-12 border border-emerald-100/50 shadow-lg elegant-card">
              <p className="font-poppins text-lg lg:text-xl text-emerald-800 leading-relaxed">
                Two hearts, one journey. Karen and Erin are excited to share their special day with you.
              </p>
            </div>
          </div>
        </section>

        {/* Schedule Section */}
        <section id="schedule" className="mb-32 relative">
          <div className="text-center mb-16 relative">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4 text-3xl opacity-20 animate-float">⏰</div>
            <h2 className="font-playfair text-4xl lg:text-5xl font-bold">
              <span className="bg-gradient-to-r from-emerald-700 to-rose-500 bg-clip-text text-transparent">
                Schedule
              </span>
            </h2>
            <div className="flex items-center justify-center gap-2 mt-4">
              <div className="w-20 h-px bg-gradient-to-r from-transparent via-emerald-400 to-emerald-400"></div>
              <span className="text-emerald-400">❦</span>
              <div className="w-20 h-px bg-gradient-to-r from-emerald-400 via-rose-400 to-transparent"></div>
            </div>
          </div>
          
          <div className="space-y-24">
            
            {/* Ceremony - Details Left, Map Right */}
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div className="text-center lg:text-left space-y-6 order-2 lg:order-1 relative">
                <div className="absolute -left-4 top-0 text-2xl opacity-10 animate-float">⛪</div>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-full mb-4 shadow-md">
                  <span className="text-3xl">⛪</span>
                </div>
                <h3 className="font-playfair text-3xl lg:text-4xl font-bold bg-gradient-to-r from-emerald-700 to-emerald-600 bg-clip-text text-transparent">
                  Ceremony
                </h3>
                <p className="font-dancing text-2xl lg:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-rose-500">3:30 PM</p>
                <div className="bg-gradient-to-br from-emerald-50/50 to-rose-50/30 rounded-2xl p-6 border border-emerald-100/50 shadow-md elegant-card">
                  <p className="font-poppins text-emerald-800 leading-relaxed max-w-md mx-auto lg:mx-0">
                    The Archdiocesan Shrine of the Most Sacred Heart of Jesus<br />
                    Dionisio Jakosalem Street<br />
                    Cebu City, Cebu, Philippines
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start pt-2">
                  <button onClick={() => addToCalendar('ceremony')} className="group bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-poppins font-medium px-6 py-2.5 rounded-full transition-all duration-300 text-sm shadow-md hover:shadow-lg btn-romantic">
                    <span className="flex items-center gap-2">
                      Add to Calendar
                      <span className="group-hover:rotate-12 transition-transform">📅</span>
                    </span>
                  </button>
                  <button onClick={() => openDirections('The Archdiocesan Shrine of the Most Sacred Heart of Jesus, Cebu City', '10.3088973,123.8990527')} className="group border-2 border-emerald-600 text-emerald-700 hover:bg-emerald-50 font-poppins font-medium px-6 py-2.5 rounded-full transition-all duration-300 text-sm shadow-sm hover:shadow-md">
                    <span className="flex items-center gap-2">
                      Directions
                      <span className="group-hover:translate-x-1 transition-transform">🗺️</span>
                    </span>
                  </button>
                </div>
              </div>
              
              <div className="order-1 lg:order-2 relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-emerald-200 to-rose-200 rounded-2xl opacity-20 group-hover:opacity-30 blur-xl transition-opacity"></div>
                <div className="relative rounded-2xl overflow-hidden shadow-xl border-2 border-emerald-100/50 group-hover:border-emerald-200 transition-all duration-300 elegant-card">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3925.411722063622!2d123.8990527!3d10.3088973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a99945a8c6b021%3A0x8b5d0f001d6ce9a1!2sThe%20Archdiocesan%20Shrine%20of%20the%20Most%20Sacred%20Heart%20of%20Jesus!5e0!3m2!1sen!2sph!4v1763813453445!5m2!1sen!2sph" 
                    width="100%" 
                    height="300" 
                    style={{border: 0}} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Ceremony Venue"
                  ></iframe>
                </div>
              </div>
            </div>
            
            {/* Reception - Map Left, Details Right */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-1 lg:order-1 relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-rose-200 to-emerald-200 rounded-2xl opacity-20 group-hover:opacity-30 blur-xl transition-opacity"></div>
                <div className="relative rounded-2xl overflow-hidden shadow-xl border-2 border-rose-100/50 group-hover:border-rose-200 transition-all duration-300 elegant-card">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3925.3122502826704!2d123.9070653!3d10.316876500000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a9993fc3a711d9%3A0xcb00638c2527d30a!2sCity%20Sports%20Club%20Cebu%2C%20Inc.!5e0!3m2!1sen!2sph!4v1763813478244!5m2!1sen!2sph" 
                    width="100%" 
                    height="300" 
                    style={{border: 0}} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Reception Venue"
                  ></iframe>
                </div>
              </div>
              
              <div className="text-center lg:text-left space-y-6 order-2 lg:order-2 relative">
                <div className="absolute -right-4 top-0 text-2xl opacity-10 animate-float">🥂</div>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-rose-100 to-rose-200 rounded-full mb-4 shadow-md">
                  <span className="text-3xl">🥂</span>
                </div>
                <h3 className="font-playfair text-3xl lg:text-4xl font-bold bg-gradient-to-r from-rose-600 to-rose-500 bg-clip-text text-transparent">
                  Reception
                </h3>
                <p className="font-dancing text-2xl lg:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-emerald-600">5:00 PM</p>
                <div className="bg-gradient-to-br from-rose-50/50 to-emerald-50/30 rounded-2xl p-6 border border-rose-100/50 shadow-md elegant-card">
                  <p className="font-poppins text-emerald-800 leading-relaxed max-w-md mx-auto lg:mx-0">
                    City Sports Club Cebu, Inc.<br />
                    Cardinal Rosales Avenue<br />
                    Cebu City, Cebu, Philippines
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start pt-2">
                  <button onClick={() => addToCalendar('reception')} className="group bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-700 hover:to-rose-800 text-white font-poppins font-medium px-6 py-2.5 rounded-full transition-all duration-300 text-sm shadow-md hover:shadow-lg btn-romantic">
                    <span className="flex items-center gap-2">
                      Add to Calendar
                      <span className="group-hover:rotate-12 transition-transform">📅</span>
                    </span>
                  </button>
                  <button onClick={() => openDirections('City Sports Club Cebu, Inc., Cebu City', '10.316876,123.9070653')} className="group border-2 border-rose-600 text-rose-700 hover:bg-rose-50 font-poppins font-medium px-6 py-2.5 rounded-full transition-all duration-300 text-sm shadow-sm hover:shadow-md">
                    <span className="flex items-center gap-2">
                      Directions
                      <span className="group-hover:translate-x-1 transition-transform">🗺️</span>
                    </span>
                  </button>
                </div>
              </div>
            </div>
            
          </div>
        </section>

        {/* Dress Code Section */}
        <section id="dress-code" className="mb-32 relative">
          <div className="text-center mb-16 relative">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4 text-3xl opacity-20 animate-float">👗</div>
            <h2 className="font-playfair text-4xl lg:text-5xl font-bold">
              <span className="bg-gradient-to-r from-emerald-700 to-rose-500 bg-clip-text text-transparent">
                Motif & Dress Code
              </span>
            </h2>
            <div className="flex items-center justify-center gap-2 mt-4">
              <div className="w-20 h-px bg-gradient-to-r from-transparent via-emerald-400 to-emerald-400"></div>
              <span className="text-emerald-400">❦</span>
              <div className="w-20 h-px bg-gradient-to-r from-emerald-400 via-rose-400 to-transparent"></div>
            </div>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {/* The Gents */}
            <div className="text-center">
              <div 
                className="relative overflow-hidden rounded-2xl mb-6 shadow-lg cursor-pointer group elegant-card border-2 border-emerald-100/50"
                onClick={() => openModal(getImageIndex('/mens-attire.jpg'))}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-200/20 to-transparent z-10"></div>
                <Image 
                  src="/mens-attire.jpg" 
                  alt="Men's Wedding Attire Inspiration"
                  width={400}
                  height={320}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent group-hover:from-black/50 transition-all duration-300 flex items-center justify-center z-20">
                  <div className="bg-white/90 rounded-full p-4 opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all duration-300">
                    <svg className="w-8 h-8 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </div>
              </div>
              <h3 className="font-playfair text-2xl font-bold mb-3 text-emerald-900">
                The Gents
              </h3>
              <p className="font-poppins text-lg font-medium text-emerald-700 mb-2">
                Long Sleeves or Suits
              </p>
              <div className="font-poppins text-sm text-emerald-600 space-y-1">
                <div>• Dress shirts with long sleeves</div>
                <div>• Suits in neutral tones</div>
                <div>• Earth tones preferred</div>
              </div>
            </div>
            
            {/* The Ladies */}
            <div className="text-center">
              <div 
                className="relative overflow-hidden rounded-2xl mb-6 shadow-lg cursor-pointer group elegant-card border-2 border-rose-100/50"
                onClick={() => openModal(getImageIndex('/womens-attire.jpg'))}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-rose-200/20 to-transparent z-10"></div>
                <Image 
                  src="/womens-attire.jpg" 
                  alt="Women's Wedding Attire Inspiration"
                  width={400}
                  height={320}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent group-hover:from-black/50 transition-all duration-300 flex items-center justify-center z-20">
                  <div className="bg-white/90 rounded-full p-4 opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all duration-300">
                    <svg className="w-8 h-8 text-rose-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </div>
              </div>
              <h3 className="font-playfair text-2xl font-bold mb-3 text-emerald-900">
                The Ladies
              </h3>
              <p className="font-poppins text-lg font-medium text-emerald-700 mb-2">
                Cocktail Dress or Long Gowns
              </p>
              <div className="font-poppins text-sm text-emerald-600 space-y-1">
                <div>• Midi to maxi length dresses</div>
                <div>• Elegant silhouettes</div>
                <div>• Earthy green tones welcome</div>
              </div>
            </div>

            {/* Color Palette */}
            <div className="text-center">
              <div 
                className="relative overflow-hidden rounded-2xl mb-6 shadow-lg cursor-pointer group elegant-card border-2 border-amber-100/50"
                onClick={() => openModal(getImageIndex('/color-palette.jpg'))}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-amber-200/20 to-emerald-200/20 z-10"></div>
                <Image 
                  src="/color-palette.jpg" 
                  alt="Wedding Color Palette Inspiration"
                  width={400}
                  height={320}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent group-hover:from-black/50 transition-all duration-300 flex items-center justify-center z-20">
                  <div className="bg-white/90 rounded-full p-4 opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all duration-300">
                    <svg className="w-8 h-8 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </div>
              </div>
              <h3 className="font-playfair text-2xl font-bold mb-3 text-emerald-900">
                Color Palette
              </h3>
              <p className="font-poppins text-sm text-emerald-600 italic">
                (no white dress please)
              </p>
            </div>
          </div>

          {/* Style Guidelines */}
          <div className="bg-gradient-to-br from-emerald-50/70 via-rose-50/40 to-emerald-50/70 rounded-3xl p-8 lg:p-10 border-2 border-emerald-100/50 shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-200/20 rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-rose-200/20 rounded-full blur-2xl"></div>
            <div className="relative z-10">
              <h4 className="font-playfair text-2xl lg:text-3xl font-bold text-center mb-8">
                <span className="bg-gradient-to-r from-emerald-700 to-rose-600 bg-clip-text text-transparent">
                  Style Guidelines
                </span>
              </h4>
            <div className="grid md:grid-cols-2 gap-8 text-emerald-700">
              <div>
                <h5 className="font-poppins font-semibold text-emerald-900 mb-4 flex items-center">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></span>
                  Recommended
                </h5>
                <ul className="font-poppins text-sm space-y-2">
                  <li>• Natural, earthy tones</li>
                  <li>• Breathable fabrics (tropical climate)</li>
                  <li>• Elegant, modest necklines</li>
                  <li>• Comfortable footwear for dancing</li>
                  <li>• Light layers for evening comfort</li>
                </ul>
              </div>
              <div>
                <h5 className="font-poppins font-semibold text-emerald-900 mb-4 flex items-center">
                  <span className="w-2 h-2 bg-rose-500 rounded-full mr-3"></span>
                  Please Avoid
                </h5>
                <ul className="font-poppins text-sm space-y-2">
                  <li>• White or ivory (reserved for the bride)</li>
                  <li>• Neon or overly bright colors</li>
                  <li>• Beach or casual wear</li>
                  <li>• Heavy fabrics</li>
                  <li>• Extremely short hemlines</li>
                </ul>
              </div>
            </div>
            </div>
          </div>
        </section>

        {/* Q&A Section */}
        <section id="qa" className="mb-32 relative">
          <div className="text-center mb-12 relative">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4 text-3xl opacity-20 animate-float">❓</div>
            <h2 className="font-playfair text-4xl lg:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-emerald-700 to-rose-500 bg-clip-text text-transparent">
                Q & A
              </span>
            </h2>
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-emerald-400 to-emerald-400"></div>
              <span className="text-emerald-400">❦</span>
              <div className="w-16 h-px bg-gradient-to-r from-emerald-400 via-rose-400 to-transparent"></div>
            </div>
            <p className="font-dancing text-xl lg:text-2xl text-center text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-rose-500">
              For all our friends and family who have lots of questions,<br />
              please check out our Q & A first!
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-white to-emerald-50/30 border-2 border-emerald-100/50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 elegant-card group">
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-12 h-12 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-full flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                  <span className="text-xl">📅</span>
                </div>
                <div className="flex-1">
                  <h4 className="font-playfair text-lg font-bold text-emerald-900 mb-2">When is the RSVP deadline?</h4>
                  <p className="font-poppins text-emerald-700 text-sm leading-relaxed">Please RSVP by <span className="font-semibold">December 19th</span>, so we can have an accurate headcount.</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-white to-rose-50/30 border-2 border-rose-100/50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 elegant-card group">
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-12 h-12 bg-gradient-to-br from-rose-100 to-rose-200 rounded-full flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                  <span className="text-xl">💑</span>
                </div>
                <div className="flex-1">
                  <h4 className="font-playfair text-lg font-bold text-emerald-900 mb-2">Can I bring a date?</h4>
                  <p className="font-poppins text-emerald-700 text-sm leading-relaxed">If your invitation includes a plus one, you&apos;ll see space to add their name on your RSVP. If not, we kindly ask that you come solo—we can&apos;t wait to enjoy the day with you!</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-white to-emerald-50/30 border-2 border-emerald-100/50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 elegant-card group">
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-12 h-12 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-full flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                  <span className="text-xl">👶</span>
                </div>
                <div className="flex-1">
                  <h4 className="font-playfair text-lg font-bold text-emerald-900 mb-2">Are kids welcome?</h4>
                  <p className="font-poppins text-emerald-700 text-sm leading-relaxed">We love your little ones, but our wedding will be mostly an <span className="font-semibold">adults-only celebration</span>. If your children are included on the invitation, we&apos;ll be delighted to have them join us. Otherwise, we kindly ask that you enjoy the night off and celebrate with us kid-free!</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-white to-amber-50/30 border-2 border-amber-100/50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 elegant-card group">
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-12 h-12 bg-gradient-to-br from-amber-100 to-amber-200 rounded-full flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                  <span className="text-xl">☀️</span>
                </div>
                <div className="flex-1">
                  <h4 className="font-playfair text-lg font-bold text-emerald-900 mb-2">What will the weather be like?</h4>
                  <p className="font-poppins text-emerald-700 text-sm leading-relaxed">February here is all about <span className="font-semibold">tropical sunshine and warm breezes</span>. Daytime temps average around 86°F (30°C), and nights cool off just a little to about 75°F (24°C)—still balmy enough for beach vibes. You might catch a light shower or two (it&apos;s the tropics, after all!), but nothing that should slow down the celebration. Pack light, breathable clothes, maybe a shawl for the evening, and don&apos;t forget your shades!</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-white to-emerald-50/30 border-2 border-emerald-100/50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 elegant-card group">
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-12 h-12 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-full flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                  <span className="text-xl">🚗</span>
                </div>
                <div className="flex-1">
                  <h4 className="font-playfair text-lg font-bold text-emerald-900 mb-2">Where should I park?</h4>
                  <p className="font-poppins text-emerald-700 text-sm leading-relaxed">There is <span className="font-semibold">plenty of free parking</span> in the reception venue.</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-white to-rose-50/30 border-2 border-rose-100/50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 elegant-card group">
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-12 h-12 bg-gradient-to-br from-rose-100 to-rose-200 rounded-full flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                  <span className="text-xl">👗</span>
                </div>
                <div className="flex-1">
                  <h4 className="font-playfair text-lg font-bold text-emerald-900 mb-2">What should I wear?</h4>
                  <p className="font-poppins text-emerald-700 text-sm leading-relaxed">Please see our <span className="font-semibold">&ldquo;Motif &amp; Dress Code&rdquo;</span> section above for detailed styling guidelines.</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-white to-emerald-50/30 border-2 border-emerald-100/50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 elegant-card group">
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-12 h-12 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-full flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                  <span className="text-xl">🏠</span>
                </div>
                <div className="flex-1">
                  <h4 className="font-playfair text-lg font-bold text-emerald-900 mb-2">Is the wedding indoors or outdoors?</h4>
                  <p className="font-poppins text-emerald-700 text-sm leading-relaxed">Our wedding ceremony and reception are both held <span className="font-semibold">indoors</span>, so you&apos;ll be comfortable regardless of the weather!</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-white to-amber-50/30 border-2 border-amber-100/50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 elegant-card group">
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-12 h-12 bg-gradient-to-br from-amber-100 to-amber-200 rounded-full flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                  <span className="text-xl">📸</span>
                </div>
                <div className="flex-1">
                  <h4 className="font-playfair text-lg font-bold text-emerald-900 mb-2">Is it okay to take pictures with our phones and cameras during the wedding?</h4>
                  <p className="font-poppins text-emerald-700 text-sm leading-relaxed">We&apos;d love for you to capture and share special moments during our big day! We just kindly ask that you <span className="font-semibold">don&apos;t step in front of or block our photographer</span>, so they can do their magic too.</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-white to-emerald-50/30 border-2 border-emerald-100/50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 elegant-card group">
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-12 h-12 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-full flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                  <span className="text-xl">📞</span>
                </div>
                <div className="flex-1">
                  <h4 className="font-playfair text-lg font-bold text-emerald-900 mb-2">Whom should I call with questions?</h4>
                  <p className="font-poppins text-emerald-700 text-sm leading-relaxed">Please contact <span className="font-semibold">Karen</span> for any questions at <span className="font-mono text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded">+1-613-863-1218</span> / <span className="font-mono text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded">+63-932-435-1941</span></p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gift Registry Section */}
        <section className="mb-32 relative">
          <div className="bg-gradient-to-br from-emerald-50/70 via-rose-50/40 to-amber-50/30 rounded-3xl p-10 lg:p-12 border-2 border-emerald-100/50 text-center shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-200/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-rose-200/20 rounded-full blur-3xl"></div>
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-full mb-6 shadow-lg animate-float">
                <span className="text-3xl">🎁</span>
              </div>
              <h3 className="font-playfair text-4xl lg:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-emerald-700 to-rose-600 bg-clip-text text-transparent">
                  Gift Registry
                </span>
              </h3>
              <p className="font-dancing text-xl lg:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-rose-500 mb-2">
                Your presence is the greatest gift of all
              </p>
              <p className="font-poppins text-emerald-800 mb-8 max-w-2xl mx-auto leading-relaxed">
                We do not have a gift registry, but if you wish to bless us further, we would be delighted to receive a monetary gift.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 text-left mt-8">
              {/* BPI Card */}
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border-2 border-red-100/50 shadow-md elegant-card hover:bg-white transition-colors">
                <h4 className="font-poppins font-semibold text-red-900 mb-4 text-lg">BPI</h4>
                <div className="mb-4 flex justify-center cursor-pointer group" onClick={() => { setSelectedPaymentImage('/bpi.jpg'); setSelectedPaymentTitle('BPI - 9119451679'); setPaymentModalOpen(true); }}>
                  <div className="relative">
                    <Image
                      src="/bpi.jpg"
                      alt="BPI Payment QR Code"
                      width={200}
                      height={250}
                      className="rounded-lg border border-red-100 group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 rounded-lg transition-colors duration-300 flex items-center justify-center">
                      <div className="bg-white/90 rounded-full p-2 opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-300">
                        <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="font-poppins text-sm text-emerald-800 font-mono text-center mb-2">9119451679</p>
                <p className="font-poppins text-xs text-emerald-700 text-center">Karen Campos / Erin John Alfrey Baysa</p>
              </div>
              
              {/* BDO Card */}
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border-2 border-blue-100/50 shadow-md elegant-card hover:bg-white transition-colors">
                <h4 className="font-poppins font-semibold text-blue-900 mb-4 text-lg">BDO</h4>
                <div className="mb-4 flex justify-center cursor-pointer group" onClick={() => { setSelectedPaymentImage('/bdo.jpg'); setSelectedPaymentTitle('BDO - 0043 7137 4169'); setPaymentModalOpen(true); }}>
                  <div className="relative">
                    <Image
                      src="/bdo.jpg"
                      alt="BDO Payment QR Code"
                      width={200}
                      height={250}
                      className="rounded-lg border border-blue-100 group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 rounded-lg transition-colors duration-300 flex items-center justify-center">
                      <div className="bg-white/90 rounded-full p-2 opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-300">
                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="font-poppins text-sm text-emerald-800 font-mono text-center mb-2">0043 7137 4169</p>
                <p className="font-poppins text-xs text-emerald-700 text-center">Erin John Alfrey Baysa</p>
              </div>
              
              {/* GCash Card */}
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border-2 border-blue-100/50 shadow-md elegant-card hover:bg-white transition-colors">
                <h4 className="font-poppins font-semibold text-blue-900 mb-4 text-lg">GCash</h4>
                <div className="mb-4 flex justify-center cursor-pointer group" onClick={() => { setSelectedPaymentImage('/gcash.png'); setSelectedPaymentTitle('GCash - ER&apos;N B.'); setPaymentModalOpen(true); }}>
                  <div className="relative">
                    <Image
                      src="/gcash.png"
                      alt="GCash Payment QR Code"
                      width={200}
                      height={250}
                      className="rounded-lg border border-blue-100 group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 rounded-lg transition-colors duration-300 flex items-center justify-center">
                      <div className="bg-white/90 rounded-full p-2 opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-300">
                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="font-poppins text-xs text-emerald-700 text-center">ER&apos;N B.</p>
                <p className="font-poppins text-xs text-emerald-700 text-center">Mobile No.: 099-••••042</p>
              </div>
              </div>
            </div>
          </div>
        </section>

        {/* RSVP Section */}
        <section id="rsvp" className="text-center">
          <RSVPForm />
        </section>

      </div>

      {/* Image Modal */}
      <ImageModal
        images={allImages}
        currentIndex={currentImageIndex}
        isOpen={isModalOpen}
        onClose={closeModal}
      />

      {/* Payment QR Code Modal */}
      {paymentModalOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={() => setPaymentModalOpen(false)}>
          <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-screen overflow-y-auto relative" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setPaymentModalOpen(false)}
              className="absolute top-4 right-4 bg-gradient-to-br from-emerald-100 to-emerald-200 hover:from-emerald-200 hover:to-emerald-300 text-emerald-700 rounded-full p-3 transition-all duration-300 shadow-lg z-10"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="p-8 text-center">
              <h3 className="font-playfair text-3xl font-bold text-emerald-900 mb-6">{selectedPaymentTitle}</h3>
              <div className="flex justify-center">
                <Image
                  src={selectedPaymentImage}
                  alt="Payment QR Code Full Size"
                  width={500}
                  height={600}
                  className="rounded-2xl shadow-lg border-2 border-emerald-100 max-w-full h-auto"
                />
              </div>
              <p className="font-poppins text-emerald-700 mt-6 text-center">
                Click the image to zoom or scan the QR code
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-gradient-to-br from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 z-40 animate-bounce group"
          aria-label="Scroll to top"
        >
          <svg 
            className="w-6 h-6 group-hover:scale-110 transition-transform" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" 
            />
          </svg>
        </button>
      )}
    </div>
  );
}
