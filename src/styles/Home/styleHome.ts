import styled from 'styled-components';

export const Container = styled.div`
  background-color: #ebf1f4;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 84px;
  align-items: center;

  .projects {
    .cards {
      max-width: 1098px;
      display: flex;
      flex-wrap: wrap;
      gap: 24px;
      margin-block: 24px;
    }
  }

  @media screen and (max-width: 650px) {
    padding: 24px;
  }
`;
