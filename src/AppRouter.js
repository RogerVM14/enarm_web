import "./css/App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/layouts/Layout";
import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import AboutCoursePage from "./pages/AboutCoursePage";
import BlogEntriesPage from "./pages/BlogEntriesPage";
import EntryDetailPage from "./pages/EntryDetailPage";
import FreeTestPage from "./pages/FreeTestPage";
import ContactPage from "./pages/ContactPage";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";
import AccessLayout from "./components/layouts/AccessLayout";
import { /*useContext,*/ useEffect, useState } from "react";
import WidthContext from "./contexts/WidthContext";
// import DashboardLayout from './components/layouts/DashboardLayout';
import DashboardPage from "./pages/Platform/Dashboard";
import ResourcesPage from "./pages/Platform/Resources";
import SimulatorsPage from "./pages/Platform/Simulators";
import StudyPlansPage from "./pages/Platform/StudyPlansPage";
import DocumentsPage from "./pages/Platform/DocumentsPage";
import DashboardAsideWidth from "./contexts/platform/DashboardAsideContext";
import AdvicesNewsPage from "./pages/Platform/AdvicesNewsPage";
import PlanMonthPage from "./pages/Platform/PlanMonth";
import CheckoutPage from "./pages/CheckoutPage";
import StudyGuidePage from "./pages/Platform/StudyGuide";
import AcademicProgramPage from "./pages/Platform/AcademicProgram";
import StudyCourseContentPage from "./pages/Platform/StudyCourseContentPage";
import SimulatorCoursePage from "./pages/Platform/SimulatorCourse";
import FeedbakToPage from "./pages/Platform/FeedbakToPage";
import SimulatorPanelResultsPage from "./pages/Platform/SimulatorPanelResultsPage";
import AuthProvider /*, { AuthContext }*/ from "./contexts/AuthContext";
import PlatformPrivateRoute from "./routes/PlatformPrivateRoute";
import ResourceClass from "./pages/Platform/ResourceClass";
import CheckoutPageGratification from "./pages/CheckoutPageGratification";
import conektaHelper from "./utils/conekta/conektaUtils";
import VerifyEmailCodePage from "./pages/VerifyEmailCodePage";
import { ROUTES } from "./constants/routes";
import CourseContent from "./components/platform/subComponents/CourseContent";
import CoursePage from "./pages/Platform/Course";
import ResultsPage from "./pages/Platform/Results";
import GeneralProvider from "./contexts/GeneralContext";

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
    <>
      <WidthContext.Provider value={screenSize}>
        <AuthProvider>
          <DashboardAsideWidth> 
            <GeneralProvider> 
              <Routes>
                <Route path="/" index={true} element={<Layout topLine={true}> <HomePage /> </Layout>} />
                <Route path="/nosotros" element={<Layout topLine={true}> <AboutUsPage /> </Layout>} />
                <Route path="/sobre_el_curso" element={<Layout topLine={false}> <AboutCoursePage /> </Layout>} />
                <Route path="/blog" element={<Layout topLine={true}> <BlogEntriesPage /> </Layout>} />
                <Route path="/blog/:id" element={<Layout topLine={true}> <EntryDetailPage /> </Layout>} />
                <Route path="/prueba_gratis" element={<Layout topLine={true}> <FreeTestPage /> </Layout>} />
                <Route path="/contacto" element={<Layout topLine={false}> <ContactPage /> </Layout>} />
                <Route path="/iniciar_sesion" element={<AccessLayout> <LoginPage /> </AccessLayout>} />
                <Route path="/registrate" element={<AccessLayout><RegisterPage /> </AccessLayout>} />
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
                <Route path="/u/planes/:id/retro" element={<FeedbakToPage />} />
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
            </GeneralProvider>
          </DashboardAsideWidth>
        </AuthProvider>
      </WidthContext.Provider>
    </>
  );
};

export default AppRouter;
