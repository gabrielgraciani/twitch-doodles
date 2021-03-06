import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
`;

const InputContainer = styled.div`
  width: 100%;
  border: 0.1rem solid ${props => props.theme.colors.inputBorderColor};
  border-radius: 0.4rem;
  position: relative;
  transition: border-color 0.15s ease;

  &.mouseEnter {
    border-color: ${props => props.theme.colors.primary};
  }
  &.mouseActive {
    border-color: ${props => props.theme.colors.inputBorderColorActive};
  }
  &.hasError {
    border-color: ${props => props.theme.colors.inputError};
  }
`;

const StyledInput = styled.input`
  width: 100%;
  background: transparent;
  font-size: 1.4rem;
  padding: 1rem 0.8rem;
  color: ${props => props.theme.colors.primary};

  :-webkit-autofill {
    box-shadow: 0 0 0 100rem ${props => props.theme.colors.background} inset;
    color: ${props => props.theme.colors.primary};
  }

  @media (max-width: 500px) {
    font-size: 1.3rem;
  }
`;

const Label = styled.label`
  position: absolute;
  top: 50%;
  left: 0.8rem;
  transform: translate(0%, -50%);
  pointer-events: none;
  background: ${props => props.theme.colors.background};
  transition: top 0.15s ease, font-size 0.15s ease;
  font-size: 1.4rem;
  padding-right: 0.5rem;

  &.mouseActive {
    top: 0%;
    color: ${props => props.theme.colors.inputBorderColorActive};
    font-size: 1.1rem;
  }
  &.hasValue {
    top: 0%;
    font-size: 1.1rem;
  }
  &.hasError {
    color: ${props => props.theme.colors.inputError};
  }

  @media (max-width: 500px) {
    font-size: 1.3rem;
  }
`;

const ErrorMessage = styled.div`
  color: ${props => props.theme.colors.inputError};
  font-size: 1.2rem;
  margin-top: 0.3rem;
`;

export { Container, InputContainer, StyledInput, Label, ErrorMessage };
