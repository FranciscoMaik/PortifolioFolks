import styled, { keyframes } from 'styled-components';

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0px); }
`;

export const Container = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; // Centered for impact
  min-height: 80vh; // Fill most of the screen
  text-align: center;
  position: relative;
  overflow: hidden;
  padding: 0 20px;

  &::before {
    content: '';
    position: absolute;
    width: 300px;
    height: 300px;
    background: ${({ theme }) => theme.accentGradient};
    filter: blur(100px);
    opacity: 0.2;
    border-radius: 50%;
    z-index: -1;
    animation: ${float} 6s ease-in-out infinite;
  }
`;

export const Title = styled.h1`
  font-size: clamp(3rem, 8vw, 6rem);
  font-weight: 700;
  margin-bottom: 1rem;
  letter-spacing: -2px;
  line-height: 1.1;
  color: ${({ theme }) => theme.colorText};

  strong {
    background: ${({ theme }) => theme.accentGradient};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 800;
  }
`;

export const Subtitle = styled.h2`
  font-size: clamp(1.2rem, 3vw, 1.5rem);
  color: ${({ theme }) => theme.secondaryColor};
  font-weight: 400;
  max-width: 600px;
  margin-bottom: 2rem;
  opacity: 0.8;

  span {
    color: ${({ theme }) => theme.fourColor};
    font-weight: 600;
  }
`;

export const Role = styled.div`
  display: inline-block;
  padding: 0.5rem 1rem;
  border-radius: 999px;
  background: ${({ theme }) => theme.hover};
  color: ${({ theme }) =>
    theme.primaryColor === '#FAFAFA' ? theme.thirdColor : theme.colorText};
  font-size: 0.875rem;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-bottom: 1.5rem;
  border: 1px solid ${({ theme }) => theme.secondaryColor}40;
`;
