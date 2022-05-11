import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.backgroundCard};
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 24px;
  padding: 12px;
  margin-top: 48px;

  .icon {
    cursor: pointer;
  }

  @media screen and (max-width: 650px) {
    min-width: 90%;
    margin-top: 48px;
  }
`;
