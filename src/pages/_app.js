import styled from "styled-components";

import Navbar from "../components/Navbar";

import "../styles/globals.css";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  @media (max-width: 1501px) {
    max-width: 1280px;
  }
  @media (max-width: 1366px) {
    max-width: 1216px;
  }
  @media (max-width: 1280px) {
    max-width: 100%;
  }
`;

const ContentWrapper = styled.div`
  grid-column: span 2;
  margin: 64px 0 0 64px;
  @media (max-width: 1280px) {
    grid-column: 1 / -1;
    padding: 0 32px;
    margin: 32px 0 0 0;
  }
`;

function MyApp({ Component, pageProps }) {
  return (
    <Wrapper>
      <Navbar />
      <ContentWrapper>
        <Component {...pageProps} />
      </ContentWrapper>
    </Wrapper>
  );
}

export default MyApp;
