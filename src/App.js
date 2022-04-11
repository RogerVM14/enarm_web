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
  
  
window.addEventListener("scroll", reveal);

const App = () => {
    return ( 
        <> 
            <Routes>
                <Route path='/' index={ true } element={ <Layout><HomePage /></Layout>} />
                <Route path='nosotros' element={ <Layout><AboutUsPage /></Layout> } />
                <Route path='sobre_el_curso' element={ <Layout><AboutCoursePage /></Layout> } />
                <Route path='blog' element={ <Layout><BlogEntriesPage /></Layout> } />
                <Route path='blog/:id' element={ <Layout><EntryDetailPage /></Layout> } />
                <Route path='prueba_gratis' element={ <Layout><FreeTestPage /></Layout> } />
                <Route path='contacto' element={ <Layout><ContactPage /></Layout> } />
                <Route path='iniciar_sesion' element={ <AccessLayout><LoginPage /></AccessLayout> } />
                <Route path='registrate' element={ <AccessLayout><RegisterPage /></AccessLayout> } />
            </Routes> 
        </>
    );
}

export default App;
