import Nav from '../components/Nav'
import Footer from '../components/Footer'
import WhatsAppFloatingButton from '../components/WhatsAppFloatingButton';

export default function AboutPage({ navigate }) {
  return (
    <div className="min-h-screen bg-[#fcfbf8] font-sans text-gray-800 selection:bg-[#1b3b22] selection:text-white">
      <Nav navigate={navigate} currentPage="about" />

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://ceylon-tea-experience-media.s3.us-east-1.amazonaws.com/images/11.jpeg" 
            alt="Ceylon Tea Garden" 
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1A3D1A]/80 to-black/50"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto text-center px-6">
          <span className="inline-block text-[#c8a951] text-xs font-semibold tracking-[0.4em] uppercase mb-9 relative drop-shadow-md">
            <span className="absolute -left-12 top-1/2 w-8 h-[1px] bg-[#c8a951]"></span>
            BRAND HERITAGE
            <span className="absolute -right-12 top-1/2 w-8 h-[1px] bg-[#c8a951]"></span>
          </span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 tracking-tight leading-tight drop-shadow-lg">
            About The Ceylon Tea<br className="hidden md:block"/> Experience
          </h1>
          {/* <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-black text-white mb-10 drop-shadow-2xl tracking-wide">
            About The Ceylon Tea Experience
          </h1> */}
          
          <div className="max-w-3xl mx-auto text-white/90 text-lg md:text-xl leading-relaxed font-light drop-shadow-md">
            <p>
              The Ceylon Tea Experience (TCTE) is a flagship experiential cafe concept designed to showcase the heritage, 
              craftsmanship, and diversity of Sri Lanka's tea culture.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section - Updated with Narrative */}
      <section className="py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto text-center text-[#4a5d4e] text-base md:text-lg leading-relaxed space-y-6 mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-[#1b3b22] mb-6 font-bold">
              Bringing the Highlands <span className="text-[#a67c00]">to the Coast</span>
            </h2>
            <p>
              For over a century, the complete story of Ceylon Tea has been hidden away in the central highlands. The Ceylon Tea Experience (TCTE) was born from a simple yet ambitious vision to bring the authentic, artisanal tea making process directly to the cultural heart of the South.
            </p>
            <p>
              Located in Galle one of the country's most visited tourist cities TCTE brings together interactive learning, artisanal tea making, and modern cafe hospitality in one beautifully curated space. It is not just about drinking tea it is about experiencing the soul of Sri Lanka.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 max-w-5xl mx-auto ">
            <div className="mt-0 md:mt-12">
              <img
                src="https://ceylon-tea-experience-media.s3.us-east-1.amazonaws.com/images/11.jpeg"
                alt="Tea Estate"
                className="w-full h-[400px] object-cover rounded-sm shadow-lg hover:scale-[1.02] transition-transform duration-500 "
              />
            </div>
            <div>
              <img
                src="https://ceylon-tea-experience-media.s3.us-east-1.amazonaws.com/images/21.webp"
                alt="Tea Making"
                className="w-full h-[400px] object-cover rounded-sm shadow-lg hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
          </div>

          <div className="max-w-4xl mx-auto mt-20 p-10 md:p-16 bg-white border border-[#eae0d5] shadow-sm relative text-center">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#fcfbf8] px-4">
              <p className="text-xs uppercase tracking-[0.3em] text-[#a67c00] font-semibold">Our Purpose Is Simple</p>
            </div>
            <p className="font-serif text-[#1b3b22] text-2xl md:text-4xl leading-tight italic">
              "To give every traveler the chance to truly experience Ceylon Tea - not just taste it."
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="relative py-28 px-6 md:px-12 lg:px-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://ceylon-tea-experience-media.s3.us-east-1.amazonaws.com/my_images/my+08.jpg" 
            alt="Tea Leaves Philosophy" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#1b3b22]/85 backdrop-blur-[1px]"></div> 
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            
            {/* Title Column */}
            <div className="lg:sticky lg:top-32">
              <h2 className="text-4xl md:text-6xl font-serif text-white mb-6 leading-tight">
                The TCTE<br/>
                <span className="text-[#a67c00]">Philosophy</span>
              </h2>
              <div className="w-20 h-[2px] bg-[#a67c00] mb-6"></div>
              <p className="text-xs text-gray-300 tracking-[0.3em] uppercase font-bold">
                Guiding Our Journey
              </p>
            </div>

            {/* Mission & Vision Cards */}
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Vision Card */}
              <div className="bg-white/5 backdrop-blur-md border border-white/10 p-10 rounded-2xl hover:bg-white/10 transition-all duration-500 group shadow-2xl">
              
                <h3 className="text-3xl font-serif text-white mb-6">Our Vision</h3>
                <p className="text-gray-200 text-lg leading-relaxed font-light">
                  To become Sri Lanka's most <span className="text-[#a67c00] font-medium underline underline-offset-4 decoration-1">iconic tea experience brand</span>  connecting global travelers to the story, soul, and flavours of Ceylon Tea.
                </p>
              </div>

              {/* Mission Card */}
              <div className="bg-white/5 backdrop-blur-md border border-white/10 p-10 rounded-2xl hover:bg-white/10 transition-all duration-500 group shadow-2xl">
                
                <h3 className="text-3xl font-serif text-white mb-6">Our Mission</h3>
                <ul className="space-y-6 text-gray-200 font-light">
                  <li className="flex items-start gap-4">
                    <span className="text-[#a67c00] text-xl mt-1">🌿</span> 
                    <span className="text-lg">Redefine tea tourism through <span className="text-white font-medium">immersive, hands-on</span> experiences.</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-[#a67c00] text-xl mt-1">📍</span> 
                    <span className="text-lg">Showcase regional diversity in one <span className="text-white font-medium">accessible destination</span>.</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-[#a67c00] text-xl mt-1">☕</span> 
                    <span className="text-lg">Elevate global perception through <span className="text-white font-medium">storytelling</span>.</span>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Awards & Certifications Strip (NEW) */}
      <section className="py-10 px-8 bg-white border-b border-[#eae0d5]">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-center items-center gap-10 md:gap-20 text-[#1b3b22] text-center">

          {/* ICON 2: TripAdvisor Recognized */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-[#00aa6c] rounded-full flex items-center justify-center shadow">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
            <div className="text-left">
              <span className="block text-xs font-bold tracking-widest uppercase">TripAdvisor</span>
              <span className="block text-[10px] text-gray-500 uppercase">Recognized</span>
            </div>
          </div>

          {/* ICON 3: 5-Star Rated Experience */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-[#fcfbf8] rounded-full flex items-center justify-center shadow border border-[#eae0d5] text-[#a67c00]">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            </div>
            <div className="text-left">
              <span className="block text-xs font-bold tracking-widest uppercase">5-Star Rated</span>
              <span className="block text-[10px] text-gray-500 uppercase">Experience</span>
            </div>
          </div>
          
        </div>
      </section>

      {/* Who We Are (Updated with Team/Founder Info) */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#fcfbf8] overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <div className="w-full lg:w-1/2 relative">
            <img
              src="https://ceylon-tea-experience-media.s3.us-east-1.amazonaws.com/images/owner.jpeg"
              alt="Tea Artisan & Founder"
              className="w-full h-[600px] object-cover rounded-sm shadow-lg"
              style={{ objectPosition: 'center 25%' }}
            />
            <div className="hidden md:block absolute -bottom-10 -right-10 bg-white p-6 shadow-xl border border-[#eae0d5] max-w-sm">
              <p className="text-xs uppercase tracking-wider text-[#a67c00] mb-3">Our Core Belief</p>
              <p className="text-xl font-serif italic text-[#1b3b22]">
                "Don't just drink Ceylon Tea — experience it."
              </p>
            </div>
            
          </div>

          <div className="w-full lg:w-1/2">
            <p className="text-xs uppercase tracking-[0.3em] text-[#a67c00] mb-4 font-semibold">The Curator</p>
            <h2 className="text-4xl md:text-5xl font-serif text-[#1b3b22] mb-6">Meet the Man Behind This</h2>
            <p className="text-[#4a5d4e] text-lg leading-relaxed mb-8">
              The Ceylon Tea Experience was founded by <b className="font-serif">Pasindu Peiris</b>, a tea manufacturing specialist with over a decade of experience in Sri Lanka’s tea industry. With a background in engineering and strong exposure to tea factory operations, he has worked extensively on 
              improving quality and processes across different stages of tea manufacturing.
            </p>
            <p className="text-[#4a5d4e] text-lg leading-relaxed mb-8">
              Through this journey, he developed a deep understanding of how Ceylon tea is crafted and what defines its character. The vision behind TCTE was to give tourists a true taste of Ceylon tea showcasing teas grown in every corner of Sri Lanka within a short span of 
              time, while allowing guests to make, explore, and create their own tea.
            </p>
          </div>
        </div>
      </section>

      {/* Location Section - Updated with Map & Directions */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-white border-t border-[#eae0d5]">
        <div className="max-w-7xl mx-auto text-center mb-16">
           <p className="text-xs uppercase tracking-[0.3em] text-[#a67c00] mb-4 font-semibold">Visit Us</p>
           <h2 className="text-4xl md:text-5xl font-serif text-[#1b3b22] mb-6">Our Location</h2>
           <p className="max-w-2xl mx-auto text-[#4a5d4e] text-lg leading-relaxed">
             Perfectly positioned on Sri Lanka's Southern Coast, our experience center sits just minutes from the UNESCO World Heritage site of Galle Fort and within easy reach of the region's most loved beach destinations Unawatuna, Hikkaduwa, and Ahangama making it the ideal stop on your coastal journey.
           </p>
        </div>

        <div className="max-w-5xl mx-auto relative">
          <div className="relative h-[450px] shadow-lg border border-[#eae0d5] rounded-sm overflow-hidden z-0">
            <iframe
              src="https://maps.google.com/maps?q=The+Ceylon+Tea+Experience+-+Galle,+146A+Sea+Street,+Galle&t=&z=15&ie=UTF8&iwloc=&output=embed" 
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="TCTE Location Map"
              className="grayscale contrast-125 opacity-90"
            ></iframe>
          </div>
          
          {/* Get Directions Button / Info Box */}
          <div className="md:absolute -bottom-8 left-1/2 md:-translate-x-1/2 mt-8 md:mt-0 bg-white px-8 py-6 shadow-xl border border-[#eae0d5] z-10 flex flex-col md:flex-row items-center gap-6 rounded-sm">
            <div className="flex items-center gap-4">
              <span className="text-[#a67c00] text-2xl">📍</span>
              <div className="text-left">
                <p className="font-serif text-[#1b3b22] text-xl font-bold">Sea Street, Galle</p>
                <p className="text-[10px] text-gray-500 uppercase tracking-[0.2em] mt-1">Heart of the Southern Coast</p>
              </div>
            </div>
            <div className="hidden md:block w-[1px] h-10 bg-gray-200"></div>
            <a 
              href="https://www.google.com/maps/dir/6.9828608,79.9309824/The+Ceylon+Tea+Experience+-+Galle,+146A+Sea+Street,+Galle+80000/@6.5205877,79.7683967,10z/data=!4m10!4m9!1m1!4e1!1m5!1m1!1s0x3ae1736b35262d13:0x993881923260c1bd!2m2!1d80.2245868!2d6.0371747!3e0?entry=ttu&g_ep=EgoyMDI2MDQyOC4wIKXMDSoASAFQAw%3D%3D" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#1b3b22] text-white px-8 py-3 text-xs font-bold uppercase tracking-widest hover:bg-[#a67c00] transition-colors rounded-sm whitespace-nowrap"
            >
              Get Directions
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 px-6 text-center bg-[#1b3b22] overflow-hidden mt-12 md:mt-0">
        <div className="absolute inset-0 opacity-30">
          <img 
            src="https://ceylon-tea-experience-media.s3.us-east-1.amazonaws.com/my_images/my+09.jpeg" 
            alt="Texture" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <p className="text-xs uppercase tracking-[0.3em] text-[#a67c00] mb-4 font-semibold">Come See For Yourself</p>
          <h2 className="text-4xl md:text-6xl font-serif text-white mb-10 text-center">Experience the Heritage</h2>
          <button
            onClick={() => navigate('services')}
            className="bg-[#a67c00] text-white px-10 py-4 text-sm font-semibold uppercase tracking-[0.2em] hover:bg-[#856300] transition-colors duration-300 rounded-sm shadow-lg"
          >
            Explore Our Experiences
          </button>
        </div>
      </section>
      <div className="fixed bottom-8 right-8 z-50">
        <WhatsAppFloatingButton />
      </div>
              
      <Footer navigate={navigate} />
    </div>
  )
}