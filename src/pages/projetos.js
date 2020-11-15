import ProjectItem from "../components/ProjectItem";

export default function Home() {
  return (
    <>
      <ProjectItem
        title='Church Slider'
        description='Um criador de slides online utilizando Socket.io em Next.js focado para igrejas'
        url='https://github.com/sozua/slider'
      />
      <ProjectItem
        title='Colors finder'
        description='Um buscador de cores simples feito usando Next.js com base em uma api externa'
        url='https://github.com/sozua/colors-finder'
      />
    </>
  );
}
