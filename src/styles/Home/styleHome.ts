import styled from 'styled-components';

export const Container = styled.div`
  background-color: #fefefe;
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

  .statistic {
    display: flex;
    margin-top: 24px;
    margin-bottom: 24px;
    gap: 24px;
  }

  .description {
    font-weight: 100;
    font-size: 36px;
    margin-bottom: 24px;
    color: #13224a;
  }

  .information {
    display: flex;
    gap: 12px;

    > div {
      display: flex;
      width: 100%;
      flex-direction: column;

      h3 {
        color: #13224a;
      }
    }
  }

  @media screen and (max-width: 650px) {
    padding: 24px;
  }
`;
