import React from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { Mail, RefreshCcw, Calendar, Clock, ArrowLeftCircle } from 'lucide-react';

const sections = [
  {
    icon: <RefreshCcw size={24} />,
    title: 'Refunds',
    items: [
      'Requests have to be sent by email to reservations@theceylonteaexperience.com',
      'Refunds will be only made for requests made 7 days prior to the booked date.',
      'If your request is approved, we will initiate a refund to your original method of payment.',
      'Please note that the refund amount will exclude any taxes and charges incurred during the initial purchase.',
    ],
  },
  {
    icon: <Calendar size={24} />,
    title: 'Change of Dates',
    items: [
      'Changing of dates can be only done 7 days prior to the booked date.',
      'All date changes are subject to availability.',
    ],
  },
  {
    icon: <Clock size={24} />,
    title: 'Processing Time',
    items: [
      'Refunds will be processed within 3 business days after we receive your request.',
      'Booking reference should be clearly mentioned in your request.',
    ],
  },
];

export default function RefundPolicy({ navigate }) {
  return (
    <div className="min-h-screen bg-[#fcfcf9] font-sans selection:bg-[#8d8b4e] selection:text-white">
      <Nav navigate={navigate} />

      {/* Modern Hero Section - Updated Darker Colors */}
      <div className="relative pt-32 pb-20 px-8 overflow-hidden bg-gradient-to-r from-[#5c5d31] via-[#6e6f3b] to-[#5c5d31]">
        {/* Animated Background Gradients */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[80%] rounded-full bg-[#828045] blur-[120px] opacity-30" />
          <div className="absolute -bottom-[20%] -right-[10%] w-[40%] h-[70%] rounded-full bg-[#464724] blur-[100px] opacity-20" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center h-[300px]">
          <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-white/90 text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-sm">
            Customer Care
          </span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 tracking-tight drop-shadow-sm">
            Refund <span className="text-white/80 italic font-light">Policy</span>
          </h1>
          <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-light">
            Clear, transparent guidelines for your bookings. We ensure your peace of mind is as premium as our tea.
          </p>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="max-w-6xl mx-auto px-6 -mt-10 pb-24 relative z-20">
        
        {/* Intro Card - Glassmorphism style */}
        <div className="bg-white/80 backdrop-blur-md border border-white rounded-3xl p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] mb-12 flex flex-col md:flex-row items-center gap-8">
            <div className="w-20 h-20 rounded-2xl bg-[#f4f4ee] flex items-center justify-center text-[#8d8b4e] shrink-0 shadow-inner">
                <ArrowLeftCircle size={40} />
            </div>
            <div>
                <p className="text-gray-700 text-lg leading-relaxed italic">
                    "Thank you for choosing The Ceylon Tea Experience. We value your trust and strive to provide you with the most authentic journey possible. If things don't go as planned, we're here to help."
                </p>
            </div>
        </div>

        {/* Policy Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {sections.map((section) => (
            <div 
              key={section.title} 
              className="group bg-white border border-gray-100 rounded-3xl p-8 shadow-sm hover:shadow-xl hover:shadow-[#8d8b4e]/10 hover:-translate-y-2 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#8d8b4e] text-white flex items-center justify-center mb-8 shadow-lg shadow-[#8d8b4e]/20 group-hover:scale-110 transition-transform">
                {section.icon}
              </div>
              <h2 className="text-xl font-bold text-gray-900 mb-6 group-hover:text-[#595a30] transition-colors">{section.title}</h2>
              <ul className="space-y-4">
                {section.items.map((item, i) => (
                  <li key={i} className="flex gap-3 text-[14px] text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#8d8b4e] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Modern Contact Card */}
        <div className="bg-[#595a30] rounded-[2rem] p-8 md:p-12 relative overflow-hidden shadow-2xl">
          <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none">
            <Mail size={200} className="text-[#a4a25c]" />
          </div>
          
          <div className="relative z-10 grid md:grid-cols-2 items-center gap-12">
            <div>
              <h2 className="text-3xl font-serif font-bold text-white mb-4">Still have questions?</h2>
              <p className="text-gray-200 leading-relaxed mb-6 font-light">
                Our support team is dedicated to ensuring your experience is seamless. Feel free to reach out for any clarifications.
              </p>
            </div>
            <div className="flex flex-col md:items-end">
              <a 
                href="mailto:reservations@theceylonteaexperience.com" 
                className="group flex items-center gap-4 bg-[#8d8b4e] hover:bg-white text-white hover:text-[#595a30] px-8 py-4 rounded-full font-bold transition-all duration-300 shadow-xl"
              >
                <Mail size={20} />
                <span>Contact Support</span>
              </a>
                <a 
                href="mailto:reservations@theceylonteaexperience.com" 
                className="mt-4 text-gray-300 text-sm hover:text-white transition-colors block"
                >
                reservations@theceylonteaexperience.com
                </a>
            </div>
          </div>
        </div>
      </div>

      <Footer navigate={navigate} />
    </div>
  );
}