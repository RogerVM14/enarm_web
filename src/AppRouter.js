import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
/* Landing Pages*/
import HomePage from "./pages/Landing/Home";
import UsPage from "./pages/Landing/Us";
import AboutPage from "./pages/Landing/About";
import BlogEntryPage from "./pages/Landing/Blog/Entry";
import TestPage from "./pages/Landing/Test";
import ContactPage from "./pages/Landing/Contact";
import LoginPage from "./pages/Auth/Login";
import RegisterPage from "./pages/Auth/Register";
import CheckoutPage from "./pages/CheckoutPage";
import CheckoutPageGratification from "./pages/CheckoutPageGratification";
import VerifyEmailCodePage from "./pages/VerifyEmailCodePage";
/* Platform */
import DashboardPage from "./pages/Platform/Dashboard";
import ResourcesPage from "./pages/Platform/Resources";
import SimulatorsPage from "./pages/Platform/Simulators";
import AdvicePage from "./pages/Platform/Advice";
import PlanMonthPage from "./pages/Platform/PlanMonth";
import StudyGuidePage from "./pages/Platform/StudyGuide";
import AcademicProgramPage from "./pages/Platform/AcademicProgram";
import SimulatorCoursePage from "./pages/Platform/SimulatorCourse";
import CoursePage from "./pages/Platform/Course";
import ResultsPage from "./pages/Platform/Results";
import FeedbackPage from "./pages/Platform/Feedback";
import AccountPage from "./pages/Platform/Account";
/* Contexts */
import AuthProvider from "./contexts/AuthContext";
import GeneralProvider from "./contexts/GeneralContext";
import SimulatorProvider from "./contexts/SimulatorContext";
import WidthProvider from "./contexts/WidthContext";
import LandingProvider from "./contexts/LandingContext";
/* Utils */
import { ROUTES } from "./constants/routes";
import BlogPage from "./pages/Landing/Blog";
import "./css/App.css";
import CheckoutPaymentFailed from "./pages/CheckoutPaymentFailed";

const AppRouter = () => {
  useEffect(() => {
    function spinAround() {
      let spins = document.querySelectorAll("div.spin");

      for (let i = 0; i < spins.length; i++) {
        let windowHeight = window.innerHeight;
        let elementTop = spins[i].getBoundingClientRect().top;
        let elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
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

        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add("active");
        } else {
          reveals[i].classList.remove("active");
        }
      }
    }

    window.addEventListener(
      "scroll",
      () => {
        reveal();
        spinAround();
      },
      { capture: true }
    );

    window.addEventListener(
      "touchmove",
      () => {
        reveal();
      },
      { capture: true }
    );
  }, []);

  return (
    <LandingProvider>
      <AuthProvider>
        <WidthProvider>
          <GeneralProvider>
            <SimulatorProvider>
              <Routes>
                <Route path={ROUTES.HOME} index={true} element={<HomePage />} />
                <Route path={ROUTES.NOSOTROS} element={<UsPage />} />
                <Route path={ROUTES.SOBRE_EL_CURSO} element={<AboutPage />} />
                <Route path={ROUTES.BLOG} element={<BlogPage />} />
                <Route path={ROUTES.BLOG_ENTRADA} element={<BlogEntryPage />} />
                <Route path={ROUTES.PRUEBA} element={<TestPage />} />
                <Route path={ROUTES.CONTACTO} element={<ContactPage />} />
                <Route path={ROUTES.LOGIN} element={<LoginPage />} />
                <Route path={ROUTES.REGISTRO} element={<RegisterPage />} />
                <Route path={ROUTES.CHECKOUT} element={<CheckoutPage />} />
                <Route path={ROUTES.CHECKOUT_SUCCESS} element={<CheckoutPageGratification />} /> 
                <Route path={ROUTES.CHECKOUT_FAILED} element={<CheckoutPaymentFailed />} /> 
                <Route path={ROUTES.VERIFY_EMAIL_CODE} element={<VerifyEmailCodePage />} />
                {/* Platform */}
                <Route path={ROUTES.PLATAFORMA_DASHBOARD} element={<DashboardPage />} />
                <Route path={ROUTES.PLATAFORMA_PLANES} element={<DashboardPage />} />
                <Route path={ROUTES.PLATAFORMA_PLANES_ID} element={<PlanMonthPage />} />
                <Route path={ROUTES.PLATAFORMA_PLANES_CONTENIDO} element={<CoursePage />} />
                <Route path={ROUTES.PLATAFORMA_PLANES_RESULTADOS} element={<ResultsPage />} />
                <Route path={ROUTES.PLATAFORMA_PLANES_SIMULADOR} element={<SimulatorCoursePage />} />
                <Route path={ROUTES.PLATAFORMA_PLANES_RETROALIMENTACION} element={<FeedbackPage />} />
                <Route path={ROUTES.PLATAFORMA_AVISO_NOVEDADES} element={<AdvicePage />} />
                <Route path={ROUTES.PLATAFORMA_RECURSOS} element={<ResourcesPage />} />
                {/* <Route path={ROUTES.PLATAFORMA_RECURSOS_ID} element={<ResourceClass />} /> */}
                <Route path={ROUTES.PLATAFORMA_SIMULADOR} element={<SimulatorsPage />} />
                <Route path={ROUTES.PLATAFORMA_DOCUMENTOS} element={<StudyGuidePage />} />
                <Route path={ROUTES.PLATAFORMA_CUENTA} element={<AccountPage />} />
                <Route path={ROUTES.PLATAFORMA_DOCUMENTOS_GUIA} element={<StudyGuidePage />} />
                <Route path={ROUTES.PLATAFORMA_DOCUMENTOS_PROGRAMA} element={<AcademicProgramPage />} />
                <Route path={ROUTES.VERIFICAR_CORREO} element={<VerifyEmailCodePage />} />
              </Routes>
            </SimulatorProvider>
          </GeneralProvider>
        </WidthProvider>
      </AuthProvider>
    </LandingProvider>
  );
};

export default AppRouter;
