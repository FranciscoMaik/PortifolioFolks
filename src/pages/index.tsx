import React from 'react';

import { Title, ContainerHeader, CardProject, Footer } from '../components';

import { Container } from '../styles/Home/styleHome';

const Home: React.FC = function () {
  return (
    <Container>
      <div>
        <div className="portfolio">
          <Title name="Portfólio" />
          <ContainerHeader />
        </div>

        <div className="projects">
          <Title name="Projetos" />
          <div className="cards">
            <CardProject />
            <CardProject />
            <CardProject />
            <CardProject />
            <CardProject />
            <CardProject />
          </div>
        </div>
      </div>

      <Footer />
    </Container>
  );
};

export default Home;
