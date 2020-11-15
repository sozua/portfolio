import * as S from "./styled"
import * as Icon from '@iconscout/react-unicons'

interface PostItemProps {
  date: string;
  category: string;
  categoryUrl: string;
  title: string;
  description: string;
  url: string;
}

export default function PostItem({ date, category, categoryUrl, title, description, url }: PostItemProps) {
  return (
    <S.Wrapper>
        <S.DateAndCategoryWrapper>
            <S.Date>
              {date}
            </S.Date>
            <S.Category href={`/category/${categoryUrl}`}>{category}</S.Category>
        </S.DateAndCategoryWrapper>
        <S.Title>{title}</S.Title>
        <S.Description>{description}</S.Description>
        <S.ButtonWrapper href={url}>
          Ler <Icon.UilArrowRight />
        </S.ButtonWrapper>
    </S.Wrapper>
  );
}
