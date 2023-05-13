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
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/register";
import AccessLayout from "./components/layouts/AccessLayout";
import { /*useContext,*/ useEffect, useState } from "react";
import WidthContext from "./contexts/WidthContext";
// import DashboardLayout from './components/layouts/DashboardLayout';
import DashboardPage from "./pages/platform/DashboardPage";
import ResourcesPage from "./pages/platform/ResourcesPage";
import SimulatorsPage from "./pages/platform/SimulatorsPage";
import StudyPlansPage from "./pages/platform/StudyPlansPage";
import DocumentsPage from "./pages/platform/DocumentsPage";
import DashboardAsideWidth from "./contexts/platform/DashboardAsideContext";
import AdvicesNewsPage from "./pages/platform/AdvicesNewsPage";
import PlanMonthPage from "./pages/platform/PlanMonthPage";
import CheckoutPage from "./pages/CheckoutPage";
import StudyGuidePage from "./pages/platform/StudyGuidePage";
import AcademicProgramPage from "./pages/platform/AcademicProgramPage";
import StudyCourseContentPage from "./pages/platform/StudyCourseContentPage";
import SimulatorCoursePage from "./pages/platform/SimulatorCoursePage";
import FeedbakToPage from "./pages/platform/FeedbakToPage";
import SimulatorPanelResultsPage from "./pages/platform/SimulatorPanelResultsPage";
import AuthProvider /*, { AuthContext }*/ from "./contexts/AuthContext";
import PlatformPrivateRoute from "./routes/PlatformPrivateRoute";
import ResourceClass from "./pages/platform/ResourceClass";
import CheckoutPageGratification from "./pages/CheckoutPageGratification";
import conektaHelper from "./utils/conekta/conektaUtils";
import VerifyEmailCodePage from "./pages/VerifyEmailCodePage";
import { ROUTES } from "./constants/routes";

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
    <>
      <WidthContext.Provider value={screenSize}>
        <AuthProvider>
          <DashboardAsideWidth>
            <Routes>
              <Route path="/" index={true} element={ <Layout topLine={true}> <HomePage /> </Layout> } />
              <Route path="/nosotros" element={ <Layout topLine={true}> <AboutUsPage /> </Layout> } />
              <Route path="/sobre_el_curso" element={ <Layout topLine={false}> <AboutCoursePage /> </Layout> } />
              <Route path="/blog" element={ <Layout topLine={true}> <BlogEntriesPage /> </Layout> } />
              <Route path="/blog/:id" element={ <Layout topLine={true}> <EntryDetailPage /> </Layout> } />
              <Route path="/prueba_gratis" element={ <Layout topLine={true}> <FreeTestPage /> </Layout> } />
              <Route path="/contacto" element={ <Layout topLine={false}> <ContactPage /> </Layout> } />
              <Route path="/iniciar_sesion" element={ <AccessLayout> <LoginPage /> </AccessLayout> } />
              <Route path="/registrate" element={ <AccessLayout><RegisterPage /> </AccessLayout> } />
              <Route path="/checkout" element={ <AccessLayout> <CheckoutPage /> </AccessLayout> } />
              <Route path="/checkout_thankful" element={ <AccessLayout> <CheckoutPageGratification /> </AccessLayout> } />
              <Route path="/verify_email_code" element={<VerifyEmailCodePage />} />

              {/* Platform */}
              <Route path="/u/dashboard" element={ <PlatformPrivateRoute hasAside={false}> <DashboardPage /> </PlatformPrivateRoute> } />
              <Route path="/u/planes" element={ <PlatformPrivateRoute hasAside={true}> <StudyPlansPage /> </PlatformPrivateRoute> } />
              <Route path="/u/planes/:id" element={ <PlatformPrivateRoute hasAside={true}> <PlanMonthPage /> </PlatformPrivateRoute> } />
              <Route path="/u/planes/:id/contenido/:id" element={ <PlatformPrivateRoute hasAside={true}> <StudyCourseContentPage /> </PlatformPrivateRoute> } />
              <Route path="/u/planes/:id/panel_resultados/:id" element={ <PlatformPrivateRoute hasAside={true}> <SimulatorPanelResultsPage /> </PlatformPrivateRoute> } />
              <Route path="/u/planes/:id/simulador/:id" element={ <PlatformPrivateRoute hasAside={true}> <SimulatorCoursePage /> </PlatformPrivateRoute> } />
              <Route path="/u/planes/:id/retro" element={ <PlatformPrivateRoute hasAside={true}> <FeedbakToPage /> </PlatformPrivateRoute> } />
              <Route path="/u/planes/aviso_novedades" element={ <PlatformPrivateRoute hasAside={true}> <AdvicesNewsPage /> </PlatformPrivateRoute> } />
              <Route path="/u/recursos" element={ <PlatformPrivateRoute hasAside={false}> <ResourcesPage /> </PlatformPrivateRoute> } />
              <Route path="/u/recursos/:id" element={ <PlatformPrivateRoute hasAside={false}> <ResourceClass /> </PlatformPrivateRoute> } />
              {/* <Route path='/u/recursos/:id' element={<DashboardLayout hasAside={false}><ResourcesPage /> } /> */}
              <Route path="/u/simulador" element={ <PlatformPrivateRoute hasAside={false}> <SimulatorsPage /> </PlatformPrivateRoute> } />
              <Route path="/u/documentos" element={ <PlatformPrivateRoute hasAside={false}> <DocumentsPage /> </PlatformPrivateRoute> } />
              <Route path="/u/documentos/guia" element={ <PlatformPrivateRoute hasAside={false}> <StudyGuidePage /> </PlatformPrivateRoute> } />
              <Route path="/u/documentos/programa_academico" element={ <PlatformPrivateRoute hasAside={false}> <AcademicProgramPage /> </PlatformPrivateRoute> } />
              <Route path={ROUTES.VERIFICAR_CORREO} element={<VerifyEmailCodePage />} />
            </Routes>
          </DashboardAsideWidth>
        </AuthProvider>
      </WidthContext.Provider>
    </>
  );
};

export default AppRouter;
