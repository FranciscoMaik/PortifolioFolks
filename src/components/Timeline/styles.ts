import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 22px;
`;

export const Title = styled.h3`
  color: ${({ theme }) => theme.secondaryColor};
`;

export const SubTitle = styled.h4`
  color: ${({ theme }) => theme.thirdColor};
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.thirdColor};
`;
