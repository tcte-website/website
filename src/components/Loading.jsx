import React, { useState, useEffect } from 'react';

export default function Loading() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 2800;
    const intervalTime = 35;
    const step = 100 / (duration / intervalTime);

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + step;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

  const currentProgress = Math.min(Math.round(progress), 100);

  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#1A3D1A] overflow-hidden">

      {/* Background Glow */}
      <div
        className="tea-glow absolute w-[380px] h-[380px] rounded-full pointer-events-none top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{ background: 'radial-gradient(circle, rgba(184,150,12,0.25) 0%, transparent 70%)' }}
      />

      {/* Corner Leaf — Top Left */}
      <svg
        className="absolute opacity-[0.08] top-[18px] left-[18px] -rotate-[30deg]"
        width="60" height="60" viewBox="0 0 24 24" fill="#B8960C"
      >
        <path d="M21.04 3.19C21.04 3.19 14.88 1.95 8.12 8.71C1.36 15.47 2.96 20.81 2.96 20.81C2.96 20.81 8.3 22.41 15.06 15.65C21.82 8.89 21.04 3.19 21.04 3.19Z" />
      </svg>

      {/* Corner Leaf — Bottom Right */}
      <svg
        className="absolute opacity-[0.08] bottom-[18px] right-[18px] rotate-[150deg]"
        width="60" height="60" viewBox="0 0 24 24" fill="#B8960C"
      >
        <path d="M21.04 3.19C21.04 3.19 14.88 1.95 8.12 8.71C1.36 15.47 2.96 20.81 2.96 20.81C2.96 20.81 8.3 22.41 15.06 15.65C21.82 8.89 21.04 3.19 21.04 3.19Z" />
      </svg>

      {/* Logo Section */}
      <div className="relative w-[170px] h-[170px] flex items-center justify-center mb-7 ">

        {/* Outer Spinning Ring */}
        <div
          className="tea-ring-outer absolute w-[170px] h-[170px] rounded-full"
          style={{ border: '1.5px dashed rgba(184,150,12,0.38)' }}
        />

        {/* Inner Reverse Spinning Ring */}
        <div
          className="tea-ring-inner absolute w-[138px] h-[138px] rounded-full"
          style={{ border: '1px dashed rgba(184,150,12,0.25)' }}
        />

        {/* Steam Lines */}
        <div
          className="absolute flex gap-[6px] z-[3]"
          style={{ bottom: 'calc(50% + 40px)', left: '50%', transform: 'translateX(-50%)' }}
        >
          <div className="tea-steam w-[3px] h-[22px] rounded bg-[rgba(249,246,240,0.5)]" style={{ animationDelay: '0s' }} />
          <div className="tea-steam w-[3px] h-[18px] rounded bg-[rgba(249,246,240,0.5)]" style={{ animationDelay: '0.4s' }} />
          <div className="tea-steam w-[3px] h-[14px] rounded bg-[rgba(249,246,240,0.5)]" style={{ animationDelay: '0.8s' }} />
        </div>

        {/* Logo Image */}
        <div className="tea-logo-float relative z-[2] w-[160px] h-[160px] flex items-center justify-center">
          <img
            src="https://ceylon-tea-experience-media.s3.us-east-1.amazonaws.com/images/logo.webp"
            alt="Ceylon Tea Experience"
            className="w-[140px] h-[140px] object-contain"
            style={{ filter: 'drop-shadow(0 0 14px rgba(184,150,12,0.6))' }}
          />
        </div>
      </div>

      {/* Title */}
      <h1 className="relative z-[2] font-serif text-[26px] font-bold text-[#F9F6F0] tracking-[0.06em] text-center px-4 mb-[6px]">
        The Ceylon Tea Experience
      </h1>

      {/* Subtitle */}
      <p className="relative z-[2] text-[11px] font-bold tracking-[0.22em] uppercase text-[#B8960C] text-center mb-7">
        Brewing Excellence…
      </p>

      {/* Progress Bar */}
      <div
        className="relative z-[2] w-[280px] h-[3px] rounded-full overflow-hidden mb-[10px]"
        style={{ background: 'rgba(255,255,255,0.1)' }}
      >
        <div
          className="tea-bar-fill h-full rounded-full relative transition-[width] duration-[80ms] linear"
          style={{
            width: `${currentProgress}%`,
            background: 'linear-gradient(90deg, #B8960C, #FFE066, #B8960C)',
            backgroundSize: '200% 100%',
          }}
        >
          {/* Glowing Tip */}
          <div
            className="absolute top-0 right-0 h-full w-4"
            style={{ background: 'rgba(255,255,255,0.55)', filter: 'blur(2px)' }}
          />
        </div>
      </div>

      {/* Percentage */}
      <span
        className="relative z-[2] text-[11px] font-bold tracking-[0.15em] mb-7"
        style={{ color: 'rgba(249,246,240,0.7)' }}
      >
        {currentProgress}%
      </span>

      {/* Dots */}
      <div className="relative z-[2] flex gap-[10px]">
        <span className="tea-dot inline-block w-[6px] h-[6px] rounded-full bg-[#B8960C]" style={{ animationDelay: '0s' }} />
        <span className="tea-dot inline-block w-[6px] h-[6px] rounded-full bg-[#B8960C]" style={{ animationDelay: '0.18s' }} />
        <span className="tea-dot inline-block w-[6px] h-[6px] rounded-full bg-[#B8960C]" style={{ animationDelay: '0.36s' }} />
      </div>

      {/* Custom Keyframe Animations */}
      <style>{`
        @keyframes spin-cw {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes spin-ccw {
          from { transform: rotate(0deg); }
          to   { transform: rotate(-360deg); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-8px); }
        }
        @keyframes steam {
          0%   { transform: translateY(0) scaleX(1);       opacity: 0.7; }
          50%  { transform: translateY(-18px) scaleX(1.3); opacity: 0.4; }
          100% { transform: translateY(-32px) scaleX(0.8); opacity: 0;   }
        }
        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }
        @keyframes dot-bounce {
          0%, 100% { transform: translateY(0);    opacity: 0.5; }
          50%       { transform: translateY(-6px); opacity: 1;   }
        }
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.2;  transform: translate(-50%, -50%) scale(1);    }
          50%       { opacity: 0.35; transform: translate(-50%, -50%) scale(1.08); }
        }
        .tea-ring-outer { animation: spin-cw    6s   linear      infinite; }
        .tea-ring-inner { animation: spin-ccw   8s   linear      infinite; }
        .tea-logo-float { animation: float      3.5s ease-in-out infinite; }
        .tea-steam      { animation: steam      2s   ease-out    infinite; }
        .tea-bar-fill   { animation: shimmer    1.8s linear      infinite; }
        .tea-dot        { animation: dot-bounce 1.4s ease-in-out infinite; }
        .tea-glow       { animation: pulse-glow 3s   ease-in-out infinite; }
      `}</style>
    </div>
  );
}


// import React, { useState, useEffect } from 'react';

// export default function Loading() {
//   const [progress, setProgress] = useState(0);

//   // Simulate loading progress from 0 to 100
//   useEffect(() => {
//     const duration = 2500; // Total loading time in milliseconds
//     const intervalTime = 30;
//     const step = 100 / (duration / intervalTime);

//     const timer = setInterval(() => {
//       setProgress((prev) => {
//         if (prev >= 100) {
//           clearInterval(timer);
//           return 100;
//         }
//         return prev + step;
//       });
//     }, intervalTime);

//     return () => clearInterval(timer);
//   }, []);

//   const currentProgress = Math.min(Math.round(progress), 100);

//   return (
//     <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#1A3D1A] overflow-hidden">
      
//       {/* Background Soft Glow Effect */}
//       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#B8960C] rounded-full blur-[120px] opacity-20 pointer-events-none"></div>

//       {/* Animated Icon Section */}
//       <div className="relative flex items-center justify-center mb-10">
//         {/* Outer Spinning Dashed Ring */}
//         <svg className="absolute w-28 h-28 animate-[spin_4s_linear_infinite] text-[#B8960C]/30" viewBox="0 0 100 100" fill="none">
//           <circle cx="50" cy="50" r="48" stroke="currentColor" strokeWidth="1" strokeDasharray="10 5" />
//         </svg>
        
//         {/* Inner Reverse Spinning Ring */}
//         <svg className="absolute w-24 h-24 animate-[spin_5s_linear_infinite_reverse] text-[#B8960C]/40" viewBox="0 0 100 100" fill="none">
//           <circle cx="50" cy="50" r="42" stroke="currentColor" strokeWidth="1" strokeDasharray="20 10 5 10" />
//         </svg>

//         {/* Premium Tea Leaf Icon */}
//         <div className="text-[#B8960C] z-10 animate-pulse drop-shadow-[0_0_15px_rgba(184,150,12,0.6)]">
//           <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
//             <path d="M21.04 3.19C21.04 3.19 14.88 1.95 8.12 8.71C1.36 15.47 2.96 20.81 2.96 20.81C2.96 20.81 8.3 22.41 15.06 15.65C21.82 8.89 21.04 3.19 21.04 3.19ZM11.14 16.51L6.19 21.46L4.78 20.05L9.73 15.1C9.73 15.1 8.01 13.56 8.08 11.39L12.44 15.75C10.27 15.82 11.14 16.51 11.14 16.51Z"/>
//           </svg>
//         </div>
//       </div>

//       {/* Main Text Content */}
//       <h1 className="text-[#F9F6F0] font-serif text-3xl md:text-4xl font-bold tracking-wide mb-3 drop-shadow-lg text-center px-4">
//         The Ceylon Tea Experience
//       </h1>
//       <p className="text-[#B8960C] font-sans text-xs md:text-sm font-bold tracking-[0.2em] uppercase mb-12 animate-pulse text-center">
//         Brewing Excellence...
//       </p>

//       {/* Progress Bar Section */}
//       <div className="w-64 md:w-80 flex flex-col items-center">
//         {/* Loading Bar Track */}
//         <div className="w-full h-[3px] bg-white/10 rounded-full overflow-hidden relative backdrop-blur-sm">
//           {/* Animated Loading Fill */}
//           <div
//             className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#B8960C] to-[#FFE066] rounded-full transition-all ease-out"
//             style={{ width: `${currentProgress}%`, transitionDuration: '100ms' }}
//           >
//             {/* Glowing tip at the end of the bar */}
//             <div className="absolute top-0 right-0 h-full w-4 bg-white/60 blur-[2px]"></div>
//           </div>
//         </div>

//         {/* Percentage Counter */}
//         <span className="text-[#F9F6F0]/80 font-sans text-xs font-bold tracking-widest mt-4">
//           {currentProgress}%
//         </span>
//       </div>

//       {/* Animated Bottom Dots */}
//       <div className="absolute bottom-12 flex gap-3">
//         <span 
//           className="w-2 h-2 rounded-full bg-[#B8960C] opacity-80" 
//           style={{ animation: 'bounce 1.5s infinite ease-in-out', animationDelay: '0s' }}
//         ></span>
//         <span 
//           className="w-2 h-2 rounded-full bg-[#B8960C] opacity-80" 
//           style={{ animation: 'bounce 1.5s infinite ease-in-out', animationDelay: '0.2s' }}
//         ></span>
//         <span 
//           className="w-2 h-2 rounded-full bg-[#B8960C] opacity-80" 
//           style={{ animation: 'bounce 1.5s infinite ease-in-out', animationDelay: '0.4s' }}
//         ></span>
//       </div>

//     </div>
//   );
// }