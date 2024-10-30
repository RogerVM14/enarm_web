import React from "react";
import { Toaster } from "react-hot-toast";
import AppRouter from "./AppRouter";

const App = () => {
  return (
    <React.Fragment>
      <AppRouter />
      <Toaster />
    </React.Fragment>
  );
};

export default App;
