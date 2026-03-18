import { motion } from 'framer-motion'
import ProjectCard from '../components/ProjectCard'

// Placeholder images (ganti dengan gambar asli)
import project1 from '../assets/project1.jpg' // Anda perlu menyimpan gambar di folder assets
import project2 from '../assets/project2.jpg'
import project3 from '../assets/project3.jpg'
import project4 from '../assets/project4.jpg'

const Projects = () => {
  const projects = [
  {
    title: 'AI-Powered Task Manager',
    description: 'Smart task management app with AI-generated task suggestions, priority scoring, and productivity insights dashboard.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c',
    tags: ['React', 'Node.js', 'OpenAI', 'MongoDB'],
    liveLink: '#',
    codeLink: '#',
    featured: true,
  },

  {
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce platform with product management, cart system, Stripe payment integration, and admin dashboard.',
    image: 'https://images.unsplash.com/photo-1515168833906-d2a3b82b302a',
    tags: ['Next.js', 'Stripe', 'Tailwind', 'Prisma'],
    liveLink: '#',
    codeLink: '#',
    featured: true,
  },

  {
    title: 'Coffee Shop POS (Desktop App)',
    description: 'Offline-first cashier application built with Electron and SQLite, supporting multi-user login and thermal receipt printing (ESC/POS).',
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93',
    tags: ['Electron', 'SQLite', 'JavaScript', 'Node.js'],
    liveLink: '#',
    codeLink: '#',
    featured: true,
  },

  {
    title: 'RekomSaham (TOPSIS System)',
    description: 'Decision support system for stock recommendation using TOPSIS method with full calculation steps, ranking, and PDF export.',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3',
    tags: ['PHP', 'MySQL', 'JavaScript', 'CSS'],
    liveLink: '#',
    codeLink: '#',
  },

  {
    title: 'StockBase Inventory System',
    description: 'Inventory management system with CRUD operations, stock tracking, authentication, and responsive dashboard.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d',
    tags: ['PHP', 'MySQL', 'Bootstrap', 'JavaScript'],
    liveLink: '#',
    codeLink: '#',
  },

  {
    title: 'Realtime Chat App',
    description: 'Full-stack realtime chat application with authentication, typing indicators, and live messaging using WebSocket.',
    image: 'https://images.unsplash.com/photo-1525182008055-f88b95ff7980',
    tags: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
    liveLink: '#',
    codeLink: '#',
  },

  {
    title: 'Personal Finance Tracker',
    description: 'Finance tracking app with expense categorization, monthly analytics, and data visualization dashboard.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f',
    tags: ['React', 'Chart.js', 'Node.js', 'Express'],
    liveLink: '#',
    codeLink: '#',
  },

  {
    title: 'Modern Portfolio Website',
    description: 'Responsive portfolio website with animations, dark mode, and optimized performance using Next.js.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
    tags: ['Next.js', 'Tailwind', 'Framer Motion'],
    liveLink: '#',
    codeLink: '#',
  },

  {
    title: 'Booking System (Service App)',
    description: 'Online booking system for services with scheduling, user authentication, and admin management panel.',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f',
    tags: ['Next.js', 'Node.js', 'MySQL', 'Tailwind'],
    liveLink: '#',
    codeLink: '#',
  }
]
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  }

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
        >
          Featured Projects
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto"
        >
          A selection of my best work, showcasing my skills and passion for building impactful applications.
        </motion.p>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project) => (
            <motion.div key={project.title} variants={itemVariants}>
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects