import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  background: ${({ theme }) => theme.backgroundCard};
  border: 1px solid ${({ theme }) => theme.secondaryColor}40;
  border-radius: 12px;
  margin-bottom: 16px;
  transition: all 0.3s ease;
  overflow: hidden;

  &:hover {
    transform: translateX(5px);
    border-color: ${({ theme }) => theme.fourColor};

    .years {
      background: ${({ theme }) => theme.fourColor}20;
      color: ${({ theme }) => theme.fourColor};
    }
  }

  > div {
    padding: 20px;

    &:first-child:not(:only-child) {
      display: flex;
      align-items: center;
      justify-content: center;
      border-right: 1px solid ${({ theme }) => theme.secondaryColor}20;
      min-width: 100px;
    }

    &:last-child {
      flex: 1;
    }

    .years {
      font-weight: 700;
      font-size: 1rem;
      color: ${({ theme }) => theme.fourColor};
      padding: 8px 12px;
      background: ${({ theme }) => theme.secondaryColor}10;
      border-radius: 8px;
      transition: all 0.3s ease;
      white-space: nowrap;
    }

    h4 {
      font-weight: 700;
      font-size: 1.1rem;
      margin-bottom: 12px;
      margin-top: 0;
      color: ${({ theme }) => theme.colorText};
    }

    p {
      color: ${({ theme }) => theme.thirdColor};
      line-height: 1.6;
      margin: 0;
    }
  }

  /* Quando não há activeYears, a div de conteúdo precisa de estilos específicos */
  > div:only-child {
    padding: 20px;
    width: 100%;
  }

  @media screen and (max-width: 650px) {
    flex-direction: column;

    > div:first-child {
      border-right: none;
      border-bottom: 1px solid ${({ theme }) => theme.secondaryColor}20;
      justify-content: flex-start;
      padding-bottom: 0;
    }

    > div:last-child {
      padding-top: 12px;
    }
  }
`;
