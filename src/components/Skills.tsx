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

type Category = 'frontend' | 'backend' | 'database';

type Skill = {
  name: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
  icon: React.ComponentType<{ className?: string }>;
  category: Category;
  color: string; // Tailwind gradient classes (e.g., 'from-cyan-500 to-blue-500')
};

const Skills = () => {
  const skills: Skill[] = [
    // Frontend
    { name: 'HTML5', level: 'Expert', icon: SiHtml5, category: 'frontend', color: 'from-orange-500 to-red-500' },
    { name: 'CSS3', level: 'Advanced', icon: SiCss3, category: 'frontend', color: 'from-blue-500 to-cyan-500' },
    { name: 'JavaScript', level: 'Intermediate', icon: SiJavascript, category: 'frontend', color: 'from-yellow-500 to-orange-500' },
    { name: 'React', level: 'Intermediate', icon: SiReact, category: 'frontend', color: 'from-cyan-500 to-blue-500' },

    // Backend
    { name: 'Node.js', level: 'Intermediate', icon: SiNodedotjs, category: 'backend', color: 'from-green-600 to-green-700' },
    { name: 'PHP', level: 'Intermediate', icon: SiPhp, category: 'backend', color: 'from-purple-500 to-indigo-500' },
    { name: 'Python', level: 'Intermediate', icon: SiPython, category: 'backend', color: 'from-green-500 to-emerald-500' },

    // Database
    { name: 'MySQL', level: 'Intermediate', icon: SiMysql, category: 'database', color: 'from-orange-600 to-red-600' },
    { name: 'PostgreSQL', level: 'Intermediate', icon: SiPostgresql, category: 'database', color: 'from-blue-600 to-purple-600' },
    { name: 'MongoDB', level: 'Intermediate', icon: SiMongodb, category: 'database', color: 'from-green-700 to-green-700' },
    { name: 'Database Fundamentals', level: 'Advanced', icon: FaDatabase, category: 'database', color: 'from-slate-600 to-gray-800' },
  ];

  const getCategoryTitle = (category: Category | string) => {
    const titles: Record<Category, string> = {
      frontend: 'Frontend Development',
      backend: 'Backend Development',
      database: 'Database Management',
    };
    return (titles as Record<string, string>)[category] || category;
  };

  const groupedSkills = skills.reduce<Record<string, Skill[]>>((acc, skill) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill);
    return acc;
  }, {});

  return (
    <section id="skills" className="relative overflow-hidden py-20 sm:py-24 px-4 sm:px-6 lg:px-8">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/50 to-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.18),rgba(255,255,255,0))]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(236,72,153,0.14),rgba(255,255,255,0))]" />
        <div className="absolute top-20 left-10 h-24 w-24 sm:h-32 sm:w-32 border border-cyan-400/10 rounded-full animate-pulse" />
        <div className="absolute bottom-20 right-10 h-16 w-16 sm:h-24 sm:w-24 border border-purple-400/10 rotate-45" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-12 sm:mb-16 text-center">
          <h2 className="mb-4 text-3xl sm:text-4xl lg:text-5xl font-black">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-base sm:text-lg text-gray-400">
            Technologies I work with to bring ideas to life
          </p>
        </div>

        {/* Skills by Category */}
        <div className="space-y-12 lg:space-y-16">
          {Object.entries(groupedSkills).map(([category, categorySkills]) => (
            <div key={category} className="flex flex-col items-stretch gap-6">
              <h3 className="text-center text-xl sm:text-2xl font-bold">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  {getCategoryTitle(category)}
                </span>
              </h3>

              {/* Responsive Grid: 2 cols on mobile, 3 on md, 4 on lg+ */}
              <div className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                {categorySkills.map((skill, index) => {
                  const Icon = skill.icon;
                  return (
                    <div
                      key={`${category}-${skill.name}-${index}`}
                      className="group relative h-full rounded-2xl border border-gray-700/50 bg-slate-800/50 p-4 sm:p-5 md:p-6 backdrop-blur-sm transition-all duration-300 md:hover:-translate-y-2 hover:shadow-2xl hover:border-gray-600"
                    >
                      {/* Glow on hover */}
                      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${skill.color} opacity-0 transition-opacity duration-300 group-hover:opacity-10`} />

                      {/* Icon */}
                      <div className={`mb-3 sm:mb-4 flex h-14 w-14 sm:h-16 sm:w-16 md:h-20 md:w-20 items-center justify-center rounded-xl bg-gradient-to-r ${skill.color} shadow-lg transition-transform duration-300 group-hover:scale-110`}>
                        <Icon className="h-7 w-7 sm:h-8 sm:w-8 md:h-10 md:w-10 text-white" />
                      </div>

                      {/* Content */}
                      <h4 className="mb-1 text-base sm:text-lg font-semibold text-white transition-colors duration-300 group-hover:text-cyan-400">
                        {skill.name}
                      </h4>
                      <span className="text-xs sm:text-sm text-gray-400 font-medium">
                        {skill.level}
                      </span>

                      {/* Hover dot */}
                      <div className="absolute right-4 top-4 h-2 w-2 rounded-full bg-cyan-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Specialization Note */}
        <div className="mt-12 lg:mt-16 text-center">
          <div className="mx-auto max-w-4xl rounded-2xl border border-gray-700/50 bg-gradient-to-r from-slate-800/50 to-purple-900/50 p-6 sm:p-8 backdrop-blur-sm">
            <div className="mb-3 sm:mb-4 flex items-center justify-center">
              <Smartphone className="mr-3 h-5 w-5 sm:h-6 sm:w-6 text-cyan-400" />
              <h3 className="text-base sm:text-lg font-semibold">
                <span className="text-cyan-400">Specialization:</span>
                <span className="ml-2 text-white">Frontend Development</span>
              </h3>
            </div>
            <p className="mx-auto max-w-2xl text-sm sm:text-base leading-relaxed text-gray-400">
              Focused on creating beautiful, responsive user interfaces with modern web technologies and exceptional user experiences
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;