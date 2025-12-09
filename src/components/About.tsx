import React from 'react';
import { CORE_SKILLS, TOOLS } from '../constants';
import { CheckCircle2 } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* About Text */}
          <div className="lg:w-1/2">
            <h2 className="text-primary-600 font-bold tracking-wider uppercase mb-3 text-sm">About Me</h2>
            <h3 className="text-3xl md:text-4xl font-bold heading-serif text-slate-900 mb-6">
              I turn ideas into <span className="underline decoration-primary-400 decoration-4 underline-offset-4">measurable results</span>.
            </h3>
            
            <div className="space-y-4 text-slate-600 leading-relaxed text-lg">
              <p>
                I am a creative Social Media Manager with hands-on experience managing brand communications, producing high-performing short-form content, and leveraging AI tools to enhance content workflows.
              </p>
              <p>
                Successfully improved engagement across brand accounts, including a 45–60% increase in interaction and content visibility through video-led strategies and storytelling captions. 
              </p>
              <p>
                I specialize in crafting meaningful brand identities and project execution that meets stakeholder expectations. I am a lifelong learner, passionate about helping brands grow and exploring new creative challenges.
              </p>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-100">
               <h4 className="text-xl font-semibold mb-4 text-slate-800">Core Competencies</h4>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                 {CORE_SKILLS.map((skill, idx) => (
                   <div key={idx} className="flex items-center gap-2 text-slate-700">
                     <CheckCircle2 size={18} className="text-primary-500 shrink-0" />
                     <span>{skill}</span>
                   </div>
                 ))}
               </div>
            </div>
          </div>

          {/* Tools & Tech Stack */}
          <div className="lg:w-1/2 bg-slate-50 rounded-3xl p-8 lg:p-12 border border-slate-100">
            <h3 className="text-2xl font-bold heading-serif text-slate-900 mb-8">Tools & Software</h3>
            
            <div className="flex flex-wrap gap-3">
              {TOOLS.map((tool, idx) => (
                <span 
                  key={idx} 
                  className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-slate-700 font-medium shadow-sm hover:border-primary-300 hover:text-primary-600 transition-colors cursor-default"
                >
                  {tool}
                </span>
              ))}
            </div>

            <div className="mt-12 bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              <h4 className="font-bold text-slate-900 mb-2">My Approach</h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                I combine creativity with data. Whether it's managing a content calendar in Canva or analyzing insights to boost retention, every decision is made with the goal of growth in mind. I consider a project successful only when it drives measurable results.
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default About;