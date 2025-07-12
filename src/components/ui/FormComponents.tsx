import React from "react";
import styled from "styled-components";

interface FormGroupProps {
  children: React.ReactNode;
  className?: string;
}

interface LabelProps {
  htmlFor: string;
  required?: boolean;
  children: React.ReactNode;
}

interface InputProps {
  id: string;
  name: string;
  type?: string;
  placeholder?: string;
  value: string | undefined;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  error?: boolean;
}

interface TextareaProps {
  id: string;
  name: string;
  placeholder?: string;
  value: string | undefined;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
  error?: boolean;
  rows?: number;
}

interface SelectProps {
  id: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLSelectElement>) => void;
  error?: boolean;
  children: React.ReactNode;
}

interface ErrorMessageProps {
  children: React.ReactNode;
}

const StyledFormGroup = styled.div`
  margin-bottom: 2rem;
`;

const StyledLabel = styled.label<{ required?: boolean }>`
  display: block;
  font-size: 1rem;
  font-weight: 600;
  background: linear-gradient(135deg, #0f172a, #475569);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 0.75rem;

  ${({ required }) =>
    required &&
    `
    &::after {
      content: ' *';
      color: #ef4444;
      -webkit-text-fill-color: #ef4444;
    }
  `}
`;

const inputStyles = (props: any) => `
  width: 100%;
  padding: 1rem 1.25rem;
  border: 2px solid ${props.error ? "#ef4444" : "rgba(102, 126, 234, 0.2)"};
  border-radius: 16px;
  font-size: 1rem;
  font-family: inherit;
  font-weight: 500;
  background: ${props.error ? "rgba(239, 68, 68, 0.05)" : "rgba(255, 255, 255, 0.9)"};
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  color: #0f172a;
  
  &:focus {
    outline: none;
    border-color: ${props.error ? "#ef4444" : "#667eea"};
    background: rgba(255, 255, 255, 0.95);
    box-shadow: 0 0 0 4px ${props.error ? "rgba(239, 68, 68, 0.1)" : "rgba(102, 126, 234, 0.1)"};
    transform: translateY(-1px);
  }
  
  &::placeholder {
    color: #94a3b8;
    font-weight: 400;
  }
  
  &:hover:not(:focus) {
    border-color: ${props.error ? "#ef4444" : "rgba(102, 126, 234, 0.3)"};
    background: rgba(255, 255, 255, 0.95);
  }
`;

const StyledInput = styled.input<InputProps>`
  ${(props) => inputStyles(props)}
`;

const StyledTextarea = styled.textarea<TextareaProps>`
  ${(props) => inputStyles(props)}
  resize: vertical;
  min-height: 120px;
  line-height: 1.6;
`;

const StyledSelect = styled.select<SelectProps>`
  ${(props) => inputStyles(props)}
  cursor: pointer;

  option {
    background: white;
    color: #0f172a;
    padding: 0.5rem;
  }
`;

const StyledErrorMessage = styled.div`
  color: #ef4444;
  font-size: 0.875rem;
  font-weight: 500;
  margin-top: 0.5rem;
  padding: 0.5rem 0.75rem;
  background: rgba(239, 68, 68, 0.1);
  border-radius: 8px;
  border-left: 3px solid #ef4444;
`;

export const FormGroup: React.FC<FormGroupProps> = ({
  children,
  className,
}) => <StyledFormGroup className={className}>{children}</StyledFormGroup>;

export const Label: React.FC<LabelProps> = ({
  htmlFor,
  required,
  children,
}) => (
  <StyledLabel htmlFor={htmlFor} required={required}>
    {children}
  </StyledLabel>
);

export const Input: React.FC<InputProps> = (props) => (
  <StyledInput {...props} value={props.value || ""} />
);

export const Textarea: React.FC<TextareaProps> = (props) => (
  <StyledTextarea {...props} value={props.value || ""} />
);

export const Select: React.FC<SelectProps> = (props) => (
  <StyledSelect {...props} />
);

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ children }) => (
  <StyledErrorMessage>{children}</StyledErrorMessage>
);
