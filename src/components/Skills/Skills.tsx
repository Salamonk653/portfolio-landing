// src/components/Skills/Skills.tsx

import styles from './Skills.module.css';
import { useInView } from 'react-intersection-observer';
import { FaHtml5, FaCss3Alt, FaReact, FaGitAlt, FaFigma, FaSass, FaNpm } from 'react-icons/fa';
import { SiJavascript, SiTypescript, SiVite } from 'react-icons/si';

const skills = [
  { name: 'HTML5', icon: <FaHtml5 /> },
  { name: 'CSS3', icon: <FaCss3Alt /> },
  { name: 'JavaScript', icon: <SiJavascript /> },
  { name: 'React', icon: <FaReact /> },
  { name: 'TypeScript', icon: <SiTypescript /> },
  { name: 'Git', icon: <FaGitAlt /> },
  { name: 'Figma', icon: <FaFigma /> },
  { name: 'Vite', icon: <SiVite /> },
  { name: 'Sass', icon: <FaSass /> },
  { name: 'npm', icon: <FaNpm /> },
];

const Skills = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="skills" className={styles.skillsSection}>
      <h2 className={styles.title}>Мои навыки</h2>
      <div className={styles.skillsGrid} ref={ref}>
        {skills.map((skill, index) => (
          <div
            key={index}
            className={`${styles.skillItem} ${inView ? styles.visible : ''}`}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <div className={styles.skillIcon}>{skill.icon}</div>
            <p className={styles.skillName}>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;