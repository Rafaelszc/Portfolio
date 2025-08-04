import { Footer } from '../common/Footer';
import { Header }from '../common/Header'
import { Main } from './components/Main';
import { AboutMe } from './components/AboutMe';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';

export const Home = () => {
    return (
        <>
            <Header />
            <Main />
            <AboutMe />
            <Projects />
            <Skills />
            <Footer />
        </>
    );
}