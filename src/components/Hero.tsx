import React from 'react';
import { ArrowRight } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-primary-50/50">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary-100/40 to-transparent -z-10 hidden lg:block"></div>
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-yellow-200 rounded-full blur-3xl opacity-30 -z-10"></div>
      
      <div className="container mx-auto px-6 flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
        
        {/* Text Content */}
        <div className="flex-1 text-center lg:text-left space-y-6">
          <div className="inline-block px-4 py-1.5 bg-white border border-primary-200 rounded-full text-primary-700 text-sm font-semibold tracking-wide uppercase mb-2 shadow-sm">
            Available for freelance & remote roles
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold heading-serif text-slate-900 leading-tight">
            Creative <span className="text-primary-500">Social Media</span> Manager
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            {PERSONAL_INFO.tagline} I help brands grow, engage, and convert through storytelling and visual excellence.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
            <a 
              href="#portfolio" 
              className="px-8 py-4 bg-slate-900 text-white rounded-full font-semibold hover:bg-slate-800 transition-all flex items-center justify-center gap-2 group shadow-xl shadow-slate-900/10"
            >
              View My Work
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href={PERSONAL_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white text-slate-800 border-2 border-slate-200 rounded-full font-semibold hover:border-primary-400 hover:text-primary-600 transition-colors shadow-sm"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
        
        {/* Image Content */}
        <div className="flex-1 w-full max-w-md lg:max-w-xl relative">
          <div className="relative aspect-square">
            {/* Abstract Organic Shape Background */}
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] text-primary-200 -z-10 opacity-70">
              <path fill="currentColor" d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,81.6,-46.6C91.4,-34.1,98.1,-19.2,95.8,-5.3C93.5,8.6,82.2,21.5,70.6,31.7C59,41.9,47.1,49.5,35.2,56.7C23.3,63.9,11.4,70.7,-1.5,73.3C-14.4,75.9,-25.7,74.3,-36.8,67.6C-47.9,60.9,-58.8,49.1,-67.2,36.2C-75.6,23.3,-81.5,9.3,-80.4,-4.1C-79.3,-17.5,-71.2,-30.3,-60.9,-40.1C-50.6,-49.9,-38.1,-56.7,-25.6,-64.8C-13.1,-72.9,-0.6,-82.3,13.2,-84.6C27,-86.9,41,-82.1,44.7,-76.4Z" transform="translate(100 100)" />
            </svg>
            
            {/* Image Container with Custom Shape */}
            <div className="w-full h-full rounded-[2rem] overflow-hidden border-4 border-white shadow-2xl relative">
              <img 
                src="/Grace.jpg" 
                alt="Grace Kazeem" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              
              {/* Floating Badge */}
              <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg max-w-[150px] animate-bounce-slow">
                <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">Experience</p>
                <p className="text-2xl font-bold text-primary-600 heading-serif">3+ Years</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;