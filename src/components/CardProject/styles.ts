import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.backgroundCard};
  border: 1px solid ${({ theme }) => theme.secondaryColor}40;
  border-radius: 16px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(10px);

  &:hover {
    transform: translateY(-5px);
    border-color: ${({ theme }) => theme.fourColor};
    box-shadow: 0 10px 30px -10px ${({ theme }) => theme.fourColor}40;

    &::before {
      opacity: 1;
    }
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      180deg,
      transparent 0%,
      ${({ theme }) => theme.fourColor}10 100%
    );
    opacity: 0;
    transition: opacity 0.3s ease;
    pointer-events: none;
    z-index: 0;
  }

  > div {
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .summary {
    display: flex;
    flex-direction: column;
    flex: 1;
  }

  .text {
    flex: 1;
    margin-bottom: 20px;

    p {
      color: ${({ theme }) => theme.thirdColor};
      font-size: 0.95rem;
      line-height: 1.6;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
  }

  .icon {
    margin-top: auto;

    a {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 8px 16px;
      background: ${({ theme }) => theme.secondaryColor}20;
      color: ${({ theme }) => theme.colorText};
      border-radius: 8px;
      font-weight: 600;
      font-size: 0.9rem;
      transition: all 0.2s ease;

      &:hover {
        background: ${({ theme }) => theme.fourColor};
        color: white;
      }
    }
  }
`;

export const HeaderItem = styled.div`
  margin-bottom: 12px;

  h3 {
    color: ${({ theme }) => theme.colorText};
    font-size: 1.25rem;
    font-weight: 700;
  }
`;
