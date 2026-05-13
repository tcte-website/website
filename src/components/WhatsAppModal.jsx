import { useState } from 'react';

// Shared modal component — can be triggered from anywhere
export function WhatsAppInquiryModal({ isOpen, onClose }) {
  const phoneNumber = '94702900500';
  
  const inquiryOptions = [
    {
      icon: '🍃',
      title: 'Hand-Made Tea & Tasting',
      desc: '60-min guided hands-on session',
      message: "Hi TCTE! I'm interested in the Hand-Made Tea & Tasting experience. Could you please share available time slots, pricing, and what the session includes?"
    },
    {
      icon: '🌱',
      title: 'Plantation Tour',
      desc: 'Walk through Ceylon\'s tea heritage',
      message: "Hi TCTE! I'd love to book a Plantation Tour. Could you share available dates, tour duration, pricing, and what the experience covers?"
    },
    {
      icon: '🌿',
      title: 'Build Your Own Tea (BYOT)',
      desc: 'Create your personalised blend',
      message: "Hi TCTE! I'm interested in the Build Your Own Tea (BYOT) experience. Please share how it works, available slots, and pricing."
    },
    {
      icon: '📚',
      title: 'The Tea Library',
      desc: 'Explore & purchase our tea collection',
      message: "Hi TCTE! I'd like to explore The Tea Library. Could you share what teas are currently available, pricing, and how I can visit or browse the collection?"
    },
    {
      icon: '📦',
      title: 'E-Commerce & Delivery',
      desc: 'Order Ceylon tea — local or worldwide',
      message: "Hi TCTE! I'd like to order Ceylon tea for delivery. Could you share your available products, delivery options, and shipping costs to my location?"
    },
    {
      icon: '👥',
      title: 'Workshops & Groups',
      desc: 'Corporate, schools & private groups',
      message: "Hi TCTE! I'd like to inquire about a group or workshop booking. Please share available packages, group size options, pricing, and available dates."
    },
  ];

  const handleOptionClick = (message) => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <>
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[60] flex items-end sm:items-center justify-center p-4 animate-fadeIn"
        onClick={onClose}
      >
        <div 
          className="bg-white rounded-2xl shadow-2xl w-full max-w-md max-h-[85vh] overflow-hidden flex flex-col animate-slideUp"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="bg-[#25D366] text-white p-6 flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
                </svg>
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold">Hi! Welcome to TCTE 🍃</h3>
                <p className="text-white/90 text-xs mt-1">Which experience can we help you with?</p>
              </div>
            </div>
            <button 
              onClick={onClose}
              className="text-white/80 hover:text-white text-2xl leading-none"
            >
              ×
            </button>
          </div>

          {/* Options List */}
          <div className="overflow-y-auto p-3 flex-1">
            {inquiryOptions.map((option, i) => (
              <button
                key={i}
                onClick={() => handleOptionClick(option.message)}
                className="w-full flex items-center gap-4 p-4 hover:bg-[#F9F6F0] rounded-xl transition-all text-left group border border-transparent hover:border-[#25D366]/30 mb-1"
              >
                <div className="text-3xl flex-shrink-0">{option.icon}</div>
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-[#1A3D1A] text-sm">{option.title}</p>
                  <p className="text-gray-500 text-xs mt-0.5">{option.desc}</p>
                </div>
                <svg className="w-5 h-5 text-gray-400 group-hover:text-[#25D366] flex-shrink-0 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                </svg>
              </button>
            ))}
          </div>

          {/* Footer */}
          <div className="p-4 bg-gray-50 border-t border-gray-100 text-center">
            <p className="text-xs text-gray-500">
              Typically replies within <strong className="text-[#1A3D1A]">30 minutes</strong> · 9 AM – 7 PM IST
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-fadeIn { animation: fadeIn 0.2s ease-out; }
        .animate-slideUp { animation: slideUp 0.3s ease-out; }
      `}</style>
    </>
  );
}