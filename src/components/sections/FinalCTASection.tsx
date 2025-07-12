import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { Container, Section } from "../ui/Container";
import { Button } from "../ui/Button";
import { redirectToCheckout } from "../../services/stripe";

const CTASection = styled(Section)`
  background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #ec4899 100%);

  color: white;
  position: relative;
  overflow: hidden;
  min-height: 70vh;
  display: flex;
  align-items: center;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background:
      radial-gradient(
        circle at 30% 20%,
        rgba(255, 255, 255, 0.15) 0%,
        transparent 50%
      ),
      radial-gradient(
        circle at 70% 80%,
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
    background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='1.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");

    pointer-events: none;
  }
`;

const CTAContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  z-index: 2;
`;

const CTATitle = styled.h2`
  font-size: 3.2rem;
  font-weight: 800;
  margin-bottom: 2rem;
  line-height: 1.2;
  text-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 120px;
    height: 4px;
    background: rgba(255, 255, 255, 0.8);
    border-radius: 2px;
  }

  @media (min-width: 768px) {
    font-size: 3.8rem;
  }

  @media (max-width: 640px) {
    font-size: 2.5rem;
  }
`;

const CTASubtitle = styled.p`
  font-size: 1.4rem;
  margin-bottom: 3rem;
  opacity: 0.95;
  line-height: 1.6;
  font-weight: 500;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);

  @media (max-width: 640px) {
    font-size: 1.2rem;
  }
`;

const ValuePoints = styled.ul`
  list-style: none;
  margin: 3rem 0;
  text-align: left;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  display: grid;
  gap: 1.5rem;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }
`;

const ValuePoint = styled.li`
  display: flex;
  align-items: center;
  font-size: 1.1rem;
  line-height: 1.5;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  padding: 1.2rem;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: translateY(-3px);
    background: rgba(255, 255, 255, 0.15);
    border-color: rgba(255, 255, 255, 0.3);
  }

  &::before {
    content: "✓";
    background: linear-gradient(135deg, #10b981, #059669);
    color: white;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 1rem;
    font-weight: 800;
    flex-shrink: 0;
    box-shadow: 0 4px 15px rgba(16, 185, 129, 0.4);
  }

  @media (min-width: 768px) {
    font-size: 1.2rem;
  }
`;

const PriceContainer = styled.div`
  margin: 3rem 0;
  padding: 3rem;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 24px;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
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
    animation: shimmer 3s ease-in-out infinite;
    pointer-events: none;
  }
`;

const Price = styled.div`
  font-size: 4rem;
  font-weight: 900;
  margin-bottom: 1rem;
  text-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);

  @media (max-width: 640px) {
    font-size: 3rem;
  }
`;

const PriceSubtext = styled.p`
  font-size: 1.3rem;
  opacity: 0.9;
  margin-bottom: 2.5rem;
  font-weight: 500;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);

  @media (max-width: 640px) {
    font-size: 1.1rem;
  }
`;

const CTAButton = styled.div``;

const Guarantee = styled.div`
  margin-top: 3rem;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  font-size: 1rem;
  opacity: 0.9;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);

  strong {
    font-weight: 700;
  }
`;

const FloatingElements = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  overflow: hidden;

  &::before,
  &::after {
    content: "";
    position: absolute;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.05);
  }

  &::before {
    width: 400px;
    height: 400px;
    top: -100px;
    right: -100px;
    animation-delay: 0s;
  }

  &::after {
    width: 300px;
    height: 300px;
    bottom: -80px;
    left: -80px;
    animation-delay: 4s;
  }
`;

export const FinalCTASection: React.FC = () => {
  const [isCheckoutLoading, setIsCheckoutLoading] = useState(false);

  const handleCheckout = async () => {
    try {
      setIsCheckoutLoading(true);
      await redirectToCheckout();
    } catch (error) {
      console.error("Checkout error:", error);
      alert("There was an error processing your payment. Please try again.");
    } finally {
      setIsCheckoutLoading(false);
    }
  };

  return (
    <CTASection>
      <FloatingElements />
      <Container>
        <CTAContainer>
          <CTATitle>Don't Let Another Month Go By Without Progress</CTATitle>

          <CTASubtitle>
            You have two choices: Keep struggling with trial and error, or get
            the proven blueprint that's already helped hundreds of people break
            through the £1k barrier.
          </CTASubtitle>

          <ValuePoints>
            <ValuePoint>Instant access to the complete blueprint</ValuePoint>
            <ValuePoint>Step-by-step implementation guide</ValuePoint>
            <ValuePoint>Proven strategies that actually work</ValuePoint>
            <ValuePoint>No more guesswork or wasted time</ValuePoint>
            <ValuePoint>
              Start seeing results within weeks, not months
            </ValuePoint>
            <ValuePoint>Lifetime access to all materials</ValuePoint>
          </ValuePoints>

          <PriceContainer>
            <Price>£97</Price>
            <PriceSubtext>
              One-time payment. Lifetime access.
              <br />
              Less than what most people spend on ineffective courses in a
              month.
            </PriceSubtext>

            <CTAButton>
              <Button
                size="lg"
                variant="secondary"
                onClick={handleCheckout}
                loading={isCheckoutLoading}
              >
                Get Your Blueprint Now
              </Button>
            </CTAButton>
          </PriceContainer>

          <Guarantee>
            <strong>30-Day Money-Back Guarantee:</strong> If you don't see a
            clear path to your first £1k within 30 days, we'll refund every
            penny. No questions asked.
          </Guarantee>
        </CTAContainer>
      </Container>
    </CTASection>
  );
};
