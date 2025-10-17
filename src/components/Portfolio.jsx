import React from 'react';
import { Mail, Linkedin, Github, Code, Briefcase, GraduationCap, Award, ExternalLink, Download } from 'lucide-react';
import './Portfolio.css';

const Hero = () => {
  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="hero-content animate-fade-in-up">
          <div className="hero-icon">
            <Code size={64} />
          </div>
          <h1 className="hero-title">Nachu Gowtham</h1>
          <p className="hero-subtitle">Full Stack Developer & AI/ML Engineer</p>
          <p className="hero-description">
            Passionate B.Tech student in AI & Data Science, specializing in full-stack development, machine learning, and building scalable web applications with modern technologies.
          </p>
          
          <div className="hero-buttons">
            <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="btn-primary">Get In Touch</a>
            <a href="#projects" onClick={(e) => scrollToSection(e, 'projects')} className="btn-secondary">View Work</a>
          </div>

          <div className="social-links">
            <a href="mailto:gowthamnachu545@gmail.com" className="social-icon">
              <Mail size={28} />
            </a>
            <a href="https://linkedin.com/in/gowthamnachu" target="_blank" rel="noopener noreferrer" className="social-icon">
              <Linkedin size={28} />
            </a>
            <a href="https://github.com/gowthamnachu" target="_blank" rel="noopener noreferrer" className="social-icon">
              <Github size={28} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className="education-section">
          <div className="card">
            <div className="education-header">
              <GraduationCap className="card-icon" size={40} />
              <h3 className="card-title">Education Journey</h3>
            </div>
            
            <div className="education-timeline">
              <div className="education-item">
                <div className="education-dot"></div>
                <div className="education-content">
                  <div className="education-degree">
                    <strong>B.Tech in Artificial Intelligence and Data Science</strong>
                    <span className="education-gpa">CGPA: 9.5/10</span>
                  </div>
                  <p className="education-institution">Koneru Lakshmaiah University Hyderabad</p>
                  <p className="education-period">July 2023 – April 2027 | Hyderabad, Telangana</p>
                </div>
              </div>
              
              <div className="education-item">
                <div className="education-dot"></div>
                <div className="education-content">
                  <div className="education-degree">
                    <strong>Bachelor of Business Administration</strong>
                    <span className="education-gpa">CGPA: 8.4/10</span>
                  </div>
                  <p className="education-institution">Koneru Lakshmaiah University Hyderabad</p>
                  <p className="education-period">July 2023 – April 2026 | Virtual Degree</p>
                </div>
              </div>
              
              <div className="education-item">
                <div className="education-dot"></div>
                <div className="education-content">
                  <div className="education-degree">
                    <strong>Micro Degree in Data Science and AI</strong>
                  </div>
                  <p className="education-institution">IIT Guwahati</p>
                  <p className="education-period">May 2025 – February 2026 | Guwahati, Assam</p>
                </div>
              </div>
              
              <div className="education-item">
                <div className="education-dot"></div>
                <div className="education-content">
                  <div className="education-degree">
                    <strong>Intermediate (Class 12)</strong>
                    <span className="education-gpa">Percentage: 94%</span>
                  </div>
                  <p className="education-institution">Narayana Junior College</p>
                  <p className="education-period">June 2021 – April 2023 | Visakhapatnam, AP</p>
                </div>
              </div>
              
              <div className="education-item">
                <div className="education-dot"></div>
                <div className="education-content">
                  <div className="education-degree">
                    <strong>High School (Class 10)</strong>
                    <span className="education-gpa">CGPA: 10/10</span>
                  </div>
                  <p className="education-institution">Vagdevi Vidya Mandir</p>
                  <p className="education-period">June 2009 – April 2021 | Visakhapatnam, AP</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="about-grid">
          <div className="card">
            <Briefcase className="card-icon" size={40} />
            <h3 className="card-title">Experience</h3>
            <p className="card-text">
              <strong>Full Stack Developer Intern</strong> at KFintech Pvt. Ltd. (May-August 2025).
              Engineered RESTful APIs, stored procedures, and optimized frontend-backend integration for enterprise tools.
            </p>
          </div>
        </div>

        <div className="card services-card">
          <h3 className="services-title">What I Do</h3>
          <div className="services-grid">
            <div className="service-item">
              <div className="service-icon-wrapper">
                <Code size={32} />
              </div>
              <h4 className="service-title">Full Stack Development</h4>
              <p className="service-description">Building responsive web applications with React, Django, Node.js, and modern cloud platforms like Cloudflare and AWS</p>
            </div>
            <div className="service-item">
              <div className="service-icon-wrapper">
                <Briefcase size={32} />
              </div>
              <h4 className="service-title">AI & Machine Learning</h4>
              <p className="service-description">Developing intelligent solutions using PyTorch, TensorFlow, and implementing deep learning models and transformers</p>
            </div>
            <div className="service-item">
              <div className="service-icon-wrapper">
                <Award size={32} />
              </div>
              <h4 className="service-title">API Development</h4>
              <p className="service-description">Engineering scalable RESTful APIs, stored procedures, and optimizing database management for enterprise applications</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Experience = () => {
  const experiences = [
    {
      title: "Full Stack Developer Intern",
      company: "KFintech Pvt. Ltd.",
      period: "May 2025 - August 2025",
      location: "Hyderabad, Telangana",
      description: "Worked on Asset Management, Hardware Management, and Site Reliability Engineering tools.",
      achievements: [
        "Engineered and optimized RESTful APIs and stored procedures for Asset Management, Hardware Management, and Site Reliability Engineering tools, enhancing backend scalability and performance",
        "Implemented throttling and debouncing mechanisms and robust tokenization and validation workflows, improving frontend responsiveness, data security, and system reliability",
        "Optimized frontend–backend integration, data synchronization, and API communication across core applications for smooth operations"
      ]
    }
  ];

  return (
    <section id="experience" className="section">
      <div className="container">
        <h2 className="section-title">Work Experience</h2>
        
        <div className="experience-timeline">
          {experiences.map((exp, idx) => (
            <div key={idx} className="experience-item">
              <div className="experience-dot"></div>
              <div className="experience-content card">
                <div className="experience-header">
                  <div>
                    <h3 className="experience-title">{exp.title}</h3>
                    <h4 className="experience-company">{exp.company}</h4>
                    {exp.location && <p className="experience-location">{exp.location}</p>}
                  </div>
                  <span className="experience-period">{exp.period}</span>
                </div>
                <p className="experience-description">{exp.description}</p>
                <ul className="experience-achievements">
                  {exp.achievements.map((achievement, achIdx) => (
                    <li key={achIdx}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "Java", "C", "JavaScript", "TypeScript"]
    },
    {
      title: "Frameworks & Libraries",
      skills: ["React", "Django", "Express.js", "Node.js", "PyTorch", "TensorFlow", "Vite", "Tailwind CSS", "Framer Motion"]
    },
    {
      title: "Developer Tools",
      skills: ["VS Code", "Android Studio", "PyCharm", "Eclipse", "Google Colab", "Tableau", "Git", "GitHub"]
    },
    {
      title: "Cloud & Platforms",
      skills: ["AWS", "Azure", "Cloudflare Pages", "Cloudflare Workers", "Cloudflare R2", "Netlify", "Render"]
    },
    {
      title: "Databases & APIs",
      skills: ["MongoDB", "Neon DB", "PostgreSQL", "REST APIs", "WebSockets", "GraphQL", "Hono"]
    },
    {
      title: "Core Competencies",
      skills: ["Web Development", "Machine Learning", "Deep Learning", "Transformers", "API Development", "Stored Procedures", "Database Management", "Cloud Computing"]
    }
  ];

  return (
    <section id="skills" className="section section-dark">
      <div className="container">
        <h2 className="section-title">Skills & Technologies</h2>
        
        <div className="skills-grid">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="card">
              <h3 className="skills-category-title">{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIdx) => (
                  <span key={skillIdx} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Kalakritam",
      subtitle: "Client Work - Art Platform",
      description: "Developed a full-stack art platform with admin portal for CRUD operations on artworks, workshops, events, artists, artblogs, and ticket creation/verification (admin-only). Implemented smooth UI/UX and admin monitoring.",
      tech: ["React", "Vite", "Tailwind CSS", "Framer Motion", "Cloudflare Pages", "Cloudflare Workers", "Hono", "Neon DB", "Cloudflare R2"],
      link: "https://kalakritam.in"
    },
    {
      title: "InterviewXpert",
      subtitle: "AI-Powered Interview Platform",
      description: "AI-powered interview simulation platform evaluating accuracy, fluency, and confidence. Integrated real-time visual feedback, hesitation detection, and Xpert Bot chatbot for comprehensive interview preparation.",
      tech: ["React", "Node.js", "MongoDB", "Netlify", "Speech-to-Text", "NLTK", "TensorFlow", "Chatling"],
      link: "https://interviewxpert.netlify.app",
      github: "https://github.com/gowthamnachu/interviewxpert"
    },
    {
      title: "Finance Portfolio (FIPO)",
      subtitle: "AI Investment Optimizer",
      description: "Developed an AI-powered financial portfolio optimizer providing real-time investment suggestions, risk-return analysis, and portfolio optimization using advanced algorithms.",
      tech: ["Django", "WebSockets", "Yahoo Finance API", "SciPy", "NumPy", "Pandas"],
      link: "https://financeportfolio.onrender.com",
      github: "https://github.com/gowthamnachu/fipo"
    }
  ];

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        
        <div className="projects-grid">
          {projects.map((project, idx) => (
            <div key={idx} className="card project-card">
              <div className="project-header">
                <div>
                  <h3 className="project-title">{project.title}</h3>
                  {project.subtitle && <p className="project-subtitle">{project.subtitle}</p>}
                </div>
                <div className="project-links-header">
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                      <ExternalLink size={20} />
                    </a>
                  )}
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                      <Github size={20} />
                    </a>
                  )}
                </div>
              </div>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.tech.map((tech, techIdx) => (
                  <span key={techIdx} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="section section-dark">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="contact-content">
          <div className="contact-info-card card">
            <p className="contact-intro">
              I'm always open to discussing new projects, creative ideas, internship opportunities, or collaborating on innovative solutions. 
              Feel free to reach out!
            </p>
            
            <div className="contact-info">
              <div className="contact-info-item">
                <Mail size={20} />
                <span>gowthamnachu545@gmail.com</span>
              </div>
              <div className="contact-info-item">
                <span>📍</span>
                <span>Hyderabad, Telangana, India</span>
              </div>
              <div className="contact-info-item">
                <span>📞</span>
                <span>+91 8247258297</span>
              </div>
            </div>
            
            <div className="contact-links">
              <a href="https://linkedin.com/in/gowthamnachu" target="_blank" rel="noopener noreferrer" className="contact-link">
                <Linkedin size={24} />
                <span>LinkedIn</span>
              </a>
              <a href="https://github.com/gowthamnachu" target="_blank" rel="noopener noreferrer" className="contact-link">
                <Github size={24} />
                <span>GitHub</span>
              </a>
            </div>

            <button onClick={() => {
              const link = document.createElement('a');
              link.href = '/gowthamnachu_resume.pdf';
              link.download = 'Gowtham_Nachu_Resume.pdf';
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }} className="btn-primary download-resume-btn">
              <Download size={20} />
              <span>Download Resume</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p className="footer-text">
          © {new Date().getFullYear()} Nachu Gowtham. Built with React & Custom CSS.
        </p>
      </div>
    </footer>
  );
};

export { Hero, About, Experience, Skills, Projects, Contact, Footer };
