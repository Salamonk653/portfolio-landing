
import styles from './Portfolio.module.css';
// Импортируем изображения и иконки
import project1Img from '../../assets/img/1.png'; 
import project2Img from '../../assets/img/2.png';
import project3Img from '../../assets/img/3.png';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: "Landing Page для кофейни",
    description: "Адаптивный сайт для вымышленной кофейни, демонстрирующий навыки верстки и анимации.",
    stack: ["React.js", "CSS Modules", "Vite"],
    githubLink: "https://github.com/Salamonk653/coffee-landing",
    demoLink: "https://salamonk653.github.io/coffee-landing/",
    image: project1Img,
  },
  {
    title: "Web Task Manager",
    description: "Приложение для управления задачами с сохранением данных в Local Storage.",
    stack: ["React.js", "CSS Modules", "Vite"],
    githubLink: "https://github.com/Salamonk653/react-task-manager",
    demoLink: "https://salamonk653.github.io/react-task-manager/",
    image: project2Img,
  },
  {
    title: "Сайт-портфолио (Этот сайт)",
    description: "Этот самый сайт, разработанный с нуля для демонстрации моих компетенций.",
    stack: ["React.js", "TypeScript", "CSS Modules"],
    githubLink: "https://github.com/Salamonk653/portfolio-landing",
    demoLink: "https://salamonk653.github.io/portfolio-landing/",
    image: project3Img,
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className={styles.portfolioSection}>
      <h2 className={styles.title}>Портфолио</h2>
      <div className={styles.projectsGrid}>
        {projects.map((project, index) => (
          <div key={index} className={styles.projectCard}>
            <img src={project.image} alt={`Скриншот проекта ${project.title}`} className={styles.projectImage} />
            <div className={styles.projectOverlay}>
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <p className={styles.projectDescription}>{project.description}</p>
              <ul className={styles.projectStack}>
                {project.stack.map((tech, i) => (
                  <li key={i}>{tech}</li>
                ))}
              </ul>
              <div className={styles.projectLinks}>
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" aria-label="GitHub repository">
                  <FaGithub />
                </a>
                <a href={project.demoLink} target="_blank" rel="noopener noreferrer" aria-label="Live demo">
                  <FaExternalLinkAlt />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;