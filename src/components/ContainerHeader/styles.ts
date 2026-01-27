import styled from 'styled-components';

export const Container = styled.div`
  background: ${({ theme }) => theme.backgroundCard};
  border-radius: 16px;
  padding: 32px;
  max-width: 100%;
  margin-bottom: 48px;
  border: 1px solid ${({ theme }) => theme.secondaryColor}40;

  p {
    font-size: 1.1rem;
    line-height: 1.8;
    color: ${({ theme }) => theme.thirdColor};
    font-weight: 400;
  }

  @media screen and (max-width: 650px) {
    padding: 24px;

    p {
      font-size: 1rem;
    }
  }
`;
