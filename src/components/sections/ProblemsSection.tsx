import React from "react";
import styled from "styled-components";
import { Container, Section } from "../ui/Container";

const StyledProblemsSection = styled(Section)`
  background: linear-gradient(135deg, #1e1b4b 0%, #312e81 100%);
  position: relative;
  overflow: hidden;
`;

const ProblemsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
`;

const SectionTitle = styled.h2`
  font-size: 3rem;
  font-weight: 800;
  background: linear-gradient(135deg, #a855f7 0%, #ec4899 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 4rem;
  line-height: 1.2;
  position: relative;
  text-align: center;

  &::after {
    content: "";
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: linear-gradient(135deg, #a855f7, #ec4899);
    border-radius: 2px;
  }

  @media (min-width: 768px) {
    font-size: 3.5rem;
  }

  @media (max-width: 640px) {
    font-size: 2.2rem;
  }
`;

const ContentWrapper = styled.div`
  display: grid;
  gap: 4rem;
  align-items: center;

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1.2fr;
    gap: 5rem;
  }
`;

const ImageSection = styled.div`
  position: relative;
  order: 2;
  min-height: 500px;
  height: auto;

  @media (min-width: 1024px) {
    order: 1;
    min-height: 600px;
  }

  @media (max-width: 768px) {
    min-height: 400px;
  }
`;

const CollageWrapper = styled.div`
  position: relative;
  width: 100%;
  display: grid;
  grid-template-areas:
    "main main"
    "secondary tertiary"
    "quaternary quaternary";
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 240px 240px 240px;
  gap: 12px;
  padding: 8px;

  @media (max-width: 768px) {
    grid-template-areas:
      "main main"
      "secondary tertiary"
      "quaternary quaternary";
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 250px 200px 200px;
    gap: 8px;
  }
`;

const PremiumImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 16px;
  box-shadow:
    0 25px 50px -12px rgba(0, 0, 0, 0.4),
    0 8px 16px -8px rgba(168, 85, 247, 0.3);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  filter: brightness(0.95) contrast(1.1) saturate(1.1);
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
      rgba(168, 85, 247, 0.1) 0%,
      rgba(236, 72, 153, 0.1) 100%
    );
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: 1;
  }

  &:hover {
    transform: translateY(-12px) scale(1.03);
    box-shadow:
      0 35px 70px -12px rgba(0, 0, 0, 0.5),
      0 12px 24px -8px rgba(168, 85, 247, 0.4),
      0 0 40px rgba(236, 72, 153, 0.2);
    filter: brightness(1.05) contrast(1.15) saturate(1.2);
    z-index: 10;

    &::before {
      opacity: 1;
    }
  }
`;

const MainImage = styled(PremiumImage)`
  grid-area: main;
  border-radius: 16px;

  &:hover {
    transform: translateY(-12px) scale(1.03);
  }
`;

const SecondaryImage = styled(PremiumImage)`
  grid-area: secondary;

  &:hover {
    transform: translateY(-12px) scale(1.03);
  }
`;

const TertiaryImage = styled(PremiumImage)`
  grid-area: tertiary;

  &:hover {
    transform: translateY(-12px) scale(1.03);
  }
`;

const QuaternaryImage = styled(PremiumImage)`
  grid-area: quaternary;

  &:hover {
    transform: translateY(-12px) scale(1.03);
  }
`;

const ContentSection = styled.div`
  text-align: left;
  order: 1;

  @media (min-width: 1024px) {
    order: 2;
  }
`;

const HighlightBox = styled.div`
  background: rgba(168, 85, 247, 0.1);
  padding: 2rem;
  border-radius: 12px;
  border: 1px solid rgba(168, 85, 247, 0.3);
  margin-bottom: 2rem;
`;

const StyledList = styled.ul`
  margin: 0;
  padding-left: 0;
  list-style: none;
`;

const StyledListItem = styled.li`
  position: relative;
  padding-left: 2rem;
  margin-bottom: 0.8rem;
  color: #e2e8f0;

  &::before {
    content: "❌";
    position: absolute;
    left: 0;
    top: 0;
    color: #ec4899;
    font-size: 1.1rem;
    font-weight: bold;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

const SolutionList = styled.ul`
  margin: 0 0 1.5rem 0;
  padding-left: 0;
  list-style: none;
`;

const SolutionListItem = styled.li`
  position: relative;
  padding-left: 2rem;
  margin-bottom: 0.8rem;
  color: #e2e8f0;

  &::before {
    content: "✅";
    position: absolute;
    left: 0;
    top: 0;
    color: #10b981;
    font-size: 1.1rem;
    font-weight: bold;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

const SolutionBox = styled.div`
  background: rgba(16, 185, 129, 0.1);
  padding: 2rem;
  border-radius: 12px;
  border: 1px solid rgba(16, 185, 129, 0.3);
`;

export const ProblemsSection: React.FC = () => {
  return (
    <StyledProblemsSection>
      <Container>
        <ProblemsContainer>
          <SectionTitle>
            Why Most People Stay Stuck (and Broke) for Years
          </SectionTitle>

          <ContentWrapper>
            <ImageSection>
              <CollageWrapper>
                <MainImage
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Frustrated entrepreneur looking at business charts"
                />
                <SecondaryImage
                  src="https://cdn.builder.io/api/v1/image/assets%2F59fb5da5a9b342648db0a1edf457b3c1%2F1fd9101cdef84f40ad4064cbef2d047b?format=webp&width=800"
                  alt="Business innovation and digital transformation"
                />
                <TertiaryImage
                  src="https://cdn.builder.io/api/v1/image/assets%2F59fb5da5a9b342648db0a1edf457b3c1%2F81636a13bdc241d9acb6e0fedda9966c?format=webp&width=800"
                  alt="Professional business collaboration"
                />
                <QuaternaryImage
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Person overwhelmed by business decisions"
                />
              </CollageWrapper>
            </ImageSection>

            <ContentSection>
              <div
                style={{
                  fontSize: "1.1rem",
                  lineHeight: "1.7",
                  color: "#ffffff",
                }}
              >
                <p
                  style={{
                    marginBottom: "1.5rem",
                    fontSize: "1.2rem",
                    fontWeight: "500",
                  }}
                >
                  Wandering around trying random business ideas without a clear
                  model is the fastest way to waste years of your life—and
                  thousands of pounds you'll never get back.
                </p>

                <HighlightBox>
                  <p
                    style={{
                      marginBottom: "1rem",
                      fontWeight: "600",
                      color: "#a855f7",
                    }}
                  >
                    When you don't know what business model is right for you,
                    you:
                  </p>
                  <StyledList>
                    <StyledListItem>
                      Keep second-guessing yourself and switching lanes
                    </StyledListItem>
                    <StyledListItem>
                      Pour time and money into things that never take off
                    </StyledListItem>
                    <StyledListItem>
                      Watch others succeed while you stay stuck in the same
                      place
                    </StyledListItem>
                  </StyledList>
                </HighlightBox>

                <p
                  style={{
                    marginBottom: "1.5rem",
                    fontWeight: "600",
                    fontSize: "1.3rem",
                    color: "#ec4899",
                  }}
                >
                  The harsh truth is:
                </p>
                <p style={{ marginBottom: "2rem", fontSize: "1.2rem" }}>
                  Picking the wrong lane—or no lane at all—is the #1 reason most
                  beginners never make real income.
                </p>

                <SolutionBox>
                  <p
                    style={{
                      marginBottom: "1rem",
                      fontWeight: "600",
                      color: "#10b981",
                    }}
                  >
                    That's exactly why I created this blueprint. Inside, I:
                  </p>
                  <SolutionList>
                    <SolutionListItem>
                      Collect detailed information about you, your strengths,
                      skills, and goals
                    </SolutionListItem>
                    <SolutionListItem>
                      Validate if you're on the right track—or show you where to
                      pivot
                    </SolutionListItem>
                    <SolutionListItem>
                      Build you a step-by-step action plan to launch the right
                      business with confidence
                    </SolutionListItem>
                  </SolutionList>
                  <p
                    style={{
                      fontWeight: "600",
                      fontSize: "1.2rem",
                      color: "#10b981",
                      textAlign: "center",
                      margin: "0",
                    }}
                  >
                    Stop guessing. Start building.
                  </p>
                </SolutionBox>
              </div>
            </ContentSection>
          </ContentWrapper>
        </ProblemsContainer>
      </Container>
    </StyledProblemsSection>
  );
};
