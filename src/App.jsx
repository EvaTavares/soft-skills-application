import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
// import EvaPage from "./pages/EvaPage";
// import JonasPage from "./pages/JonasPage";
// import RobertoPage from "./pages/RobertoPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        {/* <Route path="/evaPage" element={<EvaPage />} />
        <Route path="/jonasPage" element={<JonasPage />} />
        <Route path="/robertoPage" element={<RobertoPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
