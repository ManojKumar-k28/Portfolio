import React, { useEffect, useState } from 'react';
import { ChevronDown, Code, Mail, ArrowRight, Download, Eye } from 'lucide-react';
import image from './IMG_20250914_175205_656.webp';
import resume from '../../public/assets/New_resume.pdf';

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = [
    'Full Stack Developer',
    'Frontend Specialist',
    'UI/UX Enthusiast',
    'Problem Solver',
    'Tech Innovator'
  ];

  // Use the imported asset path
  const resumeUrl = resume;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [roles.length]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>

        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full opacity-20 animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            ></div>
          ))}
        </div>

        {/* Geometric Shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 border border-cyan-400/20 rounded-full animate-spin-slow"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 border border-purple-400/20 rotate-45 animate-pulse"></div>
        <div className="absolute top-1/2 left-20 w-16 h-16 bg-gradient-to-r from-cyan-400/10 to-purple-400/10 rounded-lg animate-bounce"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        {/* Mobile Layout - Profile First */}
        <div className="lg:hidden flex flex-col items-center text-center space-y-6 sm:space-y-8">
          {/* Profile Image - Mobile */}
          <div className="relative mb-4 sm:mb-8">
            {/* Glowing Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full blur-3xl opacity-30 animate-pulse scale-110"></div>

            {/* Profile Container */}
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80">
              {/* Rotating Border */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-full animate-spin-slow p-1">
                <div className="w-full h-full bg-slate-900 rounded-full"></div>
              </div>

              {/* Profile Image */}
              <div className="absolute inset-3 sm:inset-4 rounded-full overflow-hidden border-2 sm:border-4 border-white/10 shadow-2xl">
                <img
                  src={image}
                  alt="Manoj Kumar"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-2xl flex items-center justify-center shadow-xl animate-bounce">
                <Code className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white" />
              </div>

              <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-xl animate-pulse">
                <span className="text-sm sm:text-lg md:text-2xl">🚀</span>
              </div>
            </div>
          </div>

          {/* Content - Mobile */}
          <div className="space-y-4 sm:space-y-6 w-full max-w-lg">
            {/* Greeting */}
            <div className="flex items-center justify-center space-x-2 sm:space-x-3 mb-2 sm:mb-4">
              <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full flex items-center justify-center animate-pulse">
                <span className="text-lg sm:text-xl md:text-2xl">👋</span>
              </div>
              <div className="text-base sm:text-lg md:text-xl text-gray-300 font-light">
                Hello, I'm
              </div>
            </div>

            {/* Name with Gradient */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-x">
                Manoj Kumar
              </span>
            </h1>

            {/* Dynamic Role */}
            <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 h-8 sm:h-10 md:h-12 flex items-center justify-center">
              <span className="mr-2">I'm a</span>
              <div className="relative overflow-hidden">
                <span
                  key={currentRole}
                  className="inline-block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent font-bold animate-slide-up"
                >
                  {roles[currentRole]}
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 leading-relaxed px-2 sm:px-4">
              Passionate about creating innovative solutions and bringing ideas to life through code.
              I specialize in building exceptional digital experiences with modern technologies.
            </p>

            {/* CTA Buttons (Mobile) */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 md:gap-6 pt-4 sm:pt-6 px-2 sm:px-4">
              <button
                onClick={() => scrollToSection('projects')}
                className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-2xl font-semibold hover:from-cyan-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-cyan-500/25 flex items-center justify-center gap-2 sm:gap-3 text-sm sm:text-base"
              >
                <Code size={16} className="sm:w-5 sm:h-5" />
                View My Work
                <ArrowRight size={14} className="sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </button>

              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group border-2 border-gray-600 text-gray-300 px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-2xl font-semibold hover:border-purple-400 hover:text-purple-400 hover:bg-purple-400/10 transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 text-sm sm:text-base"
                aria-label="View Resume (opens in a new tab)"
              >
                <Eye size={16} className="sm:w-5 sm:h-5" />
                View Resume
              </a>

              <a
                href={resumeUrl}
                download
                className="group bg-gradient-to-r from-purple-500 to-pink-600 text-white px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-2xl font-semibold hover:from-purple-600 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-pink-500/25 flex items-center justify-center gap-2 sm:gap-3 text-sm sm:text-base"
                aria-label="Download Resume"
              >
                <Download size={16} className="sm:w-5 sm:h-5" />
                Download Resume
              </a>

              <button
                onClick={() => scrollToSection('contact')}
                className="group border-2 border-gray-600 text-gray-300 px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-2xl font-semibold hover:border-cyan-400 hover:text-cyan-400 hover:bg-cyan-400/10 transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 text-sm sm:text-base"
              >
                <Mail size={16} className="sm:w-5 sm:h-5" />
                Get In Touch
              </button>
            </div>

            {/* Stats */}
            <div className="flex justify-center gap-4 sm:gap-6 md:gap-8 pt-4 sm:pt-6 border-t border-gray-700 mx-2 sm:mx-4">
              <div className="text-center">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-cyan-400">4+</div>
                <div className="text-gray-400 text-xs sm:text-sm">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-purple-400">2+</div>
                <div className="text-gray-400 text-xs sm:text-sm">Years Learning</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-pink-400">9+</div>
                <div className="text-gray-400 text-xs sm:text-sm">Technologies</div>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-8 xl:gap-12 items-center">
          {/* Left Content */}
          <div className="text-left space-y-6 xl:space-y-8">
            {/* Greeting */}
            <div className="flex items-center space-x-3 mb-4 xl:mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full flex items-center justify-center animate-pulse">
                <span className="text-2xl">👋</span>
              </div>
              <div className="text-xl text-gray-300 font-light">
                Hello, I'm
              </div>
            </div>

            {/* Name with Gradient */}
            <h1 className="text-5xl xl:text-6xl 2xl:text-7xl font-black leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-x">
                Manoj Kumar
              </span>
            </h1>

            {/* Dynamic Role with Transition */}
            <div className="text-2xl xl:text-3xl 2xl:text-4xl text-gray-300 h-12 xl:h-16 flex items-center">
              <span className="mr-3">I'm a</span>
              <div className="relative overflow-hidden">
                <span
                  key={currentRole}
                  className="inline-block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent font-bold animate-slide-up"
                >
                  {roles[currentRole]}
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="text-lg xl:text-xl text-gray-400 leading-relaxed max-w-2xl">
              Passionate about creating innovative solutions and bringing ideas to life through code.
              I specialize in building exceptional digital experiences with modern technologies.
            </p>

            {/* CTA Buttons (Desktop) */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 xl:gap-6 pt-6 xl:pt-8">
              <button
                onClick={() => scrollToSection('projects')}
                className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 xl:px-8 xl:py-4 rounded-2xl font-semibold hover:from-cyan-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-cyan-500/25 flex items-center justify-center gap-3"
              >
                <Code size={20} className="xl:w-6 xl:h-6" />
                View My Work
                <ArrowRight size={18} className="xl:w-5 xl:h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>

              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group border-2 border-gray-600 text-gray-300 px-6 py-3 xl:px-8 xl:py-4 rounded-2xl font-semibold hover:border-purple-400 hover:text-purple-400 hover:bg-purple-400/10 transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3"
                aria-label="View Resume (opens in a new tab)"
              >
                <Eye size={20} className="xl:w-6 xl:h-6" />
                View Resume
              </a>

              <a
                href={resumeUrl}
                download
                className="group bg-gradient-to-r from-purple-500 to-pink-600 text-white px-6 py-3 xl:px-8 xl:py-4 rounded-2xl font-semibold hover:from-purple-600 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-pink-500/25 flex items-center justify-center gap-3"
                aria-label="Download Resume"
              >
                <Download size={20} className="xl:w-6 xl:h-6" />
                Download Resume
              </a>

              <button
                onClick={() => scrollToSection('contact')}
                className="group border-2 border-gray-600 text-gray-300 px-6 py-3 xl:px-8 xl:py-4 rounded-2xl font-semibold hover:border-cyan-400 hover:text-cyan-400 hover:bg-cyan-400/10 transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3"
              >
                <Mail size={20} className="xl:w-6 xl:h-6" />
                Get In Touch
              </button>
            </div>

            {/* Stats */}
            <div className="flex gap-6 xl:gap-8 pt-6 xl:pt-8 border-t border-gray-700">
              <div className="text-center">
                <div className="text-2xl xl:text-3xl font-bold text-cyan-400">4+</div>
                <div className="text-gray-400 text-sm">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl xl:text-3xl font-bold text-purple-400">2+</div>
                <div className="text-gray-400 text-sm">Years Learning</div>
              </div>
              <div className="text-center">
                <div className="text-2xl xl:text-3xl font-bold text-pink-400">9+</div>
                <div className="text-gray-400 text-sm">Technologies</div>
              </div>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Glowing Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full blur-3xl opacity-30 animate-pulse scale-110"></div>

              {/* Profile Container */}
              <div className="relative w-72 h-72 xl:w-80 xl:h-80 2xl:w-96 2xl:h-96">
                {/* Rotating Border */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-full animate-spin-slow p-1">
                  <div className="w-full h-full bg-slate-900 rounded-full"></div>
                </div>

                {/* Profile Image */}
                <div className="absolute inset-4 rounded-full overflow-hidden border-4 border-white/10 shadow-2xl">
                  <img
                    src={image}
                    alt="Manoj Kumar"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-14 h-14 xl:w-16 xl:h-16 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-2xl flex items-center justify-center shadow-xl animate-bounce">
                  <Code className="w-6 h-6 xl:w-8 xl:h-8 text-white" />
                </div>

                <div className="absolute -bottom-4 -left-4 w-14 h-14 xl:w-16 xl:h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-xl animate-pulse">
                  <span className="text-xl xl:text-2xl">🚀</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={() => scrollToSection('about')}
            className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
          >
            <ChevronDown size={28} className="sm:w-8 sm:h-8" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;