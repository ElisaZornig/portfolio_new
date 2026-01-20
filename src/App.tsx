import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { StarField } from './components/StarField';
import { Navigation } from './components/Navigation';
import { Planets } from './components/Planets';

export default function App() {
  return (
    <div className="relative min-h-screen bg-gray-900 text-white overflow-x-hidden">
      <StarField />
      {/*<Planets />*/}
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}