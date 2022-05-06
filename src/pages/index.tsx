import React from 'react';

import {
  Title,
  ContainerHeader,
  CardProject,
  Footer,
  Header,
} from '../components';

import { Container } from '../styles/Home/styleHome';

const Home: React.FC = function () {
  return (
    <Container>
      <div>
        <div className="portfolio">
          <Header />
        </div>

        <h2 className="description">Desenvolvedor web e mobile</h2>

        <div className="portfolio">
          <Title name="Portfólio" />
          <ContainerHeader />
        </div>

        <div className="projects">
          <Title name="Projetos" />
          <div className="cards">
            <CardProject
              header="Site Tiago Bomfim"
              description="Criação de um site pessoal do Professor Tiago Bomfim."
              image="sitetiago.png"
              linkProject="https://www.tiagobomfim.com.br/"
            />

            <CardProject
              header="Person Life"
              description="Aplicativo para criação e comparação de listas de compras."
              image="personlife.png"
              linkProject="https://harvest-crane-e27.notion.site/PersonLife-433750f045804f54b0a2f9d413b1744f"
            />
          </div>
        </div>
      </div>

      <Footer />
    </Container>
  );
};

export default Home;
