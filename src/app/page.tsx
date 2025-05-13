import React from "react";
import Header from "../components/Header/header";
import Footer from "../components/footer";
import VideoBackground from "../components/Video/videobackground";
import "./HomePage.css";

const HomePage: React.FC = () => {
  return (
    <div>
      <VideoBackground />
      <Header />
      <main className="main-container-homepage">
        <div className="main-div-homepage">
          <h1 className="main-title-homepage">Bem-vindo ao nosso Portfólio!</h1>
          <p className="main-description-homepage">
            Este portfólio foi desenvolvido pela nossa equipa com Next.js e TypeScript.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;