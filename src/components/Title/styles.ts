import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  margin-bottom: 32px;
  position: relative;

  h2 {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 2.5rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colorText};
    position: relative;
    z-index: 1;

    &::after {
      content: '';
      position: absolute;
      bottom: 2px;
      left: 0;
      width: 100%;
      height: 8px;
      background: ${({ theme }) => theme.accentGradient};
      opacity: 0.3;
      z-index: -1;
      transform: skewX(-20deg);
    }
  }
`;
