import { Navigation } from './Navigation';
import { Hero } from './Hero';
import { About } from './About';
import { Skills } from './Skills';
import { Experience } from './Experience';
import { Contact } from './Contact';
import { Footer } from './Footer';

export function Home() {
  return (
    <div className="min-h-screen bg-[#070b14]">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Contact />
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <img
            src="http://imagine.sebastian-popescu.com/pixel"
            alt="Imagine portofoliu"
            className="w-full h-auto rounded-2xl border border-slate-800"
            loading="lazy"
          />
        </div>
      </section>
      <Footer />
    </div>
  );
}
