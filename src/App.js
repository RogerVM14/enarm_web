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
import { useEffect, useState } from 'react';
import WidthContext from './contexts/WidthContext';  

const App = () => { 

    const getWindowWidth = () => { 
        let x = window.innerWidth;
    
        if(x >= 320 && x <= 480) return 'small';
        if(x >= 481 && x <= 768) return 'medium';
        if(x >= 769 && x <= 1023) return 'large';
        if(x >= 1024) return 'extra-large';
    } 
    
    const [screenSize, setScreenSize] = useState(getWindowWidth())

    useEffect(() => {
        window.addEventListener('resize', () => {
            const x = getWindowWidth();
            setScreenSize(x);
        });  
    }, [screenSize]);

    useEffect(()=> {

        function spinAround() {
            
            let spins = document.querySelectorAll("div.spin");
          
            for (let i = 0; i < spins.length; i++) {
                let windowHeight = window.innerHeight;
                let elementTop = spins[i].getBoundingClientRect().top;
                let elementVisible = 150;
            
                if (elementTop < (windowHeight - elementVisible)) {
                    spins[i].classList.add("spin-around");
                } else {
                    spins[i].classList.remove("spin-around");
                }
            }
        }  
        
        function reveal() {

            let reveals = document.querySelectorAll(".reveal");
          
            for (let i = 0; i < reveals.length; i++) {
                let windowHeight = window.innerHeight;
                let elementTop = reveals[i].getBoundingClientRect().top;
                let elementVisible = 150;
            
                if (elementTop < (windowHeight - elementVisible)) {
                    reveals[i].classList.add("active");
                } else {
                    reveals[i].classList.remove("active");
                }
            }
        } 
        
        window.addEventListener("scroll", () => { 
            reveal();
            spinAround();
        }, { capture: true });
        
        window.addEventListener("touchmove", () => {     
            reveal(); 
        }, { capture: true });
    }, []);

    return ( 
        <>  
            <WidthContext.Provider value={screenSize}> 
                <Routes>
                    <Route path='/' index={ true } element={ <Layout topLine={true}><HomePage /></Layout>} />
                    <Route path='/nosotros' element={ <Layout topLine={true}><AboutUsPage /></Layout> } />
                    <Route path='/sobre_el_curso' element={ <Layout topLine={false}><AboutCoursePage /></Layout> } />
                    <Route path='/blog' element={ <Layout topLine={true}><BlogEntriesPage /></Layout> } />
                    <Route path='/blog/:id' element={ <Layout topLine={true}><EntryDetailPage /></Layout> } />
                    <Route path='/prueba_gratis' element={ <Layout topLine={true}><FreeTestPage /></Layout> } />
                    <Route path='/contacto' element={ <Layout topLine={false}><ContactPage /></Layout> } />
                    <Route path='/iniciar_sesion' element={ <AccessLayout><LoginPage /></AccessLayout> } />
                    <Route path='/registrate' element={ <AccessLayout><RegisterPage /></AccessLayout> } />
                </Routes>   
            </WidthContext.Provider>
        </>
    );
}

export default App;
