import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, Send, User, MessageSquare } from 'lucide-react'
import { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          'form-name': 'contact',
          ...formData,
        }).toString(),
      })

      alert('✅ Message sent successfully!')

      setFormData({
        name: '',
        email: '',
        message: '',
      })
    } catch (error) {
      alert('❌ Failed to send message')
    }
  }

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">

        {/* TITLE */}
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
        >
          Let's Work Together
        </motion.h2>

        {/* DESC */}
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto"
        >
          Have a project in mind? I'd love to hear about it.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-8 items-start max-w-5xl mx-auto">

          {/* LEFT */}
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
              <Mail className="w-6 h-6 text-blue-600" />
              <a href="mailto:bayuurip14@gmail.com">bayuurip14@gmail.com</a>
            </div>

            <div className="flex items-center gap-4 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
              <Github className="w-6 h-6 text-blue-600" />
              <a href="https://github.com/bayupandiangan">@bayupandiangan</a>
            </div>

            <div className="flex items-center gap-4 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
              <Linkedin className="w-6 h-6 text-blue-600" />
              <a href="https://linkedin.com/in/bayu-pandiangan">Bayu Pandiangan</a>
            </div>
          </div>

          {/* FORM */}
          <div className="bg-white/70 dark:bg-gray-800/70 rounded-2xl p-8 shadow-xl">

            <form
              name="contact"
              method="POST"
              data-netlify="true"
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              {/* WAJIB */}
              <input type="hidden" name="form-name" value="contact" />

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full p-3 border rounded-xl"
                required
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full p-3 border rounded-xl"
                required
              />

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                className="w-full p-3 border rounded-xl"
                required
              />

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-xl"
              >
                Send Message
              </button>
            </form>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact