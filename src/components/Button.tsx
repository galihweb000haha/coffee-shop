// Button.tsx
import styled from 'styled-components';

interface ButtonProps {
  type?: 'primary' | 'secondary';
  disabled?: boolean;
}

export const StyledButton = styled.button<ButtonProps>`
  background-color: ${(props) =>
    props.type === 'primary'
      ? '#4caf50'
      : props.type === 'secondary'
      ? '#008CBA'
      : '#ccc'};
  color: white;
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};

  &:hover {
    background-color: ${(props) =>
      props.type === 'primary'
        ? '#45a049'
        : props.type === 'secondary'
        ? '#005F7F'
        : '#ccc'};
  }
`;
