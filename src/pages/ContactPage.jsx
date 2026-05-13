import { useState } from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { FiMapPin, FiPhone, FiMail, FiGlobe, FiClock } from 'react-icons/fi';
import WhatsAppFloatingButton from '../components/WhatsAppFloatingButton';
import { WhatsAppInquiryModal } from '../components/WhatsAppModal';

export default function ContactPage({ navigate }) {
  const [form, setForm] = useState({ name: '', email: '', date: '', type: 'Private Tasting Event', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [waModalOpen, setWaModalOpen] = useState(false);

  // Format date for readable display in WhatsApp message
  const formatDate = (dateString) => {
    if (!dateString) return 'Not specified'
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Format the WhatsApp message with all form details
    const message = `Hi TCTE! 🍃

I'd like to make an inquiry. Here are my details:

*Full Name:* ${form.name}
*Email:* ${form.email}
*Date of Visit:* ${formatDate(form.date)}
*Inquiry Type:* ${form.type}

*Message:*
${form.message}

Looking forward to your response. Thank you!`

    // Encode the message for URL
    const encodedMessage = encodeURIComponent(message)
    
    // WhatsApp number (no + or spaces)
    const phoneNumber = '94702900500'
    
    // Open WhatsApp with pre-filled message in a new tab
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank')
    
    // Show thank-you confirmation
    setSubmitted(true)
    
    // Reset form after a brief delay
    setTimeout(() => {
      setForm({ name: '', email: '', date: '', type: 'Private Tasting Event', message: '' })
    }, 1000)
  }

  return (
    <div className="min-h-screen font-sans text-gray-900 bg-[#fdfdfc] relative">
      <Nav navigate={navigate} currentPage="contact" />

      {/* Hero - SECTION UNCHANGED AS REQUESTED */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://ceylon-tea-experience-media.s3.us-east-1.amazonaws.com/images/22.webp" 
            alt="Ceylon Tea Garden" 
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto text-center px-6">
          <span className="inline-block text-[#c8a951] text-xs font-semibold tracking-[0.4em] uppercase mb-9 relative drop-shadow-md">
            <span className="absolute -left-12 top-1/2 w-8 h-[1px] bg-[#c8a951]"></span>
            BEGIN YOUR JOURNEY
            <span className="absolute -right-12 top-1/2 w-8 h-[1px] bg-[#c8a951]"></span>
          </span>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-black text-white mb-10 drop-shadow-2xl tracking-wide">
            Contact Us
          </h1>
          
          <div className="max-w-3xl mx-auto text-white/90 text-lg md:text-xl leading-relaxed font-light drop-shadow-md">
            <p>
              Connect with us for bespoke bookings, immersive group experiences, 
              creative collaborations, or to begin your tea journey.
            </p>
          </div>
        </div>
      </section>

      {/* Beautiful Info Cards Section */}
      <section className="py-20 px-8 relative z-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 -mt-32">
            {[
              { icon: FiMapPin, title: 'Location', detail: '146A, Sea Street Galle, Sri Lanka', link: 'https://www.google.com/maps?ll=6.031208,80.221283&z=15&t=m&hl=en-US&gl=US&mapclient=embed&q=The+Ceylon+Tea+Experience+-+Galle,+146A+Sea+Street,+Galle', isLongText: false },
              { icon: FiPhone, title: 'Phone', detail: '(+94) 70 290 0500', link: 'tel:+94702900500', isLongText: false },
              { icon: FiMail, title: 'Email', detail: 'info@ceylonteaexperience.com', link: 'mailto:info@ceylonteaexperience.com', isLongText: true },
              { icon: FiGlobe, title: 'Website', detail: 'www.theceylonteaexperience.com', link: 'https://www.theceylonteaexperience.com', isLongText: true },
              { icon: FiClock, title: 'Opening Hours', detail: 'Daily – 9.00 AM to 7.00 PM', link: null, isLongText: false }
            ].map((item, idx) => {
              const CardWrapper = item.link ? 'a' : 'div';

              return (
                <CardWrapper 
                  key={idx} 
                  href={item.link || undefined}
                  target={item.link ? "_blank" : undefined}
                  rel={item.link ? "noopener noreferrer" : undefined}
                  className={`group relative backdrop-blur-xl bg-white/70 border border-white/60 rounded-[2rem] p-8 flex flex-col items-center text-center shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(27,59,34,0.08)] hover:-translate-y-3 transition-all duration-500 overflow-hidden ${item.link ? 'cursor-pointer block' : ''}`}
                >
                  {/* Top Accent Line */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#c8a951] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                  {/* Icon Circle */}
                  <div className="w-16 h-16 bg-gradient-to-br from-white to-gray-50 rounded-full flex items-center justify-center mb-6 shadow-[inset_0_-2px_6px_rgba(0,0,0,0.03)] border border-gray-100 group-hover:border-[#c8a951]/30 group-hover:shadow-[0_0_20px_rgba(200,169,81,0.15)] group-hover:scale-110 transition-all duration-500 z-10">
                    <item.icon className="text-[26px] text-[#1a3020] group-hover:text-[#c8a951] transition-colors duration-300 drop-shadow-sm" />
                  </div>

                  {/* Text Content */}
                  <h3 className="text-[#1a3020] font-serif font-bold text-xl mb-3 tracking-wide z-10">{item.title}</h3>
                  
                  {/* Animated Divider */}
                  <div className="w-6 h-[2px] bg-[#c8a951]/40 mb-4 group-hover:w-16 transition-all duration-500 z-10"></div>
                  
                  {/* Detail Text */}
                  <p className={`text-gray-600 leading-relaxed font-light z-10 transition-colors ${item.link ? 'group-hover:text-[#c8a951]' : ''} ${item.isLongText ? 'text-[11px] sm:text-[10px] md:text-xs whitespace-nowrap' : 'text-sm break-words w-full'}`}>
                    {item.detail}
                  </p>

                  {/* Background Hover Glow */}
                  <div className="absolute inset-0 bg-gradient-to-b from-[#c8a951]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                </CardWrapper>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-4 px-4">
        <div className="max-w-6xl mx-auto bg-white rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.03)] overflow-hidden border border-gray-50">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            
            {/* Left: Enhanced Info */}
            <div className="p-12 lg:p-20 bg-[#1b3b22] text-white">
              <h2 className="text-4xl font-serif font-bold mb-8">The Ceylon Tea Experience - Galle</h2>
              <div className="space-y-10">
                {[
                  { icon: '📍', label: 'Address', value: '146A, Sea Street, Galle 80000, Sri Lanka' },
                  { icon: '✉️', label: 'Email', value: 'info@ceylonteaexperience.com' },
                  { icon: '📞', label: 'Phone', value: '(+94) 70 290 0500' }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-6 items-start">
                    <span className="text-2xl mt-1 opacity-80">{item.icon}</span>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-[#a67c00] mb-2">{item.label}</p>
                      <p className="text-lg font-light text-gray-200">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-16 pt-16 border-t border-white/10">
                <p className="text-xs font-bold uppercase tracking-widest text-[#a67c00] mb-4">Tea Tasting Hours</p>
                <div className="flex justify-between items-center text-lg font-light">
                  <span>Monday – Sunday</span>
                  <span className="font-serif italic font-bold">09:00 AM – 07:00 PM</span>
                </div>
              </div>

              <div className="mt-12">
                <p className="text-xs font-bold uppercase tracking-widest text-[#a67c00] mb-4">Follow Our Journey</p>
                <div className="flex gap-4">
                  
                  {/* Instagram */}
                  <a 
                    href="https://www.instagram.com/theceylonteaexperience?igsh=dDhtdXIwbzM0OGRh" 
                    target="_blank" 
                    rel="noreferrer" 
                    aria-label="Instagram"
                    className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#a67c00] hover:border-transparent transition-all duration-300 text-white"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  </a>

                  {/* Facebook */}
                  <a 
                    href="https://www.facebook.com/theceylonteaexperience?rdid=CssqTtbequqvomYQ&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1C8jGDQwgq%2F#" 
                    target="_blank" 
                    rel="noreferrer" 
                    aria-label="Facebook"
                    className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#a67c00] hover:border-transparent transition-all duration-300 text-white"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>

                  {/* TikTok */}
                  <a 
                    href="https://www.tiktok.com/@theceylonteaexper?_r=1&_t=ZS-92jKpR4JwXa" 
                    target="_blank" 
                    rel="noreferrer" 
                    aria-label="TikTok"
                    className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#a67c00] hover:border-transparent transition-all duration-300 text-white"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                    </svg>
                  </a>
                  
                </div>
              </div>
            </div>

            {/* Right: Modern Form (Updated with WhatsApp Submission) */}
            <div className="p-12 lg:p-20">
              <h2 className="text-4xl font-serif font-bold text-[#1b3b22] mb-3">Send an Inquiry</h2>
              <p className="text-gray-500 mb-10 leading-relaxed">Allow us to curate your perfect tea journey. Click "Send via WhatsApp" and your details will be sent directly to our team.</p>

              {submitted ? (
                <div className="bg-[#1b3b22]/5 p-12 rounded-3xl text-center border border-[#1b3b22]/10 animate-fade-in">
                  <div className="text-5xl mb-6">🍃</div>
                  <h3 className="text-2xl font-serif font-bold text-[#1b3b22] mb-3">Redirecting to WhatsApp...</h3>
                  <p className="text-gray-600 mb-6">Your details have been prepared. Please tap "Send" in WhatsApp to complete your inquiry.</p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-[#1b3b22] underline text-sm font-bold uppercase tracking-wider hover:text-[#c8a951] transition-colors"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Row 1: Name & Email */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="group">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-2 block transition-colors group-focus-within:text-[#1b3b22]">Full Name</label>
                      <input
                        type="text"
                        placeholder="Augustina Pereira"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full bg-gray-50 border-none px-6 py-4 rounded-xl focus:ring-2 focus:ring-[#1b3b22]/20 transition-all outline-none text-sm"
                      />
                    </div>
                    <div className="group">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-2 block transition-colors group-focus-within:text-[#1b3b22]">Email Address</label>
                      <input
                        type="email"
                        placeholder="you@example.com"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full bg-gray-50 border-none px-6 py-4 rounded-xl focus:ring-2 focus:ring-[#1b3b22]/20 transition-all outline-none text-sm"
                      />
                    </div>
                  </div>

                  {/* Row 2: Date of Visit & Inquiry Type */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="group">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-2 block transition-colors group-focus-within:text-[#1b3b22]">Date of Visit</label>
                      <input
                        type="date"
                        required
                        value={form.date}
                        onChange={(e) => setForm({ ...form, date: e.target.value })}
                        className="w-full bg-gray-50 border-none px-6 py-4 rounded-xl focus:ring-2 focus:ring-[#1b3b22]/20 transition-all outline-none text-sm text-gray-600"
                      />
                    </div>
                    <div className="group">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-2 block transition-colors group-focus-within:text-[#1b3b22]">Inquiry Type</label>
                      <select 
                        value={form.type}
                        onChange={(e) => setForm({ ...form, type: e.target.value })}
                        className="w-full bg-gray-50 border-none px-6 py-4 rounded-xl focus:ring-2 focus:ring-[#1b3b22]/20 transition-all outline-none text-sm appearance-none text-gray-600"
                      >
                        <option>Hand-Made Tea & Tasting</option>
                        <option>Plantation Tour</option>
                        <option>Build Your Own Tea</option>
                        <option>The Tea Library</option>
                        <option>E-Commerce & Delivery</option>
                        <option>Workshops & Groups</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="group">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-2 block transition-colors group-focus-within:text-[#1b3b22]">Your Message</label>
                    <textarea
                      rows={5}
                      placeholder="How may we assist you today?"
                      required
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full bg-gray-50 border-none px-6 py-4 rounded-xl focus:ring-2 focus:ring-[#1b3b22]/20 transition-all outline-none text-sm resize-none"
                    />
                  </div>
                  
                  {/* WhatsApp Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-[#1b3b22] text-white py-5 rounded-xl font-bold uppercase tracking-widest hover:bg-[#122917] hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
                    </svg>
                    Send Message
                  </button>


                  
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Modernized Map Section (Updated with precise location) */}
      <section className="py-24 bg-[#f8f9f7]">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <h2 className="text-4xl font-serif font-bold text-[#1b3b22] mb-3">Find Us Here</h2>
          <p className="text-gray-500 mb-12">Visit our flagship experience center in the historic city of Galle.</p>
          
          <div className="relative group max-w-5xl mx-auto">
            <div className="absolute -inset-4 bg-[#1b3b22]/5 rounded-[2.5rem] blur-xl opacity-50 group-hover:opacity-100 transition duration-1000"></div>
            <div className="relative h-[500px] rounded-[2rem] overflow-hidden shadow-2xl border border-white">
              
              <div className="w-full h-full relative group">
                <iframe
                  src="https://maps.google.com/maps?q=The+Ceylon+Tea+Experience+-+Galle,+146A+Sea+Street,+Galle&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '400px' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="The Ceylon Tea Experience Location"
                ></iframe>

                <div className="absolute bottom-6 left-6 z-10">
                  <a
                    href="https://www.google.com/maps/dir/6.9828608,79.9309824/The+Ceylon+Tea+Experience+-+Galle,+146A+Sea+Street,+Galle+80000/@6.5205877,79.7683967,10z/data=!3m1!4b1!4m10!4m9!1m1!4e1!1m5!1m1!1s0x3ae1736b35262d13:0x993881923260c1bd!2m2!1d80.2245868!2d6.0371747!3e0?entry=ttu&g_ep=EgoyMDI2MDQyOC4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#2D6A2D] text-white px-6 py-3 rounded-sm shadow-xl text-xs font-sans font-bold uppercase tracking-wider hover:bg-[#1A3D1A] transition-all flex items-center gap-2 hover:-translate-y-1"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                    Get Directions
                  </a>
                </div>
              </div>
            </div>
            
            <a 
              href="https://www.google.com/maps/place/The+Ceylon+Tea+Experience+-+Galle/data=!4m7!3m6!1s0x3ae1736b35262d13:0x993881923260c1bd!8m2!3d6.0371585!4d80.2245897!16s%2Fg%2F11ytzjgzgf!19sChIJEy0mNWtz4ToRvcFgMpKBOJk?authuser=0&hl=en&rclk=1" 
              target="_blank" 
              rel="noopener noreferrer"
              className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur px-8 py-4 rounded-full shadow-2xl flex items-center gap-3 font-bold text-[#1b3b22] hover:bg-[#1b3b22] hover:text-white transition-all duration-300 whitespace-nowrap"
            >
              📍 Open in Google Maps
            </a>
          </div>
        </div>
      </section>

      {/* High-End Bottom CTA */}
      <section className="py-24 px-8 bg-[#1a2318] text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img 
            src="https://ceylon-tea-experience-media.s3.us-east-1.amazonaws.com/my_images/my+11.jpg" 
            alt="Texture" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="max-w-3xl mx-auto relative z-10">
          <p className="text-xs uppercase tracking-[0.5em] text-[#a67c00] mb-6 font-bold">Begin Your Heritage Journey</p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#e8e4d9] mb-6">Experience the Unparalleled</h2>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-10">
           Our curators are ready to guide you through every note and aroma of Pure Ceylon Tea.
          </p>
          <button 
            onClick={() => navigate('services')}
            className="bg-[#c8a951] text-white px-10 py-4 text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-[#c8a951] transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Explore the Estates
          </button>
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

  )
}