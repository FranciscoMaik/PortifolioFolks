import React, { useEffect, useState } from 'react';

import { api } from '../service/api';
import {
  formatDataStatistic,
  IFormatDataStatistic,
} from '../utils/formatDataStatistic';

import {
  Title,
  ContainerHeader,
  CardProject,
  Footer,
  Header,
  Timeline,
  CardInformation,
  CardStatistic,
} from '../components';

import { Container } from '../styles/Home/styleHome';

const Home: React.FC = function () {
  const [dataRepos, setDataRepos] = useState<IFormatDataStatistic>(
    {} as IFormatDataStatistic
  );

  const getRepos = async () => {
    const response = await api.get('/repos');
    const getData = formatDataStatistic(response.data);
    setDataRepos(getData);
  };

  useEffect(() => {
    getRepos();
  }, []);

  return (
    <Container>
      <div>
        <div className="portfolio">
          <Header />
        </div>

        <h2 className="description">Desenvolvedor web e mobile</h2>

        <div className="portfolio">
          <Title name="Sobre" />
          <ContainerHeader />
          <div className="information">
            <div className="skills">
              <h3>Competências</h3>
              <div>
                <CardInformation
                  years={3}
                  title="JavaScript e TypesCript"
                  skills={['NextJs', 'ReactJs', 'React Native', 'Tipagens']}
                />
                <CardInformation
                  years={1}
                  title="Python"
                  skills={['Processamento de Imagens e Sons']}
                />
              </div>
            </div>
            <div className="interests">
              <h3>Interesses</h3>
              <CardInformation
                years={0}
                activeYears={false}
                title="JavaScript e TypesCript"
                skills={['Testes', 'Storybook', 'UX e UI']}
              />
            </div>
          </div>
        </div>

        <div className="projects">
          <Title name="Projetos" />
          <div className="cards">
            <CardProject
              header="Site Tiago Bomfim"
              description="Criação de um site pessoal do Professor Tiago Bomfim."
              linkProject="https://www.tiagobomfim.com.br/"
            />

            <CardProject
              header="Person Life"
              description="Aplicativo para criação e comparação de listas de compras."
              linkProject="https://harvest-crane-e27.notion.site/PersonLife-433750f045804f54b0a2f9d413b1744f"
            />
          </div>
        </div>

        {/* <div>
          <Title name="Estatísticas" />
          <div className="statistic">
            <CardStatistic
              numberInfo={dataRepos.lengthRepos.toString()}
              header="Repositórios"
              description="Desenvolvimento de alguns projetos pessoais, testes de ferramentas e clones de interfaces."
            />

            <CardStatistic
              numberInfo={dataRepos.languages.length.toString()}
              header="Linguagens"
              description={`Linguagens utilizadas em projetos como: ${dataRepos.languages
                .map(item => item)
                .join(', ')}`}
            />
          </div>
        </div> */}

        <div>
          <Title name="Experiência" />
          <Timeline />
        </div>
      </div>

      <Footer />
    </Container>
  );
};

export default Home;
