import styled from 'styled-components';

export const Container = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  padding: 48px 24px;
  margin-top: 80px;
  background: ${({ theme }) => theme.backgroundCard};
  border-top: 1px solid ${({ theme }) => theme.secondaryColor}40;

  .social-links {
    display: flex;
    gap: 32px;

    a {
      transition: all 0.2s ease;
      color: ${({ theme }) => theme.thirdColor};

      &:hover {
        transform: translateY(-3px);
        color: ${({ theme }) => theme.fourColor};
        filter: drop-shadow(0 0 8px ${({ theme }) => theme.fourColor});
      }
    }
  }

  p {
    color: ${({ theme }) => theme.thirdColor};
    font-size: 0.9rem;
    opacity: 0.8;
  }

  @media screen and (max-width: 650px) {
    padding: 32px 16px;
  }
`;
