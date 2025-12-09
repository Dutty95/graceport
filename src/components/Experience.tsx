import React from 'react';
import { EXPERIENCE } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>

      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16">
          <div className="md:w-1/3">
             <h2 className="text-primary-600 font-bold tracking-wider uppercase mb-3 text-sm">Experience</h2>
             <h3 className="text-3xl md:text-4xl font-bold heading-serif text-slate-900 mb-6">
               My Professional Journey
             </h3>
             <p className="text-slate-600 leading-relaxed mb-8">
               A timeline of my roles and contributions in the digital space, focusing on growth, organization, and creative execution.
             </p>
             
             {/* Education Snippet */}
             <div className="bg-primary-50 p-6 rounded-2xl border border-primary-100">
                <h4 className="font-bold text-slate-900 mb-2">Education</h4>
                <div className="mb-4">
                  <p className="font-semibold text-primary-700">B.A English & Literary Studies</p>
                  <p className="text-sm text-slate-600">University of Ilorin (Final Year)</p>
                </div>
                <div>
                  <p className="font-semibold text-primary-700">Virtual Assistant Certification</p>
                  <p className="text-sm text-slate-600">TechCrush, 2025</p>
                </div>
             </div>
          </div>

          <div className="md:w-2/3">
            <div className="space-y-12 border-l-2 border-slate-100 ml-3 md:ml-0 pl-8 md:pl-12 py-2">
              {EXPERIENCE.map((exp, index) => (
                <div key={index} className="relative group">
                  {/* Timeline Dot */}
                  <div className="absolute -left-[39px] md:-left-[55px] top-0 w-5 h-5 rounded-full border-4 border-white bg-slate-200 group-hover:bg-primary-500 transition-colors shadow-sm"></div>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                    <h4 className="text-xl font-bold text-slate-900">{exp.role}</h4>
                    <span className="text-sm font-medium text-slate-500 bg-slate-50 px-3 py-1 rounded-full border border-slate-100 mt-2 sm:mt-0 w-fit">
                      {exp.period}
                    </span>
                  </div>
                  
                  <h5 className="text-primary-600 font-medium mb-3">{exp.company}</h5>
                  <p className="text-slate-600 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;