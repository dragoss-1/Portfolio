import React from "react";
import Header from "../../components/Header/header";
import Footer from "../../components/footer";

const ProjectsPage: React.FC = () => {
  return (
    <div>
      <Header />
      <main className="main-container">
        <h1 className="main-title">Os Nossos Projetos</h1>
        <p className="main-description">
          Veja alguns dos nossos projetos mais recentes.
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectsPage;
