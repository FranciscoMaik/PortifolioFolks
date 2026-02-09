import styled from 'styled-components';

export const Container = styled.div`
  padding: 16px 24px 0 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 12px;
  background-color: transparent;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 100;

  .switch {
    position: relative;
    display: inline-block;
    width: 48px;
    height: 26px;
  }

  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${({ theme }) => theme.secondaryColor};
    transition: 0.4s;
    border-radius: 34px;
    border: 1px solid ${({ theme }) => theme.thirdColor}40;
  }

  .slider:before {
    position: absolute;
    content: '';
    height: 18px;
    width: 18px;
    left: 4px;
    bottom: 3px;
    background-color: white;
    transition: 0.4s;
    border-radius: 50%;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  }

  input:checked + .slider {
    background-color: ${({ theme }) => theme.fourColor};
    border-color: ${({ theme }) => theme.fourColor};
  }

  input:checked + .slider:before {
    transform: translateX(22px);
  }

  svg {
    transition: color 0.3s ease;
  }
`;
