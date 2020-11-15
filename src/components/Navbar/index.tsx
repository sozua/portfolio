import Link from "next/link";

import * as S from "./styled"

import * as Icon from '@iconscout/react-unicons'

export default function Navbar() {
  return (
    <S.Wrapper>
      <S.Image src="https://i2.wp.com/zacwe.st/wp-content/uploads/2019/10/image.jpg?w=960&ssl=1" alt="" />
      <S.MyName>Diogo de Souza</S.MyName>
      <S.Description>Desenvolvedor front-end com conhecimento em UI/UX design, freelancer à procura de emprego formal e entusiasta de open-source.</S.Description>
      <S.LinksWrapper>
        <Link href='/'>Postagens</Link>
        <Link href='/projetos'>Projetos</Link>
        <Link href='/sobre'>Sobre mim</Link>
      </S.LinksWrapper>
      <S.SocialMediaWrapper>
        <S.SocialMediaItem href="https://linkedin.com/in/sozua/" target='_blank'>
          <Icon.UilLinkedinAlt color="#000" /> 
        </S.SocialMediaItem>
        <S.SocialMediaItem href="https://github.com/sozua" target='_blank'>
          <Icon.UilGithubAlt color="#000" /> 
        </S.SocialMediaItem>
        <S.SocialMediaItem href="mailto:diogo@sozua.dev?subject='Vamos construir algo junto?'">
          <Icon.UilEnvelope color="#000" /> 
        </S.SocialMediaItem>
        <S.SocialMediaItem href="https://drive.google.com/file/d/1S316-FceG4E2K2Gm1-hum--LvdeGfZGL/view?usp=sharing" target='_blank'>
          <Icon.UilFile color="#000" /> 
        </S.SocialMediaItem>
      </S.SocialMediaWrapper>
      <S.Copyright>© 2020 Todos os direitos reservados.</S.Copyright>
    </S.Wrapper>
  );
}
