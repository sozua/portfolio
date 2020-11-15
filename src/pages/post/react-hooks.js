import { attributes, react as Content } from "../../posts/react-hooks.md";

import * as S from "../../styles/pages/sobre";

export default function About() {
  const { title } = attributes;
  return (
    <>
      <S.Title>{title}</S.Title>
      <Content />
    </>
  );
}
