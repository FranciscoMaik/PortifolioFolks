import styled from "styled-components";

export const BlogContainer = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: ${(props) => props.theme.backgroundPage};
  color: ${(props) => props.theme.colorText};
  padding: 8rem 2rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 6rem 1rem 1rem;
  }
`;

export const MainContent = styled.main`
  flex: 3;
`;

export const SidebarContainer = styled.aside`
  flex: 1;
  border-left: 1px solid ${(props) => props.theme.thirdColor};
  padding-left: 2rem;

  @media (max-width: 768px) {
    border-left: none;
    padding-left: 0;
    border-top: 1px solid ${(props) => props.theme.thirdColor};
    padding-top: 2rem;
  }
`;

export const PostTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: ${(props) => props.theme.primaryColor};
`;

export const PostMeta = styled.div`
  font-size: 0.9rem;
  color: ${(props) => props.theme.thirdColor};
  margin-bottom: 2rem;
`;

export const PostList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const PostListItem = styled.li`
  margin-bottom: 1.5rem;

  a {
    text-decoration: none;
    color: ${(props) => props.theme.colorText};
    transition: color 0.2s;

    &:hover {
      color: ${(props) => props.theme.primaryColor};
    }
  }

  h3 {
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 0.9rem;
    color: ${(props) => props.theme.thirdColor};
  }
`;

export const HeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 0 84px;

  @media screen and (max-width: 768px) {
    padding: 0 24px;
  }

  > header {
    max-width: 1200px;
    width: 100%;
  }
`;
