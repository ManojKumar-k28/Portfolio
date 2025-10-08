export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
}

export interface Skill {
  name: string;
  level: string;
  icon: string;
  category: string;
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  duration: string;
  grade?: string;
  status: 'pursuing' | 'completed';
}

export interface Contact {
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  github: string;
}
// src/types/certification.ts
export interface Certification {
  title: string;
  org?: string;       // For internships/hackathons
  platform?: string;  // For courses
  year: string;
  image: string;      // Path from public folder
  link?: string;      // Optional URL
}

export interface Certification {
  internships: Certification[];
  hackathons: Certification[];
  courses: Certification[];
}
