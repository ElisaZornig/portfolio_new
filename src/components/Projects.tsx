import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Github, ExternalLink, Code2 } from 'lucide-react';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce application with user authentication, shopping cart, and payment integration.',
    details:
      'Built with a scalable Node.js API and a React storefront, featuring secure authentication, cart persistence, and checkout flows designed for a fast, mobile-first experience.',
    images: [
      {
        src: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=1200&q=80',
        alt: 'E-commerce analytics dashboard with charts'
      },
      {
        src: 'https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1200&q=80',
        alt: 'Checkout flow with payment terminal'
      }
    ],
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    github: 'https://github.com',
    demo: 'https://example.com',
    status: 'completed'
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management tool with real-time updates and team collaboration features.',
    details:
      'Includes role-based boards, activity timelines, and live updates for teammates, with a focus on lightweight collaboration and clean task organization.',
    images: [
      {
        src: 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1200&q=80',
        alt: 'Team planning session with sticky notes'
      },
      {
        src: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=80',
        alt: 'Kanban style task board on screen'
      }
    ],
    tags: ['React', 'Firebase', 'Tailwind CSS'],
    github: 'https://github.com',
    demo: 'https://example.com',
    status: 'completed'
  },
  {
    title: 'Weather Dashboard',
    description: 'A weather forecasting dashboard using real-time API data with interactive charts and maps.',
    details:
      'Delivers multi-day forecasts, map-based views, and dynamic charts, pulling from real-time weather APIs with performance-focused data caching.',
    images: [
      {
        src: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80',
        alt: 'Weather data dashboard with charts'
      },
      {
        src: 'https://images.unsplash.com/photo-1526498460520-4c246339dccb?auto=format&fit=crop&w=1200&q=80',
        alt: 'Satellite style map visualization'
      }
    ],
    tags: ['JavaScript', 'OpenWeather API', 'Chart.js'],
    github: 'https://github.com',
    demo: 'https://example.com',
    status: 'completed'
  },
  {
    title: 'Social Media Clone',
    description: 'A social media platform with posts, comments, likes, and user profiles.',
    details:
      'Designed a full social experience with responsive feeds, profile customization, and secure authentication, backed by a relational data model.',
    images: [
      {
        src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80',
        alt: 'People collaborating in a social setting'
      },
      {
        src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1200&q=80',
        alt: 'Profile portrait for user avatars'
      }
    ],
    tags: ['React', 'Express', 'PostgreSQL', 'AWS'],
    github: 'https://github.com',
    status: 'in-progress'
  },
  {
    title: 'AI Image Generator',
    description: 'An AI-powered image generation tool using machine learning models.',
    details:
      'Integrates a model-serving layer with a sleek UI for prompt control, job queuing, and downloadable high-resolution outputs.',
    images: [
      {
        src: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=80',
        alt: 'AI workstation with robotic assistant'
      },
      {
        src: 'https://images.unsplash.com/photo-1527430253228-e93688616381?auto=format&fit=crop&w=1200&q=80',
        alt: 'Creative studio with digital art tools'
      }
    ],
    tags: ['Python', 'TensorFlow', 'Flask', 'React'],
    github: 'https://github.com',
    status: 'in-progress'
  },
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio website showcasing my projects and skills with a space theme.',
    details:
      'Highlights project stories, skill breakdowns, and polished animations, crafted as a visually rich single-page experience.',
    images: [
      {
        src: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80',
        alt: 'Nebula-inspired space background'
      },
      {
        src: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=1200&q=80',
        alt: 'Starry night sky with galaxy glow'
      }
    ],
    tags: ['React', 'Tailwind CSS', 'Motion'],
    github: 'https://github.com',
    demo: 'https://example.com',
    status: 'completed'
  }
];

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[number] | null>(null);

  useEffect(() => {
    if (!selectedProject) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedProject(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedProject]);

  useEffect(() => {
    if (selectedProject) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [selectedProject]);

  return (
    <section id="projects" className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              My Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-16" />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300 group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400/70"
                role="button"
                tabIndex={0}
                onClick={() => setSelectedProject(project)}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    setSelectedProject(project);
                  }
                }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Code2 className="w-6 h-6 text-purple-400" />
                  </div>
                  {project.status === 'in-progress' && (
                    <span className="px-3 py-1 bg-yellow-500/20 border border-yellow-500/40 rounded-full text-xs text-yellow-300">
                      In Progress
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-purple-500/10 border border-purple-500/30 rounded-full text-xs text-purple-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors"
                    onClick={(event) => event.stopPropagation()}
                  >
                    <Github className="w-5 h-5" />
                    <span className="text-sm">Code</span>
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors"
                      onClick={(event) => event.stopPropagation()}
                    >
                      <ExternalLink className="w-5 h-5" />
                      <span className="text-sm">Demo</span>
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center px-6 py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              type="button"
              className="absolute inset-0 bg-gray-950/70 backdrop-blur-sm"
              aria-label="Close project details"
              onClick={() => setSelectedProject(null)}
            />
            <motion.div
              className="relative w-full max-w-4xl bg-gray-900/95 border border-purple-500/30 rounded-2xl p-8 shadow-2xl shadow-purple-500/10 max-h-[85vh] overflow-y-auto"
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 20 }}
              transition={{ duration: 0.2 }}
              role="dialog"
              aria-modal="true"
              aria-labelledby="project-modal-title"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500/30 to-pink-500/20 rounded-lg flex items-center justify-center">
                    <Code2 className="w-6 h-6 text-purple-300" />
                  </div>
                  <div>
                    <h3 id="project-modal-title" className="text-2xl font-semibold text-white">
                      {selectedProject.title}
                    </h3>
                    <p className="text-sm text-purple-200/80">
                      {selectedProject.status === 'in-progress' ? 'In progress' : 'Completed'}
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  className="text-gray-400 hover:text-white transition-colors"
                  onClick={() => setSelectedProject(null)}
                >
                  ✕
                </button>
              </div>

              <p className="text-gray-300 mt-6 leading-relaxed">{selectedProject.description}</p>
              <p className="text-gray-400 mt-4 leading-relaxed">{selectedProject.details}</p>

              <div className="grid gap-4 mt-6 sm:grid-cols-2">
                {selectedProject.images.map((image) => (
                  <div
                    key={image.src}
                    className="relative overflow-hidden rounded-xl border border-purple-500/20"
                  >
                    <img src={image.src} alt={image.alt} className="h-48 w-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-transparent to-transparent" />
                    <p className="absolute bottom-3 left-4 right-4 text-xs text-gray-200">{image.alt}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 mt-6">
                {selectedProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-purple-500/10 border border-purple-500/30 rounded-full text-xs text-purple-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 mt-8">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-purple-500/40 px-4 py-2 text-sm text-purple-200 hover:bg-purple-500/10 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  View Code
                </a>
                {selectedProject.demo && (
                  <a
                    href={selectedProject.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-pink-500/40 px-4 py-2 text-sm text-pink-200 hover:bg-pink-500/10 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
