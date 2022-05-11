import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  border-radius: 8px;
  align-items: center;
  gap: 20px;
  padding: 12px;
  max-width: 1098px;
  margin-block: 12px;
  line-height: 150%;
  color: ${({ theme }) => theme.thirdColor};

  @media screen and (max-width: 650px) {
    flex-direction: column;
  }
`;
