import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  background-color: #ffffff;
  border-radius: 8px;
  align-items: center;
  gap: 20px;
  padding: 24px;
  max-width: 1098px;
  margin-block: 12px;
  line-height: 150%;
  box-shadow: 0px 10px 13px -14px #000000;

  img {
    height: 164px;
    width: 164px;
    border-radius: 50%;
  }

  div {
    display: flex;
    flex-direction: column;

    h3 {
      margin-bottom: 8px;
    }
  }

  @media screen and (max-width: 650px) {
    flex-direction: column;
  }
`;
