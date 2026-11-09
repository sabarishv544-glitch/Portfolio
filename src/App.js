import React, { useState } from "react";
import {
  FiArrowDown, FiArrowUpRight, FiCode, FiCpu, FiExternalLink,
  FiGithub, FiLayers, FiMenu, FiTerminal, FiX
} from "react-icons/fi";
import "./style.css";

const GITHUB = "https://github.com/sabarishv544-glitch";

const skills = [
  { name: "C++", group: "Programming" },
  { name: "Java", group: "Programming" },
  { name: "Python", group: "Programming" },
  { name: "JavaScript", group: "Programming" },
  { name: "React", group: "Frontend" },
  { name: "HTML & CSS", group: "Frontend" },
  { name: "Node.js", group: "Backend" },
  { name: "Express", group: "Backend" },
  { name: "MongoDB", group: "Backend" },
  { name: "SQL / Oracle", group: "Database" },
  { name: "Data Structures", group: "Core CS" },
  { name: "Algorithms", group: "Core CS" },
];

const projects = [
  {
    number: "01",
    title: "Convo — Meeting App",
    type: "Full-stack web application · In progress",
    description: "A video-meeting application focused on making online conversations simple. Building the experience around a React frontend and a Node.js backend.",
    stack: ["React", "Node.js", "Express", "MongoDB"],
    icon: <FiLayers />,
    status: "In progress",
  },
  {
    number: "02",
    title: "Urban AQI Digital Twin",
    type: "Research / predictive dashboard",
    description: "A project exploring air-quality prediction and an interactive urban digital-twin dashboard to make environmental data easier to understand.",
    stack: ["Python", "Machine Learning", "Data Visualization"],
    icon: <FiCpu />,
    status: "Research project",
  },
  {
    number: "03",
    title: "AI-powered DSA Mentor",
    type: "Learning tool · Project concept",
    description: "An idea for a coding companion that guides learners through problem-solving with small hints, clear explanations, and a step-by-step approach.",
    stack: ["C++", "DSA", "AI", "Learning"],
    icon: <FiCode />,
    status: "Concept",
  },
];

const navItems = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Skills", "#skills"],
  ["Projects", "#projects"],
  ["Contact", "#contact"],
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <header className="site-header">
        <nav className="nav-wrap" aria-label="Main navigation">
          <a className="brand" href="#home" onClick={closeMenu} aria-label="Sabarish home">
            <span className="brand-mark">S<span>.</span></span>
            <span className="brand-name">sabarish<span>v</span></span>
          </a>

          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>

          <div className={`nav-links ${menuOpen ? "nav-links-open" : ""}`}>
            {navItems.map(([label, href]) => (
              <a key={label} href={href} onClick={closeMenu}>{label}</a>
            ))}
            <a className="nav-github" href={GITHUB} target="_blank" rel="noreferrer" onClick={closeMenu}>
              <FiGithub /> GitHub <FiArrowUpRight />
            </a>
          </div>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="eyebrow"><span className="status-dot" /> AVAILABLE TO LEARN & BUILD</div>
            <p className="hero-kicker">Hello, I'm</p>
            <h1>Sabarish <span>V.</span></h1>
            <h2>Computer Science Student <span className="accent">/</span> Developer</h2>
            <p className="hero-description">
              I enjoy turning ideas into useful software, solving problems with code,
              and learning how technology works under the hood.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">Explore my work <FiArrowUpRight /></a>
              <a className="button button-quiet" href="#contact">Let's connect <FiArrowDown /></a>
            </div>
            <div className="hero-social">
              <a href={GITHUB} target="_blank" rel="noreferrer" aria-label="GitHub profile"><FiGithub /> github.com/sabarishv544-glitch</a>
              <span className="social-divider" />
              <span className="location-label">CSE Undergraduate</span>
            </div>
          </div>

          <div className="hero-art" aria-label="Decorative developer code illustration">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="code-window">
              <div className="window-top">
                <div className="window-dots"><i /><i /><i /></div>
                <span>developer.js</span>
                <span className="window-menu">•••</span>
              </div>
              <div className="code-content">
                <div><span className="line-no">01</span><span className="code-purple">const</span> developer = &#123;</div>
                <div><span className="line-no">02</span>&nbsp;&nbsp;name: <span className="code-green">"Sabarish"</span>,</div>
                <div><span className="line-no">03</span>&nbsp;&nbsp;focus: <span className="code-green">"Building"</span>,</div>
                <div><span className="line-no">04</span>&nbsp;&nbsp;learn: <span className="code-green">"Every day"</span>,</div>
                <div><span className="line-no">05</span>&nbsp;&nbsp;coffee: <span className="code-orange">true</span></div>
                <div><span className="line-no">06</span>&#125;;</div>
                <div className="code-cursor"><span className="line-no">07</span><span className="code-purple">while</span> (learning) &#123; <span className="code-blue">build();</span> &#125;</div>
              </div>
              <div className="window-footer"><span><i /> JavaScript</span><span>UTF-8</span></div>
            </div>
            <div className="floating-chip chip-top"><FiTerminal /> Problem solver</div>
            <div className="floating-chip chip-bottom"><FiCode /> Always learning</div>
            <div className="hero-glow" />
          </div>
          <a className="scroll-cue" href="#about"><span /> SCROLL TO EXPLORE</a>
        </section>

        <section className="about-section section-wrap" id="about">
          <div className="section-heading">
            <p className="section-index">01 / ABOUT</p>
            <h2>A little about <span>me.</span></h2>
          </div>
          <div className="about-grid">
            <div className="about-lead">
              <span className="about-symbol">“</span>
              <h3>Curious mind.<br /><span>Builder's mindset.</span></h3>
            </div>
            <div className="about-text">
              <p>
                I'm Sabarish, a Computer Science and Engineering student at
                Karpagam College of Engineering. I'm interested in software
                development, problem solving, and building applications that
                make everyday tasks easier.
              </p>
              <p>
                I spend time strengthening my foundations in data structures
                and algorithms while exploring full-stack development with
                JavaScript, React, Node.js, and databases. I like understanding
                the reasoning behind a solution—not just getting it to work.
              </p>
              <div className="about-facts">
                <div><strong>01</strong><span>Keep learning</span></div>
                <div><strong>02</strong><span>Build with purpose</span></div>
                <div><strong>03</strong><span>Improve every iteration</span></div>
              </div>
            </div>
          </div>
        </section>

        <section className="skills-section section-wrap" id="skills">
          <div className="section-heading">
            <p className="section-index">02 / TOOLKIT</p>
            <h2>Tools of my <span>trade.</span></h2>
            <p className="section-subtitle">Technologies and concepts I'm learning and working with.</p>
          </div>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div className="skill-card" key={skill.name} style={{ "--delay": `${index * 35}ms` }}>
                <span className="skill-icon"><FiCode /></span>
                <span className="skill-name">{skill.name}</span>
                <span className="skill-group">{skill.group}</span>
              </div>
            ))}
          </div>
          <div className="skills-note"><span className="status-dot" /> This toolkit keeps evolving as I learn and build.</div>
        </section>

        <section className="projects-section section-wrap" id="projects">
          <div className="section-heading heading-row">
            <div>
              <p className="section-index">03 / SELECTED WORK</p>
              <h2>Things I'm <span>building.</span></h2>
              <p className="section-subtitle">A few projects and ideas that reflect what I'm exploring.</p>
            </div>
            <a className="text-link" href={`${GITHUB}?tab=repositories`} target="_blank" rel="noreferrer">All repositories <FiArrowUpRight /></a>
          </div>
          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className="project-card-top">
                  <span className="project-number">{project.number}</span>
                  <span className="project-icon">{project.icon}</span>
                </div>
                <span className="project-type">{project.type}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tag-list">
                  {project.stack.map((item) => <span key={item}>{item}</span>)}
                </div>
                <div className="project-status"><span className="status-dot" /> {project.status}</div>
              </article>
            ))}
          </div>
        </section>

        <section className="contact-section section-wrap" id="contact">
          <div className="contact-panel">
            <div className="contact-orb" />
            <p className="section-index">04 / CONTACT</p>
            <h2>Have an idea?<br /><span>Let's build something.</span></h2>
            <p className="contact-copy">I'm always open to learning, collaborating, and connecting with people who enjoy building useful things.</p>
            <a className="button button-primary" href={GITHUB} target="_blank" rel="noreferrer">Connect on GitHub <FiExternalLink /></a>
            <div className="contact-handle"><FiGithub /> sabarishv544-glitch</div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <a className="brand footer-brand" href="#home"><span className="brand-mark">S<span>.</span></span></a>
        <p>Designed & built by <strong>Sabarish V.</strong></p>
        <a href="#home" className="back-top">Back to top ↑</a>
        <span className="copyright">© {new Date().getFullYear()} · Built with React</span>
      </footer>
    </div>
  );
}

export default App;
