import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;

  h1 {
    color: ${({ theme }) => theme.primaryColor};
    font-weight: 100;
    font-size: 64px;
  }

  h2 {
    font-weight: 100;
    color: ${({ theme }) => theme.thirdColor};
  }
`;
