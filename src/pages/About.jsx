import { motion } from 'framer-motion'
import { Code2, Coffee, Users, Award } from 'lucide-react'

const About = () => {
  const stats = [
    { icon: Code2, label: 'Projects Completed', value: '20+' },
    { icon: Users, label: 'Happy Clients', value: '15+' },
    { icon: Coffee, label: 'Coffee Consumed', value: '500+' },
    { icon: Award, label: 'Years Experience', value: '3+' },
  ]

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-20"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left column - description */}
          <div className="space-y-6">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I'm a passionate Fullstack Developer with a love for creating elegant solutions to complex problems. 
              My journey in web development started 3 years ago, and since then I've worked on various projects 
              ranging from small business websites to large-scale applications.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I believe in writing clean, maintainable code and always strive to learn new technologies. 
              When I'm not coding, you can find me exploring the latest tech trends, contributing to open source, 
              or enjoying a good cup of coffee.
            </p>
          </div>

          {/* Right column - info cards */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100 dark:border-gray-700"
              >
                <stat.icon className="w-8 h-8 text-blue-600 dark:text-blue-400 mb-3" />
                <div className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Additional fun facts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-semibold text-center mb-8">Fun Facts</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-full">⚡ Love solving puzzles</span>
            <span className="px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200 rounded-full">📚 Avid reader</span>
            <span className="px-4 py-2 bg-pink-100 dark:bg-pink-900/30 text-pink-800 dark:text-pink-200 rounded-full">🎸 Play guitar</span>
            <span className="px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 rounded-full">🌍 Love traveling</span>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default About