import React from 'react';
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiPhp,
  SiPython,
  SiMysql,
  SiPostgresql,
  SiMongodb,
} from 'react-icons/si';
import { FaDatabase } from 'react-icons/fa';
import { Smartphone } from 'lucide-react';

const Skills = () => {
  const skills = [
    // Frontend
    {
      name: 'HTML5',
      level: 'Expert',
      icon: SiHtml5,
      category: 'frontend',
      color: 'from-orange-500 to-red-500',
    },
    {
      name: 'CSS3',
      level: 'Advanced',
      icon: SiCss3,
      category: 'frontend',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      name: 'JavaScript',
      level: 'Intermediate',
      icon: SiJavascript,
      category: 'frontend',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      name: 'React',
      level: 'Intermediate',
      icon: SiReact,
      category: 'frontend',
      color: 'from-cyan-500 to-blue-500',
    },

    // Backend
    {
      name: 'Node.js',
      level: 'Intermediate',
      icon: SiNodedotjs,
      category: 'backend',
      color: 'from-green-600 to-green-700',
    },
    {
      name: 'PHP',
      level: 'Intermediate',
      icon: SiPhp,
      category: 'backend',
      color: 'from-purple-500 to-indigo-500',
    },
    {
      name: 'Python',
      level: 'Intermediate',
      icon: SiPython,
      category: 'backend',
      color: 'from-green-500 to-emerald-500',
    },

    // Database
    {
      name: 'MySQL',
      level: 'Intermediate',
      icon: SiMysql,
      category: 'database',
      color: 'from-orange-600 to-red-600',
    },
    {
      name: 'PostgreSQL',
      level: 'Intermediate',
      icon: SiPostgresql,
      category: 'database',
      color: 'from-blue-600 to-purple-600',
    },
      {
      name: 'MongoDB',
      level: 'Intermediate',
      icon: SiMongodb,
      category: 'database',
      color: 'from-green-700 to-green-700',
    },
    {
      name: 'Database Fundamentals',
      level: 'Advanced',
      icon: FaDatabase,
      category: 'database',
      color: 'from-slate-600 to-gray-800',
    },
  ];

  const getCategoryTitle = (category: string) => {
    const titles = {
      frontend: 'Frontend Development',
      backend: 'Backend Development',
      database: 'Database Management',
    };
    return titles[category as keyof typeof titles] || category;
  };

  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  return (
    <section
      id="skills"
      className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/50 to-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.2),rgba(255,255,255,0))]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(236,72,153,0.2),rgba(255,255,255,0))]" />
        <div className="absolute top-20 left-10 w-32 h-32 border border-cyan-400/10 rounded-full animate-pulse" />
        <div className="absolute bottom-20 right-10 w-24 h-24 border border-purple-400/10 rotate-45" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Technologies I work with to bring ideas to life
          </p>
        </div>

        {/* Skills Grid */}
        <div className="space-y-12 lg:space-y-16">
          {Object.entries(groupedSkills).map(([category, categorySkills]) => (
            <div
              key={category}
              className="space-y-6 lg:space-y-8 flex flex-col items-center"
            >
              <h3 className="text-2xl sm:text-3xl font-bold text-center">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  {getCategoryTitle(category)}
                </span>
              </h3>

              <div className="flex flex-wrap justify-between gap-4 sm:gap-6 w-full">
                {categorySkills.map((skill, index) => {
                  const Icon = skill.icon;
                  return (
                    <div
                      key={index}
                      className="group relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-5 sm:p-6 border border-gray-700/50 hover:border-gray-600 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl min-w-[240px] flex-1"
                    >
                      {/* Glow on hover */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-r ${skill.color} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                      />
                      {/* Icon wrapper */}
                      <div
                        className={`w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-r ${skill.color} rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                      >
                        <Icon className="w-10 h-10 sm:w-14 sm:h-14 text-white" />
                      </div>
                      {/* Skill Name */}
                      <h4 className="text-lg sm:text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                        {skill.name}
                      </h4>
                      {/* Skill Level */}
                      <span className="text-sm sm:text-base text-gray-400 font-medium">
                        {skill.level}
                      </span>

                      {/* Hover dot */}
                      <div className="absolute top-4 right-4 w-2 h-2 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Specialization Note */}
        <div className="mt-12 lg:mt-16 text-center">
          <div className="bg-gradient-to-r from-slate-800/50 to-purple-900/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-gray-700/50 max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <Smartphone className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-400 mr-3" />
              <h3 className="text-lg sm:text-xl font-semibold">
                <span className="text-cyan-400">Specialization:</span>
                <span className="text-white ml-2">
                  Frontend Development & UI/UX Design
                </span>
              </h3>
            </div>
            <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
              Focused on creating beautiful, responsive user interfaces with modern web technologies and exceptional user experiences
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
