import React, { useEffect, useRef, useState } from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import WhatsAppFloatingButton from '../components/WhatsAppFloatingButton';
import DeferredVideo from '../components/DeferredVideo';

const categories = ["All Collections", "Tea Making Experience", "Tea Library", "Café", "Events/Groups"];
const servicesImageBase = `${import.meta.env.BASE_URL}images/services`;
const journalImageBase = `${import.meta.env.BASE_URL}images/blog/visit-tcte-galle`;

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
  // --- RECENT SERVICE PHOTOS ---
  //
  {
    id: 27,
    category: "Tea Making Experience",
    src: `${servicesImageBase}/plantation-tour-guest.jpeg`,
    title: "Among the Tea Plants",
    sub: "Tea Making Experience · Plantation Tour",
    alt: "Guest exploring tea plants during the Plantation Tour in Galle",
    width: 720,
    height: 1280,
    objectPosition: "center",
    span: "col-span-1 row-span-2",
  },
  {
    id: 28,
    category: "Tea Library",
    src: `${servicesImageBase}/tea-library-01.webp`,
    title: "Global Tea Selection",
    sub: "Tea Library · Premium Ceylon Tea",
    alt: "Premium Ceylon Tea products displayed on wooden shelves in The Tea Library",
    width: 720,
    height: 1280,
    objectPosition: "center",
    span: "col-span-1 row-span-2",
  },
  {
    id: 39,
    category: "Events/Groups",
    src: `${journalImageBase}/tcte-guests-and-team.webp`,
    srcSet: `${journalImageBase}/tcte-guests-and-team-640.webp 640w, ${journalImageBase}/tcte-guests-and-team.webp 720w`,
    sizes: "(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw",
    title: "A Warm TCTE Welcome",
    sub: "Events/Groups · Guest and Team Moment",
    alt: "A visitor with the TCTE team at The Ceylon Tea Experience in Galle",
    width: 720,
    height: 1280,
    objectPosition: "center",
    span: "col-span-1 row-span-2",
  },
  {
    id: 40,
    category: "Tea Making Experience",
    src: `${journalImageBase}/tcte-hands-on-tea-processing-01.webp`,
    srcSet: `${journalImageBase}/tcte-hands-on-tea-processing-01-640.webp 640w, ${journalImageBase}/tcte-hands-on-tea-processing-01.webp 1080w`,
    sizes: "(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw",
    title: "Hands-On Tea Processing",
    sub: "Tea Making Experience · Interactive Craft",
    alt: "Guests operating tea-processing equipment during a hands-on Ceylon Tea experience in Galle",
    width: 1080,
    height: 1440,
    objectPosition: "center",
    span: "col-span-1 row-span-2",
  },
  {
    id: 29,
    category: "Tea Library",
    src: `${servicesImageBase}/tea-library-02.webp`,
    title: "Wall of Ceylon Tea",
    sub: "Tea Library · Boutique Collection",
    alt: "Colourful Ceylon Tea packages arranged across The Tea Library shelves",
    width: 1280,
    height: 960,
    objectPosition: "center",
    span: "col-span-1 row-span-1",
  },
  {
    id: 41,
    category: "Tea Making Experience",
    src: `${journalImageBase}/tcte-hands-on-tea-processing-02.webp`,
    srcSet: `${journalImageBase}/tcte-hands-on-tea-processing-02-640.webp 640w, ${journalImageBase}/tcte-hands-on-tea-processing-02.webp 1080w`,
    sizes: "(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw",
    title: "Making Tea Together",
    sub: "Tea Making Experience · Shared Discovery",
    alt: "Visitors using tea-processing equipment together during an interactive Ceylon Tea session",
    width: 1080,
    height: 1440,
    objectPosition: "center",
    span: "col-span-1 row-span-2",
  },
  {
    id: 30,
    category: "Tea Library",
    src: `${servicesImageBase}/tea-library-03.webp`,
    title: "Colourful Tea Collections",
    sub: "Tea Library · Sri Lankan Brands",
    alt: "Wide selection of Sri Lankan tea brands at The Ceylon Tea Experience",
    width: 1280,
    height: 960,
    objectPosition: "center",
    span: "col-span-1 row-span-1",
  },
  {
    id: 42,
    category: "Tea Making Experience",
    src: `${journalImageBase}/tcte-tea-tasting-guests.webp`,
    srcSet: `${journalImageBase}/tcte-tea-tasting-guests-640.webp 640w, ${journalImageBase}/tcte-tea-tasting-guests.webp 1080w`,
    sizes: "(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw",
    title: "Preparing Ceylon Tea",
    sub: "Tea Making Experience · Guided Tasting",
    alt: "Visitors preparing Ceylon Tea during an interactive tea experience",
    width: 1080,
    height: 1440,
    objectPosition: "center",
    span: "col-span-1 row-span-2",
  },
  {
    id: 26,
    category: "Tea Making Experience",
    src: `${servicesImageBase}/build-your-own-tea-blending.webp`,
    title: "Blending by Hand",
    sub: "Tea Making Experience · Personalised Blend",
    alt: "Guest blending tea leaves and botanicals during the Build Your Own Tea experience",
    width: 1212,
    height: 2048,
    objectPosition: "center",
    span: "col-span-1 row-span-2",
  },
  {
    id: 43,
    category: "Café",
    src: `${journalImageBase}/tcte-guests-enjoying-ceylon-tea.webp`,
    srcSet: `${journalImageBase}/tcte-guests-enjoying-ceylon-tea-640.webp 640w, ${journalImageBase}/tcte-guests-enjoying-ceylon-tea.webp 1080w`,
    sizes: "(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw",
    title: "A Freshly Brewed Moment",
    sub: "Café · Ceylon Tea Together",
    alt: "Guests enjoying freshly brewed Ceylon Tea at The Ceylon Tea Experience",
    width: 1080,
    height: 1440,
    objectPosition: "center",
    span: "col-span-1 row-span-2",
  },
  {
    id: 31,
    category: "Tea Library",
    src: `${servicesImageBase}/tea-library-04.webp`,
    title: "Curated Shelf Details",
    sub: "Tea Library · Tea Tins and Gifts",
    alt: "Tea tins and gift collections displayed along wooden retail shelves",
    width: 960,
    height: 1280,
    objectPosition: "center",
    span: "col-span-1 row-span-2",
  },
  {
    id: 32,
    category: "Tea Library",
    src: `${servicesImageBase}/tea-library-05.webp`,
    title: "Boutique Tea Display",
    sub: "Tea Library · Colourful Packages",
    alt: "Boutique Ceylon Tea retail display with colourful packages and tins",
    width: 1280,
    height: 960,
    objectPosition: "center",
    span: "col-span-1 md:col-span-2 row-span-1",
  },
  {
    id: 33,
    category: "Tea Library",
    src: `${servicesImageBase}/tea-library-06.webp`,
    title: "Regional Tea Collection",
    sub: "Tea Library · Premium Selections",
    alt: "Premium tea boxes, tins, and regional collections in The Tea Library",
    width: 1280,
    height: 960,
    objectPosition: "center",
    span: "col-span-1 row-span-1",
  },
  {
    id: 34,
    category: "Tea Library",
    src: `${servicesImageBase}/tea-library-08.webp`,
    title: "Tea Gifts and Tins",
    sub: "Tea Library · Retail Collection",
    alt: "Sri Lankan tea packages presented in a boutique retail collection",
    width: 1280,
    height: 960,
    objectPosition: "center",
    span: "col-span-1 md:col-span-2 row-span-1",
  },
  {
    id: 35,
    category: "Tea Library",
    src: `${servicesImageBase}/tea-library-09.webp`,
    title: "Evening Tea Library",
    sub: "Tea Library · Warmly Lit Shelves",
    alt: "Warmly lit shelves featuring tea tins, boxes, and colourful packages",
    width: 853,
    height: 1280,
    objectPosition: "center",
    span: "col-span-1 row-span-2",
  },
  {
    id: 36,
    category: "Tea Library",
    src: `${servicesImageBase}/tea-library-10.webp`,
    title: "Signature Tea Books",
    sub: "Tea Library · Gift Collection",
    alt: "Tea books, regional teas, and gift packages displayed in The Tea Library",
    width: 1280,
    height: 853,
    objectPosition: "center",
    span: "col-span-1 md:col-span-2 row-span-1",
  },
  {
    id: 37,
    category: "Tea Library",
    src: `${servicesImageBase}/ecommerce-tea-gift-delivery.webp`,
    title: "Tea Gifts, Ready to Share",
    sub: "Tea Library · Delivery Collection",
    alt: "Ceylon Tea gift packaging prepared for delivery and worldwide ordering",
    width: 1322,
    height: 1190,
    objectPosition: "center",
    span: "col-span-1 row-span-1 md:col-span-2 md:row-span-2",
  },
  {
    id: 38,
    category: "Events/Groups",
    src: `${servicesImageBase}/workshops-group-tea-tasting.webp`,
    title: "Guided Group Tasting",
    sub: "Events/Groups · Tea Workshop",
    alt: "International guests taking part in a guided group tea-tasting workshop",
    width: 1448,
    height: 1086,
    objectPosition: "55% center",
    span: "col-span-1 row-span-1 md:col-span-2 md:row-span-2",
  },

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
  const lightboxCloseRef = useRef(null);
  const previousFocusRef = useRef(null);
  // Filter logic
  const filtered = activeCategory === "All Collections"
    ? allPhotos.filter(p => !p.featured)
    : allPhotos.filter(p => p.category === activeCategory);

  const featuredPhotos = allPhotos.filter(p => p.featured);
  const lightboxPhotos = lightbox?.featured ? featuredPhotos : filtered;
  const isCafeCollection = activeCategory === "Café";

  useEffect(() => {
    if (!lightbox) return undefined;

    previousFocusRef.current = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    lightboxCloseRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setLightbox(null);
        return;
      }

      if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;

      setLightbox((currentPhoto) => {
        if (!currentPhoto) return currentPhoto;
        const photos = currentPhoto.featured
          ? allPhotos.filter((photo) => photo.featured)
          : activeCategory === "All Collections"
            ? allPhotos.filter((photo) => !photo.featured)
            : allPhotos.filter((photo) => photo.category === activeCategory);
        const currentIndex = photos.findIndex((photo) => photo.id === currentPhoto.id);
        const offset = event.key === 'ArrowLeft' ? -1 : 1;
        return photos[(currentIndex + offset + photos.length) % photos.length];
      });
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleKeyDown);
      previousFocusRef.current?.focus();
    };
  }, [activeCategory, lightbox]);

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
      <section id="main-content" className="relative min-h-[60vh] flex items-center justify-center pt-32 pb-16 px-8 text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* Hero Image updated with one of your new links */}
          <img 
            src="https://ceylon-tea-experience-media.s3.us-east-1.amazonaws.com/images/2.jpeg" 
            alt="Gallery Hero Background" 
            fetchPriority="high"
            decoding="async"
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
        <div className="px-4 md:px-8 flex justify-between items-end max-w-[1400px] mx-auto mb-6">
          <h2 className="text-3xl font-serif font-bold text-[#1b3b22]">Featured Moments</h2>
          <div className="flex gap-3">
            <button type="button" aria-label="Show previous featured moments" onClick={() => scroll('left')} className="w-12 h-12 rounded-full border-2 border-[#806707] text-[#806707] flex items-center justify-center hover:bg-[#806707] hover:text-white transition-all duration-300">
              ←
            </button>
            <button type="button" aria-label="Show next featured moments" onClick={() => scroll('right')} className="w-12 h-12 rounded-full border-2 border-[#806707] text-[#806707] flex items-center justify-center hover:bg-[#806707] hover:text-white transition-all duration-300">
              →
            </button>
          </div>
        </div>

        {/* Scrollable Container */}
        <div 
          ref={sliderRef}
          className="flex overflow-x-auto snap-x snap-mandatory gap-4 md:gap-6 px-4 md:px-8 pb-10 max-w-[1400px] mx-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {featuredPhotos.map(photo => (
            <button
              type="button"
              key={`featured-${photo.id}`} 
              aria-label={`View ${photo.title}`}
              className="relative min-w-[85vw] md:min-w-[60vw] lg:min-w-[40vw] h-[50vh] md:h-[60vh] snap-center rounded-xl overflow-hidden group cursor-pointer shadow-lg text-left"
              onClick={() => setLightbox(photo)}
            >
              <img 
                src={photo.src} 
                srcSet={photo.srcSet}
                sizes={photo.sizes}
                alt={photo.alt ?? photo.title}
                width={photo.width}
                height={photo.height}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                style={{ objectPosition: photo.objectPosition ?? 'center' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1b3b22]/90 via-[#1b3b22]/20 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-90"></div>
              
              <div className="absolute bottom-0 left-0 p-8 transform translate-y-2 transition-transform duration-500 group-hover:translate-y-0">
                <p className="bg-[#c8a951] inline-block px-3 py-1 rounded-sm text-white text-[10px] font-bold tracking-widest uppercase mb-3">{photo.category}</p>
                <h3 className="text-white text-3xl font-serif font-bold mb-1">{photo.title}</h3>
                <p className="text-gray-300 text-sm font-light mt-2">{photo.sub.split('·')[1]}</p>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* NEW: Experience Video Section */}
      <section className="py-16 px-4 md:px-8 max-w-[1400px] mx-auto">
        <div className="relative w-full h-[400px] md:h-[600px] rounded-2xl overflow-hidden shadow-2xl group cursor-pointer border border-[#e8e4d9]">
          {/* Video Placeholder Image updated */}
          <DeferredVideo
            src="https://ceylon-tea-experience-media.s3.us-east-1.amazonaws.com/ceylon-tea-experience-videos.MP4"
            poster="https://ceylon-tea-experience-media.s3.us-east-1.amazonaws.com/images/25.jpeg"
            loadWhenVisible
            className="w-full h-full object-cover transition-transform duration-700"
            ariaLabel="A glimpse of The Ceylon Tea Experience"
          />
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
      <section className="px-4 md:px-8 py-5 md:py-7 sticky top-[72px] z-40 bg-[#f9f8f3]/95 backdrop-blur-md border-b border-[#e8e4d9]">
        <div className="max-w-7xl mx-auto flex overflow-x-auto sm:flex-wrap sm:justify-center gap-2 md:gap-3 pb-1 sm:pb-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {categories.map(cat => (
            <button
              type="button"
              key={cat}
              onClick={() => setActiveCategory(cat)}
              aria-pressed={activeCategory === cat}
              className={`flex-none px-4 md:px-6 py-2.5 text-xs font-bold uppercase tracking-widest transition-all duration-300 rounded-full ${
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
        <div className={isCafeCollection
          ? "grid grid-cols-1 md:grid-cols-2 gap-5 auto-rows-[270px] md:auto-rows-[320px] lg:auto-rows-[360px] max-w-[1100px] mx-auto"
          : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[250px]"
        }>
          {filtered.length > 0 ? filtered.map((photo, index) => (
            <button
              type="button"
              key={photo.id}
              aria-label={`View ${photo.title}`}
              className={`group relative overflow-hidden rounded-lg cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500 text-left ${isCafeCollection ? 'col-span-1 row-span-1' : photo.span || 'col-span-1 row-span-1'}`}
              onClick={() => setLightbox(photo)}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <img
                src={photo.src}
                srcSet={photo.srcSet}
                sizes={photo.sizes}
                alt={photo.alt ?? photo.title}
                width={photo.width}
                height={photo.height}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-[1.2s] ease-in-out group-hover:scale-110"
                style={{ objectPosition: photo.objectPosition ?? 'center' }}
              />
              
              <div className="absolute inset-0 bg-[#1A3D1A]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent transform translate-y-4 transition-transform duration-500 ease-out group-hover:translate-y-0">
                <p className="text-white font-serif text-xl font-bold drop-shadow-md">{photo.title}</p>
                <div className="flex items-center gap-2 mt-2">
                  <span className="w-1.5 h-1.5 bg-[#c8a951] rounded-full"></span>
                  <p className="text-[#c8a951] font-bold text-[10px] tracking-wider uppercase drop-shadow-sm">{photo.category}</p>
                </div>
              </div>
            </button>
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
          role="dialog"
          aria-modal="true"
          aria-label={`${lightbox.title} image viewer`}
          className="fixed inset-0 bg-black/95 backdrop-blur-xl z-50 flex items-center justify-center p-4 transition-opacity duration-300"
          onClick={() => setLightbox(null)}
        >
          <div className="relative max-w-6xl w-full flex flex-col items-center" onClick={e => e.stopPropagation()}>
            <button
              ref={lightboxCloseRef}
              type="button"
              onClick={() => setLightbox(null)}
              className="absolute -top-12 right-0 md:-right-12 text-white/50 text-4xl hover:text-[#c8a951] transition-colors"
              aria-label="Close image viewer"
            >
              ×
            </button>
            
            <img 
              src={lightbox.src} 
              alt={lightbox.alt ?? lightbox.title}
              width={lightbox.width}
              height={lightbox.height}
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
                type="button"
                aria-label="Show previous image"
                className="pointer-events-auto bg-white/5 hover:bg-[#c8a951] border border-white/10 text-white w-14 h-14 rounded-full flex items-center justify-center backdrop-blur-sm transition-all duration-300 hover:scale-110"
                onClick={e => {
                  e.stopPropagation();
                  const idx = lightboxPhotos.findIndex(p => p.id === lightbox.id);
                  setLightbox(lightboxPhotos[(idx - 1 + lightboxPhotos.length) % lightboxPhotos.length]);
                }}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
              </button>
              <button
                type="button"
                aria-label="Show next image"
                className="pointer-events-auto bg-white/5 hover:bg-[#c8a951] border border-white/10 text-white w-14 h-14 rounded-full flex items-center justify-center backdrop-blur-sm transition-all duration-300 hover:scale-110"
                onClick={e => {
                  e.stopPropagation();
                  const idx = lightboxPhotos.findIndex(p => p.id === lightbox.id);
                  setLightbox(lightboxPhotos[(idx + 1) % lightboxPhotos.length]);
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
            alt=""
            aria-hidden="true"
            loading="lazy"
            decoding="async"
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
      <WhatsAppFloatingButton />

      <Footer navigate={navigate} />
    </div>
  );
}
