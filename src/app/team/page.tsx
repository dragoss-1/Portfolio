import React from "react";
import Header from "../../components/Header/header";
import Footer from "../../components/footer";
import "./page.css";

const TeamPage: React.FC = () => {
  return (
    <div>
      <Header />
      <main className="main-container-team">
        <h1 className="main-title-team">A Nossa Equipa</h1>

        <section className="team-section-team">
          <div className="team-member-team">
            <h2 className="member-name-team">Dragos Ariton</h2>
            <p className="member-role-team">Desenvolvedor Full Stack</p>
            <p className="member-bio-team">
              Especializado na área da programação, desenvolve 
              código para front-end e back-end e é responsável 
              pela gestão dos clientes.
            </p>
          </div>

          <div className="team-member-team">
            <h2 className="member-name-team">Tiago Eliseu</h2>
            <p className="member-role-team">Desenvolvedor Full Stack</p>
            <p className="member-bio-team">
              Responsável pelo design das interfaces sendo este o 
              seu ponto forte, garantindo que cada projeto seja 
              intuitivo, acessível e moderno.
            </p>
          </div>

          <div className="team-member-team">
            <h2 className="member-name-team">Miguel Ferreira</h2>
            <p className="member-role-team">Desenvolvedor Full Stack</p>
            <p className="member-bio-team">
              Com forte foco nas tarefas pesadas, assegura que as 
              funcionalidades exigidas e a qualidade das mesmas 
              sejam sempre cumpridas.
            </p>
          </div>

          <div className="team-member-team">
            <h2 className="member-name-team">Carlos Correia</h2>
            <p className="member-role-team">Desenvolvedor Full Stack</p>
            <p className="member-bio-team">
              Iniciando a sua jornada, contribui sempre que pode.
            </p>
          </div>

          <div className="team-member-team">
            <h2 className="member-name-team">Gonçalo Guilherme</h2>
            <p className="member-role-team">Desenvolvedor de Jogos</p>
            <p className="member-bio-team">
              Responsável pelo desenvolvimento e prototipagem de jogos.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default TeamPage;