import React from "react";
import { Toaster } from "react-hot-toast";
import AppRouter from "./AppRouter";
import Loader from "./components/Loader";

const App = () => {
  return (
    <React.Fragment>
      <AppRouter />
      <Toaster />
      <Loader />
    </React.Fragment>
  );
};

export default App;
