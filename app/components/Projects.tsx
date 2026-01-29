'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import VanillaTilt from 'vanilla-tilt';

const projects = [
  {
    icon: '🧠',
    title: 'Prism Insights',
    subtitle: 'AWS AI Agent Ecosystem',
    date: '2025',
    description: 'Multi-agent AI analytics platform powered by AWS Bedrock, Lambda, and DynamoDB. Optimizes MSP operations with real-time insights and autonomous intelligence.',
    tags: ['AWS Bedrock', 'Lambda', 'DynamoDB', 'Multi-Agent AI'],
    link: 'https://github.com/aaditya3301'
  },
  {
    icon: '🎙️',
    title: 'P.A.R.T.H',
    subtitle: 'GCP AI Interaction System',
    date: '2025',
    description: 'Real-time human-AI interaction interface with live video, speech processing, and neural response streaming over secure WebSocket connections.',
    tags: ['GCP', 'WebSockets', 'Speech AI', 'Real-time'],
    link: 'https://github.com/aaditya3301'
  },
  {
    icon: '⚖️',
    title: 'LexBharat',
    subtitle: 'Legal Intelligence Platform',
    date: '2025',
    description: 'Cloud-native AI platform that transforms complex Indian legal documents into clear, actionable insights using LLMs and serverless architecture.',
    tags: ['LLMs', 'GCP', 'Serverless', 'Legal AI'],
    link: 'https://github.com/aaditya3301/LexBharat'
  },
  {
    icon: '📞',
    title: 'Tea',
    subtitle: 'Meeting Automation',
    date: '2025',
    description: 'AI system for real-time call transcription and automated task execution. Integrates with Google Meet, Zoom, and Teams.',
    tags: ['LLMs', 'APIs', 'Transcription', 'Automation'],
    link: 'https://github.com/aaditya3301'
  }
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const cardRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (cardRef.current) {
      VanillaTilt.init(cardRef.current, {
        max: 5,
        speed: 400,
        glare: true,
        'max-glare': 0.2,
      });
    }

    return () => {
      if (cardRef.current) {
        const instance = cardRef.current as any;
        if (instance.vanillaTilt) {
          instance.vanillaTilt.destroy();
        }
      }
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        ref={cardRef}
        className="project-card"
        style={{ display: 'block', textDecoration: 'none' }}
      >
        <div className="project-card-inner">
          <div className="project-header">
            <div className="project-icon">{project.icon}</div>
            <span className="project-date">{project.date}</span>
          </div>
          <h3 className="project-title">{project.title}</h3>
          <p className="project-subtitle">{project.subtitle}</p>
          <p className="project-description">{project.description}</p>
          <div className="project-tags">
            {project.tags.map((tag, i) => (
              <span key={i} className="project-tag">{tag}</span>
            ))}
          </div>
        </div>
      </a>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <span className="section-label">Featured Work</span>
          <h2 className="section-title">
            Projects I&apos;ve <span className="text-gradient">Built</span>
          </h2>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
