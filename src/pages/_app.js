import styled from "styled-components";

import Navbar from "../components/Navbar";

import "../styles/globals.css";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
`;

const ContentWrapper = styled.div`
  grid-column: span 2;
  margin: 64px 0 0 64px;
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
