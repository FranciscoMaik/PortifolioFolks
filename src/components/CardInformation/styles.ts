import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  > div {
    padding: 24px;

    .years {
      font-weight: bold;
      font-size: 18px;
      color: ${({ theme }) => theme.fourColor};
    }

    h4 {
      font-weight: bold;
      font-size: 18px;
      margin-bottom: 4px;
      color: ${({ theme }) => theme.secondaryColor};
    }

    p {
      color: ${({ theme }) => theme.thirdColor};
    }
  }
`;
