import React from "react";
import GlobalStyle from "./global";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import Portugues from "./pages/portugues";
import English from "./pages/english";

const AppRoutes = () => {
    return (
      <>
        <GlobalStyle/>
        <Router basename = {process.env.PUBLIC_URL}>
          <Routes>
          <Route exact path = "/" element = {<Home />} />
            <Route exact path = "/portugues" element = {<Portugues />} />
            <Route exact path = "/english" element = {<English />} />
          </Routes>
        </Router>
      </>
  );
};

export default AppRoutes;
