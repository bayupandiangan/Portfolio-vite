import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Github, Linkedin } from 'lucide-react'

const Home = () => {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800" />
      
      {/* Abstract shapes (blobs) */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
      <div className="absolute top-0 right-0 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
      <div className="absolute bottom-0 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Left column - text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 text-center md:text-left"
          >
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Your Name
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mt-4">
              Fullstack Developer crafting amazing web experiences with React & Node.js
            </p>
            <p className="text-lg text-gray-500 dark:text-gray-400 mt-2 max-w-xl">
              I build responsive, performant, and beautiful web applications.
            </p>
            
            <div className="flex flex-wrap gap-4 mt-8 justify-center md:justify-start">
              <Link
                to="/projects"
                className="group px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 hover:scale-105 flex items-center gap-2"
              >
                View My Work
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="px-6 py-3 bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-white rounded-xl font-medium hover:bg-gray-300 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-105"
              >
                Contact Me
              </Link>
            </div>

            <div className="flex gap-4 mt-8 justify-center md:justify-start">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-200 dark:bg-gray-800 rounded-full hover:bg-gray-300 dark:hover:bg-gray-700 transition">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-200 dark:bg-gray-800 rounded-full hover:bg-gray-300 dark:hover:bg-gray-700 transition">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </motion.div>

          {/* Right column - visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1"
          >
            <div className="relative">
              {/* Placeholder ilustrasi - ganti dengan gambar avatar jika ada */}
              <div className="w-64 h-64 md:w-80 md:h-80 mx-auto bg-gradient-to-br from-blue-400 to-purple-400 rounded-3xl rotate-6 shadow-2xl flex items-center justify-center text-white text-8xl">
                👨‍💻
              </div>
              {/* Decorative blur elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-500 rounded-full opacity-20 blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-purple-500 rounded-full opacity-20 blur-2xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Home