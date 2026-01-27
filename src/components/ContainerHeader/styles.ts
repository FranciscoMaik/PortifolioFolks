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
    margin-bottom: 1rem;

    strong {
      font-weight: 600;
      color: ${({ theme }) => theme.colorText};
    }
  }

  ul {
    margin-left: 1.5rem;
    margin-bottom: 1rem;
    padding-left: 0;

    li {
      font-size: 1.1rem;
      line-height: 1.8;
      color: ${({ theme }) => theme.thirdColor};
      margin-bottom: 0.5rem;
      list-style-type: disc;
    }
  }

  @media screen and (max-width: 650px) {
    padding: 24px;

    p {
      font-size: 1rem;
    }

    ul li {
      font-size: 1rem;
    }
  }
`;
