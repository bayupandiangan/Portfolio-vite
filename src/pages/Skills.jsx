import { motion } from 'framer-motion'
import { 
  Code2, 
  Database, 
  Globe, 
  Server, 
  Terminal, 
  Figma, 
  GitBranch 
} from "lucide-react";
import SkillCard from '../components/SkillCard'

const Skills = () => {
  const skillsData = {
    frontend: [
      { name: 'React', icon: Code2, level: 90, color: 'bg-blue-500' },
      { name: 'Next.js', icon: Globe, level: 85, color: 'bg-black dark:bg-white' },
      { name: 'Tailwind CSS', icon: Figma, level: 95, color: 'bg-cyan-500' },
    ],
    backend: [
      { name: 'Node.js', icon: Server, level: 85, color: 'bg-green-600' },
      { name: 'Python', icon: Terminal, level: 80, color: 'bg-yellow-600' },
      { name: 'PostgreSQL', icon: Database, level: 75, color: 'bg-blue-700' },
    ],
    tools: [
      { name: 'Git', icon: GitBranch, level: 90, color: 'bg-orange-600' },
      { name: 'Figma', icon: Figma, level: 65, color: 'bg-purple-600' },
    ],
  }

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
        
        {/* Title */}
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
        >
          Tech Stack
        </motion.h2>

        {/* Subtitle */}
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto"
        >
          Tools and technologies I work with daily to build amazing applications.
        </motion.p>

        {/* Frontend */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6">Frontend</h3>
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {skillsData.frontend.map((skill) => (
              <motion.div key={skill.name} variants={itemVariants}>
                <SkillCard {...skill} />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Backend */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6">Backend</h3>
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {skillsData.backend.map((skill) => (
              <motion.div key={skill.name} variants={itemVariants}>
                <SkillCard {...skill} />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Tools */}
        <div>
          <h3 className="text-2xl font-semibold mb-6">Tools & Others</h3>
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {skillsData.tools.map((skill) => (
              <motion.div key={skill.name} variants={itemVariants}>
                <SkillCard {...skill} />
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  )
}

export default Skills