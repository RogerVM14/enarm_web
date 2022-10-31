import React from "react";
import { Toaster } from "react-hot-toast";
import AppRouter from "./AppRouter";

const App = () => {
  return (
    <div>
      <AppRouter />
      <Toaster />
    </div>
  );
};

export default App;
