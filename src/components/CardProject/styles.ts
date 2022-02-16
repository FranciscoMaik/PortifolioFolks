import styled from 'styled-components';

export const Container = styled.div`
  max-width: 350px;
  max-height: 180px;
  background-color: #ffffff;
  border-radius: 8px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 10px 13px -14px #000000;

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
    align-items: center;
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
`;

export const HeaderItem = styled.div`
  color: #ffffff;
  background-color: #8a2be2;
  border-radius: 4px;
  padding: 4px 8px;
  margin-bottom: 8px;
`;
