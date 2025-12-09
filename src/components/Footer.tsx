import React from 'react';
import { PERSONAL_INFO, SOCIALS } from '../constants';
import { Mail, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-slate-900 text-slate-300 pt-24 pb-8">
      <div className="container mx-auto px-6">
        
        <div className="flex flex-col lg:flex-row justify-between gap-16 mb-20">
          
          {/* Brand & CTA */}
          <div className="lg:w-1/3 space-y-8">
            <div className="text-3xl font-bold heading-serif text-white">
              Grace Kazeem<span className="text-primary-500">.</span>
            </div>
            <p className="text-lg leading-relaxed text-slate-400">
              Ready to elevate your brand's digital presence? Let's collaborate to create content that resonates and converts.
            </p>
            <a 
              href={`mailto:${PERSONAL_INFO.email}`}
              className="inline-block px-8 py-3 bg-primary-600 hover:bg-primary-500 text-white font-semibold rounded-lg transition-colors"
            >
              Get In Touch
            </a>
          </div>

          {/* Contact Info */}
          <div className="lg:w-1/3">
             <h4 className="text-white font-bold text-lg mb-8">Contact Information</h4>
             <div className="space-y-6">
               <div className="flex items-start gap-4">
                 <Mail className="text-primary-500 shrink-0 mt-1" />
                 <div>
                   <p className="text-sm text-slate-500 mb-1">Email Me</p>
                   <a href={`mailto:${PERSONAL_INFO.email}`} className="text-white hover:text-primary-400 transition-colors">
                     {PERSONAL_INFO.email}
                   </a>
                 </div>
               </div>
               
               <div className="flex items-start gap-4">
                 <Phone className="text-primary-500 shrink-0 mt-1" />
                 <div>
                   <p className="text-sm text-slate-500 mb-1">Call Me</p>
                   <a href={`tel:${PERSONAL_INFO.phone}`} className="text-white hover:text-primary-400 transition-colors">
                     {PERSONAL_INFO.phoneDisplay}
                   </a>
                 </div>
               </div>

               <div className="flex items-start gap-4">
                 <MapPin className="text-primary-500 shrink-0 mt-1" />
                 <div>
                   <p className="text-sm text-slate-500 mb-1">Location</p>
                   <p className="text-white">
                     {PERSONAL_INFO.location}
                   </p>
                 </div>
               </div>
             </div>
          </div>

          {/* Links */}
          <div className="lg:w-1/4">
             <h4 className="text-white font-bold text-lg mb-8">Quick Links</h4>
             <ul className="space-y-4">
               {['Home', 'About', 'Experience', 'Portfolio'].map(item => (
                 <li key={item}>
                   <a href={`#${item.toLowerCase()}`} className="hover:text-primary-400 transition-colors">
                     {item}
                   </a>
                 </li>
               ))}
               <li>
                 <a href={PERSONAL_INFO.cvLink} target="_blank" rel="noopener noreferrer" className="hover:text-primary-400 transition-colors">
                   View Resume
                 </a>
               </li>
             </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Grace Kazeem. All rights reserved.
          </p>
          
          <div className="flex gap-4">
            {SOCIALS.map((social) => (
              <a 
                key={social.name}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-primary-600 hover:text-white transition-all"
                aria-label={social.name}
              >
                <social.icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;