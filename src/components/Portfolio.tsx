import React from 'react';
import { PORTFOLIO_ITEMS } from '../constants';
import { ExternalLink } from 'lucide-react';

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-primary-600 font-bold tracking-wider uppercase mb-3 text-sm">My Portfolio</h2>
          <h3 className="text-3xl md:text-5xl font-bold heading-serif text-slate-900 mb-6">Featured Projects</h3>
          <p className="text-slate-600">
            A curated selection of my work in social media strategy, content creation, and administrative support.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PORTFOLIO_ITEMS.map((item, index) => (
            <a 
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-2xl overflow-hidden border border-slate-100 hover:shadow-xl hover:shadow-primary-900/5 transition-all duration-300 flex flex-col h-full hover:-translate-y-1"
            >
              <div className={`h-2 bg-gradient-to-r ${item.color.replace('bg-', 'from-').replace('text-', 'to-transparent ')} w-full`}></div>
              
              <div className="p-8 flex-1 flex flex-col">
                <div className={`w-14 h-14 rounded-2xl ${item.color} flex items-center justify-center mb-6 shadow-inner`}>
                  <item.icon size={28} />
                </div>
                
                <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary-600 transition-colors">
                  {item.title}
                </h4>
                
                <p className="text-slate-600 mb-6 text-sm leading-relaxed flex-1">
                  {item.description}
                </p>
                
                <div className="flex items-center text-primary-600 font-semibold text-sm mt-auto">
                  View Project <ExternalLink size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-16 text-center">
            <p className="text-slate-600 mb-4">Want to see the full picture?</p>
            <a 
              href="https://docs.google.com/document/d/1vWdNO6AzCCr1YmbYA2oYlMBh5zFS53aV0zkGcjhyRyM/edit?usp=drivesdk" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 bg-slate-900 text-white font-semibold rounded-lg hover:bg-primary-600 transition-colors"
            >
              Download Full CV
            </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;