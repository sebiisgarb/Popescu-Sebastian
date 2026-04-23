import { Link, useLocation, useNavigate } from 'react-router';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll } from 'motion/react';

export function Navigation() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { to: '/', label: 'Home' },
    { to: '/projects', label: 'Projects' },
  ];

  const handleContact = () => {
    setIsOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Scroll progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-indigo-500 via-violet-500 to-cyan-500 z-[100] origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#070b14]/85 backdrop-blur-xl border-b border-indigo-500/10 shadow-lg shadow-black/20'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="text-xl font-bold">
              <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
                SP
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {links.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`text-sm transition-all duration-200 relative group ${
                    location.pathname === link.to
                      ? 'text-indigo-400'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-0.5 left-0 w-full h-px bg-gradient-to-r from-indigo-400 to-violet-400 transform origin-left transition-transform duration-300 ${
                      location.pathname === link.to
                        ? 'scale-x-100'
                        : 'scale-x-0 group-hover:scale-x-100'
                    }`}
                  />
                </Link>
              ))}
              <button
                onClick={handleContact}
                className="text-sm text-slate-400 hover:text-white transition-colors relative group"
              >
                Contact
                <span className="absolute -bottom-0.5 left-0 w-full h-px bg-gradient-to-r from-indigo-400 to-violet-400 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/50 transition-colors"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden overflow-hidden bg-[#070b14]/95 backdrop-blur-xl border-b border-slate-800"
            >
              <div className="px-4 py-4 space-y-1">
                {links.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-2.5 rounded-lg text-sm transition-colors ${
                      location.pathname === link.to
                        ? 'bg-indigo-500/15 text-indigo-400'
                        : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <button
                  onClick={handleContact}
                  className="block w-full text-left px-4 py-2.5 rounded-lg text-sm text-slate-400 hover:text-white hover:bg-slate-800/50 transition-colors"
                >
                  Contact
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
