// src/components/Hero/Hero.tsx

import styles from './Hero.module.css';
import salamonPhoto from '../../assets/img/hero.png'; 
import { useParallax } from 'react-scroll-parallax';


const DocumentIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
        <polyline points="14 2 14 8 20 8"></polyline>
        <line x1="16" y1="13" x2="8" y2="13"></line>
        <line x1="16" y1="17" x2="8" y2="17"></line>
        <polyline points="10 9 9 9 8 9"></polyline>
    </svg>
);

const Hero = () => {
    const parallax = useParallax<HTMLDivElement>({
        speed: -150, 
    });
    return (
        <section className={styles.hero} ref={parallax.ref}>
            <div className={styles.heroImageContainer} >
                <img src={salamonPhoto} alt="Фото Salamon" className={styles.heroPhoto} />
            </div>
            <div className={styles.heroContent}>
                <h1 className={styles.title}>
                    <span className={styles.superTitle}>Я</span>
                    <span className={styles.titleMain}>Salamon</span>
                    
                        <span className={styles.titleSub}>Frontend</span>
                        <span className={styles.titleJob}>разработчик</span>
                    
                </h1>

                <div className={styles.subContent}>
                    <h2 className={styles.subtitle}>Мастер цифровых чудес</h2>
                    <p className={styles.description}>
                        Создаю веб-сайты, которые не просто работают, а завораживают.
                    </p>
                </div>

                <a href="#portfolio" className={styles.ctaButton}>
                    <DocumentIcon />
                    <span>МОИ РАБОТЫ</span>
                </a>
            </div>
        </section>


    );
};

export default Hero;
