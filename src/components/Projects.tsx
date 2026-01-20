import { motion } from 'motion/react';
import { Github, ExternalLink, Code2 } from 'lucide-react';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce application with user authentication, shopping cart, and payment integration.',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    github: 'https://github.com',
    demo: 'https://example.com',
    status: 'completed'
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management tool with real-time updates and team collaboration features.',
    tags: ['React', 'Firebase', 'Tailwind CSS'],
    github: 'https://github.com',
    demo: 'https://example.com',
    status: 'completed'
  },
  {
    title: 'Weather Dashboard',
    description: 'A weather forecasting dashboard using real-time API data with interactive charts and maps.',
    tags: ['JavaScript', 'OpenWeather API', 'Chart.js'],
    github: 'https://github.com',
    demo: 'https://example.com',
    status: 'completed'
  },
  {
    title: 'Social Media Clone',
    description: 'A social media platform with posts, comments, likes, and user profiles.',
    tags: ['React', 'Express', 'PostgreSQL', 'AWS'],
    github: 'https://github.com',
    status: 'in-progress'
  },
  {
    title: 'AI Image Generator',
    description: 'An AI-powered image generation tool using machine learning models.',
    tags: ['Python', 'TensorFlow', 'Flask', 'React'],
    github: 'https://github.com',
    status: 'in-progress'
  },
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio website showcasing my projects and skills with a space theme.',
    tags: ['React', 'Tailwind CSS', 'Motion'],
    github: 'https://github.com',
    demo: 'https://example.com',
    status: 'completed'
  }
];

export function Projects() {
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
                className="bg-gray-800/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300 group"
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
    </section>
  );
}
