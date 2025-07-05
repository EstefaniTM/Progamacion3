// Button.tsx
import styled from 'styled-components';

const Boton = styled.button`
  background-color: green;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
`;

export const Button: React.FC = () => {
  return <Boton>Click Styled</Boton>;
};
