import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Styled components for the entrance component
const EntranceContainer = styled.div`
  text-align: center;
  padding: 50px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  animation: ${fadeIn} 1s ease-out;
`;

const WelcomeMessage = styled.h1`
  color: #333;
  font-size: 24px;
  margin-bottom: 20px;
`;
export { fadeIn, EntranceContainer, WelcomeMessage }