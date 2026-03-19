"use client";

import React from "react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      {/* Header */}
      <header className="flex h-24 items-center justify-between px-6 lg:px-24 bg-white">
        <div className="flex items-center gap-4">
          <div className="relative h-14 w-14">
            <svg viewBox="0 0 100 100" className="h-full w-full text-[#1a365d]">
              <path
                d="M50 5 L90 25 L90 75 L50 95 L10 75 L10 25 Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="5"
              />
              <path
                d="M30 40 L50 30 L70 40 L70 60 L50 70 L30 60 Z"
                fill="currentColor"
              />
            </svg>
          </div>
          <div className="flex flex-col justify-center">
            <span className="text-2xl font-black tracking-tight text-[#1a365d] leading-none">MODERN AMINOS</span>
            <span className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.25em] mt-2 whitespace-nowrap">QUALITY PRODUCTS WITH QUALITY SERVICE</span>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-12">
          <a href="#" className="px-6 py-2 rounded-full bg-[#f0f7fb] text-[#1a4a6e] font-bold text-sm tracking-wide shadow-sm">Home</a>
          <a href="#" className="text-gray-500 hover:text-[#1a365d] font-bold text-sm tracking-wide transition-colors">Contact Us</a>
        </nav>

        <div className="flex items-center">
          <button className="text-gray-300 hover:text-[#1a365d] transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
          </button>
        </div>
      </header>

      {/* Sticky Bar */}
      <div className="bg-[#004a77] text-white py-3 text-center text-[13px] font-bold tracking-widest uppercase">
        Login for the full experience. - For laboratory research use only. Not for human consumption.
      </div>

      {/* Hero Section Container */}
      <main className="p-4 lg:p-8 bg-white">
        <div className="rounded-[50px] overflow-hidden min-h-[650px] relative flex flex-col md:flex-row items-center px-8 lg:px-24 py-20 gap-16 bg-[#0b1e2b]">
          
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
             <Image 
               src="/bg.png" 
               alt="Background" 
               fill 
               className="object-cover opacity-30 mix-blend-overlay scale-110"
               priority
             />
             <div className="absolute inset-0 bg-gradient-to-r from-[#0b1e2b] via-transparent to-transparent pointer-events-none"></div>
          </div>

          {/* Left Content */}
          <div className="flex-1 text-white z-10 max-w-2xl">
            <h1 className="text-6xl lg:text-[5.5rem] font-black mb-10 leading-[1] tracking-tight">
              Thank you for Visiting <br /> Modern Aminos
            </h1>
            <p className="text-gray-300 text-lg lg:text-xl mb-10 leading-relaxed max-w-xl opacity-80">
              At Modern Aminos, we are committed to maintaining a highly compliant and researcher-friendly experience. To support this commitment, we now require researchers to log in to their user account in order to view our full selection of research materials. If you do not have an existing account with us please register below.
            </p>
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl mb-12 max-w-xl backdrop-blur-md">
               <p className="text-[13px] text-gray-400 leading-relaxed italic">
                 <strong className="text-white uppercase tracking-widest text-[11px] block mb-3 not-italic">Please be advised:</strong> 
                 All compounds and research materials provided by Modern Aminos are strictly for laboratory and research use only. They are not approved for human consumption by the Food and Drug Administration (FDA). These products should not be used for any form of in vivo experimentation or for any other non-laboratory purpose. By purchasing these products, you acknowledge that they will be used exclusively within a controlled and qualified research environment.
               </p>
            </div>
            <button className="border-2 border-white py-4 px-12 rounded-lg font-black hover:bg-white hover:text-[#0b1e2b] transition-all text-sm uppercase tracking-[0.2em] shadow-2xl active:scale-95">
              Register Now
            </button>
          </div>

          {/* Right Content - Login Form */}
          <div className="w-full md:w-[500px] z-10">
            <div className="bg-[#122a3a]/40 backdrop-blur-2xl border border-white/10 p-12 lg:p-14 rounded-[3rem] text-white shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)]">
              <h2 className="text-5xl font-black mb-12 tracking-tight">Login</h2>
              
              <form className="space-y-8">
                <div>
                  <label className="block text-[11px] font-bold mb-3 text-gray-400 uppercase tracking-[0.15em]">Username or email address *</label>
                  <input 
                    type="text" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-4.5 px-6 focus:outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all font-medium text-lg"
                  />
                </div>
                
                <div>
                  <label className="block text-[11px] font-bold mb-3 text-gray-400 uppercase tracking-[0.15em]">Password *</label>
                  <input 
                    type="password" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-4.5 px-6 focus:outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all font-medium text-lg"
                  />
                </div>

                <div className="flex items-center gap-4">
                  <input type="checkbox" id="remember" className="w-6 h-6 rounded bg-white/5 border-white/10 accent-blue-500 cursor-pointer" />
                  <label htmlFor="remember" className="text-sm text-gray-300 font-bold cursor-pointer tracking-wide">Remember Me</label>
                </div>

                <button className="w-full bg-[#007bff] hover:bg-[#0069d9] py-5 rounded-full font-black transition-all text-xs uppercase tracking-[0.25em] shadow-xl shadow-blue-500/30 active:scale-95">
                  Log In
                </button>

                <div className="flex justify-between items-center text-xs text-gray-400 mt-2 px-1">
                  <a href="#" className="hover:text-white transition-colors underline underline-offset-4">Lost your password?</a>
                  <a href="#" className="hover:text-white transition-colors font-bold text-gray-300">Register</a>
                </div>

                <div className="relative py-4 flex items-center">
                  <div className="flex-grow border-t border-white/5"></div>
                  <span className="flex-shrink mx-4 text-[10px] text-gray-500 uppercase tracking-widest">Or continue with</span>
                  <div className="flex-grow border-t border-white/5"></div>
                </div>

                <div className="grid grid-cols-1 gap-4">
                  <button className="w-full bg-white text-black py-3.5 rounded-lg flex items-center justify-center gap-3 font-bold text-sm transition-all hover:bg-gray-100 active:scale-95">
                    <svg className="w-5 h-5" viewBox="0 0 24 24">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                    Google
                  </button>
                  <button className="w-full bg-[#2f2f2f] text-white py-3.5 rounded-lg flex items-center justify-center gap-3 font-bold text-sm transition-all hover:bg-[#3f3f3f] active:scale-95 border border-white/5">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M11.4 24H0V12.6h11.4V24zM24 24H12.6V12.6H24V24zM11.4 11.4H0V0h11.4v11.4zM24 11.4H12.6V0H24v11.4z"/>
                    </svg>
                    Microsoft
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Floating Cart Button */}
          <div className="absolute bottom-6 right-6 z-20">
            <button className="bg-[#004a77] text-white p-4 rounded-full shadow-xl relative group">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/><line x1="12" y1="9" x2="16" y2="9"/><line x1="14" y1="7" x2="14" y2="11"/></svg>
              <span className="absolute -top-1 -right-1 bg-white text-black text-[10px] font-bold h-5 w-5 rounded-full flex items-center justify-center border-2 border-[#004a77]">0</span>
            </button>
          </div>
        </div>
      </main>

      {/* Guarantee Section */}
      <section className="py-24 px-6 lg:px-24 bg-[#f8fbff]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-black text-center text-[#0b1e2b] mb-20 tracking-tight leading-tight">
            The Modern Aminos Guarantee
          </h2>
          
          <div className="flex flex-col lg:flex-row items-center gap-20">
            {/* Left: Lab Image */}
            <div className="flex-1 w-full relative">
              <div className="relative aspect-[3/2] overflow-hidden rounded-[3rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.15)] bg-white p-2">
                <Image 
                  src="/guarantee.png" 
                  alt="Laboratory Scene" 
                  fill 
                  className="object-cover rounded-[2.5rem]"
                />
              </div>
            </div>

            {/* Right: Content */}
            <div className="flex-1 space-y-10">
              <h3 className="text-3xl font-black text-[#0b1e2b] tracking-tight">
                3rd Party Multi Vial Batch Tested
              </h3>
              <p className="text-gray-500 leading-relaxed text-xl font-medium opacity-80">
                At Modern Aminos, we prioritize the <span className="text-[#0b1e2b] font-black">quality and authenticity</span> of every product we offer. Each product undergoes third-party, multi-vial batch testing to verify purity, compound identity, quantity, and endotoxin levels. In addition to this rigorous testing process, every vial includes a unique batch number, allowing you to directly match your product to its corresponding laboratory testing report.
              </p>
              <p className="text-[#1a4a6e] font-black text-xl">
                Login for the full experience.
              </p>
              <button className="bg-[#1a4a6e] hover:bg-[#133854] text-white py-4 px-12 rounded-full font-black transition-all shadow-xl shadow-blue-900/10 active:scale-95 text-xs uppercase tracking-[0.2em]">
                Login
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Service Section */}
      <section className="py-24 px-6 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-20">
            {/* Right: Microscope Image */}
            <div className="flex-1 w-full relative">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[3rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.15)] bg-white p-2">
                <Image 
                  src="/service.png" 
                  alt="Microscope Scene" 
                  fill 
                  className="object-cover rounded-[2.5rem]"
                />
              </div>
            </div>

            {/* Left: Content */}
            <div className="flex-1 space-y-10">
              <h2 className="text-4xl lg:text-5xl font-black text-[#0b1e2b] leading-tight tracking-tight">
                Customer Service and Experience Always Comes First
              </h2>
              <p className="text-gray-500 leading-relaxed text-xl font-medium opacity-80">
                We understand that even though high quality research materials allows for the best most reliable results in laboratory settings, things like slow shipping, and poor customer service can make already tedious research more of a headache. That is why here at <span className="text-[#0b1e2b] font-black">Modern Aminos</span> our customer service and shipping teams work around the clock to ensure that you are getting your material fast, and any shipping related inquiries handled.
              </p>
              <p className="text-[#1a4a6e] font-black text-xl">
                Login for the full experience.
              </p>
              <button className="bg-[#1a4a6e] hover:bg-[#133854] text-white py-4 px-12 rounded-full font-black transition-all shadow-xl shadow-blue-900/10 active:scale-95 text-xs uppercase tracking-[0.2em]">
                Login
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-28 px-6 lg:px-24 bg-[#f8fbff]">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <div className="bg-[#004a77] text-white px-8 py-2.5 rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-8 shadow-lg shadow-blue-900/20">
            Frequently Asked Questions
          </div>
          <h2 className="text-6xl font-black text-[#0b1e2b] mb-16 tracking-tight">Need Help?</h2>
          
          <div className="w-full bg-white rounded-[3rem] overflow-hidden shadow-2xl border border-gray-100">
            <div className="bg-[#0b1e2b] text-white py-6 px-10 text-center font-black uppercase tracking-[0.25em] text-xs">
              General Questions
            </div>
            
            <div className="p-10 space-y-5">
              {[
                "Do you ship internationally?",
                "Why do I need an account to view the site?",
                "How long do orders take to arrive?",
                "I think my package may be lost, or I'm having an order issue, what should I do?"
              ].map((question, index) => (
                <div 
                  key={index}
                  className="bg-[#0b1e2b] text-white p-6 rounded-full flex items-center justify-between cursor-pointer hover:bg-[#163447] transition-all group active:scale-[0.99] shadow-lg"
                >
                  <span className="text-[15px] font-bold ml-6 tracking-wide">{question}</span>
                  <div className="mr-4 h-8 w-8 rounded-full border border-white/20 flex items-center justify-center group-hover:border-white transition-all group-hover:bg-white/10 translate-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-[#0b1e2b] text-white pt-24 pb-12 px-6 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-20">
            {/* Column 1: Logo & Tagline */}
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="relative h-12 w-12">
                  <svg viewBox="0 0 100 100" className="h-full w-full text-white">
                    <path
                      d="M50 5 L90 25 L90 75 L50 95 L10 75 L10 25 Z"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="5"
                    />
                    <path
                      d="M30 40 L50 30 L70 40 L70 60 L50 70 L30 60 Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <span className="text-2xl font-black tracking-tight">MODERN AMINOS</span>
              </div>
              <p className="text-[17px] text-white/90 max-w-[320px] leading-snug font-medium">
                Quality products and exceptional service are very important to us
              </p>
            </div>

            {/* Column 2: Links */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                <h4 className="font-bold text-xl text-white mb-6">Contact Us</h4>
                <a href="mailto:cs@modernaminos.com" className="text-white hover:text-blue-400 transition-colors text-base font-medium flex items-center gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                  cs@modernaminos.com
                </a>

                <div className="mt-12">
                  <h4 className="font-bold text-xl text-white mb-6">Quick Links</h4>
                  <ul className="space-y-4 text-base font-medium text-white">
                    <li><a href="#" className="hover:text-blue-400 transition-colors">Home</a></li>
                    <li><a href="#" className="hover:text-blue-400 transition-colors">Contact us</a></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Column 3: Subscribe */}
            <div className="space-y-8">
              <h4 className="font-bold text-2xl tracking-tight">Subscribe now to save 15%</h4>
              <p className="text-base text-white/80 leading-snug font-medium">
                Subscribe and Get Exclusive Updates Straight to your Inbox for Free
              </p>
              <div className="flex bg-[#1a2e3d] rounded-full overflow-hidden border border-white/20 p-1 shadow-inner max-w-md">
                <input 
                  type="email" 
                  placeholder="Email" 
                  className="bg-transparent border-none py-3 px-6 flex-1 focus:outline-none text-base font-medium placeholder:text-gray-400"
                />
                <button className="bg-white text-[#0b1e2b] px-10 py-3 rounded-full font-black text-sm flex items-center gap-3 hover:bg-gray-100 transition-all active:scale-90 shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="rotate-45 -translate-y-0.5"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                  Send
                </button>
              </div>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="pt-16 pb-16 text-center">
            <p className="text-[14px] text-white/50 max-w-5xl mx-auto leading-relaxed font-medium">
              Please be advised: All compounds and research materials provided by Modern Aminos are strictly for laboratory and research use only. They are not approved for human consumption by the Food and Drug Administration (FDA). These products should not be used for any form of in vivo experimentation or for any other non-laboratory purpose. By purchasing these products, you acknowledge that they will be used exclusively within a controlled and qualified research environment.
            </p>
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-[14px] font-medium text-white/60">
            <p>Copyright 2026, All Rights Reserved.</p>
            <div className="flex gap-10 mt-6 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Refund Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
