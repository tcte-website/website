import { useState } from 'react'
import { WhatsAppInquiryModal } from './WhatsAppModal'

export default function Nav({ navigate, currentPage }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [waModalOpen, setWaModalOpen] = useState(false)

  const links = [
    { label: 'Home', key: 'home' },
    { label: 'About', key: 'about' },
    { label: 'Services', key: 'services' },
    { label: 'Gallery', key: 'gallery' },
    { label: 'Contact', key: 'contact' },
  ]

  return (
    <>
      <nav className="flex justify-between items-center px-8 py-4 bg-[#F9F6F0] border-b border-gray-200 sticky top-0 z-50">
        <div
          className="text-2xl font-serif font-bold text-[#2D6A2D] cursor-pointer flex items-center"
          onClick={() => navigate('home')}
        >
          <img
            src={`${import.meta.env.BASE_URL}logo.webp`}
            alt="Ceylon Heritage Logo"
            className="h-44 w-auto object-contain -my-16"
          />
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8 text-xs font-sans font-bold uppercase tracking-wider text-gray-600">
          {links.map((l) => (
            <li
              key={l.key}
              onClick={() => navigate(l.key)}
              className={`cursor-pointer hover:text-[#2D6A2D] transition ${
                currentPage === l.key ? 'text-[#2D6A2D] border-b-2 border-[#2D6A2D] pb-1' : ''
              }`}
            >
              {l.label}
            </li>
          ))}
        </ul>

        {/* Prominent Book Now CTA — opens WhatsApp inquiry modal */}
        <button
          onClick={() => setWaModalOpen(true)}
          className="hidden md:block bg-[#2D6A2D] text-white px-6 py-3 text-xs font-bold uppercase tracking-wider hover:bg-[#1A3D1A] transition cursor-pointer rounded-sm shadow-md"
        >
          Book Now
        </button>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-[#1A3D1A] text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? '✕' : '☰'}
        </button>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="absolute top-[100%] left-0 right-0 bg-[#F9F6F0] border-b border-gray-200 md:hidden z-50 shadow-lg">
            {links.map((l) => (
              <div
                key={l.key}
                onClick={() => { navigate(l.key); setMenuOpen(false) }}
                className="px-8 py-4 text-xs font-sans font-bold uppercase tracking-wider text-gray-600 hover:text-[#2D6A2D] hover:bg-gray-50 cursor-pointer border-b border-gray-100"
              >
                {l.label}
              </div>
            ))}
            <div className="px-8 py-6">
              {/* Mobile Book Now — also opens WhatsApp inquiry modal */}
              <button
                onClick={() => { setWaModalOpen(true); setMenuOpen(false) }}
                className="w-full bg-[#2D6A2D] text-white py-3 text-xs font-bold uppercase tracking-wider rounded-sm shadow-md"
              >
                Book Now
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Shared WhatsApp Inquiry Modal */}
      <WhatsAppInquiryModal isOpen={waModalOpen} onClose={() => setWaModalOpen(false)} />
    </>
  )
}


// import { useState } from 'react'

// export default function Nav({ navigate, currentPage }) {
//   const [menuOpen, setMenuOpen] = useState(false)

//   const links = [
//     { label: 'Home', key: 'home' },
//     { label: 'About', key: 'about' },
//     { label: 'Services', key: 'services' },
//     { label: 'Gallery', key: 'gallery' },
//     { label: 'Contact', key: 'contact' },
//   ]

//   return (
//     <nav className="flex justify-between items-center px-8 py-4 bg-[#f9f8f3] border-b border-gray-200 sticky top-0 z-50">
//       <div
//         className="text-2xl font-serif font-bold text-[#1b3b22] cursor-pointer"
//         onClick={() => navigate('home')}
//       >
//         <img
//           src={`${import.meta.env.BASE_URL}logo.webp`}
//           alt="Ceylon Heritage Logo"
//           className="h-44 w-auto object-contain -my-16"
//         />
//       </div>

//       {/* Desktop Links */}
//       <ul className="hidden md:flex gap-8 text-xs font-semibold uppercase tracking-wider text-gray-500">
//         {links.map((l) => (
//           <li
//             key={l.key}
//             onClick={() => navigate(l.key)}
//             className={`cursor-pointer hover:text-[#1b3b22] transition ${
//               currentPage === l.key ? 'text-[#a67c00]' : ''
//             }`}
//           >
//             {l.label}
//           </li>
//         ))}
//       </ul>

//       <button
//         onClick={() => navigate('contact')}
//         className="hidden md:block bg-[#1b3b22] text-white px-6 py-2 text-xs font-bold uppercase tracking-wider hover:bg-[#122917] transition cursor-pointer rounded-sm"
//       >
//         Book Experience
//       </button>

//       {/* Mobile Hamburger */}
//       <button
//         className="md:hidden text-[#1b3b22] text-2xl"
//         onClick={() => setMenuOpen(!menuOpen)}
//       >
//         {menuOpen ? '✕' : '☰'}
//       </button>

//       {/* Mobile Menu */}
//       {menuOpen && (
//         <div className="absolute top-16 left-0 right-0 bg-[#f9f8f3] border-b border-gray-200 md:hidden z-50">
//           {links.map((l) => (
//             <div
//               key={l.key}
//               onClick={() => { navigate(l.key); setMenuOpen(false) }}
//               className="px-8 py-3 text-xs font-semibold uppercase tracking-wider text-gray-600 hover:text-[#1b3b22] cursor-pointer border-b border-gray-100"
//             >
//               {l.label}
//             </div>
//           ))}
//           <div className="px-8 py-4">
//             <button
//               onClick={() => { navigate('contact'); setMenuOpen(false) }}
//               className="w-full bg-[#1b3b22] text-white py-2 text-xs font-bold uppercase tracking-wider"
//             >
//               Book Experience
//             </button>
//           </div>
//         </div>
//       )}
//     </nav>
//   )
// }