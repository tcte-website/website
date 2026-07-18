import { useState } from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import WhatsAppFloatingButton from '../components/WhatsAppFloatingButton';
import { WhatsAppInquiryModal } from '../components/WhatsAppModal';

const experienceOverview = [
  'Centrally located in Galle and easy to include in a city itinerary',
  'A cultural, educational, and interactive introduction to Ceylon Tea',
  'Hands-on tea plucking and traditional hand-rolling',
  'Guided tasting with a simple introduction to black, green, and white tea',
  'Create a personalised blend to take home',
  'Ideal for couples, families, small groups, tea lovers, and international visitors',
  'Indoor and weather-friendly, with selected outdoor activities',
  'Boutique tea retail with compact gifts and take-home teas',
];

const experienceDurations = [
  { name: 'Handmade Tea Tour', duration: '45-60 minutes' },
  { name: 'Tea Tasting Tour', duration: '20-30 minutes' },
  { name: 'Tea Plucking / Plantation Tour', duration: '60 minutes' },
  { name: 'Handmade Tea + Tea Tasting', duration: '90 minutes' },
  { name: 'Full Combined Experience', duration: '150 minutes' },
  { name: 'Build Your Own Tea', duration: '15 minutes' },
];

const beforeYouVisit = [
  'Wear comfortable casual clothing and avoid delicate or very light colours',
  'Comfortable or closed footwear is recommended',
  'Tea leaves may leave light, natural stains that are washable',
  'Hot water and warm surfaces may be present during the experience',
  'Children should remain supervised by an adult',
  'Please arrive on time and follow guidance from the TCTE team',
  'Photography is welcome and encouraged',
  'Outdoor areas are natural spaces and may include insects or other small organisms',
];

export default function ServicesPage({ navigate }) {
  const [waModalOpen, setWaModalOpen] = useState(false);

  return (
    <div className="min-h-screen font-sans text-gray-800 bg-[#F9F6F0]">
      <Nav navigate={navigate} currentPage="services" />

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://ceylon-tea-experience-media.s3.us-east-1.amazonaws.com/images/17.webp" 
            alt="Ceylon Tea Garden" 
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1A3D1A]/80 to-black/50"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto text-center px-6">
          <span className="inline-block text-[#B8960C] text-xs font-bold tracking-[0.4em] uppercase mb-9 relative drop-shadow-md">
            <span className="absolute -left-12 top-1/2 w-8 h-[1px] bg-[#B8960C]"></span>
            CURATED EXPERIENCES
            <span className="absolute -right-12 top-1/2 w-8 h-[1px] bg-[#B8960C]"></span>
          </span>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-8 drop-shadow-2xl">
            Our Services
          </h1>
          
          <div className="max-w-3xl mx-auto text-white/90 text-lg md:text-xl leading-relaxed font-light drop-shadow-md">
            <p>
              Immerse yourself in the world of Ceylon Tea. From hands on crafting and personalised 
              blending at The Tea Library, to elegant café experiences and global delivery services.
            </p>
          </div>
        </div>
      </section>

      {/* Modern Editorial Services Container */}
      <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto space-y-32">

        {/* Service 1: Hand-Made Tea & Tasting */}
        <div className="relative flex flex-col lg:flex-row items-center group">
          <div className="w-full lg:w-7/12 relative z-0 overflow-hidden rounded-sm">
            <img 
              src="https://ceylon-tea-experience-media.s3.us-east-1.amazonaws.com/images/9.jpeg"
              alt="Hand-Made Tea Experience" 
              className="w-full h-[600px] md:h-[750px] lg:h-[700px] object-cover transition-transform duration-1000 group-hover:scale-105"
            />
          </div>
          <div className="w-full lg:w-6/12 lg:-ml-24 mt-[-40px] lg:mt-0 relative z-10 px-4 lg:px-0 py-8">
            <div className="bg-white/95 backdrop-blur-sm p-8 md:p-12 shadow-xl border border-gray-100">
              <span className="text-[#B8960C] font-serif italic text-2xl mb-4 block">01.</span>
              <h2 className="text-3xl md:text-4xl font-serif text-[#2D6A2D] font-bold mb-2">Hand-Made Tea & Tasting</h2>
              <p className="text-[#B8960C] font-bold mb-6">A hands-on journey through the art of Ceylon Tea.</p>
              
              <p className="text-gray-600 mb-4 text-sm md:text-base">In this guided experience, guests are invited to step into the role of a tea maker:</p>
              
              <ul className="space-y-3 mb-8 text-sm md:text-base text-gray-700">
                <li className="flex gap-4 items-start"><span className="text-[#B8960C] font-bold">✓</span> Hand-pluck fresh tea leaves</li>
                <li className="flex gap-4 items-start"><span className="text-[#B8960C] font-bold">✓</span> Roll and craft your own green or black tea</li>
                <li className="flex gap-4 items-start"><span className="text-[#B8960C] font-bold">✓</span> Learn how leaf grade, region, and climate influence taste</li>
                <li className="flex gap-4 items-start"><span className="text-[#B8960C] font-bold">✓</span> Compare teas from different terroirs through a curated tasting</li>
                <li className="flex gap-4 items-start"><span className="text-[#B8960C] font-bold">✓</span> Take home a sample of the tea you made</li>
              </ul>

              <div className="bg-[#F9F6F0] border-l-4 border-[#B8960C] p-5 rounded-r-lg mb-8">
                <h4 className="text-[#2D6A2D] font-bold mb-3 text-sm md:text-base">This session is perfect for:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-700">
                  <ul className="space-y-2">
                    <li className="flex gap-2 items-start"><span className="text-[#2D6A2D] font-bold">•</span> Cultural travellers</li>
                    <li className="flex gap-2 items-start"><span className="text-[#2D6A2D] font-bold">•</span> Families</li>
                  </ul>
                  <ul className="space-y-2">
                    <li className="flex gap-2 items-start"><span className="text-[#2D6A2D] font-bold">•</span> Tea enthusiasts</li>
                    <li className="flex gap-2 items-start"><span className="text-[#2D6A2D] font-bold">•</span> Schools and groups</li>
                  </ul>
                </div>
              </div>

              <div className="pt-6 border-t border-gray-200">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                  <button
                    onClick={() => setWaModalOpen(true)}
                    className="w-full sm:w-auto inline-block text-center whitespace-nowrap border-2 border-[#2D6A2D] text-[#2D6A2D] px-8 py-3 text-xs font-bold uppercase tracking-widest hover:bg-[#2D6A2D] hover:text-white transition shadow-sm rounded-sm cursor-pointer"
                  >
                    Book This Experience
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Service 2: Plantation Tour */}
        <div className="relative flex flex-col lg:flex-row-reverse items-center group">
          <div className="w-full lg:w-7/12 relative z-0 overflow-hidden rounded-sm">
            <img 
              src="https://ceylon-tea-experience-media.s3.us-east-1.amazonaws.com/images/17.webp" 
              alt="Plantation Tour" 
              className="w-full h-[400px] md:h-[550px] object-cover transition-transform duration-1000 group-hover:scale-105"
            />
          </div>
          <div className="w-full lg:w-6/12 lg:-mr-24 mt-[-40px] lg:mt-0 relative z-10 px-4 lg:px-0">
            <div className="bg-white/95 backdrop-blur-sm p-8 md:p-14 shadow-xl border border-gray-100">
              <span className="text-[#B8960C] font-serif italic text-2xl mb-4 block">02.</span>
              <h2 className="text-3xl md:text-4xl font-serif text-[#2D6A2D] font-bold mb-2">Plantation Tour</h2>
              <p className="text-[#B8960C] font-bold mb-6">Walk through Ceylon's living tea heritage.</p>

              <p className="text-gray-600 mb-4 text-sm md:text-base leading-relaxed">
                Step beyond the tasting room and into the lush landscapes where Ceylon Tea begins. Guided by experienced hosts, our plantation tour offers an authentic glimpse into the daily rhythm of a working tea estate.
              </p>

              <p className="text-gray-700 mb-4 text-sm md:text-base font-semibold">Highlights include:</p>
              
              <ul className="space-y-3 mb-8 text-sm md:text-base text-gray-700">
                <li className="flex gap-4 items-start"><span className="text-[#B8960C] font-bold">✓</span> Guided walks through scenic tea fields</li>
                <li className="flex gap-4 items-start"><span className="text-[#B8960C] font-bold">✓</span> Meet the pluckers and learn the two-leaves-and-a-bud tradition</li>
                <li className="flex gap-4 items-start"><span className="text-[#B8960C] font-bold">✓</span> Discover how altitude, soil, and climate shape flavour</li>
                <li className="flex gap-4 items-start"><span className="text-[#B8960C] font-bold">✓</span> Photo opportunities across breathtaking estate views</li>
                <li className="flex gap-4 items-start"><span className="text-[#B8960C] font-bold">✓</span> Optional tasting of estate-fresh teas</li>
              </ul>

              <div className="bg-[#F9F6F0] border-l-4 border-[#B8960C] p-5 rounded-r-lg mb-8">
                <h4 className="text-[#2D6A2D] font-bold mb-2 text-sm md:text-base">Perfect For:</h4>
                <p className="text-sm md:text-base text-gray-700">
                  Nature lovers, photographers, families, and travellers seeking an authentic plantation experience.
                </p>
              </div>

              <div className="pt-6 border-t border-gray-200">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <button
                    onClick={() => setWaModalOpen(true)}
                    className="w-full sm:w-auto inline-block text-center whitespace-nowrap border-2 border-[#2D6A2D] text-[#2D6A2D] px-8 py-3 text-xs font-bold uppercase tracking-widest hover:bg-[#2D6A2D] hover:text-white transition shadow-sm rounded-sm cursor-pointer"
                  >
                    Book This Experience
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Service 3: Build Your Own Tea */}
        <div className="relative flex flex-col lg:flex-row items-center group">
          <div className="w-full lg:w-7/12 relative z-0 overflow-hidden rounded-sm">
            <img 
              src="https://ceylon-tea-experience-media.s3.us-east-1.amazonaws.com/images/11.jpeg" 
              alt="Build Your Own Tea" 
              className="w-full h-[700px] md:h-[850px] lg:h-[800px] object-cover transition-transform duration-1000 group-hover:scale-105"
            />
          </div>
          <div className="w-full lg:w-6/12 lg:-ml-24 mt-[-40px] lg:mt-0 relative z-10 px-4 lg:px-0 py-8">
            <div className="bg-white/95 backdrop-blur-sm p-8 md:p-12 shadow-xl border border-gray-100">
              <span className="text-[#B8960C] font-serif italic text-2xl mb-4 block">03.</span>
              <h2 className="text-3xl md:text-4xl font-serif text-[#2D6A2D] font-bold mb-2">Build Your Own Tea</h2>
              <p className="text-[#B8960C] font-bold mb-6">Sri Lanka's first curated tea-blending experience</p>
              
              <p className="text-gray-600 mb-4 text-sm md:text-base">
                Step into our Tea Library and create a tea that is truly your own. In this interactive experience, guests select from:
              </p>
              
              <ul className="space-y-3 mb-6 text-sm md:text-base text-gray-700">
                <li className="flex gap-4 items-start"><span className="text-[#B8960C] font-bold">✓</span> A curated range of black and green base teas</li>
                <li className="flex gap-4 items-start"><span className="text-[#B8960C] font-bold">✓</span> Blending with herbs, spices, florals, and natural flavours</li>
                <li className="flex gap-4 items-start"><span className="text-[#B8960C] font-bold">✓</span> Creating personalised custom labels</li>
              </ul>

              <h4 className="text-[#8c6b00] font-semibold mb-3 text-sm md:text-base">You can also:</h4>
              <ul className="space-y-3 mb-6 text-sm md:text-base text-gray-700">
                <li className="flex gap-4 items-start"><span className="text-[#a67c00] font-bold">✓</span> Name your tea or pack it as a gift</li>
                <li className="flex gap-4 items-start"><span className="text-[#a67c00] font-bold">✓</span> Package it as a gift</li>
                <li className="flex gap-4 items-start"><span className="text-[#a67c00] font-bold">✓</span> Save your recipe with us and order later</li>
                <li className="flex gap-4 items-start"><span className="text-[#a67c00] font-bold">✓</span> Reorder online after returning home anywhere in the world</li>
              </ul>

              <div className="bg-[#f9f8f4] border-l-4 border-[#a67c00] p-5 rounded-r-lg mb-6">
                <h4 className="text-sm md:text-base text-[#2D6A2D] font-bold mb-2">Perfect For:</h4>
                <p className="text-sm md:text-base text-gray-700">
                  Couples, honeymooners, families, gift-seekers, repeat travellers
                </p>
              </div>

              <div className="bg-[#F9F6F0] border-l-4 border-[#B8960C] p-5 rounded-r-lg mb-8">
                <p className="text-sm md:text-base text-[#2D6A2D] font-bold mb-2">
                  Go at your own pace with our friendly team on hand to help.
                </p>
                <p className="text-sm text-gray-600 mb-2 leading-relaxed">
                  A curated Catalog of Teas showcases the diversity of Sri Lankan terroirs giving guests the experience of travelling across the island through flavour.
                </p>
              </div>

              <div className="pt-6 border-t border-gray-200">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <button
                    onClick={() => setWaModalOpen(true)}
                    className="w-full sm:w-auto inline-block text-center whitespace-nowrap border-2 border-[#2D6A2D] text-[#2D6A2D] px-8 py-3 text-xs font-bold uppercase tracking-widest hover:bg-[#2D6A2D] hover:text-white transition shadow-sm rounded-sm cursor-pointer"
                  >
                    Book This Experience
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Service 4: The Tea Library */}
        <div className="relative flex flex-col lg:flex-row-reverse items-center group">
          <div className="w-full lg:w-7/12 relative z-0 overflow-hidden rounded-sm">
            <img 
              src="https://ceylon-tea-experience-media.s3.us-east-1.amazonaws.com/images/25.jpeg" 
              alt="The Tea Library Display" 
              className="w-full h-[400px] md:h-[500px] lg:h-[550px] object-cover transition-transform duration-1000 group-hover:scale-105"
            />
          </div>
          <div className="w-full lg:w-6/12 lg:-mr-24 mt-[-40px] lg:mt-0 relative z-10 px-4 lg:px-0 py-8">
            <div className="bg-white/95 backdrop-blur-sm p-8 md:p-14 shadow-xl border border-gray-100">
              <span className="text-[#B8960C] font-serif italic text-2xl mb-4 block">04.</span>
              <h2 className="text-3xl md:text-4xl font-serif text-[#2D6A2D] font-bold mb-6">The Tea Library</h2>
              
              <p className="text-gray-700 mb-4 text-sm md:text-base leading-relaxed">
                The Tea Library is a dedicated display of a wide range of premium tea brands available in Sri Lanka.
              </p>
              
              <p className="text-gray-700 mb-6 text-sm md:text-base leading-relaxed">
                Guests can explore different types of Ceylon tea, compare brands, and purchase teas based on their preference. With several different brands available in one place, guests have the advantage of finding exactly what suits their taste. It's a convenient way to discover and take home a variety of teas all in one place.
              </p>

              <div className="pt-6 border-t border-gray-200">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <button
                    onClick={() => setWaModalOpen(true)}
                    className="w-full sm:w-auto border-2 border-[#2D6A2D] text-[#2D6A2D] px-8 py-3 text-xs font-bold uppercase tracking-widest hover:bg-[#2D6A2D] hover:text-white transition shadow-sm rounded-sm cursor-pointer"
                  >
                    Book This Experience
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Service 5: E-Commerce & Delivery */}
        <div className="relative flex flex-col lg:flex-row items-center group">
          <div className="w-full lg:w-7/12 relative z-0 overflow-hidden rounded-sm">
            <img 
              src="https://ceylon-tea-experience-media.s3.us-east-1.amazonaws.com/images/10.jpeg" 
              alt="E-Commerce & Delivery" 
              className="w-full h-[400px] md:h-[550px] object-cover transition-transform duration-1000 group-hover:scale-105"
            />
          </div>
          <div className="w-full lg:w-6/12 lg:-ml-24 mt-[-40px] lg:mt-0 relative z-10 px-4 lg:px-0 py-8">
            <div className="bg-white/95 backdrop-blur-sm p-8 md:p-14 shadow-xl border border-gray-100">
              <div className="inline-block bg-[#F9F6F0] border border-[#B8960C] text-[#B8960C] px-4 py-1.5 rounded-sm text-[10px] font-bold uppercase tracking-widest mb-6 shadow-sm">
                Online Store Coming Soon
              </div>

              <span className="text-[#B8960C] font-serif italic text-2xl mb-4 block">05.</span>
              <h2 className="text-3xl md:text-4xl font-serif text-[#2D6A2D] font-bold mb-4">E-Commerce & Delivery</h2>
              <p className="text-gray-500 font-bold mb-6">Take Ceylon Tea home with you.</p>
              <p className="text-sm text-gray-600 mb-8 leading-relaxed">
                Guests will soon be able to reorder their personalised blends or choose from our catalog of teas through our seamless online store.
              </p>
              
              <div className="bg-[#1A3D1A] text-white p-6 rounded-lg mb-8 shadow-md">
                <h4 className="text-[#B8960C] font-bold uppercase tracking-widest text-xs mb-4">Premium Logistics Options</h4>
                <ul className="space-y-4 text-sm font-light">
                  <li className="flex items-center gap-3">
                    <span className="bg-white/10 p-2 rounded text-[#B8960C]">🏨</span>
                    <span><strong className="font-bold">Hotel Delivery:</strong> Delivered directly to your stay in Galle/South Coast.</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="bg-white/10 p-2 rounded text-[#B8960C]">✈️</span>
                    <span><strong className="font-bold">Airport Pickup:</strong> Collect your packaged teas securely at the airport before departure.</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="bg-white/10 p-2 rounded text-[#B8960C]">🌍</span>
                    <span><strong className="font-bold">Global Shipping:</strong> Worldwide doorstep delivery.</span>
                  </li>
                </ul>
              </div>

              <div className="pt-2 border-t border-gray-200">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mt-4">
                  <button
                    onClick={() => setWaModalOpen(true)}
                    className="w-full sm:w-auto inline-block text-center whitespace-nowrap border-2 border-[#2D6A2D] text-[#2D6A2D] px-8 py-3 text-xs font-bold uppercase tracking-widest hover:bg-[#2D6A2D] hover:text-white transition shadow-sm rounded-sm cursor-pointer"
                  >
                    Contact For Orders
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Service 6: Workshops & Groups */}
        <div className="relative flex flex-col lg:flex-row-reverse items-center group pb-10">
          <div className="w-full lg:w-7/12 relative z-0 overflow-hidden rounded-sm">
            <img 
              src="https://ceylon-tea-experience-media.s3.us-east-1.amazonaws.com/images/20.webp" 
              alt="Workshops and Groups" 
              className="w-full h-[400px] md:h-[550px] object-cover transition-transform duration-1000 group-hover:scale-105"
            />
          </div>
          <div className="w-full lg:w-6/12 lg:-mr-24 mt-[-40px] lg:mt-0 relative z-10 px-4 lg:px-0">
            <div className="bg-white/95 backdrop-blur-sm p-8 md:p-14 shadow-xl border border-gray-100">
              <div className="inline-block bg-[#F9F6F0] border border-[#B8960C] text-[#B8960C] px-4 py-1.5 rounded-sm text-[10px] font-bold uppercase tracking-widest mb-6 shadow-sm">
                Prior Bookings Required
              </div>

              <span className="text-[#B8960C] font-serif italic text-2xl mb-4 block">06.</span>
              <h2 className="text-3xl md:text-4xl font-serif text-[#2D6A2D] font-bold mb-4">Workshops & Groups</h2>
              <p className="text-gray-500 font-bold mb-6">Tailored packages for an unforgettable collective experience.</p>
              <p className="text-sm text-gray-600 mb-8 leading-relaxed">
                Whether you're organizing a corporate retreat or a specialized tour group, our programs are fully customisable according to duration and group size. Advance reservations are required to ensure the best possible experience for your group.
              </p>
              
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="px-4 py-2 bg-[#F9F6F0] text-[#2D6A2D] text-xs font-bold uppercase tracking-wider border border-gray-200 rounded-sm">Tour Groups</span>
                <span className="px-4 py-2 bg-[#F9F6F0] text-[#2D6A2D] text-xs font-bold uppercase tracking-wider border border-gray-200 rounded-sm">Corporate Teams</span>
                <span className="px-4 py-2 bg-[#F9F6F0] text-[#2D6A2D] text-xs font-bold uppercase tracking-wider border border-gray-200 rounded-sm">Boutique Hotels</span>
                <span className="px-4 py-2 bg-[#F9F6F0] text-[#2D6A2D] text-xs font-bold uppercase tracking-wider border border-gray-200 rounded-sm">Universities</span>
              </div>

              <div className="pt-6 border-t border-gray-200">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <button
                    onClick={() => setWaModalOpen(true)}
                    className="w-full sm:w-auto inline-block text-center whitespace-nowrap border-2 border-[#2D6A2D] text-[#2D6A2D] px-8 py-3 text-xs font-bold uppercase tracking-widest hover:bg-[#2D6A2D] hover:text-white transition shadow-sm rounded-sm cursor-pointer"
                  >
                    Book This Experience
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* Compact visitor planning guide */}
      <section
        className="py-24 px-4 md:px-8 bg-white border-t border-[#eae0d5]"
        aria-labelledby="plan-your-experience-heading"
      >
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <p className="text-xs font-sans uppercase tracking-[0.3em] text-[#B8960C] mb-4 font-bold">
              Visitor Information
            </p>
            <h2
              id="plan-your-experience-heading"
              className="text-4xl md:text-5xl font-serif text-[#2D6A2D] font-bold mb-5"
            >
              Plan Your Experience
            </h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              Everything you need to know before your visit.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <article className="bg-[#F9F6F0] p-8 rounded-sm border border-gray-100 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-[#2D6A2D] text-white flex items-center justify-center mb-6" aria-hidden="true">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-2.5-3-7-2-7 2 0 5 7 9 7 9s7-4 7-9c0-4-4.5-5-7-2zm0 0V5m0 0c-1.5-2-4-2-5 0m5 0c1.5-2 4-2 5 0" />
                </svg>
              </div>
              <h3 className="text-2xl font-serif font-bold text-[#2D6A2D] mb-5">
                Experience Overview
              </h3>
              <ul className="space-y-3 text-sm text-gray-700 leading-relaxed">
                {experienceOverview.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-[#B8960C] font-bold mt-0.5" aria-hidden="true">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="bg-[#F9F6F0] p-8 rounded-sm border border-gray-100 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-[#2D6A2D] text-white flex items-center justify-center mb-6" aria-hidden="true">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 2m6-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-serif font-bold text-[#2D6A2D] mb-5">
                Options &amp; Durations
              </h3>
              <dl className="divide-y divide-[#1A3D1A]/10">
                {experienceDurations.map((experience) => (
                  <div key={experience.name} className="py-3 first:pt-0 flex flex-col sm:flex-row lg:flex-col xl:flex-row sm:justify-between lg:justify-start xl:justify-between gap-1 sm:gap-4 lg:gap-1 xl:gap-4">
                    <dt className="text-sm font-bold text-[#1A3D1A]">{experience.name}</dt>
                    <dd className="text-sm text-gray-600 whitespace-nowrap">{experience.duration}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-6 pt-6 border-t border-[#1A3D1A]/10">
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  Contact us for current pricing, availability, and bookings.
                </p>
                <button
                  type="button"
                  onClick={() => setWaModalOpen(true)}
                  className="w-full border-2 border-[#2D6A2D] text-[#2D6A2D] px-6 py-3 text-xs font-bold uppercase tracking-widest hover:bg-[#2D6A2D] hover:text-white transition rounded-sm cursor-pointer"
                >
                  Check Availability
                </button>
              </div>
            </article>

            <article className="bg-[#F9F6F0] p-8 rounded-sm border border-gray-100 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-[#2D6A2D] text-white flex items-center justify-center mb-6" aria-hidden="true">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.6-2A11.9 11.9 0 0112 3a11.9 11.9 0 01-8.6 5c0 5.5 3.6 10.7 8.6 12 5-1.3 8.6-6.5 8.6-12z" />
                </svg>
              </div>
              <h3 className="text-2xl font-serif font-bold text-[#2D6A2D] mb-5">
                Before You Visit
              </h3>
              <ul className="space-y-3 text-sm text-gray-700 leading-relaxed">
                {beforeYouVisit.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-[#B8960C] font-bold mt-0.5" aria-hidden="true">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>

          <div className="mt-16 pt-14 border-t border-[#eae0d5]">
            <div className="max-w-3xl mx-auto text-center mb-10">
              <h3 className="text-3xl md:text-4xl font-serif font-bold text-[#2D6A2D] mb-4">
                Need More Information?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Download our detailed guides for complete information about the experience and guest preparation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <article className="bg-white border border-gray-200 p-7 rounded-sm shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#B8960C] mb-3">Visitor Guide</p>
                <h4 className="text-xl font-serif font-bold text-[#1A3D1A] mb-3">Full Fact Sheet</h4>
                <p className="text-sm text-gray-600 leading-relaxed mb-6 flex-1">
                  Complete overview of TCTE, available activities, ideal guests, durations, and location details.
                </p>
                <a
                  href={`${import.meta.env.BASE_URL}downloads/tcte-fact-sheet.pdf`}
                  download
                  className="inline-flex items-center justify-center gap-2 bg-[#2D6A2D] text-white px-6 py-3 text-xs font-bold uppercase tracking-widest hover:bg-[#1A3D1A] transition rounded-sm"
                  aria-label="Download the full TCTE fact sheet PDF"
                >
                  Download Full Fact Sheet
                  <span aria-hidden="true">↓</span>
                </a>
              </article>

              <article className="bg-white border border-gray-200 p-7 rounded-sm shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#B8960C] mb-3">Visitor Guide</p>
                <h4 className="text-xl font-serif font-bold text-[#1A3D1A] mb-3">Guest Notes</h4>
                <p className="text-sm text-gray-600 leading-relaxed mb-6 flex-1">
                  What to wear, visitor guidance, etiquette, and helpful information before your visit.
                </p>
                <a
                  href={`${import.meta.env.BASE_URL}downloads/tcte-guest-notes.pdf`}
                  download
                  className="inline-flex items-center justify-center gap-2 bg-[#2D6A2D] text-white px-6 py-3 text-xs font-bold uppercase tracking-widest hover:bg-[#1A3D1A] transition rounded-sm"
                  aria-label="Download the TCTE guest notes PDF"
                >
                  Download Guest Notes
                  <span aria-hidden="true">↓</span>
                </a>
              </article>

              <article className="bg-[#1A3D1A] border border-[#1A3D1A] p-7 rounded-sm shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#B8960C] mb-3">Direct Request</p>
                <h4 className="text-xl font-serif font-bold text-white mb-3">Pricing &amp; Partner Information</h4>
                <p className="text-sm text-gray-200 leading-relaxed mb-6 flex-1">
                  Current pricing, booking slots, and partner information are available directly from our reservations team.
                </p>
                <a
                  href="mailto:reservations@theceylonteaexperience.com?subject=Request%20for%20TCTE%20Pricing%20and%20Partner%20Information"
                  className="inline-flex items-center justify-center border-2 border-[#B8960C] text-[#B8960C] px-6 py-3 text-xs font-bold uppercase tracking-widest hover:bg-[#B8960C] hover:text-white transition rounded-sm text-center"
                  aria-label="Request TCTE pricing and partner information by email"
                >
                  Request Information
                </a>
              </article>
            </div>

            <p className="text-center text-sm text-gray-500 mt-8">
              For complete details, download the full guide.
            </p>
          </div>
        </div>
      </section>

      {/* Customize Your Experience Footer Section */}
      <section className="py-24 px-8 bg-[#1A3D1A] text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img 
            src="https://ceylon-tea-experience-media.s3.us-east-1.amazonaws.com/my_images/my+10.jpg" 
            alt="Texture" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="max-w-3xl mx-auto relative z-10">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight">Curate Your Perfect <br/><span className="text-[#B8960C]">Tea Day</span></h2>
          <p className="text-gray-200 text-sm md:text-base leading-relaxed mb-10 max-w-2xl mx-auto">
            Want to combine multiple experiences? Connect with our team directly to design your ideal visit. Group discounts are available for parties of 5 or more.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            
            {/* Email Booking Button — UNCHANGED as requested */}
            <a 
              href="mailto:reservations@theceylonteaexperience.com"
              className="inline-flex justify-center items-center bg-transparent border-2 border-[#B8960C] text-[#B8960C] px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-[#B8960C] hover:text-white transition shadow-lg rounded-sm"
            >
              Email Us Directly
            </a>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp Button (component-based) */}
      <div className="fixed bottom-8 right-8 z-50">
        <WhatsAppFloatingButton />
      </div>

      <Footer navigate={navigate} />

      <WhatsAppInquiryModal
        isOpen={waModalOpen}
        onClose={() => setWaModalOpen(false)}
      />
    </div>
  );
}
