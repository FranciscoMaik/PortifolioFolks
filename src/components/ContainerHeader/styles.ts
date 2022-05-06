import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  background-color: #ffffff;
  border-radius: 8px;
  align-items: center;
  gap: 20px;
  padding: 12px;
  max-width: 1098px;
  margin-block: 12px;
  line-height: 150%;
  color: #808080;

  @media screen and (max-width: 650px) {
    flex-direction: column;
  }
`;
