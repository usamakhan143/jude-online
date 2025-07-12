import React from "react";
import styled, { css } from "styled-components";

interface ButtonProps {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  loading?: boolean;
  disabled?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

const getVariantStyles = (variant: string) => {
  switch (variant) {
    case "primary":
      return css`
        background: ${({ theme }) => theme.colors.gradient.primary};
        background-size: 200% 200%;
        color: white;
        border: 2px solid transparent;
        position: relative;
        overflow: hidden;

        &::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: ${({ theme }) => theme.colors.gradient.secondary};
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        &::after {
          content: "";
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          background: rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          transform: translate(-50%, -50%);
          transition:
            width 0.6s,
            height 0.6s;
        }

        &:hover:not(:disabled) {
          transform: translateY(-3px);
          box-shadow: 0 20px 40px rgba(99, 102, 241, 0.4);
          animation: glow 2s ease-in-out infinite;

          &::before {
            opacity: 1;
          }

          &::after {
            width: 300px;
            height: 300px;
          }
        }

        &:active {
          transform: translateY(-1px);
        }
      `;
    case "secondary":
      return css`
        background-color: ${({ theme }) => theme.colors.bg.secondary};
        color: ${({ theme }) => theme.colors.text.primary};
        border: 2px solid ${({ theme }) => theme.colors.border};

        &:hover:not(:disabled) {
          background-color: ${({ theme }) => theme.colors.bg.tertiary};
          border-color: ${({ theme }) => theme.colors.text.secondary};
        }
      `;
    case "outline":
      return css`
        background-color: transparent;
        color: ${({ theme }) => theme.colors.primary};
        border: 2px solid ${({ theme }) => theme.colors.primary};

        &:hover:not(:disabled) {
          background-color: ${({ theme }) => theme.colors.primary};
          color: ${({ theme }) => theme.colors.text.white};
        }
      `;
    default:
      return css``;
  }
};

const getSizeStyles = (size: string) => {
  switch (size) {
    case "sm":
      return css`
        padding: 0.7rem 1.5rem;
        font-size: 0.8rem;
        border-radius: 12px;
      `;
    case "md":
      return css`
        padding: 1rem 2rem;
        font-size: 0.9rem;
        border-radius: 14px;
      `;
    case "lg":
      return css`
        padding: 1.3rem 3rem;
        font-size: 1rem;
        border-radius: 18px;
        min-width: 200px;
      `;
    default:
      return css``;
  }
};

const StyledButton = styled.button<ButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  border-radius: 16px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  text-decoration: none;
  position: relative;
  overflow: hidden;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 0.9rem;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);

  ${({ variant = "primary" }) => getVariantStyles(variant)}
  ${({ size = "md" }) => getSizeStyles(size)}

  ${({ fullWidth }) =>
    fullWidth &&
    css`
      width: 100%;
    `}

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none !important;
    animation: none !important;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.3);
  }

  /* Shimmer effect */
  &::before {
    z-index: 1;
  }

  span {
    position: relative;
    z-index: 2;
  }
`;

const LoadingSpinner = styled.div`
  width: 16px;
  height: 16px;
  border: 2px solid transparent;
  border-top: 2px solid currentColor;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-right: 0.5rem;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const Button: React.FC<ButtonProps> = ({
  children,
  loading = false,
  disabled = false,
  ...props
}) => {
  return (
    <StyledButton disabled={disabled || loading} {...props}>
      {loading && <LoadingSpinner />}
      <span>{children}</span>
    </StyledButton>
  );
};
