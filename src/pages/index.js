import ProjectItem from "../components/ProjectItem";

export default function Projects() {
  return (
    <>
      <ProjectItem
        title="Colors finder"
        description="Um buscador de cores simples feito usando Next.js com base em uma api externa"
        url="https://github.com/sozua/colors-finder"
      />
      <ProjectItem
        title="Pede.ai - Landing page redesign"
        description="Um redesign não-oficial feito por mim para o aplicativo pede.ai."
        url="https://pedeai.sozua.dev"
      />
    </>
  );
}
