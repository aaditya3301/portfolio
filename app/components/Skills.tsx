'use client';

import { motion } from 'framer-motion';

const skillCategories = [
  {
    icon: '🤖',
    category: 'AI & Machine Learning',
    skills: ['TensorFlow', 'PyTorch', 'LLMs', 'RAGs', 'OpenCV', 'NLP', 'Keras', 'SpaCy']
  },
  {
    icon: '☁️',
    category: 'Cloud & DevOps',
    skills: ['AWS', 'GCP', 'Lambda', 'Bedrock', 'Docker', 'CI/CD', 'Serverless']
  },
  {
    icon: '💻',
    category: 'Development',
    skills: ['TypeScript', 'Python', 'Next.js', 'React', 'Node.js', 'Flask', 'Socket.IO']
  },
  {
    icon: '🗄️',
    category: 'Databases',
    skills: ['PostgreSQL', 'MongoDB', 'DynamoDB', 'Redis', 'Pinecone']
  }
];

export default function Skills() {
  return (
    <section id="skills" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <span className="section-label">Expertise</span>
          <h2 className="section-title">
            Tech <span className="text-gradient">Stack</span>
          </h2>
        </motion.div>

        <div className="skills-grid">
          {skillCategories.map((cat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="skill-card"
            >
              <div className="skill-card-header">
                <div className="skill-icon">{cat.icon}</div>
                <span className="skill-category">{cat.category}</span>
              </div>
              <div className="skill-tags">
                {cat.skills.map((skill, i) => (
                  <span key={i} className="skill-tag">{skill}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
