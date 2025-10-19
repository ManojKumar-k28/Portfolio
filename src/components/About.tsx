import React, { useMemo } from 'react';
import { Code, Palette, Smartphone, Target, Lightbulb, Users } from 'lucide-react';

const About = () => {
  // --- DATA ARRAYS ---
  const highlights = [
    {
      icon: <Target className="h-6 w-6" />,
      title: 'Problem Solver',
      description: 'I thrive on tackling complex challenges and finding elegant solutions through innovative thinking.',
      color: 'from-cyan-500 to-blue-600',
    },
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: 'Creative Thinker',
      description: 'Combining technical expertise with a creative vision to build functional and appealing applications.',
      color: 'from-purple-500 to-pink-600',
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: 'Team Player',
      description: 'Excellent communication skills and collaborative mindset, always eager to learn and share knowledge.',
      color: 'from-green-500 to-teal-600',
    },
  ];

  const specializations = [
    {
      icon: <Code className="h-8 w-8" />,
      title: 'Web Development',
      description: 'Creating responsive and dynamic web applications using modern technologies and best practices.',
      color: 'from-cyan-500 to-blue-600',
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: 'Mobile Development',
      description: 'Building performant and user-friendly mobile apps for both iOS and Android platforms.',
      color: 'from-green-500 to-teal-600',
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: 'UI/UX Design',
      description: 'Crafting beautiful and intuitive user interfaces that provide exceptional user experiences.',
      color: 'from-purple-500 to-pink-600',
    },
  ];

  // Memoize particle positions to prevent re-calculation on re-renders.
  const particles = useMemo(
    () =>
      Array.from({ length: 15 }, () => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 5}s`,
        animationDuration: `${3 + Math.random() * 5}s`,
      })),
    []
  );

  return (
    <section id="about" className="relative overflow-hidden bg-slate-900 py-20 sm:py-24">
      {/* Background Elements */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-indigo-950/20 to-slate-900" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(120,119,198,0.15),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(236,72,153,0.1),transparent)]" />
        {particles.map((p, i) => (
          <div key={i} className="absolute h-1 w-1 rounded-full bg-gradient-to-r from-cyan-400 to-purple-400 opacity-60 animate-float" style={{ ...p }} />
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400">Get to know me better.</p>
        </div>

        {/* Centered Bio Section */}
        <div className="mx-auto max-w-3xl text-center text-base sm:text-lg leading-relaxed text-slate-300 mb-16 sm:mb-20">
          <p className="mb-4">
            Passionate software developer eager to explore and contribute to innovative tech solutions. I believe in writing clean, efficient code and creating user-friendly applications that make a difference.
          </p>
          <p>
            Currently pursuing my Master's in Computer Applications, I have a strong foundation in full-stack development with expertise spanning modern frameworks. I enjoy the entire development lifecycle and am always excited to learn new technologies.
          </p>
        </div>

        {/* Highlights Section */}
        <div className="mb-16 sm:mb-20">
          <h3 className="text-2xl font-bold text-center text-white mb-10 sm:mb-12">My Strengths</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {highlights.map((item) => (
              <div key={item.title} className="group relative h-full rounded-2xl border border-white/10 bg-slate-900/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:-translate-y-2 text-center sm:text-left">
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${item.color} opacity-0 transition-opacity duration-300 group-hover:opacity-10`} />
                <div className="relative">
                  <div className={`mb-5 mx-auto flex h-14 w-14 items-center justify-center rounded-lg bg-gradient-to-r ${item.color} text-white shadow-lg transition-transform duration-300 group-hover:scale-110 sm:mx-0`}>
                    {item.icon}
                  </div>
                  <h4 className="mb-2 text-lg font-semibold text-slate-100">{item.title}</h4>
                  <p className="text-sm leading-relaxed text-slate-400">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Specializations Section */}
        <div>
          <h3 className="text-2xl font-bold text-center text-white mb-10 sm:mb-12">My Specializations</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {specializations.map((spec) => (
              <div key={spec.title} className="group relative h-full rounded-2xl border border-white/10 bg-slate-900/50 p-8 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:-translate-y-2 text-center sm:text-left">
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${spec.color} opacity-0 transition-opacity duration-300 group-hover:opacity-10`} />
                <div className="relative flex h-full flex-col">
                  <div className={`mb-6 mx-auto flex h-16 w-16 items-center justify-center rounded-lg bg-gradient-to-r ${spec.color} text-white shadow-lg transition-transform duration-300 group-hover:scale-110 sm:mx-0`}>
                    {spec.icon}
                  </div>
                  <h4 className="mb-3 text-xl font-semibold text-slate-100 transition-colors duration-300 group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 group-hover:bg-clip-text group-hover:text-transparent">
                    {spec.title}
                  </h4>
                  <p className="flex-grow text-base leading-relaxed text-slate-400">{spec.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;