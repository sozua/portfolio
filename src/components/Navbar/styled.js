import styled from "styled-components";

export const Wrapper = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  grid-column: 1;
  height: 100vh;
  border-right: 2px solid rgba(0, 0, 0, 0.1);
  & > *:not(img) {
    padding-right: 48px;
  }
`;

export const Image = styled.img`
  display: block;
  width: 156px;
  height: 156px;
  border-radius: 50%;
  margin-top: 96px;
`;

export const MyName = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0;
  margin-top: 16px;
`;

export const Description = styled.h2`
  font-size: 1.125rem;
  font-weight: 400;
  margin: 0;
  margin-top: 8px;
  color: #777;
`;

export const LinksWrapper = styled.div`
  margin: 64px 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
  & a {
    transition: 0.15s color cubic-bezier(0, 0, 0.2, 1);
    font-size: 1.125rem;
    font-weight: 400;
    color: #000;
  }
  & a:hover {
    color: #444;
  }
`;

export const SocialMediaWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  & a + a {
    margin-left: 8px;
  }
`;

export const SocialMediaItem = styled.a`
  transition: 0.2s background cubic-bezier(0, 0, 0.2, 1);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: solid 2px #ddd;
  cursor: pointer;
  & svg {
    width: 18px;
  }
  &:hover {
    background: #eee;
  }
`;

export const Copyright = styled.p`
  position: absolute;
  font-size: 1.125rem;
  font-weight: 400;
  color: #777;
  bottom: 48px;
  left: 0;
`;