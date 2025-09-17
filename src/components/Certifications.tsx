// src/components/Certifications.tsx
import React, { useState } from "react";
import { certifications } from "../data/portfolio";
import {
  Briefcase,
  Trophy,
  BookOpen,
  Calendar,
  MapPin,
} from "lucide-react";

type CardProps = {
  title: string;
  org?: string;
  platform?: string;
  year?: string;
  icon: React.ReactNode;
  image?: string;
  link?: string;
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
  const content = (
    <div className="bg-slate-900/70 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-cyan-400/70 transition-all duration-300 hover:-translate-y-2 shadow-xl">
      {/* Image */}
      {image && (
        <div className="w-full bg-slate-800 flex justify-center items-center p-4">
          <img
            src={image}
            alt={title}
            className="max-h-48 w-auto object-contain transition-transform duration-500 hover:scale-105"
          />
        </div>
      )}
      {/* Text */}
      <div className="p-5">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-xl flex items-center justify-center mr-4 shadow-lg">
            {icon}
          </div>
          {year && (
            <div className="text-sm font-medium text-cyan-400 bg-cyan-900/30 px-3 py-1 rounded-full border border-cyan-700">
              {year}
            </div>
          )}
        </div>
        <h4 className="text-lg font-semibold text-white mb-1">{title}</h4>
        {(org || platform) && (
          <div className="flex items-center text-gray-400 text-sm">
            <MapPin className="w-4 h-4 mr-2" />
            <p>{org || platform}</p>
          </div>
        )}
      </div>
    </div>
  );

  return link ? (
    <a href={link} target="_blank" rel="noopener noreferrer">
      {content}
    </a>
  ) : (
    content
  );
};

// Section with View All toggle
const SectionWithToggle = ({
  title,
  color,
  icon,
  data,
}: {
  title: string;
  color: string;
  icon: React.ReactNode;
  data: any[];
}) => {
  const [showAll, setShowAll] = useState(false);
  const previewCount = 3; // show only 3 as preview

  const itemsToShow = showAll ? data : data.slice(0, previewCount);

  return (
    <div className="mb-20">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h3 className={`text-2xl font-bold ${color} flex items-center`}>
          {icon} {title}
        </h3>
        {data.length > previewCount && (
          <button
            onClick={() => setShowAll(!showAll)}
            className="text-sm px-4 py-2 bg-slate-700 hover:bg-cyan-500 transition text-white rounded-full"
          >
            {showAll ? "Show Less" : "View All"}
          </button>
        )}
      </div>

      {/* Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {itemsToShow.map((item, i) => (
          <CertCard key={i} {...item} icon={icon} />
        ))}
      </div>
    </div>
  );
};

const Certifications = () => (
  <section
    id="certifications"
    className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
  >
    {/* Background */}
    <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-indigo-900/20 to-slate-900">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_60%,rgba(120,119,198,0.15),rgba(255,255,255,0))]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_40%,rgba(236,72,153,0.1),rgba(255,255,255,0))]"></div>
    </div>

    <div className="max-w-6xl mx-auto relative z-10">
      {/* Overall Title */}
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

      {/* Sections */}
      <SectionWithToggle
        title="Internships"
        color="text-cyan-400"
        icon={<Briefcase className="w-6 h-6 mr-2" />}
        data={certifications.internships}
      />
      <SectionWithToggle
        title="Hackathons"
        color="text-purple-400"
        icon={<Trophy className="w-6 h-6 mr-2" />}
        data={certifications.hackathons}
      />
      <SectionWithToggle
        title="Courses"
        color="text-pink-400"
        icon={<BookOpen className="w-6 h-6 mr-2" />}
        data={certifications.courses}
      />
    </div>
  </section>
);

export default Certifications;