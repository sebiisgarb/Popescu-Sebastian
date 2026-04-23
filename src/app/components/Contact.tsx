import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Mail, Phone, MapPin, Github, Send } from 'lucide-react';

const contactInfo = [
  { icon: Phone, label: 'Phone', value: '+40 738 324 528', href: 'tel:+40738324528' },
  { icon: Mail, label: 'Email', value: 'contact@sebastian-popescu.com', href: 'mailto:contact@sebastian-popescu.com' },
  { icon: MapPin, label: 'Location', value: 'Constanța / Bucharest', href: null },
  { icon: Github, label: 'GitHub', value: 'github.com/sebiisgarb', href: 'https://github.com/sebiisgarb' },
];

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:contact@sebastian-popescu.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
    window.location.href = mailtoLink;
    setStatus('success');
    setTimeout(() => { setFormData({ name: '', email: '', subject: '', message: '' }); setStatus('idle'); }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const inputClass = 'w-full px-4 py-3 rounded-xl bg-[#070b14] border border-slate-800 text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/40 transition-all duration-200 text-base';

  return (
    <section id="contact" ref={ref} className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0a0f1e] relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/15 to-transparent" />
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[500px] h-[500px] bg-indigo-700/8 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 text-xs tracking-widest uppercase mb-4">
            Contact
          </div>
          <h2 className="text-5xl sm:text-6xl text-white mb-5">
            Get In <span className="text-indigo-400">Touch</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Always open to discussing new projects, creative ideas, or opportunities.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          {contactInfo.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              {item.href ? (
                <a
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="group flex flex-col h-full bg-[#0e1527] border border-slate-800 hover:border-indigo-500/30 rounded-xl p-5 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-900/15 hover:-translate-y-0.5"
                >
                  <div className="w-9 h-9 rounded-lg bg-indigo-500/10 border border-indigo-500/15 flex items-center justify-center mb-4 group-hover:bg-indigo-500/20 transition-colors">
                    <item.icon className="w-4 h-4 text-indigo-400" />
                  </div>
                  <div className="text-xs text-slate-600 mb-1">{item.label}</div>
                  <div className="text-slate-300 text-base break-words">{item.value}</div>
                </a>
              ) : (
                <div className="flex flex-col h-full bg-[#0e1527] border border-slate-800 rounded-xl p-5">
                  <div className="w-9 h-9 rounded-lg bg-indigo-500/10 border border-indigo-500/15 flex items-center justify-center mb-4">
                    <item.icon className="w-4 h-4 text-indigo-400" />
                  </div>
                  <div className="text-xs text-slate-600 mb-1">{item.label}</div>
                  <div className="text-slate-300 text-base">{item.value}</div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="max-w-2xl mx-auto"
        >
          <h3 className="text-2xl text-white text-center mb-8">Send Me a Message</h3>
          <form onSubmit={handleSubmit} className="bg-[#0e1527] border border-slate-800 rounded-2xl p-8 space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs text-slate-600 mb-2 uppercase tracking-wide">Name *</label>
                <input type="text" name="name" required value={formData.name} onChange={handleChange} className={inputClass} placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-xs text-slate-600 mb-2 uppercase tracking-wide">Email *</label>
                <input type="email" name="email" required value={formData.email} onChange={handleChange} className={inputClass} placeholder="john@example.com" />
              </div>
            </div>
            <div>
              <label className="block text-xs text-slate-600 mb-2 uppercase tracking-wide">Subject *</label>
              <input type="text" name="subject" required value={formData.subject} onChange={handleChange} className={inputClass} placeholder="Project Inquiry" />
            </div>
            <div>
              <label className="block text-xs text-slate-600 mb-2 uppercase tracking-wide">Message *</label>
              <textarea name="message" required value={formData.message} onChange={handleChange} rows={5} className={`${inputClass} resize-none`} placeholder="Tell me about your project..." />
            </div>
            <button type="submit" className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium transition-colors duration-200 text-sm">
              <Send className="w-4 h-4" /> Send Message
            </button>
            {status === 'success' && (
              <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-sm text-center">
                ✓ Your email client will open shortly!
              </div>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}
