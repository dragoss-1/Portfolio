import React from "react";
import Header from "../../components/Header/header";
import Footer from "../../components/footer";
import "./page.css"; // importa o ficheiro CSS

const AboutPage: React.FC = () => {
  return (
    <div>
      <Header />
      <main className="main-container">
        <h1 className="main-title">Sobre Nós</h1>
        <p className="main-description">
          Conheça a nossa equipa e o que fazemos!
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;