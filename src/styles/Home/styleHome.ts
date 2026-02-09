import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.backgroundPage};
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 0 84px;
  align-items: center;
  overflow-x: hidden;

  > div {
    max-width: 1200px;
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  .portfolio {
    width: 100%;
    margin-bottom: 48px;
  }

  .description {
    font-weight: 700;
    font-size: clamp(2rem, 5vw, 3.5rem);
    margin: 48px 0;
    color: ${({ theme }) => theme.colorText};
    line-height: 1.2;
    text-align: center;
    background: ${({ theme }) => theme.accentGradient};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .projects {
    width: 100%;
    margin-bottom: 80px;

    .cards {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 32px;
      margin-top: 32px;
    }
  }

  .information {
    display: grid;
    grid-template-columns: 1fr;
    gap: 48px;
    margin-top: 32px;

    @media (min-width: 900px) {
      grid-template-columns: 1fr 1fr;
    }

    .skills, .interests {
      display: flex;
      flex-direction: column;
      gap: 24px;

      h3 {
        color: ${({ theme }) => theme.colorText};
        font-size: 1.5rem;
        font-weight: 700;
        margin-bottom: 16px;
      }
    }
  }

  .statistic {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 32px;
    margin: 48px 0;
  }

  @media screen and (max-width: 768px) {
    padding: 0 24px;

    .description {
      margin: 32px 0;
    }
  }
`;
