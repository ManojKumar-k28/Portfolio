import React from "react";
import { certifications } from "../data/portfolio";
import { Briefcase, Trophy, BookOpen, Calendar, MapPin } from "lucide-react";

// Reusable card component
type CardProps = {
  title: string;
  org?: string;
  platform?: string;
  year?: string;
  icon: React.ReactNode;
  image?: string;
  link?: string; // certificate / LinkedIn URL
};

const CertCard: React.FC<CardProps> = ({
  title,
  org,
  platform,
  year,
  icon,
  image,
  link,
}) => {
  const cardContent = (
    <div className="group relative bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-gray-600 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl cursor-pointer">
      {/* Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      {/* Image (full view, no cropping) */}
      {image && (
        <div className="w-full bg-slate-900 flex justify-center items-center p-4">
          <img
            src={image}
            alt={title}
            className="max-h-64 w-auto object-contain group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      )}

      <div className="p-6">
        {/* Icon + Year */}
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center mr-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
            {icon}
          </div>

          {year && (
            <div className="flex items-center text-sm font-medium text-cyan-400 bg-cyan-900/30 px-3 py-1 rounded-full border border-cyan-700">
              <Calendar className="w-4 h-4 mr-2" />
              {year}
            </div>
          )}
        </div>

        {/* Title */}
        <h4 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
          {title}
        </h4>

        {/* Org / Platform */}
        {(org || platform) && (
          <div className="flex items-center text-gray-400">
            <MapPin className="w-4 h-4 mr-2" />
            <p>{org || platform}</p>
          </div>
        )}
      </div>

      {/* Hover dot */}
      <div className="absolute top-4 right-4 w-2 h-2 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  );

  // Wrap in <a> if link exists
  return link ? (
    <a href={link} target="_blank" rel="noopener noreferrer">
      {cardContent}
    </a>
  ) : (
    cardContent
  );
};

const Certifications = () => {
  return (
    <section
      id="certifications"
      className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-indigo-900/20 to-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_60%,rgba(120,119,198,0.15),rgba(255,255,255,0))]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_40%,rgba(236,72,153,0.1),rgba(255,255,255,0))]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Certifications & Achievements
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Internships, hackathons, and courses that shaped my journey
          </p>
        </div>

        {/* Internships */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-cyan-400 mb-8 flex items-center">
            <Briefcase className="w-6 h-6 mr-2" /> Internships
          </h3>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {certifications.internships.map((item, index) => (
              <CertCard
                key={index}
                title={item.title}
                org={item.org}
                year={item.year}
                image={item.image}
                link={item.link}
                icon={<Briefcase className="w-6 h-6" />}
              />
            ))}
          </div>
        </div>

        {/* Hackathons */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-purple-400 mb-8 flex items-center">
            <Trophy className="w-6 h-6 mr-2" /> Hackathons
          </h3>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {certifications.hackathons.map((item, index) => (
              <CertCard
                key={index}
                title={item.title}
                org={item.org}
                year={item.year}
                image={item.image}
                link={item.link}
                icon={<Trophy className="w-6 h-6" />}
              />
            ))}
          </div>
        </div>

        {/* Courses */}
        <div>
          <h3 className="text-2xl font-bold text-pink-400 mb-8 flex items-center">
            <BookOpen className="w-6 h-6 mr-2" /> Courses
          </h3>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {certifications.courses.map((item, index) => (
              <CertCard
                key={index}
                title={item.title}
                platform={item.platform}
                year={item.year}
                image={item.image}
                link={item.link}
                icon={<BookOpen className="w-6 h-6" />}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;