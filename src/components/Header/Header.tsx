import { useState } from 'react'; // 1. Импортируем useState
import styles from './Header.module.css';

const Header = () => {
  // 2. Создаем состояние, чтобы отслеживать, открыто ли меню
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>Salamon</div>

      {/* 3. Добавляем класс 'nav_open', если меню открыто */}
      <nav className={`${styles.nav} ${isMenuOpen ? styles.nav_open : ''}`}>
        <ul className={styles.navList}>
          {/* 4. Добавляем onClick, чтобы меню закрывалось при клике на ссылку */}
          <li><a href="#skills" onClick={() => setIsMenuOpen(false)}>Навыки</a></li>
          <li><a href="#portfolio" onClick={() => setIsMenuOpen(false)}>Портфолио</a></li>
          <li><a href="#about" onClick={() => setIsMenuOpen(false)}>Обо мне</a></li>
          <li><a href="#contact" onClick={() => setIsMenuOpen(false)}>Контакты</a></li>
        </ul>
      </nav>

      {/* 5. Кнопка-бургер, которая меняет состояние (видна только на мобильных) */}
      <button
        className={`${styles.menuButton} ${isMenuOpen ? styles.menuButton_open : ''}`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Открыть/закрыть меню"
      >
        <div className={styles.bar1}></div>
        <div className={styles.bar2}></div>
        <div className={styles.bar3}></div>
      </button>
    </header>
  );
};

export default Header;