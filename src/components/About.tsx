import React from 'react';
import { Code, Palette, Smartphone, Target, Lightbulb, Users, Globe, Heart } from 'lucide-react';

const About = () => {
  const personalInfo = [
    {
      icon: <Globe className="w-5 h-5" />,
      title: 'Languages',
      value: 'Telugu, Tamil, English',
      color: 'from-cyan-500 to-blue-600'
    },
    {
      icon: <Heart className="w-5 h-5" />,
      title: 'Interests',
      value: 'Music, Cricket, Technology',
      color: 'from-purple-500 to-pink-600'
    }
  ];

  const highlights = [
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Problem Solver',
      description: 'I thrive on tackling complex challenges and finding elegant solutions through innovative thinking.',
      color: 'from-cyan-500 to-blue-600'
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: 'Creative Thinker',
      description: 'Combining technical expertise with creative vision to build functional and appealing applications.',
      color: 'from-purple-500 to-pink-600'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Team Player',
      description: 'Excellent communication skills and collaborative mindset, always eager to learn and share knowledge.',
      color: 'from-pink-500 to-red-600'
    }
  ];

  const specializations = [
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Web Development',
      description: 'Creating responsive and dynamic web applications using modern technologies and best practices.',
      color: 'from-cyan-500 to-blue-600'
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'UI/UX Design',
      description: 'Crafting beautiful and intuitive user interfaces that provide exceptional user experiences.',
      color: 'from-purple-500 to-pink-600'
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: 'Mobile-First',
      description: 'Building responsive applications optimized for all devices and screen sizes.',
      color: 'from-pink-500 to-red-600'
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Mirror Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-indigo-900/30 to-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(120,119,198,0.2),rgba(255,255,255,0))]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(236,72,153,0.15),rgba(255,255,255,0))]"></div>
        
        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full opacity-30 animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            ></div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Get to know me better
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-8">
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                Passionate software developer eager to explore and contribute to innovative tech solutions. 
                I believe in writing clean, efficient code and creating user-friendly applications that make a difference.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                Currently pursuing my Master's in Computer Applications, I have a strong foundation in full-stack 
                development with expertise spanning modern frameworks and technologies. I enjoy the entire development 
                lifecycle and am always excited to learn new technologies and best practices.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, listening to music, or following cricket. 
                I'm always eager to take on new challenges and collaborate with fellow developers.
              </p>
            </div>
            
            <div className="space-y-6">
              {personalInfo.map((info, index) => (
                <div key={index} className="flex items-start group">
                  <div className={`flex-shrink-0 w-12 h-12 bg-gradient-to-r ${info.color} rounded-xl flex items-center justify-center mr-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1 group-hover:text-cyan-400 transition-colors duration-300">
                      {info.title}
                    </h4>
                    <p className="text-gray-400">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative">
              {/* Glowing Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-2xl blur-3xl opacity-20 animate-pulse"></div>
              
              {/* Main Container */}
              <div className="relative w-80 h-80 bg-gradient-to-br from-slate-800/50 to-purple-900/50 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-gray-700/50 shadow-2xl">
                <div className="text-center space-y-4">
                  <div className="w-24 h-24 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-2xl flex items-center justify-center mx-auto shadow-xl">
                    <Code className="w-12 h-12 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Always Learning</h3>
                    <p className="text-gray-400 text-sm px-4">Continuously exploring new technologies and best practices</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Personal Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="group relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-gray-600 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${highlight.color} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
              
              <div className={`w-14 h-14 bg-gradient-to-r ${highlight.color} rounded-xl flex items-center justify-center text-white mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                {highlight.icon}
              </div>
              <h4 className="text-lg font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                {highlight.title}
              </h4>
              <p className="text-gray-400 leading-relaxed text-sm">
                {highlight.description}
              </p>

              {/* Hover Indicator */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Specializations */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {specializations.map((spec, index) => (
            <div
              key={index}
              className="group relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-gray-600 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${spec.color} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
              
              <div className={`w-16 h-16 bg-gradient-to-r ${spec.color} rounded-xl flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                {spec.icon}
              </div>
              <h4 className="text-xl font-semibold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                {spec.title}
              </h4>
              <p className="text-gray-400 leading-relaxed">
                {spec.description}
              </p>

              {/* Hover Indicator */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;