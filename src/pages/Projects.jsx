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
      description: 'A smart task management app with AI suggestions and real-time collaboration.',
      image: 'https://images.unsplash.com/...', // ganti dengan URL gambar atau import lokal
      tags: ['React', 'Node.js', 'OpenAI', 'MongoDB'],
      liveLink: 'https://example.com',
      codeLink: 'https://github.com',
      featured: true,
    },
    {
      title: 'E-Commerce Platform',
      description: 'Full-featured e-commerce with cart, payments, and admin dashboard.',
      image: 'https://images.unsplash.com/...',
      tags: ['Next.js', 'Stripe', 'Tailwind', 'Prisma'],
      liveLink: 'https://example.com',
      codeLink: 'https://github.com',
    },
    {
      title: 'Portfolio 2025',
      description: 'Modern portfolio with smooth animations and dark mode.',
      image: 'https://images.unsplash.com/...',
      tags: ['React', 'Framer Motion', 'Tailwind'],
      liveLink: 'https://example.com',
      codeLink: 'https://github.com',
    },
      {
    title: 'RekomSaham',
    description: 'A stock recommendation system using the TOPSIS method to rank companies based on fundamental ratios. Includes full calculation process, data visualization, and PDF export for analysis.',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3',
    tags: ['PHP', 'MySQL', 'JavaScript', 'CSS'],
    liveLink: '#',
    codeLink: '#',
      },
  {
    title: 'StockBase',
    description: 'A stock management system for product inventory with CRUD operations, user authentication, and responsive dashboard interface.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d',
    tags: ['PHP', 'MySQL', 'Bootstrap', 'JavaScript'],
    liveLink: '#',
    codeLink: '#',
  },
  {
    title: 'Eating Order Apps',
    description: 'A basic food ordering application that simulates menu selection, order calculation, and simple interactive UI.',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836',
    tags: ['JavaScript', 'HTML', 'CSS'],
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