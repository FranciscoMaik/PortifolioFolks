import styled from 'styled-components';

export const Container = styled.div`
  max-width: 350px;
  max-height: 180px;
  background-color: #e2e5ed;
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
      color: #5b6a9a;
      vertical-align: top;
      margin-right: -24px;
      padding: 0px;
    }

    h2 {
      font-size: 72px;
      font-weight: 300;
      display: inline-block;
      vertical-align: top;
      color: #5b6a9a;
      letter-spacing: -5px;
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
    color: #81899c;
    text-overflow: ellipsis;
  }

  .icon {
    cursor: pointer;
    margin-top: 8px;
    width: 100%;
    display: flex;

    > a {
      text-decoration: none;
      font-weight: bold;
      font-size: 14px;

      > p {
        color: #4a90e2;
      }
    }
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
  color: #5b6a9a;
  margin-bottom: 8px;
`;
