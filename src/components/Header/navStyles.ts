import styled from "styled-components";

export const Nav = styled.nav`
  position: absolute;
  top: 2rem;
  left: 2rem;
  display: flex;
  gap: 1.5rem;
  z-index: 10;

  @media (max-width: 768px) {
    top: 1rem;
    left: 1rem;
    font-size: 0.9rem;
  }
`;

export const NavLink = styled.a`
  text-decoration: none;
  font-weight: 600;
  color: ${({ theme }) => theme.colorText};
  transition: color 0.2s;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.secondaryColor};
  }

  &.active {
    color: ${({ theme }) => theme.primaryColor};
  }
`;
