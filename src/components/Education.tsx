import React from 'react';
import { education } from '../data/portfolio';
import { GraduationCap, Award, BookOpen, School, Calendar, MapPin } from 'lucide-react';

const Education = () => {
  const getIcon = (index: number) => {
    const icons = [
      <GraduationCap key="grad" className="w-6 h-6" />,
      <Award key="award" className="w-6 h-6" />,
      <BookOpen key="book" className="w-6 h-6" />,
      <School key="school" className="w-6 h-6" />
    ];
    return icons[index] || <GraduationCap key="default" className="w-6 h-6" />;
  };

  const getStatusColor = (status: string) => {
    return status === 'pursuing' 
      ? 'bg-gradient-to-r from-cyan-500 to-blue-600' 
      : 'bg-gradient-to-r from-green-500 to-emerald-600';
  };

  const getStatusText = (item: typeof education[0]) => {
    return item.status === 'pursuing' ? 'Pursuing' : item.grade || 'Completed';
  };

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Mirror Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-indigo-900/20 to-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_60%,rgba(120,119,198,0.15),rgba(255,255,255,0))]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_40%,rgba(236,72,153,0.1),rgba(255,255,255,0))]"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-10 left-10 w-20 h-20 border border-cyan-400/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 border border-purple-400/10 rotate-45"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Education Journey
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            My academic background and learning path
          </p>
        </div>

        <div className="relative">
          {/* Responsive Timeline line */}
          <div className="absolute left-5 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-cyan-500 via-purple-500 to-pink-500 opacity-30"></div>

          <div className="space-y-12">
            {education.map((item, index) => (
              <div key={item.id} className="relative">
                {/* Responsive Timeline dot */}
                <div className="absolute top-5 left-5 md:left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full z-10 shadow-lg">
                  <div className="absolute inset-1 bg-slate-900 rounded-full"></div>
                </div>

                {/* Content container that handles desktop alternating layout */}
                <div
                  className={`md:flex items-center ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'
                  }`}
                >
                  {/* Content Card */}
                  <div className="w-full md:w-5/12">
                    <div
                      className={`pl-14 md:pl-0 ${
                        index % 2 === 0 ? 'md:pl-8' : 'md:pr-8'
                      }`}
                    >
                      <div className="group relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-gray-600 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl">
                        {/* Glow Effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        
                        <div className="flex items-center mb-4">
                          <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center mr-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                            {getIcon(index)}
                          </div>
                          <div className="flex items-center text-sm font-medium text-cyan-400 bg-cyan-900/30 px-3 py-1 rounded-full border border-cyan-700">
                            <Calendar className="w-4 h-4 mr-2" />
                            {item.duration}
                          </div>
                        </div>
                        
                        <h4 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                          {item.degree}
                        </h4>
                        
                        <div className="flex items-center text-gray-400 mb-4">
                          <MapPin className="w-4 h-4 mr-2" />
                          <p>{item.institution}</p>
                        </div>
                        
                        <div className="flex items-center">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium text-white ${getStatusColor(item.status)} shadow-lg`}>
                            {getStatusText(item)}
                          </span>
                        </div>

                        {/* Hover Indicator */}
                        <div className="absolute top-4 right-4 w-2 h-2 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                    </div>
                  </div>

                  {/* Empty space for alternating layout on desktop */}
                  <div className="hidden md:block w-5/12"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;