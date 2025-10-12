import { ParallaxProvider } from 'react-scroll-parallax';
import styles from './App.module.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Skills from './components/Skills/Skills';
import Portfolio from './components/Portfolio/Portfolio';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <ParallaxProvider>
      <div>
        <Header />
        
        <main >
          <Hero />
          <div className={styles.contentWrapper}>
            <Skills />
            <Portfolio />
            <About />
          </div>
        </main>
        <Footer />
      </div>
    </ParallaxProvider>
  );
}

export default App;