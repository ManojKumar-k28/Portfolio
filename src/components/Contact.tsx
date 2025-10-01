import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Send,
  CheckCircle,
  Sparkles,
  Star,
  Users,
  Coffee
} from 'lucide-react';
import { contact } from '../data/portfolio';

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch('https://formspree.io/f/mandzron', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setIsSubmitted(false), 3000);
      } else {
        console.error('Form submission failed');
      }
    } catch (error) {
      console.error('Form submission error:', error);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      value: contact.email,
      link: `mailto:${contact.email}`,
      color: 'from-cyan-500 to-blue-600'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone',
      value: contact.phone,
      link: `tel:${contact.phone}`,
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Location',
      value: contact.location,
      link: null,
      color: 'from-purple-500 to-pink-600'
    }
  ];

  const socialLinks = [
    {
      icon: <Linkedin className="w-6 h-6" />,
      name: 'LinkedIn',
      url: contact.linkedin,
      color: 'from-blue-600 to-blue-700'
    },
    {
      icon: <Github className="w-6 h-6" />,
      name: 'GitHub',
      url: contact.github,
      color: 'from-gray-600 to-gray-700'
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Particles */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/30 to-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.2),rgba(255,255,255,0))]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(236,72,153,0.15),rgba(255,255,255,0))]"></div>
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full opacity-40 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            Get In Touch
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 text-white">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Let's Connect
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let’s collaborate and build something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Panel: Info */}
          <div className="space-y-8">
            <div className="grid grid-cols-1 gap-6">
              {contactInfo.map((item, index) => (
                <div key={index} className="group flex items-start">
                  <div
                    className={`w-14 h-14 bg-gradient-to-r ${item.color} rounded-xl flex items-center justify-center text-white shadow-lg mr-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1 group-hover:text-cyan-400 transition-colors duration-300">
                      {item.title}
                    </h4>
                    {item.link ? (
                      <a
                        href={item.link}
                        className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-gray-400">{item.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-2">Connect with me</h4>
              <div className="flex flex-col sm:flex-row gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group flex items-center px-6 py-3 bg-gradient-to-r ${social.color} text-white rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 font-medium`}
                  >
                    {social.icon}
                    <span className="ml-2">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
              <h4 className="text-lg font-semibold text-white mb-4">Quick Stats</h4>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <Star className="w-4 h-4 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-cyan-400">4+</div>
                  <div className="text-xs text-gray-400">Projects</div>
                </div>
                <div>
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <Users className="w-4 h-4 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-purple-400">9+</div>
                  <div className="text-xs text-gray-400">Technologies</div>
                </div>
                <div>
                  <div className="w-8 h-8 bg-gradient-to-r from-pink-400 to-red-500 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <Coffee className="w-4 h-4 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-pink-400">24/7</div>
                  <div className="text-xs text-gray-400">Learning</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Panel: Form */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-6">Send me a message</h3>

            {isSubmitted ? (
              <div className="text-center py-12">
                <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-green-400 mb-2">Message Sent!</h4>
                <p className="text-gray-300">Thanks for reaching out. I’ll respond soon!</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 text-white placeholder-gray-400"
                />
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Your email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 text-white placeholder-gray-400"
                />
                <textarea
                  name="message"
                  required
                  rows={6}
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 text-white placeholder-gray-400 resize-none"
                ></textarea>

                <input type="text" name="_gotcha" style={{ display: 'none' }} />

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Send size={20} />
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
