import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  border-bottom: 1px solid ${({ theme }) => theme.primaryColor};

  h2 {
    line-height: 150%;
    font-size: 36px;
    color: ${({ theme }) => theme.primaryColor};
  }
`;
