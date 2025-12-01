'use client';

import { useState } from 'react';
import Image from 'next/image';
import ImageModal from './ImageModal';
import RSVPForm from './RSVPForm';

export default function WeddingDetails() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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
  return (
    <div className="relative min-h-screen bg-white py-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        
        {/* Header */}
        <div className="text-center mb-24">
          <h1 className="font-playfair text-5xl lg:text-6xl font-bold mb-4 text-emerald-900">
            Wedding Details
          </h1>
          <div className="font-dancing text-3xl text-emerald-700 mb-3">
            Thursday, February 12, 2026
          </div>
          <p className="font-poppins text-lg text-emerald-800">
            Cebu, Philippines
          </p>
        </div>

        {/* Story Section - Placeholder for Our Story */}
        <section id="story" className="mb-32">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-playfair text-4xl font-bold mb-8 text-emerald-900">
              Our Story
            </h2>
            <p className="font-poppins text-lg text-emerald-800 leading-relaxed">
              Two hearts, one journey. Karen and Erin are excited to share their special day with you.
            </p>
          </div>
        </section>

        {/* Schedule Section */}
        <section id="schedule" className="mb-32">
          <h2 className="font-playfair text-4xl font-bold text-center mb-16 text-emerald-900">
            Schedule
          </h2>
          
          <div className="space-y-24">
            
            {/* Ceremony - Details Left, Map Right */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-left space-y-6 order-2 lg:order-1">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-emerald-100 rounded-full mb-4">
                  <span className="text-2xl">⛪</span>
                </div>
                <h3 className="font-playfair text-3xl lg:text-4xl font-bold text-emerald-900">
                  Ceremony
                </h3>
                <p className="font-dancing text-2xl text-emerald-700">3:30 PM</p>
                <p className="font-poppins text-emerald-800 leading-relaxed max-w-md mx-auto lg:mx-0">
                  The Archdiocesan Shrine of the Most Sacred Heart of Jesus<br />
                  Dionisio Jakosalem Street<br />
                  Cebu City, Cebu, Philippines
                </p>
                
                <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start pt-2">
                  <button className="bg-emerald-700 hover:bg-emerald-800 text-white font-poppins font-medium px-6 py-2.5 rounded-full transition-colors duration-200 text-sm">
                    Add to Calendar
                  </button>
                  <button className="border border-emerald-700 text-emerald-700 hover:bg-emerald-50 font-poppins font-medium px-6 py-2.5 rounded-full transition-colors duration-200 text-sm">
                    Directions
                  </button>
                </div>
              </div>
              
              <div className="order-1 lg:order-2">
                <div className="rounded-xl overflow-hidden shadow-lg border border-emerald-100">
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
              <div className="order-1 lg:order-1">
                <div className="rounded-xl overflow-hidden shadow-lg border border-emerald-100">
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
              
              <div className="text-center lg:text-left space-y-6 order-2 lg:order-2">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-emerald-100 rounded-full mb-4">
                  <span className="text-2xl">🥂</span>
                </div>
                <h3 className="font-playfair text-3xl lg:text-4xl font-bold text-emerald-900">
                  Reception
                </h3>
                <p className="font-dancing text-2xl text-emerald-700">5:00 PM</p>
                <p className="font-poppins text-emerald-800 leading-relaxed max-w-md mx-auto lg:mx-0">
                  City Sports Club Cebu, Inc.<br />
                  Cardinal Rosales Avenue<br />
                  Cebu City, Cebu, Philippines
                </p>
                
                <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start pt-2">
                  <button className="bg-emerald-700 hover:bg-emerald-800 text-white font-poppins font-medium px-6 py-2.5 rounded-full transition-colors duration-200 text-sm">
                    Add to Calendar
                  </button>
                  <button className="border border-emerald-700 text-emerald-700 hover:bg-emerald-50 font-poppins font-medium px-6 py-2.5 rounded-full transition-colors duration-200 text-sm">
                    Directions
                  </button>
                </div>
              </div>
            </div>
            
          </div>
        </section>

        {/* Dress Code Section */}
        <section id="dress-code" className="mb-32">
          <h2 className="font-playfair text-4xl font-bold text-center mb-16 text-emerald-900">
            Motif & Dress Code
          </h2>
          
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {/* The Gents */}
            <div className="text-center">
              <div 
                className="relative overflow-hidden rounded-xl mb-6 shadow-md cursor-pointer hover:shadow-xl transition-all group"
                onClick={() => openModal(getImageIndex('/mens-attire.jpg'))}
              >
                <Image 
                  src="/mens-attire.jpg" 
                  alt="Men's Wedding Attire Inspiration"
                  width={400}
                  height={320}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                  <svg className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
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
                className="relative overflow-hidden rounded-xl mb-6 shadow-md cursor-pointer hover:shadow-xl transition-all group"
                onClick={() => openModal(getImageIndex('/womens-attire.jpg'))}
              >
                <Image 
                  src="/womens-attire.jpg" 
                  alt="Women's Wedding Attire Inspiration"
                  width={400}
                  height={320}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                  <svg className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
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
                className="relative overflow-hidden rounded-xl mb-6 shadow-md cursor-pointer hover:shadow-xl transition-all group"
                onClick={() => openModal(getImageIndex('/color-palette.jpg'))}
              >
                <Image 
                  src="/color-palette.jpg" 
                  alt="Wedding Color Palette Inspiration"
                  width={400}
                  height={320}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                  <svg className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
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
          <div className="bg-emerald-50/50 rounded-2xl p-8 border border-emerald-100">
            <h4 className="font-playfair text-2xl font-bold text-center mb-8 text-emerald-900">
              Style Guidelines
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
        </section>

        {/* Q&A Section */}
        <section id="qa" className="mb-32">
          <h2 className="font-playfair text-4xl font-bold text-center mb-4 text-emerald-900">
            Q & A
          </h2>
          <p className="font-dancing text-xl text-center mb-12 text-emerald-700">
            For all our friends and family who have lots of questions,<br />
            please check out our Q & A first!
          </p>
          
          <div className="space-y-6">
            <div className="bg-white border border-emerald-100 rounded-xl p-6 hover:shadow-md transition-shadow duration-200">
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                  <span className="text-lg">📅</span>
                </div>
                <div className="flex-1">
                  <h4 className="font-playfair text-lg font-bold text-emerald-900 mb-2">When is the RSVP deadline?</h4>
                  <p className="font-poppins text-emerald-700 text-sm leading-relaxed">Please RSVP by <span className="font-semibold">December 19th</span>, so we can have an accurate headcount.</p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-emerald-100 rounded-xl p-6 hover:shadow-md transition-shadow duration-200">
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                  <span className="text-lg">💑</span>
                </div>
                <div className="flex-1">
                  <h4 className="font-playfair text-lg font-bold text-emerald-900 mb-2">Can I bring a date?</h4>
                  <p className="font-poppins text-emerald-700 text-sm leading-relaxed">If your invitation includes a plus one, you&apos;ll see space to add their name on your RSVP. If not, we kindly ask that you come solo—we can&apos;t wait to enjoy the day with you!</p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-emerald-100 rounded-xl p-6 hover:shadow-md transition-shadow duration-200">
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                  <span className="text-lg">👶</span>
                </div>
                <div className="flex-1">
                  <h4 className="font-playfair text-lg font-bold text-emerald-900 mb-2">Are kids welcome?</h4>
                  <p className="font-poppins text-emerald-700 text-sm leading-relaxed">We love your little ones, but our wedding will be mostly an <span className="font-semibold">adults-only celebration</span>. If your children are included on the invitation, we&apos;ll be delighted to have them join us. Otherwise, we kindly ask that you enjoy the night off and celebrate with us kid-free!</p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-emerald-100 rounded-xl p-6 hover:shadow-md transition-shadow duration-200">
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                  <span className="text-lg">☀️</span>
                </div>
                <div className="flex-1">
                  <h4 className="font-playfair text-lg font-bold text-emerald-900 mb-2">What will the weather be like?</h4>
                  <p className="font-poppins text-emerald-700 text-sm leading-relaxed">February here is all about <span className="font-semibold">tropical sunshine and warm breezes</span>. Daytime temps average around 86°F (30°C), and nights cool off just a little to about 75°F (24°C)—still balmy enough for beach vibes. You might catch a light shower or two (it&apos;s the tropics, after all!), but nothing that should slow down the celebration. Pack light, breathable clothes, maybe a shawl for the evening, and don&apos;t forget your shades!</p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-emerald-100 rounded-xl p-6 hover:shadow-md transition-shadow duration-200">
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                  <span className="text-lg">🚗</span>
                </div>
                <div className="flex-1">
                  <h4 className="font-playfair text-lg font-bold text-emerald-900 mb-2">Where should I park?</h4>
                  <p className="font-poppins text-emerald-700 text-sm leading-relaxed">There is <span className="font-semibold">plenty of free parking</span> in the reception venue.</p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-emerald-100 rounded-xl p-6 hover:shadow-md transition-shadow duration-200">
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                  <span className="text-lg">👗</span>
                </div>
                <div className="flex-1">
                  <h4 className="font-playfair text-lg font-bold text-emerald-900 mb-2">What should I wear?</h4>
                  <p className="font-poppins text-emerald-700 text-sm leading-relaxed">Please see our <span className="font-semibold">&ldquo;Motif &amp; Dress Code&rdquo;</span> section above for detailed styling guidelines.</p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-emerald-100 rounded-xl p-6 hover:shadow-md transition-shadow duration-200">
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                  <span className="text-lg">🏠</span>
                </div>
                <div className="flex-1">
                  <h4 className="font-playfair text-lg font-bold text-emerald-900 mb-2">Is the wedding indoors or outdoors?</h4>
                  <p className="font-poppins text-emerald-700 text-sm leading-relaxed">Our wedding ceremony and reception are both held <span className="font-semibold">indoors</span>, so you&apos;ll be comfortable regardless of the weather!</p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-emerald-100 rounded-xl p-6 hover:shadow-md transition-shadow duration-200">
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                  <span className="text-lg">📸</span>
                </div>
                <div className="flex-1">
                  <h4 className="font-playfair text-lg font-bold text-emerald-900 mb-2">Is it okay to take pictures with our phones and cameras during the wedding?</h4>
                  <p className="font-poppins text-emerald-700 text-sm leading-relaxed">We&apos;d love for you to capture and share special moments during our big day! We just kindly ask that you <span className="font-semibold">don&apos;t step in front of or block our photographer</span>, so they can do their magic too.</p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-emerald-100 rounded-xl p-6 hover:shadow-md transition-shadow duration-200">
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                  <span className="text-lg">📞</span>
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
        <section className="mb-32">
          <div className="bg-emerald-50/50 rounded-2xl p-10 border border-emerald-100 text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-emerald-100 rounded-full mb-6">
              <span className="text-2xl">🎁</span>
            </div>
            <h3 className="font-playfair text-4xl font-bold mb-4 text-emerald-900">
              Gift Registry
            </h3>
            <p className="font-dancing text-xl text-emerald-700 mb-2">
              Your presence is the greatest gift of all
            </p>
            <p className="font-poppins text-emerald-800 mb-8 max-w-2xl mx-auto leading-relaxed">
              We do not have a gift registry, but if you wish to bless us further, we would be delighted to receive a monetary gift.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="bg-white p-6 rounded-xl border border-emerald-100">
                <h4 className="font-poppins font-semibold text-emerald-900 mb-2">BPI</h4>
                <p className="font-poppins text-sm text-emerald-800">9119451679</p>
                <p className="font-poppins text-sm text-emerald-800">Karen Campos / Erin John Alfrey Baysa</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl border border-emerald-100">
                <h4 className="font-poppins font-semibold text-emerald-900 mb-2">BDO</h4>
                <p className="font-poppins text-sm text-emerald-800">0043 7137 4169</p>
                <p className="font-poppins text-sm text-emerald-800">Erin John Alfrey Baysa</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl border border-emerald-100">
                <h4 className="font-poppins font-semibold text-emerald-900 mb-2">E-transfer</h4>
                <p className="font-poppins text-sm text-emerald-800">karenncamps@gmail.com</p>
                <p className="font-poppins text-sm text-emerald-800">613-863-1218 (Karen Campos)</p>
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
    </div>
  );
}
