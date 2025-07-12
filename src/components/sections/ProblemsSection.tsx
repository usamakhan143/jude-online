import React from "react";
import styled from "styled-components";
import { Container, Section } from "../ui/Container";

const StyledProblemsSection = styled(Section)`
  background: linear-gradient(135deg, #f8fafc 0%, #ffffff 100%);
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
        circle at 80% 20%,
        rgba(99, 102, 241, 0.05) 0%,
        transparent 50%
      ),
      radial-gradient(
        circle at 20% 80%,
        rgba(236, 72, 153, 0.05) 0%,
        transparent 50%
      );
    pointer-events: none;
  }
`;

const ProblemsContainer = styled.div`
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
    background: linear-gradient(135deg, #6366f1, #8b5cf6);
    border-radius: 2px;
  }

  @media (min-width: 768px) {
    font-size: 3.5rem;
  }

  @media (max-width: 640px) {
    font-size: 2.2rem;
  }
`;

const ProblemsList = styled.ul`
  list-style: none;
  margin: 4rem 0;
  text-align: left;
  display: grid;
  gap: 1.5rem;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }
`;

const ProblemItem = styled.li`
  display: flex;
  align-items: flex-start;
  padding: 2rem;
  font-size: 1.1rem;
  line-height: 1.6;
  background: rgba(255, 255, 255, 0.8);

  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);

  transition: all 0.2s ease;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background: linear-gradient(135deg, #ef4444, #f97316);
    border-radius: 0 2px 2px 0;
  }

  &::after {
    content: "❌";
    margin-right: 1rem;
    flex-shrink: 0;
    margin-top: 2px;
    font-size: 1.2rem;
    filter: drop-shadow(0 2px 4px rgba(239, 68, 68, 0.3));
  }
`;

const ValueProposition = styled.div`
  background: linear-gradient(
    135deg,
    rgba(99, 102, 241, 0.1) 0%,
    rgba(139, 92, 246, 0.1) 100%
  );
  padding: 3rem;
  border-radius: 24px;
  margin-top: 4rem;
  border: 1px solid rgba(99, 102, 241, 0.2);

  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      45deg,
      transparent 49%,
      rgba(255, 255, 255, 0.1) 50%,
      transparent 51%
    );

    pointer-events: none;
  }
`;

const ValueTitle = styled.h3`
  font-size: 2rem;
  font-weight: 700;
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 1.5rem;
  text-align: center;

  @media (max-width: 640px) {
    font-size: 1.5rem;
  }
`;

const ValueText = styled.p`
  font-size: 1.2rem;
  color: #475569;
  line-height: 1.7;
  text-align: center;
  font-weight: 500;

  @media (max-width: 640px) {
    font-size: 1.1rem;
  }
`;

export const ProblemsSection: React.FC = () => {
  return (
    <StyledProblemsSection>
      <Container>
        <ProblemsContainer>
          <SectionTitle>
            Why Most People Stay Stuck (and Broke) for Years
          </SectionTitle>

          <ProblemsList>
            <ProblemItem>
              They're trying to build a business without a clear strategy or
              roadmap
            </ProblemItem>
            <ProblemItem>
              They're overwhelmed by conflicting advice from "gurus" who've
              never built anything themselves
            </ProblemItem>
            <ProblemItem>
              They're chasing shiny objects instead of focusing on proven
              fundamentals
            </ProblemItem>
            <ProblemItem>
              They're afraid to charge what they're worth because they don't
              understand their true value
            </ProblemItem>
            <ProblemItem>
              They're spending money on tools and courses instead of
              revenue-generating activities
            </ProblemItem>
            <ProblemItem>
              They're trying to do everything themselves instead of leveraging
              systems and automation
            </ProblemItem>
          </ProblemsList>

          <ValueProposition>
            <ValueTitle>
              The Solution: A Step-by-Step Blueprint That Actually Works
            </ValueTitle>
            <ValueText>
              This isn't another generic business course. It's a battle-tested
              blueprint that shows you exactly what to do, when to do it, and
              how to avoid the costly mistakes that keep most people spinning
              their wheels for years. Every strategy inside has been proven to
              work in real businesses, generating real results.
            </ValueText>
          </ValueProposition>
        </ProblemsContainer>
      </Container>
    </StyledProblemsSection>
  );
};
