import React from "react";
import styled from "styled-components";
import { Container, Section } from "../ui/Container";

const StyledBenefitsSection = styled(Section)`
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
  position: relative;
  overflow: hidden;
`;

const BenefitsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  z-index: 2;
`;

const SectionTitle = styled.h2`
  font-size: 3rem;
  font-weight: 800;
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 3rem;
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

const IntroText = styled.div`
  text-align: center;
  margin-bottom: 4rem;
  font-size: 1.2rem;
  line-height: 1.7;
  color: #e2e8f0;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

const BenefitsGrid = styled.div`
  display: grid;
  gap: 2rem;
  margin-top: 3rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 2.5rem;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const BottomCardsContainer = styled.div`
  display: grid;
  gap: 2rem;
  margin-top: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 2.5rem;
  }
`;

const BenefitCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(16, 185, 129, 0.2);
  border-radius: 16px;
  padding: 2rem;
  text-align: center;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-5px);
    border-color: rgba(16, 185, 129, 0.4);
    box-shadow: 0 10px 30px rgba(16, 185, 129, 0.2);
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: linear-gradient(135deg, #10b981, #059669);
  }
`;

const BenefitIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1.5rem;
  color: #10b981;
`;

const BenefitTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 700;
  color: #10b981;
  margin-bottom: 1rem;
`;

const BenefitText = styled.p`
  color: #e2e8f0;
  line-height: 1.6;
  font-size: 1rem;
`;

const ImageSection = styled.div`
  margin: 4rem 0;
  display: grid;
  gap: 3rem;
  align-items: center;

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
  }
`;

const SuccessImage = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 20px;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
`;

const SuccessContent = styled.div`
  text-align: left;
  color: #e2e8f0;
  font-size: 1.1rem;
  line-height: 1.7;
`;

export const BenefitsSection: React.FC = () => {
  return (
    <StyledBenefitsSection>
      <Container>
        <BenefitsContainer>
          <SectionTitle>What You Get When You Grab Your Blueprint</SectionTitle>

          <IntroText>
            <p
              style={{
                marginBottom: "1.5rem",
                fontSize: "1.3rem",
                fontWeight: "600",
              }}
            >
              More than anything, you get ultimate clarity.
            </p>
            <p>
              No more guessing. No more wondering if you're wasting your time.
              No more feeling like you're running in circles while everyone else
              passes you by.
            </p>
          </IntroText>

          <BenefitsGrid>
            <BenefitCard>
              <BenefitIcon>🎯</BenefitIcon>
              <BenefitTitle>Certainty About Your Business Model</BenefitTitle>
              <BenefitText>
                You'll know exactly what business makes sense for you—one you
                can actually stick with and grow profitably.
              </BenefitText>
            </BenefitCard>

            <BenefitCard>
              <BenefitIcon>📋</BenefitIcon>
              <BenefitTitle>A Step-By-Step Roadmap</BenefitTitle>
              <BenefitText>
                No fluff, no jargon. Just clear, simple steps you can follow to
                launch and start making your first £1k/month.
              </BenefitText>
            </BenefitCard>

            <BenefitCard>
              <BenefitIcon>💪</BenefitIcon>
              <BenefitTitle>Confidence in Every Move</BenefitTitle>
              <BenefitText>
                When you have a proven plan, taking action feels easier and you
                stop second-guessing every decision.
              </BenefitText>
            </BenefitCard>
          </BenefitsGrid>

          <BottomCardsContainer>
            <BenefitCard>
              <BenefitIcon>🚀</BenefitIcon>
              <BenefitTitle>Faster Progress & Real Results</BenefitTitle>
              <BenefitText>
                Instead of wasting years, you'll move forward with purpose and
                start generating revenue as fast as possible.
              </BenefitText>
            </BenefitCard>

            <BenefitCard>
              <BenefitIcon>🗂️</BenefitIcon>
              <BenefitTitle>The Freedom You've Been Looking For</BenefitTitle>
              <BenefitText>
                You'll finally feel like you're on the right track—building
                something that matters and creates real income.
              </BenefitText>
            </BenefitCard>
          </BottomCardsContainer>

          <ImageSection>
            <SuccessImage
              src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Successful entrepreneur celebrating growth"
            />
            <SuccessContent>
              <h3
                style={{
                  color: "#10b981",
                  fontSize: "1.5rem",
                  marginBottom: "1rem",
                  fontWeight: "700",
                }}
              >
                Transform Your Business Journey
              </h3>
              <p style={{ marginBottom: "1rem" }}>
                Stop spinning your wheels and start building a business that
                actually works. This blueprint has helped hundreds of
                entrepreneurs break through the £1k barrier and beyond.
              </p>
              <p style={{ color: "#10b981", fontWeight: "600" }}>
                Your success story starts here.
              </p>
            </SuccessContent>
          </ImageSection>
        </BenefitsContainer>
      </Container>
    </StyledBenefitsSection>
  );
};
