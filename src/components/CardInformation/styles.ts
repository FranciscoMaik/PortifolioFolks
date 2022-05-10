import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  > div {
    padding: 24px;

    .years {
      font-weight: bold;
      font-size: 18px;
      color: #4a90e2;
    }

    h4 {
      font-weight: bold;
      font-size: 18px;
      margin-bottom: 4px;
      color: #5b6a9a;
    }

    p {
      color: #81899c;
    }
  }
`;
