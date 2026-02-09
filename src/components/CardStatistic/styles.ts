import styled from 'styled-components';

export const Container = styled.div`
  background: ${({ theme }) => theme.backgroundCard};
  border: 1px solid ${({ theme }) => theme.secondaryColor}40;
  border-radius: 16px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);

  &:hover {
    transform: translateY(-5px);
    border-color: ${({ theme }) => theme.fourColor};
    box-shadow: 0 10px 30px -10px ${({ theme }) => theme.fourColor}40;
  }

  .staticInfo {
    display: flex;
    align-items: baseline;
    gap: 4px;

    span {
      font-size: 2rem;
      font-weight: 300;
      color: ${({ theme }) => theme.fourColor};
    }

    h2 {
      font-size: 3.5rem;
      font-weight: 700;
      background: ${({ theme }) => theme.accentGradient};
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      line-height: 1;
    }
  }

  > div:last-child {
    display: flex;
    flex-direction: column;
  }

  .summary {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .text {
    p {
      color: ${({ theme }) => theme.thirdColor};
      font-size: 0.95rem;
      line-height: 1.6;
    }
  }

  @media screen and (max-width: 650px) {
    width: 100%;
  }
`;

export const HeaderItem = styled.div`
  h3 {
    color: ${({ theme }) => theme.colorText};
    font-size: 1.25rem;
    font-weight: 700;
  }
`;
