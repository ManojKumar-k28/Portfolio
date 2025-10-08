import React, { useMemo } from 'react';
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

  // Memoize particle positions to avoid hydration mismatch / layout jitter
  const particles = useMemo(
    () =>
      Array.from({ length: 14 }, () => ({
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: Math.random() * 3,
        duration: 2 + Math.random() * 2
      })),
    []
  );

  return (
    <section id="about" className="relative overflow-hidden py-24">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-slate-900 via-indigo-900/30 to-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(120,119,198,0.18),rgba(255,255,255,0))]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(236,72,153,0.12),rgba(255,255,255,0))]" />

        {/* Floating Particles */}
        <div className="absolute inset-0">
          {particles.map((p, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 rounded-full opacity-30 animate-pulse bg-gradient-to-r from-cyan-400 to-purple-400"
              style={{
                left: `${p.left}%`,
                top: `${p.top}%`,
                animationDelay: `${p.delay}s`,
                animationDuration: `${p.duration}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-400">
            Get to know me better
          </p>
        </div>

        {/* Top Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center mb-16">
          {/* Left: Bio + Personal info */}
          <div className="space-y-8">
            <div className="space-y-5">
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                Passionate software developer eager to explore and contribute to innovative tech solutions.
                I believe in writing clean, efficient code and creating user-friendly applications that make a difference.
              </p>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                Currently pursuing my Master's in Computer Applications, I have a strong foundation in full-stack
                development with expertise spanning modern frameworks and technologies. I enjoy the entire development
                lifecycle and am always excited to learn new technologies and best practices.
              </p>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, listening to music, or following cricket.
                I'm always eager to take on new challenges and collaborate with fellow developers.
              </p>
            </div>

            {/* Personal Info as a clean grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {personalInfo.map((info, index) => (
                <div
                  key={index}
                  className="group flex items-center gap-4 rounded-xl border border-gray-700/60 bg-slate-800/50 p-4 backdrop-blur-sm transition-all duration-300 hover:border-gray-600"
                >
                  <div className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-r ${info.color} shadow-lg transition-transform duration-300 group-hover:scale-110`}>
                    {info.icon}
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-sm font-semibold text-white transition-colors duration-300 group-hover:text-cyan-400">
                      {info.title}
                    </h4>
                    <p className="truncate text-gray-400">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Visual card (responsive) */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400 to-purple-500 blur-3xl opacity-20 animate-pulse" />
              {/* Main */}
              <div className="relative aspect-square rounded-2xl border border-gray-700/50 bg-gradient-to-br from-slate-800/50 to-purple-900/50 p-6 shadow-2xl backdrop-blur-sm flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-2xl bg-gradient-to-r from-cyan-400 to-purple-500 shadow-xl">
                    <Code className="h-12 w-12 text-white" />
                  </div>
                  <div>
                    <h3 className="mb-1 text-xl font-bold text-white">Always Learning</h3>
                    <p className="px-2 text-sm text-gray-400">
                      Continuously exploring new technologies and best practices
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Highlights */}
        <div className="mb-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="group relative h-full rounded-2xl border border-gray-700/60 bg-slate-800/50 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:border-gray-600"
            >
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${item.color} opacity-0 transition-opacity duration-300 group-hover:opacity-10`} />
              <div className={`mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-r ${item.color} text-white shadow-lg transition-transform duration-300 group-hover:scale-110`}>
                {item.icon}
              </div>
              <h4 className="mb-3 text-lg font-semibold text-white transition-colors duration-300 group-hover:text-cyan-400">
                {item.title}
              </h4>
              <p className="text-sm leading-relaxed text-gray-400">
                {item.description}
              </p>
              <div className="absolute right-4 top-4 h-2 w-2 rounded-full bg-cyan-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>
          ))}
        </div>

        {/* Specializations */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {specializations.map((spec, index) => (
            <div
              key={index}
              className="group relative flex h-full flex-col rounded-2xl border border-gray-700/60 bg-slate-800/50 p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:border-gray-600"
            >
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${spec.color} opacity-0 transition-opacity duration-300 group-hover:opacity-10`} />
              <div className={`mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-r ${spec.color} text-white shadow-lg transition-transform duration-300 group-hover:scale-110`}>
                {spec.icon}
              </div>
              <h4 className="mb-3 text-xl font-semibold text-white transition-colors duration-300 group-hover:text-cyan-400">
                {spec.title}
              </h4>
              <p className="text-gray-400 leading-relaxed">
                {spec.description}
              </p>
              <div className="absolute right-4 top-4 h-2 w-2 rounded-full bg-cyan-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;