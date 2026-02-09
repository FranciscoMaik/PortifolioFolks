import styled from 'styled-components';

export const MarkdownContent = styled.div`
  line-height: 1.8;
  font-size: 1.1rem;

  h1, h2, h3, h4, h5, h6 {
    margin-top: 2rem;
    margin-bottom: 1rem;
    color: ${(props) => props.theme.primaryColor};
  }

  p {
    margin-bottom: 1.5rem;
  }

  ul, ol {
    margin-bottom: 1.5rem;
    padding-left: 2rem;
  }

  li {
    margin-bottom: 0.5rem;
  }

  a {
    color: ${(props) => props.theme.primaryColor};
    text-decoration: underline;
  }

  pre {
    background-color: #f5f5f5;
    padding: 1rem;
    border-radius: 8px;
    overflow-x: auto;
    margin-bottom: 1.5rem;

    code {
      background-color: transparent;
      padding: 0;
    }
  }

  code {
    background-color: #f5f5f5;
    padding: 0.2rem 0.4rem;
    border-radius: 4px;
    font-family: monospace;
    color: #333;
  }

  blockquote {
    border-left: 4px solid ${(props) => props.theme.primaryColor};
    padding-left: 1rem;
    font-style: italic;
    color: ${(props) => props.theme.thirdColor};
    margin-bottom: 1.5rem;
  }

  img {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
    margin: 1.5rem 0;
  }
`;
