# Dynamic Portfolio Application

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Features a sleek dark theme with gradient accents, smooth animations, and a professional design.

## 🚀 Features

- **Modern Design**: Dark theme with cyan-purple gradient accents
- **Fully Responsive**: Optimized for all devices and screen sizes
- **Interactive Animations**: Smooth hover effects and micro-interactions
- **Dynamic Content**: Rotating role titles and animated elements
- **Contact Form**: Working contact form with Formspree integration
- **Professional Sections**: Hero, About, Skills, Education, Projects, and Contact

## 🛠️ Technologies Used

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Form Handling**: Formspree
- **Deployment**: Ready for Netlify/Vercel

## 📱 Responsive Design

The portfolio is built with a mobile-first approach and includes:
- Responsive navigation with mobile menu
- Adaptive layouts for different screen sizes
- Optimized images and content for all devices
- Touch-friendly interactions

## 🎨 Design Features

- **Mirror Backgrounds**: Radial gradients for depth
- **Floating Particles**: Animated background elements
- **Gradient Text**: Eye-catching headings
- **Glass Morphism**: Backdrop blur effects
- **Smooth Transitions**: Professional animations

## 📂 Project Structure

```
src/
├── components/
│   ├── About.tsx          # About section with personal highlights
│   ├── Contact.tsx        # Contact form and information
│   ├── Education.tsx      # Education timeline
│   ├── Footer.tsx         # Footer component
│   ├── Header.tsx         # Navigation header
│   ├── Hero.tsx          # Landing section
│   ├── LoadingScreen.tsx  # Initial loading animation
│   ├── Projects.tsx       # Featured projects showcase
│   ├── Skills.tsx         # Skills and expertise
│   └── image.jpg         # Profile image
├── data/
│   └── portfolio.ts       # Portfolio data and content
├── types/
│   └── index.ts          # TypeScript type definitions
├── App.tsx               # Main application component
├── index.css             # Global styles and animations
└── main.tsx              # Application entry point
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 📝 Customization

### Personal Information

Update the portfolio data in `src/data/portfolio.ts`:

```typescript
export const contact: Contact = {
  email: 'your.email@example.com',
  phone: '+1 234 567 8900',
  location: 'Your City, Country',
  linkedin: 'https://linkedin.com/in/yourprofile',
  github: 'https://github.com/yourusername'
};
```

### Profile Image

Replace `src/components/image.jpg` with your own profile image.

### Projects

Add your projects to the `projects` array in `src/data/portfolio.ts`:

```typescript
{
  id: 'project-id',
  title: 'Project Title',
  description: 'Project description...',
  image: 'https://your-image-url.com',
  technologies: ['React', 'TypeScript', 'Tailwind'],
  featured: true
}
```

### Skills

Update the skills array with your technologies:

```typescript
{ 
  name: 'Technology Name', 
  level: 'Expert/Advanced/Intermediate', 
  icon: IconComponent, 
  category: 'frontend/backend/database',
  color: 'from-color-500 to-color-600'
}
```

## 🎯 Performance Features

- **Optimized Images**: Responsive image loading
- **Code Splitting**: Efficient bundle management
- **Smooth Animations**: Hardware-accelerated transitions
- **SEO Ready**: Proper meta tags and structure

## 📧 Contact Form Setup

The contact form uses Formspree for handling submissions. To set up:

1. Create a Formspree account at [formspree.io](https://formspree.io)
2. Create a new form and get your form ID
3. Update the form action URL in `src/components/Contact.tsx`

## 🚀 Deployment

### Netlify

1. Build the project:
```bash
npm run build
```

2. Deploy the `dist` folder to Netlify

### Vercel

1. Connect your repository to Vercel
2. Set build command: `npm run build`
3. Set output directory: `dist`

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](issues).

## 👨‍💻 Author

**Manoj Kumar**
- LinkedIn: [manoj-kumar-28k](https://www.linkedin.com/in/manoj-kumar-28k)
- GitHub: [ManojKumar-k28](https://github.com/ManojKumar-k28)
- Email: kmanojkumar2874@gmail.com

## 🙏 Acknowledgments

- Design inspiration from modern portfolio websites
- Icons by [Lucide React](https://lucide.dev)
- Images from [Pexels](https://pexels.com)
- Built with [Vite](https://vitejs.dev) and [React](https://reactjs.org)

---

⭐ Star this repository if you found it helpful!