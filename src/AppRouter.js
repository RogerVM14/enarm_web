import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
/* Landing Pages*/
import HomePage from "./pages/Landing/Home";
import UsPage from "./pages/Landing/Us";
import AboutCoursePage from "./pages/AboutCoursePage"; 
import EntryDetailPage from "./pages/EntryDetailPage";
import FreeTestPage from "./pages/FreeTestPage";
import ContactPage from "./pages/Landing/Contact";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";
import CheckoutPage from "./pages/CheckoutPage";
import CheckoutPageGratification from "./pages/CheckoutPageGratification";
import VerifyEmailCodePage from "./pages/VerifyEmailCodePage";
/* Platform */
import DashboardPage from "./pages/Platform/Dashboard";
import ResourcesPage from "./pages/Platform/Resources";
import SimulatorsPage from "./pages/Platform/Simulators";
import AdvicesNewsPage from "./pages/Platform/AdvicesNewsPage";
import PlanMonthPage from "./pages/Platform/PlanMonth";
import StudyGuidePage from "./pages/Platform/StudyGuide";
import AcademicProgramPage from "./pages/Platform/AcademicProgram";
import SimulatorCoursePage from "./pages/Platform/SimulatorCourse";
import ResourceClass from "./pages/Platform/ResourceClass";
import CoursePage from "./pages/Platform/Course";
import ResultsPage from "./pages/Platform/Results";
import FeedbackPage from "./pages/Platform/Feedback";
/* Layouts */
import AccessLayout from "./components/layouts/AccessLayout";
import Layout from "./components/layouts/Layout";
/* Contexts */
import AuthProvider from "./contexts/AuthContext";
import GeneralProvider from "./contexts/GeneralContext";
import SimulatorProvider from "./contexts/SimulatorContext";
import WidthProvider from "./contexts/WidthContext";
/* Utils */
import conektaHelper from "./utils/conekta/conektaUtils";
import { ROUTES } from "./constants/routes";
import "./css/App.css";
import BlogPage from "./pages/Landing/Blog";

const AppRouter = () => {

  useEffect(() => {
    conektaHelper.initConekta();
  }, []);

  const getWindowWidth = () => {
    let x = window.innerWidth;
    if (x < 576) return "xs";
    if (x >= 576 && x <= 767) return "sm";
    if (x >= 768 && x <= 991) return "md";
    if (x >= 992 && x <= 1199) return "lg";
    if (x >= 1200 && x <= 1399) return "xl";
    if (x >= 1400) return "xxl";
  };

  const [screenSize, setScreenSize] = useState(getWindowWidth());

  useEffect(() => {

    window.addEventListener("resize", () => {

      const x = getWindowWidth();

      setScreenSize(x);

    });

  }, [screenSize]);

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

    window.addEventListener("scroll", () => {
      reveal();
      spinAround();
    },
      { capture: true }
    );

    window.addEventListener("touchmove", () => {
      reveal();
    },
      { capture: true }
    );
  }, []);

  return (
    <AuthProvider>
      <WidthProvider>
        <GeneralProvider>
          <SimulatorProvider>
            <Routes>
              <Route path="/" index={true} element={<HomePage />} />
              <Route path="/nosotros" element={<UsPage />} />
              <Route path="/curso" element={<Layout topLine={false}> <AboutCoursePage /> </Layout>} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/blog/:id" element={<Layout topLine={true}> <EntryDetailPage /> </Layout>} />
              <Route path="/prueba" element={<Layout topLine={true}> <FreeTestPage /> </Layout>} />
              <Route path="/contacto" element={<ContactPage />} />
              <Route path="/login" element={<AccessLayout> <LoginPage /> </AccessLayout>} />
              <Route path="/registro" element={<AccessLayout><RegisterPage /> </AccessLayout>} />
              <Route path="/checkout" element={<AccessLayout> <CheckoutPage /> </AccessLayout>} />
              <Route path="/checkout_thankful" element={<AccessLayout> <CheckoutPageGratification /> </AccessLayout>} />
              <Route path="/verify_email_code" element={<VerifyEmailCodePage />} />
              {/* Platform */}
              <Route path="/u/dashboard" element={<DashboardPage />} />
              <Route path="/u/planes" element={<DashboardPage />} />
              <Route path="/u/planes/:id" element={<PlanMonthPage />} />
              <Route path="/u/planes/:id/contenido/:id" element={<CoursePage />} />
              <Route path="/u/planes/:id/panel_resultados/:id" element={<ResultsPage />} />
              <Route path="/u/planes/:id/simulador/:id" element={<SimulatorCoursePage />} />
              <Route path="/u/planes/:id/retro" element={<FeedbackPage />} />
              <Route path="/u/planes/aviso_novedades" element={<AdvicesNewsPage />} />
              <Route path="/u/recursos" element={<ResourcesPage />} />
              <Route path="/u/recursos/:id" element={<ResourceClass />} />
              {/* <Route path='/u/recursos/:id' element={<DashboardLayout hasAside={false}><ResourcesPage /> } /> */}
              <Route path="/u/simulador" element={<SimulatorsPage />} />
              <Route path="/u/documentos" element={<StudyGuidePage />} />
              <Route path="/u/documentos/guia" element={<StudyGuidePage />} />
              <Route path="/u/documentos/programa_academico" element={<AcademicProgramPage />} />
              <Route path={ROUTES.VERIFICAR_CORREO} element={<VerifyEmailCodePage />} />
            </Routes>
          </SimulatorProvider>
        </GeneralProvider>
      </WidthProvider>
    </AuthProvider>
  );
};

export default AppRouter;
