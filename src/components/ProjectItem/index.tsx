import * as S from "./styled"
import * as Icon from '@iconscout/react-unicons'

interface PostItemProps {
  title: string;
  description: string;
  url: string;
}

export default function PostItem({ title, description, url }: PostItemProps) {
  return (
    <S.Wrapper>
        <S.Title>{title}</S.Title>
        <S.Description>{description}</S.Description>
        <S.ButtonWrapper href={url} target="_blank">
          Acessar <Icon.UilExternalLinkAlt />
        </S.ButtonWrapper>
    </S.Wrapper>
  );
}
