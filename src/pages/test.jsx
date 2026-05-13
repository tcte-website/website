import { useState, useEffect, useRef } from "react"
import Nav from '../components/Nav'
import Footer from '../components/Footer'

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Travel Writer, UK",
    text: "The most transformative tea experience I've ever had. Standing in those misty highlands, watching the sunrise over endless green — it changed how I understand luxury.",
    avatar: "https://i.pinimg.com/1200x/23/c3/6b/23c36b997f4facf89386e9674692b445.jpg"
  },
  {
    name: "Kenji Tanaka",
    role: "Tea Sommelier, Japan",
    text: "As someone who has visited tea estates across Asia, Ceylon Heritage stands apart. Their commitment to single-estate authenticity is remarkable.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80"
  },
  {
    name: "Amara Osei",
    role: "Food & Culture Blogger",
    text: "Book the Artisan experience. Don't think about it. The factory tour, the hand-rolling session, the tasting at dusk — perfection.",
    avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=100&q=80"
  }
]

// Hero background slideshow images
const heroBgImages = [
  "https://img.freepik.com/premium-photo/sunrise-lush-green-tea-plantation_1158030-110740.jpg?semt=ais_hybrid&w=740&q=80",
  "https://images.unsplash.com/photo-1576092768241-dec231879fc3?q=80&w=2000&auto=format&fit=crop",
  "https://cdn.shopify.com/s/files/1/0528/5173/6769/files/shutterstock_719690932_1080-X-683-pxl_A3_600x600.jpg?v=1656563342",
  "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=2000&q=80",
]

// Rotating image cards — 5 Sri Lankan tea regions
const heroCards = [
  {
    img: "https://images.unsplash.com/photo-1582793988951-9aed5509eb97?w=600&q=80",
    label: "NUWARA ELIYA",
    sub: "champagne of Ceylon teas..."
  },
  {
    img: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?q=80&w=600",
    label: "DIMBULA",
    sub: "Western highlands, full-bodied with bright golden liquor..."
  },
  {
    img: "https://images.pexels.com/photos/5007546/pexels-photo-5007546.jpeg",
    label: "UVA",
    sub: "Eastern slopes producing aromatic, mellow single-estate teas..."
  },
  {
    img: "https://images.unsplash.com/photo-1597481499750-3e6b22637e12?w=600&q=80",
    label: "KANDY",
    sub: "Mid-elevation gardens — robust, well-balanced exports..."
  },
  {
    img: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=600&q=80",
    label: "RUHUNA",
    sub: "Low-country southern estates — rich, dark, full-flavoured..."
  },
]

// Our Experience section images
const experienceImages = [
  "https://images.pexels.com/photos/34704515/pexels-photo-34704515.jpeg",
  "https://images.pexels.com/photos/5007546/pexels-photo-5007546.jpeg",
  "https://images.pexels.com/photos/322461/pexels-photo-322461.jpeg",
  "https://images.pexels.com/photos/34604766/pexels-photo-34604766.jpeg",
  "https://images.unsplash.com/photo-1558160074-4d7d8bdf4256?w=600&q=80",
  "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=600&q=80"
];

export default function TestPage({ navigate }) {
  const [bgIndex, setBgIndex] = useState(0)
  const [prevBgIndex, setPrevBgIndex] = useState(null)
  const [activeCardIndex, setActiveCardIndex] = useState(0)

  // Hero background auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      setPrevBgIndex(bgIndex)
      setBgIndex(prev => (prev + 1) % heroBgImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [bgIndex])

  // Watermark text cycles through destination labels
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCardIndex(prev => (prev + 1) % heroCards.length)
    }, 3500)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen font-sans text-gray-800 bg-[#fdfaf5]">
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes watermarkSwap {
          0% { opacity: 0; transform: translateX(40px); }
          15% { opacity: 1; transform: translateX(0); }
          85% { opacity: 1; transform: translateX(0); }
          100% { opacity: 0; transform: translateX(-40px); }
        }
        .hero-bg-slide {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
          transition: opacity 1.5s ease-in-out;
        }
        .cards-track {
          display: flex;
          gap: 1rem;
          will-change: transform;
        }
        .rotate-card {
          flex-shrink: 0;
          transition: transform 0.3s ease;
        }
        .rotate-card:hover {
          transform: translateY(-8px) scale(1.04);
          z-index: 10;
        }
        @keyframes cardFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
        }
        .dot-btn {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          border: none;
          cursor: pointer;
          transition: all 0.3s;
        }
        .cta-bg {
          background-image: url('https://img.freepik.com/premium-photo/sunrise-lush-green-tea-plantation_1158030-110740.jpg?semt=ais_hybrid&w=740&q=80');
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
        }
        .hero-watermark {
          position: absolute;
          top: 14%;
          right: -2%;
          font-family: 'Georgia', serif;
          font-weight: 400;
          font-size: clamp(120px, 18vw, 260px);
          line-height: 0.9;
          letter-spacing: 0.05em;
          color: rgba(255, 255, 255, 0.04);
          white-space: nowrap;
          pointer-events: none;
          z-index: 11;
          user-select: none;
          text-transform: uppercase;
          animation: watermarkSwap 3.5s ease-in-out infinite;
        }
      `}</style>

      <Nav navigate={navigate} currentPage="home" />

      {/* Hero */}
      <section className="relative min-h-[92vh] flex items-center px-8 py-20 overflow-hidden">

        {/* Slideshow backgrounds */}
        {heroBgImages.map((img, i) => (
          <div
            key={i}
            className="hero-bg-slide"
            style={{
              backgroundImage: `url('${img}')`,
              opacity: i === bgIndex ? 1 : 0,
              zIndex: 0,
            }}
          />
        ))}

        {/* Overlay - Slightly softer gradient for a more elegant feel */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1f11]/95 via-[#0a1f11]/70 to-[#0a1f11]/20 z-10"></div>

        {/* Big destination watermark */}
        <div key={activeCardIndex} className="hero-watermark">
          {heroCards[activeCardIndex].label}
        </div>

        {/* Slide dots */}
        <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex gap-3 z-20">
          {heroBgImages.map((_, i) => (
            <button
              key={i}
              className="dot-btn"
              style={{
                background: i === bgIndex ? '#c19b44' : 'transparent',
                border: i === bgIndex ? 'none' : '1px solid rgba(255,255,255,0.4)',
                width: i === bgIndex ? '28px' : '8px',
                borderRadius: i === bgIndex ? '4px' : '50%',
              }}
              onClick={() => { setPrevBgIndex(bgIndex); setBgIndex(i) }}
            />
          ))}
        </div>

        <div className="relative z-20 w-full max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="md:w-1/2 text-white">
            <p className="text-[11px] uppercase tracking-[0.4em] text-[#c19b44] mb-6">Est. 1887 · Nuwara Eliya</p>
            <h1 className="text-5xl md:text-7xl font-serif font-normal leading-[1.1] mb-8 tracking-tight">
              "DISCOVER<br />THE SOUL OF<br />PURE CEYLON<br />TEA"
            </h1>
            <p className="text-sm md:text-base leading-relaxed mb-10 max-w-md text-gray-300 font-light tracking-wide">
              From misty highland estates to your cup — a journey through Sri Lanka's most revered tea traditions. 100% single-estate, hand-plucked, artisanal.
            </p>
            <div className="flex gap-5 flex-wrap">
              <button
                onClick={() => navigate('services')}
                className="bg-[#c19b44] text-white px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.15em] hover:bg-[#a38032] transition-colors duration-300 rounded-sm"
              >
                Explore Experiences
              </button>
              <button
                onClick={() => navigate('about')}
                className="border border-white/40 text-white px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.15em] hover:bg-white hover:text-[#0a1f11] transition-all duration-300 rounded-sm"
              >
                Our Story
              </button>
            </div>
          </div>

          {/* Rotating / scrolling image cards */}
          <div className="md:w-1/2 overflow-hidden relative mt-12 md:mt-55" style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}>
            <RotatingCards cards={heroCards} />
          </div>
        </div>
      </section>

      {/* Stats Bar - Refined minimal look */}
      <section className="bg-[#fdfaf5] border-b border-[#e8e3d5] py-10 px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-[#e8e3d5]/50 text-center">
          {[
            { num: "136+", label: "Years of Heritage" },
            { num: "11", label: "Estate Varieties" },
            { num: "100%", label: "Organic Certified" },
            { num: "50K+", label: "Happy Visitors" },
          ].map((s, i) => (
            <div key={i} className="px-4">
              <div className="text-3xl font-serif font-medium text-[#1b3b22]">{s.num}</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-gray-500 mt-2">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us - Editorial Grid */}
      <section className="relative py-32 px-8 overflow-hidden bg-[#fdfaf5]">
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-20 flex flex-col items-center">
            <div className="w-px h-12 bg-[#c19b44] mb-6"></div>
            <h2 className="text-3xl md:text-4xl font-serif text-[#1b3b22] font-normal mb-6 tracking-tight">Why Choose Us</h2>
            <h3 className="text-[#c19b44] text-xs uppercase tracking-[0.2em] mb-4">Discover Sri Lanka's Tea Story - in the Heart of Galle</h3>
            <p className="text-sm text-gray-500 max-w-2xl mx-auto leading-relaxed font-light">
              The Ceylon Tea Experience (TCTE) brings the magic of the tea highlands to the Southern Coast. More than a cafe, we are an interactive tea journey where you learn, create, and taste.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
            {[
              {
                img: "https://images.pexels.com/photos/34256656/pexels-photo-34256656.jpeg",
                tag: "LOCATION",
                title: "Interactive Experience",
                desc: "The only interactive tea experience in Southern Sri Lanka."
              },
              {
                img: "https://images.pexels.com/photos/17189951/pexels-photo-17189951.jpeg",
                tag: "HANDS-ON",
                title: "Tasting Sessions",
                desc: "Hands-on tea making & tasting sessions."
              },
              {
                img: "https://images.pexels.com/photos/5007546/pexels-photo-5007546.jpeg",
                tag: "CUSTOM",
                title: "Tea Library",
                desc: "Build-Your-Own Tea Library — personalised blends."
              },
              {
                img: "https://img.freepik.com/free-photo/oolong-green-tea-teapot-bowl_1150-23596.jpg?semt=ais_hybrid&w=740&q=80",
                tag: "PREMIUM",
                title: "Tea Café",
                desc: "Premium tea café serving curated Ceylon teas."
              },
              {
                img: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=600",
                tag: "FOR ALL",
                title: "Welcoming Environment",
                desc: "Perfect for families, couples, and cultural travellers."
              },
              {
                img: "https://cdn.shopify.com/s/files/1/0528/5173/6769/files/shutterstock_719690932_1080-X-683-pxl_A3_600x600.jpg?v=1656563342",
                tag: "CONVENIENCE",
                title: "Quick & Curated",
                desc: "Quick, curated, high-value experience — no full-day travel required."
              },
            ].map((item, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="relative aspect-[4/3] overflow-hidden mb-6 rounded-sm">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500"></div>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[#c19b44] mb-2">{item.tag}</p>
                  <h3 className="text-xl font-serif text-[#1b3b22] mb-3 group-hover:text-[#c19b44] transition-colors">{item.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed font-light">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Experience Section — Editorial Side-by-side Layout */}
      <section className="relative py-32 px-8 overflow-hidden bg-white">
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

            {/* LEFT — Image Carousel */}
            <div className="relative order-2 lg:order-1 px-4 md:px-12 lg:px-0">
              <ExperienceImageCarousel images={experienceImages} />
            </div>

            {/* RIGHT — Text Content */}
            <div className="order-1 lg:order-2 lg:pl-8">
              <p className="text-[11px] uppercase tracking-[0.3em] text-[#c19b44] mb-6">The Journey</p>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#1b3b22] font-normal leading-tight mb-8">
                Our <em className="text-[#856300] font-light italic">Experience</em>
              </h2>

              <div className="space-y-6 text-sm md:text-base text-gray-500 leading-relaxed font-light mb-10">
                <p>At TCTE, every visitor becomes part of the tea-making process.</p>
                <p>From plucking leaves and rolling your own tea, to crafting a personalised blend with herbs and flavours, the experience is designed to be immersive, educational, and unforgettable.</p>
                <p>Whether you have 30 minutes or two hours, you walk away with a deeper appreciation of the craftsmanship behind Ceylon Tea — and a blend you can call your own.</p>
              </div>

              <button
                onClick={() => navigate('services')}
                className="inline-block border border-[#1b3b22] text-[#1b3b22] px-10 py-4 text-xs font-semibold uppercase tracking-[0.2em] hover:bg-[#1b3b22] hover:text-white transition-all duration-300 rounded-sm"
              >
                Explore Experiences
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* Featured Experiences */}
      <section className="py-32 px-8 bg-[#fdfaf5]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <p className="text-[11px] uppercase tracking-[0.3em] text-[#c19b44] mb-4">Curated For You</p>
              <h2 className="text-4xl font-serif text-[#1b3b22] font-normal mb-4">Featured Experiences</h2>
              <p className="text-sm text-gray-500 leading-relaxed font-light">
                From a two-hour estate walk to an overnight stay in a heritage planter's bungalow — every encounter is crafted to reveal the soul of Ceylon tea.
              </p>
            </div>
            <button className="hidden md:block text-xs uppercase tracking-[0.15em] text-[#1b3b22] border-b border-[#1b3b22] pb-1 hover:text-[#c19b44] hover:border-[#c19b44] transition-colors">
              View All Experiences
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                img: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=600&q=80",
                tag: "INTRODUCTION",
                title: "The Leaf",
                desc: "A guided estate walk through lush elevations. Learn the art of two-leaves-and-a-bud plucking.",
                price: "$45",
                unit: "/ person"
              },
              {
                img: "https://images.pexels.com/photos/814264/pexels-photo-814264.jpeg",
                tag: "IMMERSIVE",
                title: "The Artisan",
                desc: "A half-day deep dive into withering, rolling, and factory craftsmanship. Conclude with a masterclass tasting.",
                price: "$120",
                unit: "/ person",
                featured: true
              },
              {
                img: "https://images.unsplash.com/photo-1582793988951-9aed5509eb97?w=600&q=80",
                tag: "RESIDENCY",
                title: "The Planter",
                desc: "Overnight in a historic bungalow with a private sunrise tasting and custom blend creation.",
                price: "$450",
                unit: "/ couple"
              },
            ].map((exp, i) => (
              <div key={i} className="group cursor-pointer flex flex-col h-full"
                onClick={() => navigate('services')}
              >
                <div className="relative aspect-[3/4] overflow-hidden rounded-sm mb-6">
                  <img src={exp.img} alt={exp.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                  {exp.featured && (
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-[#1b3b22] text-[9px] font-bold uppercase px-3 py-1.5 tracking-widest rounded-sm shadow-sm">
                      Most Popular
                    </div>
                  )}
                </div>
                <div className="flex-grow flex flex-col">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[#c19b44] mb-2">{exp.tag}</p>
                  <h3 className="text-2xl font-serif text-[#1b3b22] mb-3">{exp.title}</h3>
                  <p className="text-sm text-gray-500 mb-6 leading-relaxed font-light flex-grow">{exp.desc}</p>
                  
                  <div className="pt-6 border-t border-[#e8e3d5] flex justify-between items-center mt-auto">
                    <div>
                      <span className="text-xl font-serif text-[#1b3b22]">{exp.price}</span>
                      <span className="text-xs text-gray-400 ml-1">{exp.unit}</span>
                    </div>
                    <span className={`text-[11px] font-semibold uppercase tracking-wider ${exp.featured ? 'text-[#c19b44]' : 'text-[#1b3b22]'}`}>
                      {exp.featured ? 'Reserve Spot' : 'Inquire Now'} &rarr;
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials - Refined Minimal */}
      <section className="py-32 px-8 bg-[#152a19] text-center">
        <div className="max-w-5xl mx-auto">
          <div className="w-px h-12 bg-[#c19b44]/50 mx-auto mb-8"></div>
          <p className="text-[11px] uppercase tracking-[0.3em] text-[#c19b44] mb-4">Voices from the Estate</p>
          <h2 className="text-3xl md:text-4xl font-serif text-white font-normal mb-16">What Our Guests Say</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
            {testimonials.map((t, i) => (
              <div key={i} className="flex flex-col h-full">
                <div className="text-[#c19b44] font-serif text-5xl leading-none mb-4 opacity-50">"</div>
                <p className="text-gray-300 text-sm leading-loose mb-8 font-light flex-grow">{t.text}</p>
                <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                  <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover grayscale opacity-80" />
                  <div>
                    <div className="text-white text-sm font-medium tracking-wide">{t.name}</div>
                    <div className="text-[#c19b44] text-[10px] uppercase tracking-widest mt-1">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - Cinematic & Elegant */}
      <section className="py-40 relative cta-bg">
        <div className="absolute inset-0 bg-[#0a1f11]/80"></div>
        <div className="relative z-10 max-w-3xl mx-auto text-center px-8">
          <p className="text-[11px] uppercase tracking-[0.3em] text-[#c19b44] mb-6">Begin Your Journey</p>
          <h2 className="text-4xl md:text-6xl font-serif font-normal text-white mb-8 leading-[1.1]">
            Ready to Discover<br />Ceylon Tea?
          </h2>
          <p className="text-gray-300 mb-12 text-sm md:text-base font-light tracking-wide">
            <span className="uppercase tracking-[0.2em] text-[11px] text-[#c19b44] block mb-2">Connect · Taste · Explore</span>
            Your journey into Sri Lanka's most iconic heritage begins here.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <button onClick={() => navigate('services')} className="bg-[#c19b44] text-white px-10 py-4 text-xs font-semibold uppercase tracking-[0.15em] hover:bg-[#a38032] transition-colors duration-300 rounded-sm">
              Explore Experiences
            </button>
            <button onClick={() => navigate('contact')} className="border border-white/40 text-white px-10 py-4 text-xs font-semibold uppercase tracking-[0.15em] hover:bg-white hover:text-[#0a1f11] transition-all duration-300 rounded-sm">
              Contact Us
            </button>
          </div>
          <div className="flex flex-wrap justify-center gap-8 text-white/50 text-[10px] uppercase tracking-[0.2em]">
            <span>⭐ 5-Star Rated</span>
            <span>👥 1000+ Guests</span>
            <span>🌿 100% Organic</span>
          </div>
        </div>
      </section>

      <Footer navigate={navigate} />
    </div>
  )
}

// -------------------------------------------------------------
// Side-by-side Image Carousel for "Our Experience" section
// Refined Minimalist look
// -------------------------------------------------------------
function ExperienceImageCarousel({ images }) {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-play every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full">
      {/* Main image container — tall rectangle */}
      <div className="relative w-full aspect-[4/5] md:aspect-[3/4] overflow-hidden rounded-sm bg-[#fdfaf5]">
        {images.map((img, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              i === activeIndex ? "opacity-100 z-10 scale-100" : "opacity-0 z-0 scale-105"
            }`}
          >
            <img
              src={img}
              className="w-full h-full object-cover"
              alt={`Experience Slide ${i + 1}`}
            />
          </div>
        ))}

        {/* Minimalist Indicator lines */}
        <div className="absolute bottom-6 left-6 right-6 flex gap-2 z-20">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className="flex-1 h-0.5 bg-white/30 overflow-hidden relative"
              aria-label={`Slide ${i + 1}`}
            >
              <div 
                className={`absolute inset-y-0 left-0 bg-white transition-all duration-[4000ms] ease-linear ${
                  i === activeIndex ? "w-full" : i < activeIndex ? "w-full" : "w-0"
                }`}
                style={{ transitionDuration: i === activeIndex ? '4s' : '0s' }}
              />
            </button>
          ))}
        </div>

        {/* Slide counter */}
        <div className="absolute top-6 right-6 z-20 text-white text-[10px] tracking-[0.2em] mix-blend-difference">
          {String(activeIndex + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}
        </div>
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// Rotating Cards — Coverflow 3D Carousel
// Refined for Artisanal Heritage - Less extreme 3D, thinner borders
// -------------------------------------------------------------
function RotatingCards({ cards }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  const CARD_W = 200
  const CARD_H = 300

  // Auto-play interval
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % cards.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [cards.length, isHovered]);

  return (
    <div 
      style={{
        width: '100%',
        height: `${CARD_H + 60}px`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        perspective: '1200px',
        position: 'relative',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {cards.map((card, i) => {
        let offset = (i - activeIndex + cards.length) % cards.length;
        if (offset > Math.floor(cards.length / 2)) {
          offset -= cards.length;
        }

        const absOffset = Math.abs(offset);
        const isActive = offset === 0;

        // Softer Coverflow Mathematics for a premium feel
        const translateX = offset * 120; 
        const translateZ = absOffset * -100;
        const rotateY = isActive ? 0 : offset < 0 ? 35 : -35;
        const scale = isActive ? 1.05 : 0.9;
        const zIndex = 10 - absOffset;
        const opacity = isActive ? 1 : 1 - (absOffset * 0.4);

        return (
          <div
            key={i}
            onClick={() => setActiveIndex(i)}
            style={{
              position: 'absolute',
              width: `${CARD_W}px`,
              height: `${CARD_H}px`,
              borderRadius: '4px', // Softer edges, more classic
              overflow: 'hidden',
              border: '1px solid rgba(255,255,255,0.1)',
              boxShadow: isActive ? '0 30px 60px rgba(0,0,0,0.5)' : 'none',
              transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
              zIndex: zIndex,
              opacity: opacity,
              cursor: 'pointer',
              transition: 'all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1)', 
            }}
          >
            <img
              src={card.img}
              alt={card.label}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
                filter: isActive ? 'brightness(1)' : 'brightness(0.6)',
                transition: 'filter 0.8s ease'
              }}
            />

            {/* Gradient overlay */}
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(to top, rgba(10,31,17,0.9) 0%, rgba(10,31,17,0.2) 60%, transparent 100%)',
            }} />

            {/* Text at bottom */}
            <div style={{
              position: 'absolute', bottom: '24px', left: '24px', right: '24px',
            }}>
              <div style={{
                color: 'white',
                fontSize: '18px',
                fontWeight: '400',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                lineHeight: 1.2,
                marginBottom: '8px',
                fontFamily: 'Georgia, serif',
              }}>
                {card.label}
              </div>
              <div style={{
                color: 'rgba(255,255,255,0.6)',
                fontSize: '11px',
                fontWeight: '300',
                letterSpacing: '0.02em',
                lineHeight: 1.5,
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
              }}>
                {card.sub}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}