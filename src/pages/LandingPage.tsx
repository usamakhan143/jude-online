import React from "react";
import { Header } from "../components/sections/Header";
import { ProblemsSection } from "../components/sections/ProblemsSection";
import { BenefitsSection } from "../components/sections/BenefitsSection";
import { TestimonialSection } from "../components/sections/TestimonialSection";
import { FinalCTASection } from "../components/sections/FinalCTASection";

const LandingPage: React.FC = () => {
  return (
    <main>
      <Header />
      <ProblemsSection />
      <BenefitsSection />
      <TestimonialSection />
      <FinalCTASection />
    </main>
  );
};

export default LandingPage;
