import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
}

const Header: React.FC<HeaderProps> = ({ activeSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    {name: 'Certifications', href: '#certifications' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-slate-900/80 backdrop-blur-md border-b border-gray-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-black">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Manoj Kumar
              </span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href.substring(1))}
                className={`text-sm font-medium transition-all duration-300 relative ${
                  activeSection === item.href.substring(1)
                    ? 'text-cyan-400'
                    : 'text-gray-300 hover:text-cyan-400'
                }`}
              >
                {item.name}
                {activeSection === item.href.substring(1) && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"></div>
                )}
              </button>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-300 hover:text-cyan-400 transition-colors duration-300"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-800/95 backdrop-blur-md border-t border-gray-700/50">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href.substring(1))}
                className={`block w-full text-left px-3 py-2 text-base font-medium transition-all duration-300 rounded-lg ${
                  activeSection === item.href.substring(1)
                    ? 'text-cyan-400 bg-cyan-400/10'
                    : 'text-gray-300 hover:text-cyan-400 hover:bg-gray-700/50'
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;