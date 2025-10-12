import styles from './About.module.css';

const About = () => {
  return (
    <section id="about" className={styles.aboutSection}>
      <h2 className={styles.title}>Обо мне</h2>
      <div className={styles.aboutContent}>
        <div className={styles.textContainer}>
          <p>
            Привет! Меня зовут Salamon, и я — frontend-разработчик, который влюблен в создание интуитивно понятных и визуально привлекательных веб-интерфейсов.
          </p>
          <p>
            Мой путь в программирование начался с простого любопытства: мне всегда было интересно, как безликие строчки кода превращаются в сайты и приложения, которыми мы пользуемся каждый день. Этот интерес быстро перерос в страсть.
          </p>
          <p>
            Сейчас я активно развиваюсь в экосистеме React и углубляю знания в TypeScript. Ищу команду, в которой смогу применить свои знания, учиться у опытных коллег и вносить свой вклад в создание крутых цифровых продуктов.
          </p>
        </div>
        <div className={styles.imageContainer}>
          {/* В будущем вы сможете раскомментировать и вставить свое фото */}
          {/* <img src="/your-photo.jpg" alt="Фото Salamon" className={styles.photo} /> */}
        </div>
      </div>
    </section>
  );
};

export default About;