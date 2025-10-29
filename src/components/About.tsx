import React, { useMemo } from 'react';
import { Code, Smartphone, Target, Lightbulb, Users, Globe, Heart } from 'lucide-react';

const About = () => {
  const highlights = [
    { icon: <Target className="h-6 w-6" />, title: 'Problem Solver', description: 'I thrive on finding elegant solutions to complex challenges.' },
    { icon: <Lightbulb className="h-6 w-6" />, title: 'Creative Thinker', description: 'I blend technical expertise with a creative vision to build unique apps.' },
    { icon: <Users className="h-6 w-6" />, title: 'Team Player', description: 'My collaborative mindset helps build strong relationships and share knowledge.' }
  ];
  
  // Combined array for a unified grid
  const traitsAndTools = [
    { type: 'specialization', icon: <Code className="h-8 w-8" />, title: 'Web Development', description: 'Building modern, responsive web apps with best-in-class technologies.', color: 'from-cyan-400 to-blue-500' },
    { type: 'specialization', icon: <Smartphone className="h-8 w-8" />, title: 'Mobile-First Design', description: 'Optimizing for a seamless experience on any device, any size.', color: 'from-pink-400 to-red-500' },
    { type: 'info', icon: <Globe className="h-8 w-8" />, title: 'Languages', description: 'Telugu, Tamil, and English.', color: 'from-green-400 to-teal-500' },
    { type: 'info', icon: <Heart className="h-8 w-8" />, title: 'Interests', description: 'Music, Cricket, and exploring new Tech.', color: 'from-orange-400 to-amber-500' }
  ];

  const particles = useMemo(() =>
    Array.from({ length: 15 }, () => ({
      left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 5}s`, animationDuration: `${5 + Math.random() * 5}s`,
    })), []);

  return (
    <section id="about" className="relative overflow-hidden bg-slate-900 py-20 sm:py-24">
      {/* Background Elements */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-indigo-900/20 to-slate-900" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(120,119,198,0.15),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(236,72,153,0.1),transparent)]" />
        {particles.map((p, i) => (
          <div key={i} className="absolute h-1 w-1 animate-pulse rounded-full bg-gradient-to-r from-cyan-300 to-purple-300 opacity-40" style={p} />
        ))}
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-16 sm:mb-20">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="mt-4 text-base text-gray-400 sm:text-lg">
            A glimpse into my background, skills, and what drives me.
          </p>
        </div>

        {/* --- Main Two-Column Grid --- */}
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16">
          
          {/* --- LEFT COLUMN: BIO & HIGHLIGHTS --- */}
          <div className="flex flex-col gap-12">
            <div>
              <h3 className="text-2xl font-bold text-white">
                A Passion for Building & Problem-Solving
              </h3>
              <div className="mt-6 space-y-6 text-lg text-gray-300 leading-relaxed">
                <p>
                  As a software developer, I'm driven by the challenge of turning complex problems into elegant, user-friendly applications. I believe in the power of clean code and thoughtful design to make a real impact.
                </p>
                <p>
                  Pursuing my Master's, I have a strong foundation in full-stack development and am always excited to learn new technologies. When I'm not coding, you'll find me exploring new tech, listening to music, or following cricket.
                </p>
              </div>
            </div>
            <div className="space-y-8">
              {highlights.map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <div className="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-cyan-400/10 text-cyan-400 ring-1 ring-cyan-400/20">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">{item.title}</h4>
                    <p className="mt-1 text-gray-400">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* --- RIGHT COLUMN: UNIFIED GRID FOR TRAITS & TOOLS --- */}
          <div>
            <h3 className="text-2xl font-bold text-white">My Toolkit & Traits</h3>
            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {traitsAndTools.map((item) => (
                <div
                  key={item.title}
                  className="group relative overflow-hidden rounded-2xl border border-slate-700/50 bg-slate-800/60 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/50 hover:shadow-2xl hover:shadow-cyan-500/10"
                >
                  {/* Subtle Glow Effect */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${item.color} opacity-0 transition-opacity duration-300 group-hover:opacity-10`} />

                  <div className="relative">
                    <div className={`mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-r ${item.color} text-white shadow-lg`}>
                      {item.icon}
                    </div>
                    <h4 className="text-lg font-bold text-white">{item.title}</h4>
                    <p className="mt-1 text-gray-400">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;