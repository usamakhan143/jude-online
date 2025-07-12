import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import LandingPage from "./pages/LandingPage";
import OnboardingPortal from "./pages/OnboardingPortal";
import SuccessPage from "./pages/SuccessPage";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/onboarding" element={<OnboardingPortal />} />
          <Route path="/success" element={<SuccessPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
