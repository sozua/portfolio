import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 32px 0;
  &:not(:last-child) {
    border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  }
  &:last-child {
    margin-bottom: 64px;
  }
`;

export const DateAndCategoryWrapper = styled.div`
  display: flex;
  align-items: center;
  & > * + * {
    margin-left: 8px;
  }
`;

export const Date = styled.h6`
  font-size: 1.125rem;
  font-weight: bold;
  color: #444;
  margin: 0;
`;

export const Category = styled.a`
  font-size: 1.125rem;
  font-weight: bold;
  text-transform: uppercase;
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  color: #000;
  margin: 0;
  margin-top: 16px;
`;

export const Description = styled.h2`
  font-size: 1.125rem;
  font-weight: 400;
  color: #777;
  margin: 0;
  margin-top: 8px;
`;

export const ButtonWrapper = styled.a`
  display: flex;
  align-items: center;
  margin: 24px 0 32px 0;
  font-size: 1.125rem;
  font-weight: bold;
  color: var(--primary-text);
  & svg {
    margin-left: 8px;
  }
`;
