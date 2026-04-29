import React from 'react';
import { Heart, ArrowUp, Sparkles } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8 relative border-t border-gray-700/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <p className="text-gray-400 flex items-center justify-center">
            © 2025 
            <span className="mx-2 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent font-semibold">
              Manoj Kumar
            </span>
            | Crafted with
            <Heart className="w-4 h-4 mx-1 text-red-500 fill-current animate-pulse" />
            and
            <Sparkles className="w-4 h-4 mx-1 text-yellow-400" />
            in India
          </p>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-full shadow-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center hover:shadow-xl transform hover:scale-110"
      >
        <ArrowUp className="w-6 h-6" />
      </button>
    </footer>
  );
};

export default Footer;