import React, { useEffect } from "react";
import styled from "styled-components";
import { Container } from "../components/ui/Container";
import { Button } from "../components/ui/Button";

const SuccessContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.success} 0%,
    #059669 100%
  );
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`;

const SuccessContent = styled.div`
  text-align: center;
  max-width: 600px;
  padding: ${({ theme }) => theme.spacing["2xl"]};
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  backdrop-filter: blur(10px);
  box-shadow: ${({ theme }) => theme.shadows.xl};
`;

const SuccessIcon = styled.div`
  font-size: 4rem;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes["3xl"]};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  margin-bottom: ${({ theme }) => theme.spacing.md};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes["4xl"]};
  }
`;

const Message = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  line-height: 1.6;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  opacity: 0.95;
`;

const RedirectMessage = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  opacity: 0.8;
  margin-top: ${({ theme }) => theme.spacing.md};
`;

const SuccessPage: React.FC = () => {
  useEffect(() => {
    // Auto-redirect to Calendly after 5 seconds
    const timer = setTimeout(() => {
      const calendlyUrl =
        import.meta.env.VITE_CALENDLY_URL || "https://calendly.com";
      window.location.href = calendlyUrl;
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleRedirectNow = () => {
    const calendlyUrl =
      import.meta.env.VITE_CALENDLY_URL || "https://calendly.com";
    window.location.href = calendlyUrl;
  };

  return (
    <SuccessContainer>
      <Container>
        <SuccessContent>
          <SuccessIcon>🎉</SuccessIcon>
          <Title>Welcome to Your Business Blueprint!</Title>
          <Message>
            Thank you for your purchase! Your blueprint has been delivered to
            your email, and you now have lifetime access to all the strategies
            and frameworks you need to hit your first £1k month.
          </Message>
          <Message>
            The next step is to schedule your personalized strategy call where
            we'll create a custom action plan based on your specific situation.
          </Message>

          <Button variant="secondary" size="lg" onClick={handleRedirectNow}>
            Schedule Your Strategy Call Now
          </Button>

          <RedirectMessage>
            You'll be automatically redirected to the booking page in a few
            seconds...
          </RedirectMessage>
        </SuccessContent>
      </Container>
    </SuccessContainer>
  );
};

export default SuccessPage;
