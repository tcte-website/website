import { useState, useEffect } from "react"
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import WhatsAppFloatingButton from '../components/WhatsAppFloatingButton';
import { WhatsAppInquiryModal } from '../components/WhatsAppModal';

const testimonials = [
  {
    name: "Thanmayi Panguluri",
    role: "6 Reviews",
    date: "2 months ago",
    platform: "Google",
    text: "Loved this place. It was such a fun way to learn about Sri Lankan tea. You get to taste different teas and even make your own blend which was honestly my favorite part. The vibe is relaxed and the team is super friendly. Definitely worth it!",
    avatar: "https://ui-avatars.com/api/?name=Thanmayi+Panguluri&background=A855F7&color=fff&size=128&bold=true"
  },
  {
    name: "Depak Kumar",
    role: "Local Guide · 8 Reviews",
    date: "2 months ago",
    platform: "Google",
    text: "Best part of Galle. The space is welcoming and the tea is amazing. I loved being able to create my own blend and take it home. It feels like a true Sri Lankan experience. If you enjoy tea even a little, you'll love this spot.",
    avatar: "https://ui-avatars.com/api/?name=Depak+Kumar&background=DC2626&color=fff&size=128&bold=true"
  },
  {
    name: "Dhinuk Narainan",
    role: "6 Review",
    date: "2 months ago",
    platform: "Google",
    text: "Visited recently and really liked the concept and atmosphere. Wishing the team all the best with the journey ahead.",
    avatar: "https://ui-avatars.com/api/?name=Dhinuk+Narainan&background=10B981&color=fff&size=128&bold=true"
  }
];

// Rotating image cards — 5 Sri Lankan tea regions
const heroCards = [
  {
    img: "https://ceylon-tea-experience-media.s3.us-east-1.amazonaws.com/my_images/my+06.jpeg",
    label: "Hand Made Tea",
    sub: "Craft the champagne of teas..."
  },
  {
    img: "https://ceylon-tea-experience-media.s3.us-east-1.amazonaws.com/my_images/my+05.jpeg",
    label: "The Tea Library",
    sub: "Explore full-bodied, golden blends..."
  },
  {
    img: "https://ceylon-tea-experience-media.s3.us-east-1.amazonaws.com/my_images/my+04.jpeg",
    label: "Build Your Own Tea",
    sub: "Robust teas, shipped worldwide..."
  },
  {
    img: "https://ceylon-tea-experience-media.s3.us-east-1.amazonaws.com/images/1.jpeg",
    label: "Global Delivery",
    sub: "Taste rich, dark teas together..."
  },
  {
    img: "https://ceylon-tea-experience-media.s3.us-east-1.amazonaws.com/my_images/my+01.jpeg",
    label: "Workshops & Groups",
    sub: "Taste rich southern teas together..."
  },
]

// Our Experience section images
const experienceImages = [
  {
    src: "https://ceylon-tea-experience-media.s3.us-east-1.amazonaws.com/images/25.jpeg",
    caption: "Hand plucking fresh two leaves and a bud"
  },
  {
    src: "https://ceylon-tea-experience-media.s3.us-east-1.amazonaws.com/images/1.jpeg",
    caption: "The artisanal hand rolling process"
  },
  {
    src: "https://ceylon-tea-experience-media.s3.us-east-1.amazonaws.com/images/5.jpeg",
    caption: "Savor the soul of Ceylon tea"
  },
  {
    src: "https://ceylon-tea-experience-media.s3.us-east-1.amazonaws.com/images/4.jpeg",
    caption: "Every cup holds a timeless journey"
  }

];

export default function HomePage({ navigate }) {
  const [activeCardIndex, setActiveCardIndex] = useState(0)
  const [waModalOpen, setWaModalOpen] = useState(false)

  // Watermark text cycles through destination labels
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCardIndex(prev => (prev + 1) % heroCards.length)
    }, 3500)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen font-sans text-gray-800 bg-[#F9F6F0]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400&display=swap');
        .font-serif { font-family: 'Playfair Display', serif; }
        .font-sans { font-family: 'Lato', sans-serif; }
        
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
        .hero-bg-video {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: 0;
        }
        .cta-bg {
          background-image: url('https://ceylon-tea-experience-media.s3.us-east-1.amazonaws.com/my_images/my+02.avif');
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
        }
        .hero-watermark {
          position: absolute;
          top: 14%;
          right: -2%;
          font-family: 'Playfair Display', serif;
          font-weight: 900;
          font-size: clamp(120px, 18vw, 260px);
          line-height: 0.9;
          letter-spacing: 0.02em;
          color: rgba(255, 255, 255, 0.07);
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
        {/* Background video */}                                                                                                                                        
        <video                                                                                                                                                          
          autoPlay
          loop
          muted                                                                                                                                                         
          playsInline
          className="hero-bg-video"
        >
          <source src="https://ceylon-tea-experience-media.s3.us-east-1.amazonaws.com/GalleHome.mp4" type="video/mp4" />
          Your browser does not support the video tag.                                                                                                                     
        </video>

        {/* Overlay using new brand dark green */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A3D1A]/95 to-[#1A3D1A]/40 z-10"></div>
        

        <div className="relative z-20 w-full max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="md:w-1/2 text-white">
            <p className="text-xs font-sans uppercase tracking-[0.3em] text-[#B8960C] mb-4">(TCTE) · Heart of Galle</p>
            
            {/* Updated Hero Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-extrabold leading-tight mb-8 drop-shadow-md">
              "Don't Just Drink Ceylon Tea <br/><span className="text-[#B8960C]">Experience It</span>"
            </h1>
            
            <p className="text-sm md:text-base font-sans leading-relaxed mb-8 max-w-md text-gray-200">
              The Ceylon Tea Experience is an immersive, handson tea discovery attraction designed for international visitors who want to experience Ceylon Tea beyond plantations and factories. Guests don't just drink tea they pluck, make, blend, taste, and understand it.
            </p>
            
            {/* Added Prominent CTA Button & Trust Indicators */}
            <div className="flex gap-4 flex-wrap mb-5">
              <button
                onClick={() => setWaModalOpen(true)}
                className="border-2 border-[#B8960C] text-[#B8960C] px-8 py-4 text-xs font-sans font-bold uppercase tracking-wider hover:bg-[#B8960C] hover:text-white transition rounded-sm"
              >
                Book Your Experience
              </button>
            </div>
          </div>          
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-[#1A3D1A] py-10 px-8 border-t-4 border-b-4 border-[#B8960C] relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-[0.03] bg-[repeating-linear-gradient(45deg,#B8960C_0px,#B8960C_1px,transparent_1px,transparent_20px)]"></div>
        
        <div className="relative max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16 text-white">
          
          {/* Stat 1 — Location */}
          <div className="flex items-center gap-4 group">
            <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[#B8960C]/15 border border-[#B8960C]/40 flex items-center justify-center group-hover:bg-[#B8960C]/25 transition-colors">
              <svg className="w-7 h-7 text-[#B8960C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div className="text-left">
              <div className="text-3xl font-serif font-bold text-[#B8960C] leading-none">300m</div>
              <div className="text-[11px] font-sans uppercase tracking-[0.2em] text-gray-300 mt-1.5">From Galle Fort</div>
            </div>
          </div>

          {/* Vertical Divider */}
          <div className="hidden sm:block w-px h-16 bg-gradient-to-b from-transparent via-[#B8960C]/40 to-transparent"></div>

          {/* Stat 2 — Google Rating */}
          <div className="flex items-center gap-4 group">
            <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[#B8960C]/15 border border-[#B8960C]/40 flex items-center justify-center group-hover:bg-[#B8960C]/25 transition-colors">
              {/* Google G icon */}
              <svg className="w-7 h-7" viewBox="0 0 48 48">
                <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/>
                <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/>
                <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/>
                <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"/>
              </svg>
            </div>
            <div className="text-left">
              <div className="flex items-center gap-2">
                <span className="text-3xl font-serif font-bold text-[#B8960C] leading-none">4.6</span>
                <div className="flex gap-0.5 text-[#B8960C]">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <div className="text-[11px] font-sans uppercase tracking-[0.2em] text-gray-300 mt-1.5">Google Reviews</div>
            </div>
          </div>

        </div>
      </section>

      {/* Why Choose Us */}
      <section className="relative py-24 px-8 overflow-hidden bg-[#F9F6F0]">
        {/* Background Gradients */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(184,150,12,0.1),transparent_60%)]"></div>
        <div className="absolute inset-0 opacity-[0.03] bg-[repeating-linear-gradient(135deg,#1A3D1A_0px,#1A3D1A_1px,transparent_1px,transparent_40px)]"></div>

        <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 items-start">
          
          {/* Left Column: Text & Icon Grid */}
          <div className="lg:w-[55%] order-2 lg:order-1">
            <div className="mb-12">
              <h2 className="text-4xl md:text-5xl font-serif text-[#2D6A2D] font-bold mb-4">Why Choose Us</h2>
              <h3 className="text-[#1A3D1A] text-lg font-sans font-bold mb-4">Discover Sri Lanka's Tea Story - in the Heart of Galle</h3>
              <p className="text-base font-sans text-gray-600 leading-relaxed">
                The Ceylon Tea Experience (TCTE) brings the magic of the tea highlands to the Southern Coast. More than a cafe, we are an interactive tea journey where you learn, create, and taste.
              </p>
            </div>

            {/* Icon Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 cursor-pointer">
              {[
                // 1. Interactive Experience
                {
                  icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />,
                  title: "Interactive Experience",
                  desc: "The only interactive tea experience in Southern Sri Lanka."
                },
                // 2. Handcrafted Tea (Hand Made Tea)
                {
                  icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />,
                  title: "Handcrafted Tea",
                  desc: "Every individual guest to manufacture their own tea - by hand."
                },
                // 3. Tasting Sessions
                {
                  icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 8h-2.81a5.986 5.986 0 00-1.39-2H4a2 2 0 00-2 2v6a2 2 0 002 2h1v4a2 2 0 002 2h6a2 2 0 002-2v-4h1a2 2 0 002-2V8zm-6 10H7v-4h7v4zm-9-8h11v4H5V10z" />,
                  title: "Tasting Sessions",
                  desc: "Hands on tea making & tasting sessions."
                },
                // 4. Build Your Own Tea (renamed from Take Home Blends, same description)
                {
                  icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />,
                  title: "Build Your Own Tea",
                  desc: "Guests to blend and take home tea, to their own taste buds."
                },
                // 6. Tea Library  ⚠️ description needs update
                {
                  icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />,
                  title: "Tea Library",
                  desc: "Build Your Own Tea Library personalised blends."
                },
                // 5. Tea Café
                {
                  icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />,
                  title: "Tea Café",
                  desc: "Premium tea café serving curated Ceylon teas."
                },
                // 7. One Hour Experience
                {
                  icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />,
                  title: "One Hour Experience",
                  desc: "A must do hour long tea experience without travelling to tea factories."
                },
                // 8. Modern Tea Journey (re-invented)
                {
                  icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />,
                  title: "Modern Tea Journey",
                  desc: "Guests to explore a re invented tea experience."
                },
                // 9. Welcoming Environment
                {
                  icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />,
                  title: "Welcoming Environment",
                  desc: "Perfect for families, couples, and cultural travellers."
                },
                // 10. Quick & Curated
                {
                  icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />,
                  title: "Quick & Curated",
                  desc: "Quick, curated, high value experience no full day travel required."
                }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-5 bg-white rounded-xl border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#F9F6F0] flex items-center justify-center text-[#B8960C]">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      {item.icon}
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-[#2D6A2D] text-lg mb-1">{item.title}</h4>
                    <p className="text-sm font-sans text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Supporting Image / Video Clip */}
          {/* VIDEO */}
          <div className="lg:w-[45%] order-1 lg:order-2 lg:sticky lg:top-54 mt-10 lg:mt-16">
            {/* Aspect ratio changed to 4/5 to make it wider/longer, gap reduced in parent flex container */}
            <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden shadow-2xl border-2 border-white group">
              <video 
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              >
                <source src="https://ceylon-tea-experience-media.s3.us-east-1.amazonaws.com/ceylon-tea-experience-videos.MP4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

        </div>
      </section>

      {/* Our Experience Section */}
      <section className="relative py-24 px-8 overflow-hidden bg-[#F9F6F0]">
        {/* Soft background accents */}
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-20" style={{
          background: 'radial-gradient(circle, rgba(184,150,12,0.3) 0%, transparent 70%)',
          filter: 'blur(60px)'
        }}></div>
        <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full opacity-15" style={{
          background: 'radial-gradient(circle, rgba(45,106,45,0.25) 0%, transparent 70%)',
          filter: 'blur(70px)'
        }}></div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* LEFT — Image Carousel */}
            <div className="relative order-2 lg:order-1">
              <ExperienceImageCarousel images={experienceImages} />
              {/* Decorative gold corner accents */}
              <div className="absolute -top-4 -left-4 w-20 h-20 border-t-4 border-l-4 border-[#B8960C]/60 rounded-tl-xl pointer-events-none"></div>
              <div className="absolute -bottom-4 -right-4 w-20 h-20 border-b-4 border-r-4 border-[#B8960C]/60 rounded-br-xl pointer-events-none"></div>
            </div>

            {/* RIGHT — Text Content */}
            <div className="order-1 lg:order-2 lg:pl-8">
              <p className="text-xs font-sans uppercase tracking-[0.3em] text-[#B8960C] mb-4 font-bold">The Journey</p>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#2D6A2D] font-bold leading-tight mb-6">
                Our <em className="text-[#B8960C] not-italic">Experience</em>
              </h2>

              {/* Gold accent line */}
              <div className="flex items-center gap-2 mb-8">
                <div className="w-16 h-1 bg-[#B8960C]"></div>
                <div className="w-2 h-2 rounded-full bg-[#B8960C]"></div>
              </div>

              <div className="space-y-6 text-base font-sans text-gray-700 leading-relaxed mb-10">
                <p>At TCTE, every visitor becomes part of the tea making process.</p>
                <p>From plucking leaves and rolling your own tea, to crafting a personalised blend with herbs and flavours, the experience is designed to be immersive, educational, and unforgettable.</p>
                <p>Whether you have 30 minutes or two hours, you walk away with a deeper appreciation of the craftsmanship behind Ceylon Tea and a blend you can call your own.</p>
              </div>

              <button
                onClick={() => setWaModalOpen(true)}
                className="inline-block bg-[#2D6A2D] text-white px-10 py-4 text-xs font-sans font-bold uppercase tracking-[0.15em] hover:bg-[#1A3D1A] transition-all rounded-sm shadow-md cursor-pointer"
              >
                Explore Experiences
              </button> 
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof / Reviews Section */}
      <section className="py-24 px-8 bg-[#F9F6F0]">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <p className="text-xs font-sans uppercase tracking-[0.3em] text-[#B8960C] mb-3 font-bold">Guest Experiences</p>
          <h2 className="text-4xl md:text-5xl font-serif text-[#2D6A2D] font-bold mb-6">Loved by Visitors Worldwide</h2>
          
          {/* Aggregate Rating Badge */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-8">
            <div className="flex items-center gap-1 text-[#B8960C]">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-base font-sans font-bold text-[#1A3D1A]">
              5.0 Rating based on <span className="underline decoration-[#B8960C] cursor-pointer p-1.5">1000+ reviews</span>
            </p>
            <div className="flex gap-3 ml-2">
             
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white rounded-2xl p-8 border border-gray-100 shadow-lg hover:-translate-y-1 transition-transform duration-300">
              {/* Review Header */}
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-4">
                  <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover border-2 border-[#F9F6F0]" />
                  <div>
                    <div className="text-[#1A3D1A] text-sm font-sans font-bold">{t.name}</div>
                    <div className="text-gray-500 text-xs font-sans mt-0.5">{t.date}</div>
                  </div>
                </div>
                {/* Platform Icon indicator */}
                {t.platform === 'Google' ? (
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-xs">G</div>
                ) : (
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center text-green-700 font-bold text-xs">O</div>
                )}
              </div>
              
              {/* Star Rating */}
              <div className="flex gap-1 text-[#B8960C] mb-4">
                {[...Array(5)].map((_, starIndex) => (
                  <svg key={starIndex} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Review Text */}
              <p className="text-gray-600 text-sm font-sans leading-relaxed">"{t.text}"</p>
              
              {/* Optional role display */}
              <div className="mt-4 pt-4 border-t border-gray-100">
                <span className="text-[#B8960C] text-xs font-bold uppercase tracking-wider">{t.role}</span>
              </div>
            </div>
          ))}
        </div>

        {/* View All on Google Button */}
        <div className="text-center mt-12">
          <a 
            href="https://www.google.com/maps/place/The+Ceylon+Tea+Experience+-+Galle/@6.0383792,80.2205275,18z/data=!4m6!3m5!1s0x3ae1736b35262d13:0x993881923260c1bd!8m2!3d6.0371585!4d80.2245897!16s%2Fg%2F11ytzjgzgf?entry=ttu&g_ep=EgoyMDI2MDUwMi4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white border-2 border-[#2D6A2D] text-[#2D6A2D] px-8 py-3 text-xs font-sans font-bold uppercase tracking-wider hover:bg-[#2D6A2D] hover:text-white transition rounded-sm shadow-sm"
          >
            <svg className="w-5 h-5" viewBox="0 0 48 48">
              <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/>
              <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/>
              <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/>
              <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"/>
            </svg>
            Read All Reviews on Google
          </a>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 relative cta-bg">
        <div className="absolute inset-0 bg-[#1A3D1A]/85"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center px-8">
          <p className="text-xs font-sans uppercase tracking-[0.3em] text-[#B8960C] mb-4 font-bold">Begin Your Journey</p>
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight">
            Ready to Discover<br />Ceylon Tea?
          </h2>
          <p className="text-gray-200 mb-10 text-base font-sans max-w-lg mx-auto leading-relaxed">
            CONNECT · TASTE · EXPLORE<br />
            Your journey into Sri Lanka's most iconic heritage begins here.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <button onClick={() => setWaModalOpen(true)} className="bg-[#B8960C] text-white px-10 py-4 text-sm font-sans font-bold uppercase tracking-wider hover:bg-[#9a7d0a] transition rounded-sm shadow-lg">
              Book Your Experience
            </button>
            <button onClick={() => navigate('contact')} className="border-2 border-white text-white px-10 py-4 text-sm font-sans font-bold uppercase tracking-wider hover:bg-white/10 transition rounded-sm">
              Contact Us
            </button>
          </div>
          <div className="flex flex-wrap justify-center gap-8 text-white/80 text-xs font-sans font-bold uppercase tracking-wider">
            <span className="flex items-center gap-2">⭐ 5-Star Rated</span>
            <span className="flex items-center gap-2">👥 1000+ Happy Guests</span>
          </div>
        </div>
      </section>
      <div className="fixed bottom-8 right-8 z-50">
        <WhatsAppFloatingButton />
      </div>

      {/* Shared WhatsApp Inquiry Modal — opens from any "Book"/"Explore" button */}
      <WhatsAppInquiryModal isOpen={waModalOpen} onClose={() => setWaModalOpen(false)} />

      <Footer navigate={navigate} />
    </div>
  )
}

// -------------------------------------------------------------
// Side-by-side Image Carousel for "Our Experience" section
// -------------------------------------------------------------
function ExperienceImageCarousel({ images }) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full">
      <div className="relative w-full aspect-[4/5] md:aspect-[5/6] overflow-hidden rounded-2xl shadow-2xl border-4 border-white">
        {images.map((item, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              i === activeIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <img
              src={item.src}
              className="w-full h-full object-cover"
              alt={item.caption || `Experience Slide ${i + 1}`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A3D1A]/90 via-[#1A3D1A]/20 to-transparent"></div>
            
            {/* Image Caption overlay */}
            {item.caption && (
              <div className="absolute bottom-12 left-6 right-6 text-center z-20">
                <p className="text-white text-lg md:text-xl font-serif font-bold drop-shadow-md tracking-wide">
                  {item.caption}
                </p>
              </div>
            )}
          </div>
        ))}

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`transition-all duration-300 rounded-full ${
                i === activeIndex
                  ? "w-8 h-2 bg-[#B8960C]"
                  : "w-2 h-2 bg-white/70 hover:bg-white"
              }`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>

        <div className="absolute top-6 right-6 z-20 bg-[#1A3D1A]/60 backdrop-blur-md text-white text-xs font-sans font-bold tracking-wider px-4 py-2 rounded-full border border-white/20 shadow-md">
          {String(activeIndex + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}
        </div>
      </div>
    </div>
  );
}



// -------------------------------------------------------------
// Rotating Cards — Coverflow 3D Carousel
// -------------------------------------------------------------
function RotatingCards({ cards }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  const CARD_W = 180
  const CARD_H = 280

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
        height: `${CARD_H + 80}px`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        perspective: '1000px',
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

        const translateX = offset * 110; 
        const translateZ = absOffset * -150;
        const rotateY = isActive ? 0 : offset < 0 ? 45 : -45;
        const scale = isActive ? 1.1 : 0.85;
        const zIndex = 10 - absOffset;
        const opacity = isActive ? 1 : 1 - (absOffset * 0.3);

        return (
          <div
            key={i}
            onClick={() => setActiveIndex(i)}
            style={{
              position: 'absolute',
              width: `${CARD_W}px`,
              height: `${CARD_H}px`,
              borderRadius: '20px',
              overflow: 'hidden',
              border: isActive ? '2px solid #B8960C' : '1px solid rgba(255,255,255,0.18)',
              boxShadow: isActive ? '0 25px 50px rgba(0,0,0,0.8)' : '0 10px 30px rgba(0,0,0,0.4)',
              transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
              zIndex: zIndex,
              opacity: opacity,
              cursor: 'pointer',
              transition: 'all 0.6s cubic-bezier(0.25, 1, 0.5, 1)',
            }}
          >
            <img
              src={card.img}
              alt={card.label}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block'
              }}
            />

            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(to top, rgba(26,61,26,0.95) 0%, rgba(26,61,26,0.3) 50%, transparent 100%)',
            }} />

            <div style={{
              position: 'absolute', bottom: '18px', left: '18px', right: '18px',
            }}>
              <div style={{
                color: '#F9F6F0',
                fontSize: '18px',
                fontWeight: '800',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                lineHeight: 1.2,
                marginBottom: '8px',
                fontFamily: "'Playfair Display', serif",
                textShadow: '0 2px 8px rgba(0,0,0,0.8)',
              }}>
                {card.label}
              </div>
              <div style={{
                color: '#B8960C',
                fontSize: '11px',
                fontFamily: "'Lato', sans-serif",
                letterSpacing: '0.02em',
                lineHeight: 1.4,
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
                fontWeight: 'bold'
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