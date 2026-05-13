import React, { useState, useRef } from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import WhatsAppFloatingButton from '../components/WhatsAppFloatingButton';
import { WhatsAppInquiryModal } from '../components/WhatsAppModal';


const categories = ["All Collections", "Tea Making Experience", "Tea Library", "Café", "Events/Groups"];

const allPhotos = [
  //
  // --- FEATURED PHOTOS (Slider) ---
  //
  // 1. Iced tea with lime — was "Serene Valleys" (didn't match image)
  { id: 1, category: "Café", src: "https://ceylon-tea-experience-media.s3.us-east-1.amazonaws.com/images/13.webp", title: "Sunset Refresh", sub: "Café · Refreshing Pour", featured: true },
  
  // 2. Jars + branded teas display — sub category was wrong
  { id: 2, category: "Tea Library", src: "https://ceylon-tea-experience-media.s3.us-east-1.amazonaws.com/images/25.jpeg", title: "Curated Display", sub: "Tea Library · Premium Selection", featured: true },
  
  // 3. Hands holding rolled tea leaves — sub category was wrong
  { id: 3, category: "Tea Making Experience", src: "https://ceylon-tea-experience-media.s3.us-east-1.amazonaws.com/images/1.jpeg", title: "Artisan Hands", sub: "Tea Making Experience · Hand-Rolled Craft", featured: true },
  
  // 4. TCTE branded canister with tasting bowls — was "Local Devotion"
  { id: 4, category: "Events/Groups", src: "https://ceylon-tea-experience-media.s3.us-east-1.amazonaws.com/images/3.jpeg", title: "Tasting Together", sub: "Events/Groups · Curated Sets", featured: true },


  //
  // --- GRID PHOTOS ---
  //
  // 5. Person in tea plantation — moved from "All Collections"
  { id: 5, category: "Tea Making Experience", src: "https://ceylon-tea-experience-media.s3.us-east-1.amazonaws.com/images/26.jpeg", title: "In the Estate", sub: "Plantation Life", span: "col-span-1 row-span-2" },
  
  // 6. Jars on shelves — moved from "All Collections", was "Natural Drying"
  { id: 6, category: "Tea Library", src: "https://ceylon-tea-experience-media.s3.us-east-1.amazonaws.com/images/25.jpeg", title: "Premium Shelves", sub: "Curated Range", span: "col-span-1 md:col-span-2 row-span-1" },
  
  // 7. Clear cup with tea — KEEP, fits perfectly
  { id: 7, category: "Tea Library", src: "https://ceylon-tea-experience-media.s3.us-east-1.amazonaws.com/images/24.webp", title: "Silver Tips", sub: "Premium Blend", span: "col-span-1 row-span-1" },
  
  // 8. Cups of brewed tea — moved from "All Collections" to Café
  { id: 8, category: "Café", src: "https://ceylon-tea-experience-media.s3.us-east-1.amazonaws.com/images/21.webp", title: "Morning Brew", sub: "Daily Cups", span: "col-span-1 row-span-1" },
  
  // 9. Tea cup brewing on stand — was "Endless Green" (didn't match image)
  { id: 9, category: "Café", src: "https://ceylon-tea-experience-media.s3.us-east-1.amazonaws.com/images/20.webp", title: "Steaming Cup", sub: "Brewed Fresh", span: "col-span-1 md:col-span-2 row-span-2" },
  
  // 10. Hand inspecting tea leaf — KEEP
  { id: 10, category: "Tea Making Experience", src: "https://ceylon-tea-experience-media.s3.us-east-1.amazonaws.com/images/22.webp", title: "Quality Check", sub: "Artisan Eye", span: "col-span-1 row-span-1" },
  
  // 11. Teapot — KEEP
  { id: 11, category: "Tea Library", src: "https://ceylon-tea-experience-media.s3.us-east-1.amazonaws.com/images/23.webp", title: "Rich Black Tea", sub: "Classic Pour", span: "col-span-1 row-span-1" },
  
  // 12. Two people in tea field — KEEP
  { id: 12, category: "Events/Groups", src: "https://ceylon-tea-experience-media.s3.us-east-1.amazonaws.com/images/18.webp", title: "Community Spirit", sub: "Workshops", span: "col-span-1 md:col-span-2 row-span-1" },
  
  // 13. Person tending tea bushes by window — was "Modern Cafe" (didn't match)
  { id: 13, category: "Tea Making Experience", src: "https://ceylon-tea-experience-media.s3.us-east-1.amazonaws.com/images/19.webp", title: "Estate Care", sub: "Tending the Bushes", span: "col-span-1 row-span-1" },
  
  // 14. Close-up dried black tea leaves — was "Hand-Picking" (didn't match)
  { id: 14, category: "Tea Making Experience", src: "https://ceylon-tea-experience-media.s3.us-east-1.amazonaws.com/images/15.webp", title: "Cured Leaves", sub: "Final Stage", span: "col-span-1 row-span-1" },
  
  // 15. Tea strainer — KEEP
  { id: 15, category: "Tea Library", src: "https://ceylon-tea-experience-media.s3.us-east-1.amazonaws.com/images/17.webp", title: "Golden Brew", sub: "Collection", span: "col-span-1 row-span-1" },
  
  // 16. Group activity — moved from "All Collections" to Events/Groups
  { id: 16, category: "Events/Groups", src: "https://ceylon-tea-experience-media.s3.us-east-1.amazonaws.com/images/9.jpeg", title: "Group Sessions", sub: "Together", span: "col-span-1 row-span-1" },
  
  // 17. Iced tea (same image as id 1) — moved from "All Collections" to Café
  { id: 17, category: "All Collections", src: "https://ceylon-tea-experience-media.s3.us-east-1.amazonaws.com/images/13.webp", title: "Cool Refresh", sub: "Iced Pour", span: "col-span-1 md:col-span-2 row-span-2" },
  
  // 18. Candles + book + cup ambient setting — was "Artisanal Sorting" (didn't match)
  { id: 18, category: "Café", src: "https://ceylon-tea-experience-media.s3.us-east-1.amazonaws.com/images/12.webp", title: "Quiet Moments", sub: "Ambient Setting", span: "col-span-1 row-span-1" },
  
  // 19. Tea library item — moved from "All Collections" to Tea Library
  { id: 19, category: "Tea Library", src: "https://ceylon-tea-experience-media.s3.us-east-1.amazonaws.com/images/5.jpeg", title: "Finest Selection", sub: "Curated Range", span: "col-span-1 row-span-1" },
  
  // 20. TCTE branded canister with cups — sub updated
  { id: 20, category: "Events/Groups", src: "https://ceylon-tea-experience-media.s3.us-east-1.amazonaws.com/images/10.jpeg", title: "Shared Harmony", sub: "Tasting Set", span: "col-span-1 md:col-span-2 row-span-1" },
  
  // 21. Smiling person with tea leaf — moved from "All Collections" to Tea Making Experience
  { id: 21, category: "Tea Making Experience", src: "https://ceylon-tea-experience-media.s3.us-east-1.amazonaws.com/images/8.jpeg", title: "Joyful Pluck", sub: "Hands-on Moments", span: "col-span-1 row-span-1" },
  
  // 22. Person at branded tea shelves — was "Leaf Rolling" (didn't match — image shows brand selection)
  { id: 22, category: "Tea Library", src: "https://ceylon-tea-experience-media.s3.us-east-1.amazonaws.com/images/6.jpeg", title: "Brand Selection", sub: "Premium Brands", span: "col-span-1 row-span-1" },
  
  // 23. Jars of various teas — KEEP
  { id: 23, category: "Tea Library", src: "https://ceylon-tea-experience-media.s3.us-east-1.amazonaws.com/images/11.jpeg", title: "Vintage Blends", sub: "Heritage Range", span: "col-span-1 row-span-1" },
  
  // 24. Branded products / tour memorabilia — moved from "All Collections" to Events/Groups
  { id: 24, category: "Events/Groups", src: "https://ceylon-tea-experience-media.s3.us-east-1.amazonaws.com/images/7.jpeg", title: "Tour Highlights", sub: "Memorable Visits", span: "col-span-1 row-span-1" },

  // 25. Exclusive to All Collections — won't appear in specific category filters
  { id: 25, category: "All Collections", src: "https://ceylon-tea-experience-media.s3.us-east-1.amazonaws.com/images/2.jpeg", title: "Ceylon Heritage", sub: "Featured Moment", span: "col-span-1 row-span-1" },
];

export default function GalleryPage({ navigate }) {
  const [activeCategory, setActiveCategory] = useState("All Collections");
  const [lightbox, setLightbox] = useState(null);
  const sliderRef = useRef(null);
  const [waModalOpen, setWaModalOpen] = useState(false);

  // Filter logic
  const filtered = activeCategory === "All Collections"
    ? allPhotos.filter(p => !p.featured)
    : allPhotos.filter(p => p.category === activeCategory);

  const featuredPhotos = allPhotos.filter(p => p.featured);

  // Slider controls
  const scroll = (direction) => {
    if (sliderRef.current) {
      const { scrollLeft, clientWidth } = sliderRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      sliderRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen font-sans text-gray-800 bg-[#f9f8f3]">
      <Nav navigate={navigate} currentPage="gallery" />

      {/* Modern Hero with Fading Gradient */}
      <section className="relative min-h-[60vh] flex items-center justify-center pt-32 pb-16 px-8 text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* Hero Image updated with one of your new links */}
          <img 
            src="https://ceylon-tea-experience-media.s3.us-east-1.amazonaws.com/images/2.jpeg" 
            alt="Gallery Hero Background" 
            className="w-full h-full object-cover scale-105"
            style={{ objectPosition: 'center 39%' }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1A3D1A]/80 to-black/60"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
          <span className="text-[#c8a951] text-xs font-semibold tracking-[0.4em] uppercase mb-6 relative drop-shadow-md">
            <span className="absolute -left-12 top-1/2 w-8 h-[1px] bg-[#c8a951]"></span>
            Authentic Visuals
            <span className="absolute -right-12 top-1/2 w-8 h-[1px] bg-[#c8a951]"></span>
          </span>

          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 tracking-tight leading-tight drop-shadow-lg">
            Capturing the Essence <br className="hidden md:block"/> of Ceylon Tea
          </h1>
          
          <p className="text-white/90 max-w-2xl mx-auto text-base md:text-lg leading-relaxed font-light drop-shadow-md">
            A sensory journey through artisanal craftsmanship, immersive experiences, and the golden soul of Sri Lanka's finest export.
          </p>
        </div>
      </section>

      {/* Featured Image Slider (Modern Carousel) */}
      <section className="py-12 relative">
        <div className="px-8 flex justify-between items-end max-w-[1400px] mx-auto mb-6">
          <h2 className="text-3xl font-serif font-bold text-[#1b3b22]">Featured Moments</h2>
          <div className="flex gap-3">
            <button onClick={() => scroll('left')} className="w-12 h-12 rounded-full border-2 border-[#c8a951] text-[#c8a951] flex items-center justify-center hover:bg-[#c8a951] hover:text-white transition-all duration-300">
              ←
            </button>
            <button onClick={() => scroll('right')} className="w-12 h-12 rounded-full border-2 border-[#c8a951] text-[#c8a951] flex items-center justify-center hover:bg-[#c8a951] hover:text-white transition-all duration-300">
              →
            </button>
          </div>
        </div>

        {/* Scrollable Container */}
        <div 
          ref={sliderRef}
          className="flex overflow-x-auto snap-x snap-mandatory gap-6 px-8 pb-10 max-w-[1400px] mx-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {featuredPhotos.map(photo => (
            <div 
              key={`featured-${photo.id}`} 
              className="relative min-w-[85vw] md:min-w-[60vw] lg:min-w-[40vw] h-[50vh] md:h-[60vh] snap-center rounded-xl overflow-hidden group cursor-pointer shadow-lg"
              onClick={() => setLightbox(photo)}
            >
              <img 
                src={photo.src} 
                alt={photo.title} 
                className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1b3b22]/90 via-[#1b3b22]/20 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-90"></div>
              
              <div className="absolute bottom-0 left-0 p-8 transform translate-y-2 transition-transform duration-500 group-hover:translate-y-0">
                <p className="bg-[#c8a951] inline-block px-3 py-1 rounded-sm text-white text-[10px] font-bold tracking-widest uppercase mb-3">{photo.category}</p>
                <h3 className="text-white text-3xl font-serif font-bold mb-1">{photo.title}</h3>
                <p className="text-gray-300 text-sm font-light mt-2">{photo.sub.split('·')[1]}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* NEW: Experience Video Section */}
      <section className="py-16 px-4 md:px-8 max-w-[1400px] mx-auto">
        <div className="relative w-full h-[400px] md:h-[600px] rounded-2xl overflow-hidden shadow-2xl group cursor-pointer border border-[#e8e4d9]">
          {/* Video Placeholder Image updated */}
          <video 
              autoPlay 
              loop 
              muted 
              playsInline
              className="w-full h-full object-cover transition-transform duration-700 "
            >
              <source src="https://ceylon-tea-experience-media.s3.us-east-1.amazonaws.com/ceylon-tea-experience-videos.MP4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          <div className="absolute inset-0 bg-[#1A3D1A]/40 group-hover:bg-[#1A3D1A]/30 transition-colors duration-500"></div>
          
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            {/* <div className="w-20 h-20 md:w-24 md:h-24 bg-[#c8a951]/90 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(200,169,81,0.4)] mb-6 group-hover:scale-110 transition-transform duration-300 backdrop-blur-sm">
              <svg className="w-8 h-8 md:w-10 md:h-10 text-white ml-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div> */}
            <h3 className="text-3xl md:text-5xl font-serif font-bold text-white drop-shadow-lg mb-4">A Glimpse of the Journey</h3>
            <p className="text-white/90 text-sm md:text-base font-light tracking-wide max-w-lg drop-shadow-md">Immerse yourself in the art of Ceylon tea. Watch how we bring centuries of heritage to life in the heart of Galle.</p>
          </div>
        </div>
      </section>

      {/* Category Filters - Elegant Pills */}
      <section className="px-8 pb-10 pt-10 sticky top-[72px] z-40 bg-[#f9f8f3]/95 backdrop-blur-md border-b border-[#e8e4d9]">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-3">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 text-xs font-bold uppercase tracking-widest transition-all duration-300 rounded-full ${
                activeCategory === cat
                  ? 'bg-[#1b3b22] text-white shadow-md transform scale-105'
                  : 'text-gray-500 bg-white border border-gray-200 hover:border-[#c8a951] hover:text-[#c8a951]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Modern Bento Grid Gallery */}
      <section className="py-16 px-4 md:px-8 max-w-[1400px] mx-auto min-h-[50vh]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[250px]">
          {filtered.length > 0 ? filtered.map((photo, index) => (
            <div
              key={photo.id}
              className={`group relative overflow-hidden rounded-lg cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500 ${photo.span || 'col-span-1 row-span-1'}`}
              onClick={() => setLightbox(photo)}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <img
                src={photo.src}
                alt={photo.title}
                className="w-full h-full object-cover transition-transform duration-[1.2s] ease-in-out group-hover:scale-110"
              />
              
              <div className="absolute inset-0 bg-[#1A3D1A]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent transform translate-y-4 transition-transform duration-500 ease-out group-hover:translate-y-0">
                <p className="text-white font-serif text-xl font-bold drop-shadow-md">{photo.title}</p>
                <div className="flex items-center gap-2 mt-2">
                  <span className="w-1.5 h-1.5 bg-[#c8a951] rounded-full"></span>
                  <p className="text-[#c8a951] font-bold text-[10px] tracking-wider uppercase drop-shadow-sm">{photo.category}</p>
                </div>
              </div>
            </div>
          )) : (
            <div className="col-span-full flex items-center justify-center h-[300px] text-gray-400 font-serif italic text-xl">
              No images currently available in this category.
            </div>
          )}
        </div>
      </section>

      {/* Enhanced Fullscreen Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 bg-black/95 backdrop-blur-xl z-50 flex items-center justify-center p-4 transition-opacity duration-300"
          onClick={() => setLightbox(null)}
        >
          <div className="relative max-w-6xl w-full flex flex-col items-center" onClick={e => e.stopPropagation()}>
            <button
              onClick={() => setLightbox(null)}
              className="absolute -top-12 right-0 md:-right-12 text-white/50 text-4xl hover:text-[#c8a951] transition-colors"
            >
              ×
            </button>
            
            <img 
              src={lightbox.src} 
              alt={lightbox.title} 
              className="w-full max-h-[75vh] object-contain shadow-2xl rounded-sm" 
            />
            
            <div className="mt-8 text-center max-w-2xl">
              <span className="bg-[#c8a951] inline-block px-3 py-1 rounded-sm text-white text-[10px] font-bold tracking-[0.2em] uppercase mb-3">
                {lightbox.category}
              </span>
              <h3 className="text-white font-serif text-3xl font-bold mb-3">{lightbox.title}</h3>
              <p className="text-gray-400 text-sm italic">{lightbox.sub}</p>
            </div>

            {/* Prev/Next Navigation for Lightbox */}
            <div className="absolute top-[40%] -translate-y-1/2 left-0 right-0 flex justify-between px-2 md:-mx-16 pointer-events-none">
              <button
                className="pointer-events-auto bg-white/5 hover:bg-[#c8a951] border border-white/10 text-white w-14 h-14 rounded-full flex items-center justify-center backdrop-blur-sm transition-all duration-300 hover:scale-110"
                onClick={e => {
                  e.stopPropagation();
                  const currentList = filtered;
                  const idx = currentList.findIndex(p => p.id === lightbox.id);
                  setLightbox(currentList[(idx - 1 + currentList.length) % currentList.length]);
                }}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
              </button>
              <button
                className="pointer-events-auto bg-white/5 hover:bg-[#c8a951] border border-white/10 text-white w-14 h-14 rounded-full flex items-center justify-center backdrop-blur-sm transition-all duration-300 hover:scale-110"
                onClick={e => {
                  e.stopPropagation();
                  const currentList = activeCategory === "All Collections" ? allPhotos : filtered;
                  const idx = currentList.findIndex(p => p.id === lightbox.id);
                  setLightbox(currentList[(idx + 1) % currentList.length]);
                }}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* CTA Banner */}
      <section className="py-24 px-8 bg-[#1a2318] text-center relative overflow-hidden">
         <div className="absolute inset-0 opacity-30">
          <img 
            src="https://ceylon-tea-experience-media.s3.us-east-1.amazonaws.com/my_images/my+12.jpg" 
            alt="Texture" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10">
          <h2 className="text-4xl font-serif font-bold text-[#e8e4d9] mb-6">Witness the Journey in Person</h2>
          <p className="text-gray-300 text-sm md:text-base max-w-xl mx-auto mb-10 leading-relaxed">
            Book a private tour of our historic estates and participate in an artisanal tea-making session guided by our masters.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="mailto:reservations@theceylonteaexperience.com"
              className="bg-[#c8a951] text-white px-10 py-4 text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-[#c8a951] transition-all duration-300 shadow-md"
            >
              Reserve Your Experience
            </a>
            <button
              onClick={() => navigate('services')}
              className="border border-[#e8e4d9]/30 text-white px-10 py-4 text-xs font-bold uppercase tracking-widest hover:bg-white/10 transition-all duration-300"
            >
              View Services
            </button>
          </div>
        </div>
      </section>
      <div className="fixed bottom-8 right-8 z-50">
        {/* Floating WhatsApp Button (component-based) */}
      <div className="fixed bottom-8 right-8 z-50">
        <WhatsAppFloatingButton />
      </div>

      {/* Shared WhatsApp Inquiry Modal — opens from any service "Book" button */}
      <WhatsAppInquiryModal isOpen={waModalOpen} onClose={() => setWaModalOpen(false)} />
      </div>

      <Footer navigate={navigate} />
    </div>
  );
}