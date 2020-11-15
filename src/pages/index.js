import PostItem from "../components/PostItem";

export default function Home() {
  return (
    <>
      <PostItem
        date='17 de Novembro de 2020'
        category='Programação'
        categoryUrl='programacao'
        title='React hooks com typescript'
        description='Nesse tutorial, falei sobre como implementar o typescript no react hooks e em algumas outras funcionalidades.'
        url='/post/react-hooks'
      />
      <PostItem
        date='12 de Novembro de 2020'
        category='Estudo de caso'
        categoryUrl='estudo_de_caso'
        title='Estudo de caso da landing page da The Pilgrim'
        description='Nesse curto ensaio, tratei de analisar a landing page do app de livros The Pilgrim.'
        url='/post/the_pilgrim'
      />
    </>
  );
}
