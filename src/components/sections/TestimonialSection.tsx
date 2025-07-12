import React from "react";
import styled, { keyframes } from "styled-components";
import { Container, Section } from "../ui/Container";

const StyledTestimonialSection = styled(Section)`
  background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
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
        circle at 70% 30%,
        rgba(236, 72, 153, 0.08) 0%,
        transparent 50%
      ),
      radial-gradient(
        circle at 30% 70%,
        rgba(99, 102, 241, 0.05) 0%,
        transparent 50%
      );
    pointer-events: none;
  }
`;

const TestimonialContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  align-items: center;
  position: relative;
  z-index: 2;

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
  }
`;

const VideoTestimonial = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 24px;
  overflow: hidden;
  box-shadow:
    0 20px 40px rgba(0, 0, 0, 0.1),
    0 0 80px rgba(236, 72, 153, 0.2);

  border: 1px solid rgba(255, 255, 255, 0.3);

  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
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

    pointer-events: none;
  }

  @media (min-width: 1024px) {
    order: 2;
  }
`;

const VideoIframe = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 24px;
`;

const TestimonialContent = styled.div`
  @media (min-width: 1024px) {
    order: 1;
  }
`;

const Quote = styled.blockquote`
  font-size: 1.8rem;
  font-weight: 600;
  color: #0f172a;
  line-height: 1.4;
  margin-bottom: 2.5rem;
  position: relative;
  font-style: italic;

  &::before {
    content: '"';
    font-size: 5rem;
    color: #ec4899;
    position: absolute;
    top: -2rem;
    left: -2rem;
    font-family: serif;
    opacity: 0.7;
  }

  @media (min-width: 768px) {
    font-size: 2.2rem;
  }

  @media (max-width: 640px) {
    font-size: 1.4rem;
    margin-left: 1rem;
  }
`;

const CustomerInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
`;

const Avatar = styled.div`
  width: 70px;
  height: 70px;
  background: linear-gradient(135deg, #ec4899, #f97316);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
  font-weight: 800;
  margin-right: 1.5rem;
  box-shadow: 0 10px 25px rgba(236, 72, 153, 0.3);
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: -3px;
    left: -3px;
    right: -3px;
    bottom: -3px;
    background: linear-gradient(135deg, #ec4899, #f97316);
    border-radius: 50%;
    z-index: -1;
    opacity: 0.3;
  }
`;

const CustomerDetails = styled.div``;

const CustomerName = styled.div`
  font-size: 1.3rem;
  font-weight: 700;
  background: linear-gradient(135deg, #0f172a, #475569);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 0.25rem;
`;

const CustomerTitle = styled.div`
  font-size: 1rem;
  color: #64748b;
  font-weight: 500;
`;

const Results = styled.div`
  background: linear-gradient(135deg, #10b981, #059669);
  color: white;
  padding: 1.5rem 2rem;
  border-radius: 16px;
  font-size: 1.2rem;
  font-weight: 700;
  text-align: center;
  box-shadow:
    0 15px 30px rgba(16, 185, 129, 0.3),
    0 0 50px rgba(16, 185, 129, 0.2);
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

  &::after {
    content: "🚀";
    position: absolute;
    top: 50%;
    right: 1rem;
    transform: translateY(-50%);
    font-size: 1.5rem;
  }
`;

export const TestimonialSection: React.FC = () => {
  return (
    <StyledTestimonialSection>
      <Container>
        <TestimonialContainer>
          <VideoTestimonial>
            <VideoIframe
              src="https://player.vimeo.com/video/1100766068?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&background=0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              title="Customer Success Story Video"
            />
          </VideoTestimonial>

          <TestimonialContent>
            <Quote>
              Before finding this blueprint, I was stuck at £300/month for over
              a year. Within 6 weeks of implementing these strategies, I hit my
              first £2,000 month. The clarity alone was worth 10x the price.
            </Quote>

            <CustomerInfo>
              <Avatar>SM</Avatar>
              <CustomerDetails>
                <CustomerName>Sarah Mitchell</CustomerName>
                <CustomerTitle>Marketing Consultant</CustomerTitle>
              </CustomerDetails>
            </CustomerInfo>

            <Results>Results: £300/month ��� £2,000/month in 6 weeks</Results>
          </TestimonialContent>
        </TestimonialContainer>
      </Container>
    </StyledTestimonialSection>
  );
};
