import styled from 'styled-components';

export const Container = styled.div`
  background-color: #ffffff;
  max-width: 640px;
  min-width: 640px;
  display: flex;
  justify-content: center;
  gap: 24px;
  padding: 12px;
  box-shadow: 0px 10px 13px -14px #000000;
  border-radius: 8px;
  margin-top: 48px;

  .icon {
    cursor: pointer;
  }

  @media screen and (max-width: 650px) {
    min-width: 90%;
    margin-top: 48px;
  }
`;
