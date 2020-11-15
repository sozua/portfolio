import Link from "next/link";
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
  transition: 0.15s all cubic-bezier(0, 0, 0.2, 1);
  font-size: 1.125rem;
  font-weight: bold;
  text-transform: uppercase;
  color: var(--primary-text);
  &:hover {
    color: var(--primary-text-light);
  }
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

export const ButtonLink = styled(Link)``;

export const ButtonWrapper = styled.span`
  transition: 0.15s all cubic-bezier(0, 0, 0.2, 1);
  display: flex;
  align-items: center;
  margin: 24px 0 32px 0;
  font-size: 1.125rem;
  font-weight: bold;
  color: var(--primary-text);
  cursor: pointer;
  & svg {
    margin-left: 4px;
  }
  &:hover {
    color: var(--primary-text-light);
  }
`;
