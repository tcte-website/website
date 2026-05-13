import React from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { 
  ClipboardList, UserCheck, Share2, 
  Lock, Cookie, FileEdit, Mail, Shield, ShieldCheck 
} from 'lucide-react'; 

const sections = [
  {
    icon: <ClipboardList size={22} />,
    title: 'Information We Collect',
    items: [
      'Personal identification information (name, email, and phone number) provided voluntarily.',
      'Payment and billing information securely handled by trusted third-party processors.',
      'Booking details including preferred dates, guest count, and special requirements.',
      'Automatically collected browsing info like IP address and device type using cookies.',
    ],
  },
  {
    icon: <UserCheck size={22} />,
    title: 'Use of Information',
    items: [
      'To process and manage your tea experience reservations.',
      'To provide customer support and respond to your inquiries effectively.',
      'To personalize your journey and present relevant recommendations.',
      'To detect and prevent fraud or unauthorized activities on our platform.',
    ],
  },
  {
    icon: <Share2 size={22} />,
    title: 'Information Sharing',
    items: [
      'Trusted service providers who assist in booking management and payments.',
      'Legal disclosure if required by law or valid legal orders.',
      'We never sell or trade your personal data to third parties without consent.',
    ],
  },
  {
    icon: <Lock size={22} />,
    title: 'Data Security',
    items: [
      'Industry-standard encryption and security protocols to protect your data.',
      'Regular monitoring to prevent unauthorized access or disclosure.',
      'While we strive for absolute security, no internet transmission is 100% risk-free.',
    ],
  },
  {
    icon: <Cookie size={22} />,
    title: 'Cookies & Tracking',
    items: [
      'We use cookies to enhance your browsing experience and analyze site traffic.',
      'You can disable cookies in settings, though some features may be limited.',
    ],
  },
  {
    icon: <FileEdit size={22} />,
    title: 'Policy Updates',
    items: [
      'We reserve the right to modify this Privacy Policy at any time.',
      'Updates will be posted here with a revised "last updated" date.',
    ],
  },
];

export default function PrivacyPolicy({ navigate }) {
  return (
    <div className="min-h-screen bg-[#fcfcf9] font-sans selection:bg-[#8d8b4e] selection:text-white">
      <Nav navigate={navigate} />

      {/* Hero Section - Updated to match the Refund Policy colors */}
      <div className="relative pt-32 pb-24 px-8 overflow-hidden bg-gradient-to-r from-[#5c5d31] via-[#6e6f3b] to-[#5c5d31]">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[80%] rounded-full bg-[#828045] blur-[120px] opacity-30" />
          <div className="absolute -bottom-[20%] -right-[10%] w-[40%] h-[70%] rounded-full bg-[#464724] blur-[100px] opacity-20" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center mt-8">
          <div className="flex justify-center mb-6 text-white/90">
            <Shield size={36} strokeWidth={1.5} />
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 tracking-tight drop-shadow-sm">
            Privacy Policy
          </h1>
          <div className="w-24 h-[2px] bg-white/40 mx-auto mb-6 rounded-full" />
          <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-light">
            Your privacy is important to us. Learn how we collect, use, and protect your information.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 -mt-12 pb-24 relative z-20">
        
        {/* Commitment Statement  */}
        <div className="bg-white/80 backdrop-blur-md border border-white rounded-3xl p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] mb-16 flex flex-col md:flex-row items-center gap-8 relative">
            <div className="w-20 h-20 rounded-2xl bg-[#f4f4ee] flex items-center justify-center text-[#8d8b4e] shrink-0 shadow-inner">
                <ShieldCheck size={40} />
            </div>
            <div>
                <p className="text-gray-700 text-lg md:text-xl leading-relaxed italic max-w-4xl">
                    "We are committed to protecting the privacy and security of our customers. By using our website, you consent to the safe data practices described in this policy."
                </p>
            </div>
        </div>

        {/* Dynamic Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {sections.map((section) => (
            <div 
              key={section.title} 
              className="break-inside-avoid bg-white border border-gray-100 rounded-[2rem] p-8 shadow-sm hover:shadow-xl hover:shadow-[#8d8b4e]/10 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#f4f4ee] group-hover:bg-[#8d8b4e] text-[#8d8b4e] group-hover:text-white flex items-center justify-center mb-6 transition-all shadow-inner">
                {section.icon}
              </div>
              <h2 className="text-xl font-bold text-gray-900 mb-6 font-serif underline decoration-[#8d8b4e]/30 decoration-4 underline-offset-4 group-hover:text-[#595a30] transition-colors">
                {section.title}
              </h2>
              <ul className="space-y-4">
                {section.items.map((item, i) => (
                  <li key={i} className="text-sm text-gray-500 leading-relaxed list-disc list-inside marker:text-[#8d8b4e] group-hover:text-gray-700 transition-colors">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Secure Contact Footer */}
        <div className="mt-20 bg-[#595a30] rounded-[3rem] p-10 md:p-16 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none">
              <Mail size={200} className="text-[#a4a25c]" />
            </div>
            
            <div className="relative z-10">
                <h2 className="text-3xl font-serif font-bold text-white mb-4">Privacy Concerns?</h2>
                <p className="text-gray-200 mb-10 max-w-md mx-auto font-light">
                Our Data Protection Officer is here to help with any questions regarding your personal information.
                </p>
                <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                <a 
                    href="mailto:info@ceylonteaexperience.com" 
                    className="flex items-center gap-3 bg-[#8d8b4e] hover:bg-white text-white hover:text-[#595a30] px-10 py-4 rounded-full font-bold transition-all shadow-lg"
                >
                    <Mail size={18} />
                    Contact Support
                </a>
                <span className="text-gray-300 hidden md:block">or</span>
                
                <a 
                    href="mailto:info@ceylonteaexperience.com"
                    className="text-white font-medium hover:text-gray-200 transition-colors hover:underline underline-offset-4"
                >
                    info@ceylonteaexperience.com
                </a>
                </div>
            </div>
        </div>
      </div>

      <Footer navigate={navigate} />
    </div>
  );
}