import { Project, Skill, Education, Contact } from '../types';
import internshipImg from "../assets/internship.jpg";

export const projects: Project[] = [
  {
    id: 'car-rental',
    title: 'Car Rental System',
    description: 'A comprehensive system for managing car rentals, featuring an intuitive booking interface and admin dashboard with real-time availability tracking.',
    image: 'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=600',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'SQL'],
    featured: true
  },
  {
    id: 'expense-tracker',
    title: 'Income & Expense Tracker',
    description: 'Smart financial management tool with detailed analytics, customizable reporting features, and budget planning capabilities.',
    image: 'https://images.pexels.com/photos/7821517/pexels-photo-7821517.jpeg?auto=compress&cs=tinysrgb&w=600',
    technologies: ['HTML5', 'CSS3', 'JavaScript'],
    featured: true
  },
  {
    id: 'weather-app',
    title: 'Weather Application',
    description: 'Modern weather app featuring real-time updates, location-based forecasts, interactive maps, and detailed weather analytics.',
    image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=600',
    technologies: ['React', 'API Integration', 'JavaScript'],
    featured: true
  },
  {
    id: 'personal-blog',
    title: 'Personal Blog Platform',
    description: 'Full-featured blogging platform with user authentication, content management, commenting system, and SEO optimization. Built with modern PHP architecture.',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
    technologies: ['PHP', 'MySQL', 'HTML5', 'CSS3', 'JavaScript'],
    featured: true
  }
];

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

export const contact: Contact = {
  email: 'kmanojkumar2874@gmail.com',
  phone: '+91 8144193599',
  location: 'Hosur, Tamil Nadu, India',
  linkedin: 'https://www.linkedin.com/in/manoj-kumar-28k',
  github: 'https://github.com/ManojKumar-k28'
};


export const certifications = {
  internships: [
    {
      title: "Web Development Intern",
      org: "ABC Tech",
      year: "2024",
      image: '',  // ✅ variable, not string
      link: "https://www.linkedin.com/posts/example-internship-cert",
    },
  ],
  hackathons: [
    {
      title: "Codechronos Hackathon",
      org: "Gov of India",
      year: "2025",
      image: internshipImg,   // ✅ variable
      link: "https://www.linkedin.com/posts/example-hackathon-cert",
    },
  ],
  courses: [
    {
      title: "React Mastery",
      platform: "Udemy", 
      year: "2024",
      image: '',       // ✅ variable
      link: "https://www.linkedin.com/posts/example-react-cert",
    },
  ],
};