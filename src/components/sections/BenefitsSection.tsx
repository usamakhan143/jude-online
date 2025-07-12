import React from "react";
import styled, { keyframes } from "styled-components";
import { Container, Section } from "../ui/Container";

const StyledBenefitsSection = styled(Section)`
  background: linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%);
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background:
      radial-gradient(
        circle at 20% 30%,
        rgba(16, 185, 129, 0.1) 0%,
        transparent 50%
      ),
      radial-gradient(
        circle at 80% 70%,
        rgba(99, 102, 241, 0.08) 0%,
        transparent 50%
      );
    pointer-events: none;
  }
`;

const BenefitsContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  z-index: 2;
`;

const SectionTitle = styled.h2`
  font-size: 3rem;
  font-weight: 800;
  background: linear-gradient(135deg, #0f172a 0%, #475569 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 3rem;
  line-height: 1.2;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: linear-gradient(135deg, #10b981, #059669);
    border-radius: 2px;
  }

  @media (min-width: 768px) {
    font-size: 3.5rem;
  }

  @media (max-width: 640px) {
    font-size: 2.2rem;
  }
`;

const BenefitsList = styled.ul`
  list-style: none;
  margin: 4rem 0;
  text-align: left;
  display: grid;
  gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
`;

const BenefitItem = styled.li`
  display: flex;
  align-items: flex-start;
  padding: 2.5rem;
  font-size: 1.1rem;
  line-height: 1.7;
  background: rgba(255, 255, 255, 0.9);

  border-radius: 24px;
  border: 1px solid rgba(16, 185, 129, 0.2);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.08);

  transition: all 0.2s ease;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(16, 185, 129, 0.15);
    border-color: rgba(16, 185, 129, 0.3);
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 5px;
    height: 100%;
    background: linear-gradient(135deg, #10b981, #059669);
    border-radius: 0 3px 3px 0;
  }

  &::after {
    content: "✅";
    margin-right: 1.2rem;
    flex-shrink: 0;
    margin-top: 3px;
    font-size: 1.3rem;
    filter: drop-shadow(0 2px 8px rgba(16, 185, 129, 0.4));
    animation: pulse 2s ease-in-out infinite;
  }
`;

const BenefitText = styled.div`
  strong {
    color: #0f172a;
    font-weight: 700;
    background: linear-gradient(135deg, #10b981, #059669);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  color: #475569;
  font-weight: 500;
`;

const ValueProposition = styled.div`
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  color: white;
  padding: 3.5rem;
  border-radius: 28px;
  margin-top: 4rem;
  box-shadow:
    0 25px 50px rgba(16, 185, 129, 0.3),
    0 0 100px rgba(16, 185, 129, 0.2);
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background:
      radial-gradient(
        circle at 30% 30%,
        rgba(255, 255, 255, 0.2) 0%,
        transparent 50%
      ),
      radial-gradient(
        circle at 70% 70%,
        rgba(255, 255, 255, 0.1) 0%,
        transparent 50%
      );
    pointer-events: none;
  }

  &::after {
    content: "";
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(
      45deg,
      transparent 49%,
      rgba(255, 255, 255, 0.1) 50%,
      transparent 51%
    );
    animation: shimmer 4s ease-in-out infinite;
    pointer-events: none;
  }
`;

const ValueTitle = styled.h3`
  font-size: 2.2rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  text-align: center;
  position: relative;
  z-index: 2;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);

  @media (max-width: 640px) {
    font-size: 1.7rem;
  }
`;

const ValueText = styled.p`
  font-size: 1.2rem;
  line-height: 1.7;
  text-align: center;
  opacity: 0.95;
  position: relative;
  z-index: 2;
  font-weight: 500;
  text-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);

  @media (max-width: 640px) {
    font-size: 1.1rem;
  }
`;

export const BenefitsSection: React.FC = () => {
  return (
    <StyledBenefitsSection>
      <Container>
        <BenefitsContainer>
          <SectionTitle>What You Get When You Grab Your Blueprint</SectionTitle>

          <BenefitsList>
            <BenefitItem>
              <BenefitText>
                <strong>Crystal Clear Business Strategy:</strong> Know exactly
                what business model to pursue and why it's the fastest path to
                your first £1k (and beyond)
              </BenefitText>
            </BenefitItem>

            <BenefitItem>
              <BenefitText>
                <strong>Step-by-Step Action Plan:</strong> Get a week-by-week
                roadmap that eliminates guesswork and keeps you focused on
                revenue-generating activities
              </BenefitText>
            </BenefitItem>

            <BenefitItem>
              <BenefitText>
                <strong>Pricing & Positioning Framework:</strong> Learn how to
                price your services confidently and position yourself as the
                obvious choice for your ideal clients
              </BenefitText>
            </BenefitItem>

            <BenefitItem>
              <BenefitText>
                <strong>Sales System That Converts:</strong> Master the art of
                selling without being pushy, using proven scripts and frameworks
                that close deals consistently
              </BenefitText>
            </BenefitItem>

            <BenefitItem>
              <BenefitText>
                <strong>Mistake-Proof Implementation:</strong> Avoid the costly
                errors that derail most new businesses with our comprehensive
                troubleshooting guide
              </BenefitText>
            </BenefitItem>
          </BenefitsList>

          <ValueProposition>
            <ValueTitle>
              Finally Get The Clarity You've Been Searching For
            </ValueTitle>
            <ValueText>
              Stop second-guessing yourself. Stop jumping from strategy to
              strategy. This blueprint gives you everything you need to build a
              profitable business with confidence and clarity.
            </ValueText>
          </ValueProposition>
        </BenefitsContainer>
      </Container>
    </StyledBenefitsSection>
  );
};
