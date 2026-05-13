import React from 'react';

export default function Footer({ navigate }) {
  return (
    <footer className="bg-[#1A3D1A] text-gray-300 pt-16 pb-4 px-8 text-sm font-sans">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* Brand & Location Info */}
        <div>
          <h3 className="text-xl font-serif text-[#B8960C] font-bold mb-4 leading-tight">
            THE CEYLON TEA<br />EXPERIENCE
          </h3>
          <p className="mb-6 text-xs leading-relaxed text-gray-400">
            Artisanal Tea Excellence.<br />Rooted in the Southern Coast of Sri Lanka.
          </p>
          
          {/* Find Us / Map Section */}
          <div>
            <h4 className="text-white font-bold mb-3 uppercase text-[10px] tracking-widest">Find Us</h4>
            <p className="text-xs mb-2">Galle, Sri Lanka</p>
            <a 
              href="https://www.google.com/maps/place/The+Ceylon+Tea+Experience+-+Galle/data=!4m7!3m6!1s0x3ae1736b35262d13:0x993881923260c1bd!8m2!3d6.0371585!4d80.2245897!16s%2Fg%2F11ytzjgzgf!19sChIJEy0mNWtz4ToRvcFgMpKBOJk?authuser=0&hl=en&rclk=1" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-1.5 text-[#B8960C] hover:text-white transition text-xs font-bold uppercase tracking-wider"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              View on Google Maps
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-bold mb-5 uppercase text-[10px] tracking-widest">Quick Links</h4>
          <ul className="space-y-3 text-xs">
            {['home','about','services','gallery','contact'].map(p => (
              <li key={p}>
                <button onClick={() => navigate(p)} className="hover:text-[#B8960C] transition capitalize">
                  {p === 'home' ? 'Home' : p.charAt(0).toUpperCase() + p.slice(1)}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Policies */}
        <div>
          <h4 className="text-white font-bold mb-5 uppercase text-[10px] tracking-widest">Policies</h4>
          <ul className="space-y-3 text-xs">
            {[
              { path: 'privacy', label: 'Privacy Policy' },
              { path: 'refund', label: 'Refund Policy' },
              { path: 'terms', label: 'Terms & Conditions' }
            ].map((policy) => (
              <li key={policy.path}>
                <button 
                  onClick={() => navigate(policy.path)} 
                  className="hover:text-[#B8960C] transition cursor-pointer text-left"
                >
                  {policy.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact & Socials */}
        <div>
          <h4 className="text-white font-bold mb-5 uppercase text-[10px] tracking-widest">Contact Us</h4>
          <ul className="space-y-5 text-xs mb-8">
            <li>
              {/* Corrected Phone Number Link */}
              <a href="tel:+94702900500" className="flex items-center gap-2 hover:text-[#B8960C] transition-colors">
                <svg className="w-4 h-4 text-[#B8960C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                (+94) 70 290 0500
              </a>
            </li>
            
            {/* Labelled Emails */}
            <li>
              <span className="block text-white font-bold mb-1">General Inquiries:</span>
              <a href="mailto:info@ceylonteaexperience.com" className="hover:text-[#B8960C] transition-colors break-words">
                info@ceylonteaexperience.com
              </a>
            </li>
            <li>
              <span className="block text-white font-bold mb-1">Reservations:</span>
              <a href="mailto:reservations@theceylonteaexperience.com" className="hover:text-[#B8960C] transition-colors break-words">
                reservations@theceylonteaexperience.com
              </a>
            </li>
            {/* Added Website Link */}
            <li>
              <span className="block text-white font-bold mb-1">Website:</span>
              <a href="https://www.theceylonteaexperience.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#B8960C] transition-colors break-words">
                www.theceylonteaexperience.com
              </a>
            </li>
          </ul>

          {/* Social Media Icons */}
          <h4 className="text-white font-bold mb-4 uppercase text-[10px] tracking-widest">Follow Us</h4>
          <div className="flex gap-4">
            <a href="https://www.instagram.com/theceylonteaexperience?igsh=dDhtdXIwbzM0OGRh" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-[#B8960C] transition-colors" aria-label="Instagram">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
            <a href="https://www.facebook.com/theceylonteaexperience?rdid=CssqTtbequqvomYQ&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1C8jGDQwgq%2F#" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-[#B8960C] transition-colors" aria-label="Facebook">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="https://www.tiktok.com/@theceylonteaexper?_r=1&_t=ZS-92jKpR4JwXa" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-[#B8960C] transition-colors" aria-label="TikTok">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
              </svg>
            </a>
          </div>
        </div>

      </div>
      
      {/* Copyright */}
      <div className="max-w-md mx-auto text-center mt-4 pt-4 border-t border-gray-700/50 text-[10px] tracking-widest uppercase text-gray-500">
        © {new Date().getFullYear()} EXPACE PVT LTD. All rights reserved. 
      </div>
    </footer>
  )
}