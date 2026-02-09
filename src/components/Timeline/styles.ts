import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 48px;
  width: 100%;

  .vertical-timeline-element-content {
    box-shadow: none !important;
    border: 1px solid ${({ theme }) => theme.secondaryColor}40 !important;
    border-radius: 12px !important;
    transition: all 0.3s ease;

    &:hover {
      border-color: ${({ theme }) => theme.fourColor} !important;
      transform: translateY(-3px);
    }
  }

  .vertical-timeline-element-date {
    color: ${({ theme }) => theme.thirdColor} !important;
    font-weight: 600 !important;
  }
`;

export const Title = styled.h3`
  color: ${({ theme }) => theme.colorText} !important;
  font-size: 1.25rem !important;
  font-weight: 700 !important;
  margin-bottom: 4px !important;
`;

export const SubTitle = styled.h4`
  color: ${({ theme }) => theme.fourColor} !important;
  font-size: 1rem !important;
  font-weight: 600 !important;
  margin-bottom: 12px !important;
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.thirdColor} !important;
  font-size: 0.95rem !important;
  line-height: 1.6 !important;
`;
