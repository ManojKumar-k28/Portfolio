// src/data/portfolio.ts
import { Project, Skill, Education, Contact } from '../types';

import internshipImg from "../../public/assets/internship.jpg";
import hackathon2 from "../../public/assets/hackathon2.png";
import hackathon3 from "../../public/assets/hack.jpg";
import internship1 from "../../public/assets/internship1.png";
import internship2 from "../../public/assets/internship2.png";
import react from "../../public/assets/react.png";
import python from "../../public/assets/python.png";
import typescript from "../../public/assets/typescript.png";
import datascience from "../../public/assets/Datascien.png";
import data from "../../public/assets/data.png";
import acquire from "../../public/assets/Acquiring.png";
import preprocess from "../../public/assets/preprocess.png";
import cyber from "../../public/assets/cyber.png";
import careers from "../../public/assets/careeress.png";

// Add placeholder image for missing certificates


// -------------------- PROJECTS --------------------
export const projects: Project[] = [
  {
    id: 'car-rental',
    title: 'Car Rental System',
    description: 'A comprehensive system for managing car rentals, featuring an intuitive booking interface and admin dashboard with real-time availability tracking.',
    image: 'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=600',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'SQL'],
 
  },
  {
    id: 'expense-tracker',
    title: 'Income & Expense Tracker',
    description: 'Smart financial management tool with detailed analytics, customizable reporting features, and budget planning capabilities.',
    image: 'https://images.pexels.com/photos/7821517/pexels-photo-7821517.jpeg?auto=compress&cs=tinysrgb&w=600',
     technologies: ['HTML5', 'CSS3', 'JavaScript','React', 'Express', 'MongoDB', 'Node.js'],

  },
  {
    id: 'weather-app',
    title: 'Weather Application',
    description: 'Modern weather app featuring real-time updates, location-based forecasts, interactive maps, and detailed weather analytics.',
    image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=600',
    technologies: ['React', 'API Integration', 'JavaScript'],

  },
  {
    id: 'personal-blog',
    title: 'Personal Blog Platform',
    description: 'Full-featured blogging platform with user authentication, content management, commenting system, and SEO optimization. Built with modern PHP architecture.',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
    technologies: ['PHP', 'MySQL', 'HTML5', 'CSS3', 'JavaScript'],

  }
];

// -------------------- SKILLS --------------------
export const skills: Skill[] = [
  { name: 'HTML5', level: 'Expert', icon: 'Code', category: 'frontend' },
  { name: 'CSS3', level: 'Advanced', icon: 'Palette', category: 'frontend' },
  { name: 'JavaScript', level: 'Intermediate', icon: 'Zap', category: 'frontend' },
  { name: 'React', level: 'Intermediate', icon: 'Code', category: 'frontend' },
  { name: 'Python', level: 'Intermediate', icon: 'FileCode', category: 'backend' },
  { name: 'Node.js', level: 'Intermediate', icon: 'Server', category: 'backend' },
  { name: 'PHP', level: 'Intermediate', icon: 'Globe', category: 'backend' },
  { name: 'SQL', level: 'Intermediate', icon: 'Database', category: 'database' },
  { name: 'MySQL', level: 'Intermediate', icon: 'HardDrive', category: 'database' }
];

// -------------------- EDUCATION --------------------
export const education: Education[] = [
  {
    id: 'mca',
    degree: 'Master of Computer Applications',
    institution: 'Adhiyamaan College of Engineering',
    duration: '2024 - 2026',
    status: 'pursuing'
  },
  {
    id: 'bsc',
    degree: 'B.Sc Computer Science',
    institution: 'KMG College of Arts and Science',
    duration: '2021 - 2024',
    grade: '8.4 CGPA',
    status: 'completed'
  },
  {
    id: 'hsc',
    degree: 'Higher Secondary',
    institution: 'Thiruvalluvar Higher Secondary School',
    duration: '2021',
    grade: '82.5%',
    status: 'completed'
  },
  {
    id: 'sslc',
    degree: 'Secondary School',
    institution: 'Thiruvalluvar Higher Secondary School',
    duration: '2019',
    grade: '76.4%',
    status: 'completed'
  }
];

// -------------------- CONTACT --------------------
export const contact: Contact = {
  email: 'kmanojkumar2874@gmail.com',
  phone: '+91 8144193599',
  location: 'Hosur, Tamil Nadu, India',
  linkedin: 'https://www.linkedin.com/in/manoj-kumar-28k',
  github: 'https://github.com/ManojKumar-k28'
};

// -------------------- CERTIFICATIONS --------------------
export const certifications = {
  internships: [
    {
      title: "Web Development Intern",
      org: "CodeSoft Technologies",
      year: "2025",
      image: internship1,
      link: "https://www.linkedin.com/posts/manoj-kumar-k28_internship-activity-7369424048608460802-XEQi?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEeFEFIB9iiy1WorgqQgQFlH8vysgJltwWE",
    },
    {
      title: "PHP Developer Intern",
      org: "Apex Planet Solutions",
      year: "2025",
      image: internship2,
      link: "https://www.linkedin.com/posts/manoj-kumar-k28_certificate-activity-7354880727819173888-BiOt?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEeFEFIB9iiy1WorgqQgQFlH8vysgJltwWE",
    },
  ],
  hackathons: [
    {
      title: "Codechronos Hackathon",
      org: "Codechronos",
      year: "2025",
      image: internshipImg,
      link: "https://www.linkedin.com/posts/manoj-kumar-k28_hackathon-activity-7373563005151662080-qpHA?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEeFEFIB9iiy1WorgqQgQFlH8vysgJltwWE",
    },
    {
      title: "HackShastra",
      org: "HackShastra",
      year: "2025",
      image: hackathon2,
      link: "https://www.linkedin.com/posts/example-hackathon-cert-2",
    },
    {
      title: "Hack the Cosmos'25",
      org: "SRM Institute of Science and Technology",
      year: "2025",
      image: hackathon3,
      link: "http://unstop.com/certificate-preview/85fa85d3-6138-4d9a-8d03-f92eed53f606",
    },
    
  ],
  courses: [
    {
      title: "React",
      platform: "Coursera",
      year: "2025",
      image: react,
      link: "https://www.linkedin.com/posts/example-react-cert",
    },
    {
      title: "Python",
      platform: "Coursera",
      year: "2025",
      image: python,
      link: "https://www.linkedin.com/posts/manoj-kumar-k28_completion-certificate-for-concepts-in-python-activity-7321991591919763457-Zy-c?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEeFEFIB9iiy1WorgqQgQFlH8vysgJltwWE",
    },
    {
      title: "Typescript for Beginners",
      platform: "Adhiyamaan College of Engineering",
      year: "2025",
      image: typescript,
      link: "https://www.linkedin.com/posts/manoj-kumar-k28_typescript-webdevelopment-frontenddevelopment-activity-7326562682415783936-aMbj?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEeFEFIB9iiy1WorgqQgQFlH8vysgJltwWE",
    },
    {
      title: "Datascience",
      platform: "Adhiyamaan College of Engineering",
      year: "2024",
      image: datascience,
      link: "https://www.linkedin.com/posts/manoj-kumar-k28_datascience-python-datasciencewithpython-activity-7326436182546886657-_s48?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEeFEFIB9iiy1WorgqQgQFlH8vysgJltwWE",
    },
    {
      title: "Exploratory Data Analysis",
      platform: "Future Skills Prime",
      year: "2025",
      image: data,
      link: "https://www.linkedin.com/posts/example-database-certhttps://www.linkedin.com/posts/manoj-kumar-k28_exploratorydataanalysis-futureskillsprime-activity-7337011731107389440-PDQ4?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEeFEFIB9iiy1WorgqQgQFlH8vysgJltwWE",
    },
    {
      title: "Acquiring Data (Level 1 - AI Fundamentals of AI ASCEND) by Accenture",
      platform: "Future Skills Prime",
      year: "2025",
      image: acquire,
      link: "https://www.linkedin.com/posts/example-database-cert",
    },
    {
      title: "Data Processing and Visualization (Level 2 - AI Ready of AI ASCEND) by Accenture",
      platform: "Future Skills Prime",
      year: "2025",
      image: preprocess,
      link: "https://www.linkedin.com/posts/example-database-cert",
    },
    {
      title: "Career Essentials in Cybersecurity by Microsoft and LinkedIn",
      platform: "Linkedin Learning",
      year: "2025",
      image: cyber,
      link: "https://www.linkedin.com/posts/manoj-kumar-k28_certificate-of-completion-activity-7286204639534817280-K-rL?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEeFEFIB9iiy1WorgqQgQFlH8vysgJltwWE",
    },
    {
      title: "Career Essentials in Generative AI by Microsoft and LinkedIn",
      platform: "Linkedin Learning",
      year: "2025",
      image: careers,
      link: "https://www.linkedin.com/posts/manoj-kumar-k28_certificate-of-completion-activity-7316073154760609792-rY-o?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEeFEFIB9iiy1WorgqQgQFlH8vysgJltwWE",
    },
  ],
};
