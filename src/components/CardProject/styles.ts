import styled from 'styled-components';

export const Container = styled.div`
  max-width: 350px;
  max-height: 180px;
  background-color: #e2e5ed;
  border-radius: 4px;
  padding: 20px;
  display: flex;
  flex-direction: column;

  > div {
    display: flex;
    gap: 24px;
  }

  img {
    height: 110px;
  }

  .summary {
    display: flex;
    flex-direction: column;
  }

  p {
    color: #808080;
    text-overflow: ellipsis;
  }

  .icon {
    cursor: pointer;
    margin-top: 8px;
    width: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
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
  color: #575c82;
  margin-bottom: 8px;
`;
