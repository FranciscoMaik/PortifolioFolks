import styled from 'styled-components';

export const Container = styled.div`
  max-width: 350px;
  max-height: 180px;
  background-color: ${({ theme }) => theme.backgroundCard};
  border-radius: 4px;
  padding: 20px;
  display: flex;

  :hover {
    transform: scale(1.02);
    transition: 0.5s;
    background-color: #fff;
    box-shadow: 0px 5px 50px -8px #ddd;
  }

  .staticInfo {
    display: flex;
    margin-right: 24px;

    span {
      font-size: 35px;
      font-weight: 300;
      color: ${({ theme }) => theme.secondaryColor};
    }

    h2 {
      font-size: 72px;
      font-weight: 300;
      color: ${({ theme }) => theme.secondaryColor};
      margin-left: -24px;
    }
  }

  > div {
    display: flex;
    gap: 24px;
  }

  .summary {
    display: flex;
    flex-direction: column;
  }

  p {
    color: ${({ theme }) => theme.thirdColor};
    text-overflow: ellipsis;
  }

  .text {
    max-height: 85px;
    display: inline-block;
    white-space: normal;
    overflow: hidden;
    text-overflow: ellipsis;
    direction: ltr;
  }

  @media screen and (max-width: 650px) {
    max-width: 100%;
  }
`;

export const HeaderItem = styled.div`
  color: ${({ theme }) => theme.secondaryColor};
  margin-bottom: 8px;
`;
