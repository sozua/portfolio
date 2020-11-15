import styled from "styled-components";

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  color: #000;
  margin-top: 16px;
`;

export const AboutText = styled.main`
  max-width: 70ch;
  font-size: 1.125rem;
  font-weight: 300;
  color: #444;
  margin-top: 16px;
  & h6 {
    font-size: 1.125rem;
    font-weight: 500;
    margin: 0;
    color: #000;
  }
  & ul {
    padding: 0;
    list-style-type: none;
  }
  & blockquote {
    border-left: 2px solid #000;
    padding-left: 16px;
  }
`;
