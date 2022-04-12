import './css/App.css';
import { Route, Routes  } from 'react-router-dom';
import Layout from './components/layouts/Layout';
import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';
import AboutCoursePage from './pages/AboutCoursePage';
import BlogEntriesPage from './pages/BlogEntriesPage';
import EntryDetailPage from './pages/EntryDetailPage';
import FreeTestPage from './pages/FreeTestPage';
import ContactPage from './pages/ContactPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import AccessLayout from './components/layouts/AccessLayout';

function reveal() {
    
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 100;
    
        if (elementTop < (windowHeight - elementVisible)) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}
  
function revealOnLoad() {
    
    var reveals = document.querySelectorAll(".reveal-load");
  
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 0;
    
        if (elementTop < (windowHeight - elementVisible)) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

function spinAround() {
    
    var spins = document.querySelectorAll(".spin");
  
    for (var i = 0; i < spins.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = spins[i].getBoundingClientRect().top;
        var elementVisible = 100;
    
        if (elementTop < (windowHeight - elementVisible)) {
            spins[i].classList.add("spin-around");
        } else {
            spins[i].classList.remove("spin-around");
        }
    }
}
  
  
window.addEventListener("scroll", () => {
    reveal();
    spinAround();
});

window.addEventListener("load", () => {
    revealOnLoad();
});

const App = () => {
    return ( 
        <> 
            <Routes>
                <Route path='/' index={ true } element={ <Layout topLine={true}><HomePage /></Layout>} />
                <Route path='nosotros' element={ <Layout topLine={true}><AboutUsPage /></Layout> } />
                <Route path='sobre_el_curso' element={ <Layout topLine={false}><AboutCoursePage /></Layout> } />
                <Route path='blog' element={ <Layout topLine={true}><BlogEntriesPage /></Layout> } />
                <Route path='blog/:id' element={ <Layout topLine={true}><EntryDetailPage /></Layout> } />
                <Route path='prueba_gratis' element={ <Layout topLine={true}><FreeTestPage /></Layout> } />
                <Route path='contacto' element={ <Layout topLine={false}><ContactPage /></Layout> } />
                <Route path='iniciar_sesion' element={ <AccessLayout><LoginPage /></AccessLayout> } />
                <Route path='registrate' element={ <AccessLayout><RegisterPage /></AccessLayout> } />
            </Routes> 
        </>
    );
}

export default App;
