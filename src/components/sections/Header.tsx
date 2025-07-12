import React, { useState } from "react";
import styled from "styled-components";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { redirectToCheckout } from "../../services/stripe";

const HeaderSection = styled.section`
  position: relative;
  background: ${({ theme }) => theme.colors.gradient.primary};
  padding: 6rem 0 8rem 0;
  overflow: hidden;
  min-height: 100vh;
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
        rgba(255, 255, 255, 0.2) 0%,
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
    background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");

    pointer-events: none;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 8rem 0 10rem 0;
  }
`;

const HeaderContent = styled.div`
  text-align: center;
  max-width: 900px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
  animation: fadeInUp 0.3s ease-out;
`;

const Headline = styled.h1`
  font-size: 3.5rem;
  font-weight: 800;
  color: white;
  line-height: 1.1;
  margin-bottom: 2rem;
  background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 4px;
    background: ${({ theme }) => theme.colors.gradient.secondary};
    border-radius: 2px;
    animation: shimmer 2s ease-in-out infinite;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 4.5rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    font-size: 5.5rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 2.5rem;
  }
`;

const VideoContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 700px;
  margin: 3rem auto;
  aspect-ratio: 16 / 9;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  overflow: hidden;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow:
    0 25px 50px -12px rgba(0, 0, 0, 0.25),
    0 0 80px rgba(99, 102, 241, 0.3);
  animation: fadeInScale 0.3s ease-out;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: translateY(-10px) scale(1.02);
    box-shadow:
      0 35px 70px -12px rgba(0, 0, 0, 0.35),
      0 0 120px rgba(99, 102, 241, 0.5);
  }

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

const VideoIframe = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.xl};
`;

const CTAContainer = styled.div`
  margin-top: 4rem;
  animation: fadeInUp 0.3s ease-out;
`;

const CTAText = styled.p`
  font-size: 1.3rem;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 2.5rem;
  font-weight: 500;
  line-height: 1.6;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 1.1rem;
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
    background: rgba(255, 255, 255, 0.1);
    animation: float 6s ease-in-out infinite;
  }

  &::before {
    width: 300px;
    height: 300px;
    top: 10%;
    left: -100px;
    animation-delay: 0s;
  }

  &::after {
    width: 200px;
    height: 200px;
    bottom: 10%;
    right: -50px;
    animation-delay: 3s;
  }
`;

export const Header: React.FC = () => {
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
    <HeaderSection>
      <FloatingElements />
      <Container>
        <HeaderContent>
          <Headline>
            Stop Making the Business Mistakes That Are Stopping You From Hitting
            Your First £1k
          </Headline>

          <VideoContainer>
            <VideoIframe
              src="https://player.vimeo.com/video/1100766068?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&background=0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              title="Business Blueprint Explainer Video"
            />
          </VideoContainer>

          <CTAContainer>
            <CTAText>
              Get instant access to the blueprint that's helped hundreds break
              through the £1k barrier
            </CTAText>
            <Button
              size="lg"
              onClick={handleCheckout}
              loading={isCheckoutLoading}
            >
              Get Your Blueprint Now - £97
            </Button>
          </CTAContainer>
        </HeaderContent>
      </Container>
    </HeaderSection>
  );
};
