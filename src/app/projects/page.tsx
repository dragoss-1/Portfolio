import React from "react";
import Header from "../../components/Header/header";
import Footer from "../../components/footer";
import Image from "next/image";
import "./page.css";

const projects = [
  {
    title: "Gestor de Tarefas",
    description: "Uma aplicação web para gerir tarefas com autenticação, categorias e notificações.",
    tech: "React • Node.js • CSS",
    authors: ["Dragos, Miguel, Tiago"],
    image: "/images/EC-OL-PDN.png",
    link: "https://ec-ol-pdn.netlify.app/Inicio-OL", // exemplo
  },
  {
    title: "Jogo 2D Multiplayer",
    description: "Jogo interativo multiplayer com física e elementos retro.",
    tech: "Unity • C# • Photon",
    authors: ["Gonçalo Guilherme"],
    image: "/images/jogo2d.png",
    link: "https://github.com/goncalog/jogo2d",
  },
  {
    title: "Portfólio Responsivo",
    description: "Website de apresentação da nossa equipa",
    tech: "Next.js • TypeScript • CSS",
    authors: ["Todos os membros"],
    image: "/images/portfolio.png",
    link: "https://github.com/devtechcrew/portfolio",
  },
];

const ProjectsPage: React.FC = () => {
  return (
    <div>
      <Header />
      <main className="main-container-projects">
        <h1 className="main-title-projects">Os Nossos Projetos</h1>
        <p className="main-description-projects">
          Veja alguns dos nossos projetos mais recentes.
        </p>

<section className="projects-grid-projects">
  {projects.map((project, index) => (
    <div key={index} className="project-card-projects">
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="project-image-wrapper-projects"
      >
        <Image
          src={project.image}
          alt={`Imagem do projeto ${project.title}`}
          layout="fill"
          objectFit="cover"
          className="project-image-projects"
          priority
        />
      </a>
      <h2 className="project-title-projects">{project.title}</h2>
      <p className="project-description-projects">{project.description}</p>
      <span className="project-tech-projects">{project.tech}</span>
      <p className="project-authors-projects">
        <strong>Autores:</strong> {project.authors.join(", ")}
      </p>
    </div>
  ))}
</section>

      </main>
      <Footer />
    </div>
  );
};

export default ProjectsPage;