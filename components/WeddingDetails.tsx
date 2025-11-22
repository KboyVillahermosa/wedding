export default function WeddingDetails() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 py-20 overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-32 left-16 w-3 h-3 bg-emerald-300/40 rounded-full animate-pulse delay-300"></div>
        <div className="absolute top-96 right-24 w-2 h-2 bg-green-400/50 rounded-full animate-ping delay-700"></div>
        <div className="absolute bottom-64 left-32 w-1 h-1 bg-teal-400/60 rounded-full animate-bounce delay-1000"></div>
        <div className="absolute top-64 right-1/3 w-2 h-2 bg-emerald-200/70 rounded-full animate-pulse delay-500"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Enhanced Header */}
        <div className="text-center mb-20">
          <h1 className="font-playfair text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-emerald-900 via-green-800 to-emerald-900 bg-clip-text text-transparent">
              Wedding Details
            </span>
          </h1>
          <div className="font-dancing text-3xl mb-6 relative">
            <span className="bg-gradient-to-r from-emerald-700 via-green-600 to-emerald-700 bg-clip-text text-transparent">
              Thursday, February 12, 2026
            </span>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-0.5 bg-gradient-to-r from-transparent via-emerald-400 to-transparent"></div>
          </div>
          <p className="font-poppins text-xl text-emerald-800 font-medium">
            📍 Cebu, Philippines
          </p>
        </div>

        {/* Enhanced Schedule Section */}
        <section className="mb-20">
          <h2 className="font-playfair text-4xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-emerald-900 via-green-800 to-emerald-900 bg-clip-text text-transparent">
              Schedule
            </span>
          </h2>
          <div className="flex justify-center mb-16">
            <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-emerald-400 to-transparent"></div>
          </div>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-emerald-300 via-green-400 to-emerald-300 hidden lg:block"></div>
            
            {/* Timeline Events */}
            <div className="space-y-16 lg:space-y-24">
              
              {/* Ceremony */}
              <div className="relative flex flex-col lg:flex-row items-center lg:items-start">
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full border-4 border-white shadow-lg z-10 hidden lg:block"></div>
                
                {/* Content Left (Ceremony) */}
                <div className="w-full lg:w-1/2 lg:pr-16 text-center lg:text-right">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full mb-6 shadow-xl">
                    <span className="text-white text-2xl">⛪</span>
                  </div>
                  <h3 className="font-playfair text-3xl lg:text-4xl font-bold mb-3">
                    <span className="bg-gradient-to-r from-emerald-900 to-green-800 bg-clip-text text-transparent">
                      Ceremony
                    </span>
                  </h3>
                  <p className="font-dancing text-2xl text-emerald-700 mb-4">3:30 PM</p>
                  <p className="font-poppins text-emerald-800 leading-relaxed mb-6 max-w-md mx-auto lg:mx-0 lg:ml-auto">
                    The Archdiocesan Shrine of the Most Sacred Heart of Jesus<br />
                    Dionisio Jakosalem Street<br />
                    Cebu City, Cebu, Philippines
                  </p>
                  
                  {/* Map */}
                  <div className="rounded-2xl overflow-hidden shadow-lg border-2 border-emerald-200 mb-6 max-w-md mx-auto lg:mx-0 lg:ml-auto">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3925.411722063622!2d123.8990527!3d10.3088973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a99945a8c6b021%3A0x8b5d0f001d6ce9a1!2sThe%20Archdiocesan%20Shrine%20of%20the%20Most%20Sacred%20Heart%20of%20Jesus!5e0!3m2!1sen!2sph!4v1763813453445!5m2!1sen!2sph" 
                      width="100%" 
                      height="200" 
                      style={{border: 0}} 
                      allowFullScreen 
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Ceremony Venue"
                    ></iframe>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-end">
                    <button className="group relative bg-gradient-to-r from-emerald-700 to-green-700 hover:from-emerald-800 hover:to-green-800 text-white font-poppins font-medium px-6 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 overflow-hidden">
                      <span className="relative z-10">Add to Calendar ✨</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                    </button>
                    <button className="group relative border-2 border-emerald-700 text-emerald-700 hover:text-white font-poppins font-medium px-6 py-3 rounded-full transition-all duration-300 overflow-hidden hover:shadow-lg transform hover:-translate-y-1">
                      <span className="relative z-10">Directions 📍</span>
                      <div className="absolute inset-0 bg-emerald-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                    </button>
                  </div>
                </div>
                
                {/* Spacer for mobile */}
                <div className="w-full lg:w-1/2 lg:pl-16"></div>
              </div>
              
              {/* Reception */}
              <div className="relative flex flex-col lg:flex-row items-center lg:items-start">
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-green-500 to-teal-500 rounded-full border-4 border-white shadow-lg z-10 hidden lg:block"></div>
                
                {/* Spacer */}
                <div className="w-full lg:w-1/2 lg:pr-16"></div>
                
                {/* Content Right (Reception) */}
                <div className="w-full lg:w-1/2 lg:pl-16 text-center lg:text-left">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full mb-6 shadow-xl">
                    <span className="text-white text-2xl">🥂</span>
                  </div>
                  <h3 className="font-playfair text-3xl lg:text-4xl font-bold mb-3">
                    <span className="bg-gradient-to-r from-emerald-900 to-green-800 bg-clip-text text-transparent">
                      Reception
                    </span>
                  </h3>
                  <p className="font-dancing text-2xl text-emerald-700 mb-4">5:00 PM</p>
                  <p className="font-poppins text-emerald-800 leading-relaxed mb-6 max-w-md mx-auto lg:mx-0">
                    City Sports Club Cebu, Inc.<br />
                    Cardinal Rosales Avenue<br />
                    Cebu City, Cebu, Philippines
                  </p>
                  
                  {/* Map */}
                  <div className="rounded-2xl overflow-hidden shadow-lg border-2 border-emerald-200 mb-6 max-w-md mx-auto lg:mx-0">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3925.3122502826704!2d123.9070653!3d10.316876500000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a9993fc3a711d9%3A0xcb00638c2527d30a!2sCity%20Sports%20Club%20Cebu%2C%20Inc.!5e0!3m2!1sen!2sph!4v1763813478244!5m2!1sen!2sph" 
                      width="100%" 
                      height="200" 
                      style={{border: 0}} 
                      allowFullScreen 
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Reception Venue"
                    ></iframe>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                    <button className="group relative bg-gradient-to-r from-emerald-700 to-green-700 hover:from-emerald-800 hover:to-green-800 text-white font-poppins font-medium px-6 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 overflow-hidden">
                      <span className="relative z-10">Add to Calendar ✨</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                    </button>
                    <button className="group relative border-2 border-emerald-700 text-emerald-700 hover:text-white font-poppins font-medium px-6 py-3 rounded-full transition-all duration-300 overflow-hidden hover:shadow-lg transform hover:-translate-y-1">
                      <span className="relative z-10">Directions 📍</span>
                      <div className="absolute inset-0 bg-emerald-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                    </button>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </section>

        {/* Enhanced Dress Code Section */}
        <section className="mb-20">
          <h2 className="font-playfair text-4xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-emerald-900 via-green-800 to-emerald-900 bg-clip-text text-transparent">
              Motif & Dress Code
            </span>
          </h2>
          <div className="flex justify-center mb-12">
            <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-emerald-400 to-transparent"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="group bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-emerald-200 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-blue-100 to-transparent rounded-bl-full"></div>
              <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mb-4 shadow-lg">
                <span className="text-white text-xl">👔</span>
              </div>
              <h3 className="font-playfair text-2xl font-bold mb-3">
                <span className="bg-gradient-to-r from-emerald-900 to-green-800 bg-clip-text text-transparent">
                  The Gents
                </span>
              </h3>
              <p className="font-poppins text-lg font-medium text-emerald-700">
                Long Sleeves or Suits
              </p>
              <p className="font-dancing text-sm text-emerald-600 mt-2 italic">
                Looking dapper & distinguished
              </p>
            </div>
            
            <div className="group bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-emerald-200 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-pink-100 to-transparent rounded-bl-full"></div>
              <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r from-pink-400 to-rose-500 rounded-full mb-4 shadow-lg">
                <span className="text-white text-xl">👗</span>
              </div>
              <h3 className="font-playfair text-2xl font-bold mb-3">
                <span className="bg-gradient-to-r from-emerald-900 to-green-800 bg-clip-text text-transparent">
                  The Ladies
                </span>
              </h3>
              <p className="font-poppins text-lg font-medium text-emerald-700">
                Cocktail Dress or Long Gowns
              </p>
              <p className="font-dancing text-sm text-emerald-600 mt-2 italic">
                Elegant & graceful
              </p>
            </div>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-10 border border-emerald-200 shadow-xl text-center relative overflow-hidden">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-20 h-20 bg-gradient-to-b from-emerald-100 to-transparent rounded-b-full"></div>
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-emerald-400 to-green-500 rounded-full mb-6 shadow-lg relative z-10">
              <span className="text-white text-2xl">🎨</span>
            </div>
            <h3 className="font-playfair text-3xl font-bold mb-4">
              <span className="bg-gradient-to-r from-emerald-900 to-green-800 bg-clip-text text-transparent">
                Colour Palette
              </span>
            </h3>
            <p className="font-dancing text-xl text-emerald-700 mb-2">
              Embrace the matcha magic
            </p>
            <p className="font-poppins text-sm text-emerald-600 mb-6 italic">
              (no white dress please)
            </p>
            <div className="flex justify-center gap-6 mt-6">
              <div className="group cursor-pointer">
                <div className="w-14 h-14 bg-emerald-600 rounded-full border-4 border-white shadow-lg transform group-hover:scale-110 transition-transform duration-300"></div>
                <p className="font-poppins text-xs text-emerald-700 mt-2 font-medium">Emerald</p>
              </div>
              <div className="group cursor-pointer">
                <div className="w-14 h-14 bg-green-500 rounded-full border-4 border-white shadow-lg transform group-hover:scale-110 transition-transform duration-300"></div>
                <p className="font-poppins text-xs text-emerald-700 mt-2 font-medium">Forest</p>
              </div>
              <div className="group cursor-pointer">
                <div className="w-14 h-14 bg-teal-600 rounded-full border-4 border-white shadow-lg transform group-hover:scale-110 transition-transform duration-300"></div>
                <p className="font-poppins text-xs text-emerald-700 mt-2 font-medium">Teal</p>
              </div>
              <div className="group cursor-pointer">
                <div className="w-14 h-14 bg-green-400 rounded-full border-4 border-white shadow-lg transform group-hover:scale-110 transition-transform duration-300"></div>
                <p className="font-poppins text-xs text-emerald-700 mt-2 font-medium">Sage</p>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Q&A Section */}
        <section className="mb-20">
          <h2 className="font-playfair text-4xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-emerald-900 via-green-800 to-emerald-900 bg-clip-text text-transparent">
              Q & A
            </span>
          </h2>
          <div className="flex justify-center mb-6">
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-emerald-400 to-transparent"></div>
          </div>
          <p className="font-dancing text-xl text-center mb-12">
            <span className="bg-gradient-to-r from-emerald-700 to-green-600 bg-clip-text text-transparent">
              For all our friends and family who have lots of questions,
            </span>
            <br />
            <span className="bg-gradient-to-r from-green-600 to-emerald-700 bg-clip-text text-transparent">
              please check out our Q & A first! 💝
            </span>
          </p>
          
          <div className="space-y-8">
            {/* FAQ Items with Enhanced Design */}
            <div className="group relative bg-white/90 backdrop-blur-lg rounded-3xl p-8 border border-emerald-200/50 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-emerald-100 to-transparent rounded-bl-full"></div>
              <div className="absolute -top-2 -left-2 w-8 h-8 bg-gradient-to-r from-emerald-400 to-green-400 rounded-full opacity-60 animate-pulse"></div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white text-lg">📅</span>
                </div>
                <div className="flex-1">
                  <h4 className="font-playfair text-xl font-bold text-emerald-900 mb-3 leading-relaxed">When is the RSVP deadline?</h4>
                  <p className="font-poppins text-emerald-700 leading-relaxed">Please RSVP by <span className="font-semibold text-emerald-800">December 19th</span>, so we can have an accurate headcount. 😊</p>
                </div>
              </div>
            </div>

            <div className="group relative bg-white/90 backdrop-blur-lg rounded-3xl p-8 border border-emerald-200/50 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-blue-100 to-transparent rounded-bl-full"></div>
              <div className="absolute -top-2 -left-2 w-8 h-8 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full opacity-60 animate-pulse delay-200"></div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white text-lg">💑</span>
                </div>
                <div className="flex-1">
                  <h4 className="font-playfair text-xl font-bold text-emerald-900 mb-3 leading-relaxed">Can I bring a date?</h4>
                  <p className="font-poppins text-emerald-700 leading-relaxed">If your invitation includes a plus one, you&apos;ll see space to add their name on your RSVP. If not, we kindly ask that you come solo—we can&apos;t wait to enjoy the day with you! 💕</p>
                </div>
              </div>
            </div>

            <div className="group relative bg-white/90 backdrop-blur-lg rounded-3xl p-8 border border-emerald-200/50 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-pink-100 to-transparent rounded-bl-full"></div>
              <div className="absolute -top-2 -left-2 w-8 h-8 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full opacity-60 animate-pulse delay-300"></div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white text-lg">👶</span>
                </div>
                <div className="flex-1">
                  <h4 className="font-playfair text-xl font-bold text-emerald-900 mb-3 leading-relaxed">Are kids welcome?</h4>
                  <p className="font-poppins text-emerald-700 leading-relaxed">We love your little ones, but our wedding will be mostly an <span className="font-semibold text-emerald-800">adults-only celebration</span>. If your children are included on the invitation, we&apos;ll be delighted to have them join us. Otherwise, we kindly ask that you enjoy the night off and celebrate with us kid-free! 🎉</p>
                </div>
              </div>
            </div>

            <div className="group relative bg-white/90 backdrop-blur-lg rounded-3xl p-8 border border-emerald-200/50 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-yellow-100 to-transparent rounded-bl-full"></div>
              <div className="absolute -top-2 -left-2 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full opacity-60 animate-pulse delay-400"></div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white text-lg">☀️</span>
                </div>
                <div className="flex-1">
                  <h4 className="font-playfair text-xl font-bold text-emerald-900 mb-3 leading-relaxed">What will the weather be like?</h4>
                  <p className="font-poppins text-emerald-700 leading-relaxed">February here is all about <span className="font-semibold text-emerald-800">tropical sunshine and warm breezes</span>. Daytime temps average around 86°F (30°C), and nights cool off just a little to about 75°F (24°C)—still balmy enough for beach vibes. You might catch a light shower or two (it&apos;s the tropics, after all!), but nothing that should slow down the celebration. Pack light, breathable clothes, maybe a shawl for the evening, and don&apos;t forget your shades—we&apos;ll have plenty of sunshine to go around! 🌴☀️</p>
                </div>
              </div>
            </div>

            <div className="group relative bg-white/90 backdrop-blur-lg rounded-3xl p-8 border border-emerald-200/50 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-purple-100 to-transparent rounded-bl-full"></div>
              <div className="absolute -top-2 -left-2 w-8 h-8 bg-gradient-to-r from-purple-400 to-violet-400 rounded-full opacity-60 animate-pulse delay-500"></div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-purple-500 to-violet-500 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white text-lg">🚗</span>
                </div>
                <div className="flex-1">
                  <h4 className="font-playfair text-xl font-bold text-emerald-900 mb-3 leading-relaxed">Where should I park?</h4>
                  <p className="font-poppins text-emerald-700 leading-relaxed">There is <span className="font-semibold text-emerald-800">plenty of free parking</span> in the reception venue. 🅿️</p>
                </div>
              </div>
            </div>

            <div className="group relative bg-white/90 backdrop-blur-lg rounded-3xl p-8 border border-emerald-200/50 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-teal-100 to-transparent rounded-bl-full"></div>
              <div className="absolute -top-2 -left-2 w-8 h-8 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full opacity-60 animate-pulse delay-600"></div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white text-lg">👗</span>
                </div>
                <div className="flex-1">
                  <h4 className="font-playfair text-xl font-bold text-emerald-900 mb-3 leading-relaxed">What should I wear?</h4>
                  <p className="font-poppins text-emerald-700 leading-relaxed">Please see our <span className="font-semibold text-emerald-800">&ldquo;Motif &amp; Dress Code&rdquo;</span> section above for detailed styling guidelines. ✨</p>
                </div>
              </div>
            </div>

            <div className="group relative bg-white/90 backdrop-blur-lg rounded-3xl p-8 border border-emerald-200/50 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-green-100 to-transparent rounded-bl-full"></div>
              <div className="absolute -top-2 -left-2 w-8 h-8 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full opacity-60 animate-pulse delay-700"></div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white text-lg">🏠</span>
                </div>
                <div className="flex-1">
                  <h4 className="font-playfair text-xl font-bold text-emerald-900 mb-3 leading-relaxed">Is the wedding indoors or outdoors?</h4>
                  <p className="font-poppins text-emerald-700 leading-relaxed">Our wedding ceremony and reception are both held <span className="font-semibold text-emerald-800">indoors</span>, so you&apos;ll be comfortable regardless of the weather! 🏛️</p>
                </div>
              </div>
            </div>

            <div className="group relative bg-white/90 backdrop-blur-lg rounded-3xl p-8 border border-emerald-200/50 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-indigo-100 to-transparent rounded-bl-full"></div>
              <div className="absolute -top-2 -left-2 w-8 h-8 bg-gradient-to-r from-indigo-400 to-blue-400 rounded-full opacity-60 animate-pulse delay-800"></div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white text-lg">📸</span>
                </div>
                <div className="flex-1">
                  <h4 className="font-playfair text-xl font-bold text-emerald-900 mb-3 leading-relaxed">Is it okay to take pictures with our phones and cameras during the wedding?</h4>
                  <p className="font-poppins text-emerald-700 leading-relaxed">We&apos;d love for you to capture and share special moments during our big day! We just kindly ask that you <span className="font-semibold text-emerald-800">don&apos;t step in front of or block our photographer</span>, so they can do their magic too. 📷✨</p>
                </div>
              </div>
            </div>

            <div className="group relative bg-white/90 backdrop-blur-lg rounded-3xl p-8 border border-emerald-200/50 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-rose-100 to-transparent rounded-bl-full"></div>
              <div className="absolute -top-2 -left-2 w-8 h-8 bg-gradient-to-r from-rose-400 to-pink-400 rounded-full opacity-60 animate-pulse delay-900"></div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white text-lg">📞</span>
                </div>
                <div className="flex-1">
                  <h4 className="font-playfair text-xl font-bold text-emerald-900 mb-3 leading-relaxed">Whom should I call with questions?</h4>
                  <p className="font-poppins text-emerald-700 leading-relaxed">Please contact <span className="font-semibold text-emerald-800">Karen</span> for any questions at <span className="font-mono text-emerald-800 bg-emerald-50 px-2 py-1 rounded">+1-613-863-1218</span> / <span className="font-mono text-emerald-800 bg-emerald-50 px-2 py-1 rounded">+63-932-435-1941</span> 💬</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Gift Registry Section */}
        <section className="mb-20">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-10 border border-emerald-200 shadow-xl text-center relative overflow-hidden">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-24 bg-gradient-to-b from-yellow-100 to-transparent rounded-b-full"></div>
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full mb-6 shadow-lg relative z-10">
              <span className="text-white text-2xl">🎁</span>
            </div>
            <h3 className="font-playfair text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-emerald-900 via-green-800 to-emerald-900 bg-clip-text text-transparent">
                Gift Registry
              </span>
            </h3>
            <p className="font-dancing text-xl text-emerald-700 mb-4">
              Your presence is the greatest gift of all
            </p>
            <p className="font-poppins text-lg text-emerald-800 mb-8 max-w-2xl mx-auto leading-relaxed">
              We do not have a gift registry, but if you wish to bless us further, we would be delighted to receive a monetary gift.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="bg-emerald-50 p-6 rounded-xl">
                <h4 className="font-poppins font-semibold text-emerald-900 mb-2">BPI</h4>
                <p className="font-poppins text-sm text-emerald-800">9119451679</p>
                <p className="font-poppins text-sm text-emerald-800">Karen Campos / Erin John Alfrey Baysa</p>
              </div>
              
              <div className="bg-emerald-50 p-6 rounded-xl">
                <h4 className="font-poppins font-semibold text-emerald-900 mb-2">BDO</h4>
                <p className="font-poppins text-sm text-emerald-800">0043 7137 4169</p>
                <p className="font-poppins text-sm text-emerald-800">Erin John Alfrey Baysa</p>
              </div>
              
              <div className="bg-emerald-50 p-6 rounded-xl">
                <h4 className="font-poppins font-semibold text-emerald-900 mb-2">E-transfer</h4>
                <p className="font-poppins text-sm text-emerald-800">karenncamps@gmail.com</p>
                <p className="font-poppins text-sm text-emerald-800">613-863-1218 (Karen Campos)</p>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced RSVP Section */}
        <section className="text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 border border-emerald-200 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-20 h-20 bg-gradient-to-b from-emerald-100 to-transparent rounded-b-full"></div>
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full mb-6 shadow-lg relative z-10">
              <span className="text-white text-2xl">💌</span>
            </div>
            <h3 className="font-playfair text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-emerald-900 via-green-800 to-emerald-900 bg-clip-text text-transparent">
                Ready to Celebrate?
              </span>
            </h3>
            <p className="font-dancing text-xl text-emerald-700 mb-2">
              We can&apos;t wait to celebrate with you!
            </p>
            <p className="font-poppins text-lg text-emerald-800 mb-8">
              Please RSVP by December 19th ✨
            </p>
            <button className="group relative bg-gradient-to-r from-emerald-700 to-green-700 hover:from-emerald-800 hover:to-green-800 text-white font-poppins font-bold text-lg px-16 py-5 rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 overflow-hidden">
              <span className="relative z-10">RSVP Now 💕</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </button>
          </div>
        </section>

      </div>
    </div>
  );
}