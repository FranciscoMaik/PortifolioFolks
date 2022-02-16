import React from 'react';
import { BsArrowRightShort } from 'react-icons/bs';

import { Container, HeaderItem } from './styles';

export const CardProject: React.FC = function () {
  return (
    <Container>
      <div>
        <div className="summary">
          <HeaderItem>
            <h3>Nome do Projecto</h3>
          </HeaderItem>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam,
            ipsam suscipit. Deserunt id veritatis cupiditate doloremque!
          </p>
        </div>
        <img src="cel.png" alt="celular" />
      </div>
      <div className="icon">
        <BsArrowRightShort size={18} color="#8A2BE2" />
      </div>
    </Container>
  );
};
