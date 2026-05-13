import React from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { 
  Globe, Tag, ShoppingCart, Coffee, 
  RotateCcw, ShieldCheck, AlertTriangle, 
  Edit3, Mail, ChevronRight 
} from 'lucide-react';

const sections = [
  {
    icon: <Globe size={22} />,
    title: 'Use of the Website',
    items: [
      'You must be at least 18 years old to use our website or make bookings. Children must be accompanied by adults during all experiences.',
      'You are responsible for maintaining the confidentiality of your account information, including your username and password.',
      'You agree to provide accurate and current information during the registration and booking process.',
      'You may not use our website for any unlawful or unauthorized purposes.',
    ],
  },
  {
    icon: <Tag size={22} />,
    title: 'Experience Information and Pricing',
    items: [
      'We strive to provide accurate experience descriptions, images, and pricing information. However, we do not guarantee the accuracy or completeness of such information.',
      'Prices are subject to change without notice. Any promotions or discounts are valid for a limited time and may be subject to additional terms and conditions.',
      'Experience availability may vary based on seasons, weather conditions, and other factors.',
    ],
  },
  {
    icon: <ShoppingCart size={22} />,
    title: 'Bookings and Payments',
    items: [
      'By placing a booking on our website, you are making an offer to reserve the selected experience.',
      'All bookings are subject to availability and confirmation. A booking is only confirmed once you receive a confirmation email from us.',
      'We reserve the right to refuse or cancel any booking for any reason, including but not limited to availability, errors in pricing, or suspected fraudulent activity.',
      'You agree to provide valid and up-to-date payment information and authorize us to charge the booking amount, including applicable taxes, to your chosen payment method.',
    ],
  },
  {
    icon: <Coffee size={22} />,
    title: 'Experience Guidelines',
    items: [
      'Please arrive at least 15 minutes before your scheduled experience time.',
      'We recommend wearing comfortable clothing and appropriate footwear for the tea experience.',
      'Any food allergies, dietary restrictions, or medical conditions should be disclosed at the time of booking.',
      'Photography is permitted for personal use during experiences unless otherwise specified.',
    ],
  },
  {
    icon: <RotateCcw size={22} />,
    title: 'Cancellations and Refunds',
    items: [
      'Our Refund Policy governs the process and conditions for cancelling bookings and seeking refunds.',
      'Cancellation requests must be submitted via email at least 7 days prior to the booked date.',
      'No-shows will not be eligible for refunds or rescheduling.',
    ],
  },
  {
    icon: <ShieldCheck size={22} />,
    title: 'Intellectual Property',
    items: [
      'All content and materials on our website, including text, images, logos, and graphics, are protected by intellectual property rights.',
      'You may not use, reproduce, distribute, or modify any content from our website without our prior written consent.',
    ],
  },
  {
    icon: <AlertTriangle size={22} />,
    title: 'Limitation of Liability',
    items: [
      'Visitors participate in all activities at their own risk. We are not liable for any injuries, accidents, or loss of personal belongings during your visit.',
      'We are not responsible for delays or cancellations due to weather conditions or other factors beyond our control.',
    ],
  },
  {
    icon: <Edit3 size={22} />,
    title: 'Amendments and Termination',
    items: [
      'We reserve the right to modify, update, or terminate these Terms and Conditions at any time without prior notice.',
      'It is your responsibility to review these terms periodically for any changes.',
    ],
  },
];

export default function TermsConditions({ navigate }) {
  return (
    <div className="min-h-screen bg-[#fcfcf9] font-sans selection:bg-[#8d8b4e] selection:text-white">
      <Nav navigate={navigate} />

      {/* Premium Hero Section - Updated to matched balanced Olive Green theme */}
      <div className="relative pt-32 pb-24 px-8 overflow-hidden bg-gradient-to-r from-[#5c5d31] via-[#6e6f3b] to-[#5c5d31]">
        <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')] opacity-10 pointer-events-none" />
            <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[80%] rounded-full bg-[#828045] blur-[120px] opacity-30" />
            <div className="absolute -bottom-[20%] -right-[10%] w-[40%] h-[70%] rounded-full bg-[#464724] blur-[100px] opacity-20" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center h-[280px]">
          <div className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-white/10 border border-white/20 text-white/90 text-[10px] font-bold tracking-[0.2em] uppercase mb-8 backdrop-blur-sm">
            <ShieldCheck size={14} /> Legal Documentation
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-8 tracking-tight leading-tight drop-shadow-sm">
            Terms <span className="text-white/80 italic font-light">&amp;</span> Conditions
          </h1>
          <div className="w-24 h-[2px] bg-white/40 mx-auto rounded-full mb-8" />
          <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-light">
            Effective as of April 2026. Please review these terms to understand your rights and responsibilities.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 -mt-12 pb-24 relative z-20">
        
        {/* Intro Banner */}
        <div className="bg-white/80 backdrop-blur-md border border-white rounded-3xl p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] mb-16 flex flex-col md:flex-row items-center gap-8 relative">
            <div className="w-20 h-20 rounded-2xl bg-[#f4f4ee] flex items-center justify-center text-[#8d8b4e] shrink-0 shadow-inner">
                <ShieldCheck size={40} />
            </div>
            <div>
                <p className="text-gray-700 text-lg md:text-xl leading-relaxed italic max-w-4xl">
                    These Terms and Conditions govern your use of <span className="text-[#8d8b4e] font-semibold not-italic">The Ceylon Tea Experience</span> website and bookings. By accessing our platform, you agree to comply with these professional standards.
                </p>
            </div>
        </div>

        {/* Dynamic Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sections.map((section, index) => (
            <div 
              key={section.title} 
              className="bg-white border border-gray-50 rounded-[2rem] p-8 md:p-10 shadow-sm hover:shadow-2xl hover:shadow-[#8d8b4e]/10 transition-all duration-500 group"
            >
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-2xl bg-[#f4f4ee] group-hover:bg-[#8d8b4e] text-[#8d8b4e] group-hover:text-white flex items-center justify-center transition-colors duration-300 shrink-0 shadow-inner">
                  {section.icon}
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-6 group-hover:text-[#595a30] transition-colors">
                    {section.title}
                  </h2>
                  <ul className="space-y-4">
                    {section.items.map((item, i) => (
                      <li key={i} className="flex gap-4 text-[14px] text-gray-500 leading-relaxed group-hover:text-gray-700 transition-colors">
                        <ChevronRight size={14} className="mt-1 text-[#8d8b4e] opacity-70 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Links Section */}
        <div className="mt-20 py-12 border-y border-gray-200 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
                <h3 className="text-xl font-serif font-bold text-gray-900">Related Policies</h3>
                <p className="text-gray-500 text-sm">Review our other legal guidelines</p>
            </div>
            <div className="flex gap-4">
                <button 
                  onClick={() => navigate('privacy')} 
                  className="px-6 py-3 rounded-xl border border-gray-200 text-gray-600 hover:bg-[#8d8b4e] hover:text-white hover:border-[#8d8b4e] transition-all font-medium text-sm"
                >
                    Privacy Policy
                </button>
                <button 
                  onClick={() => navigate('refund')} 
                  className="px-6 py-3 rounded-xl border border-gray-200 text-gray-600 hover:bg-[#595a30] hover:text-white hover:border-[#595a30] transition-all font-medium text-sm"
                >
                    Refund Policy
                </button>
            </div>
        </div>

        {/* Modern Contact Footer */}
        <div className="mt-20 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#595a30] text-white mb-6 shadow-md">
                <Mail size={24} />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 font-serif">Have legal questions?</h2>
            <p className="text-gray-500 mb-8 max-w-md mx-auto">
                If you need clarification regarding our terms, our administrative team is ready to assist.
            </p>
            <a 
                href="mailto:info@ceylonteaexperience.com" 
                className="text-lg font-semibold text-[#8d8b4e] hover:text-[#595a30] transition-colors underline underline-offset-8"
            >
                info@ceylonteaexperience.com
            </a>
        </div>
      </div>

      <Footer navigate={navigate} />
    </div>
  );
}