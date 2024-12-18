import React from "react";
import { Toaster } from "react-hot-toast";
import AppRouter from "./AppRouter";
import Loader from "./components/Loader";
import MaintenancePage from "./pages/MaintenancePage";
const { REACT_APP_ON_MAINTENANCE } = process.env;
const App = () => {

  const isOnMaintenance =
    REACT_APP_ON_MAINTENANCE && REACT_APP_ON_MAINTENANCE === "TRUE"
      ? true
      : false;
      
  return (
    <React.Fragment>
      {isOnMaintenance ? (
        <MaintenancePage />
      ) : (
        <>
          <AppRouter />
          <Toaster />
          <Loader />
        </>
      )}
    </React.Fragment>
  );
};

export default App;
