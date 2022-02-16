import React from 'react';
import { IoMdMail, IoLogoLinkedin } from 'react-icons/io';
import { AiFillInstagram } from 'react-icons/ai';
import { FaWhatsappSquare } from 'react-icons/fa';

import { Container } from './styles';

export const Footer: React.FC = function () {
  return (
    <Container>
      <AiFillInstagram size={40} color="#E2BF2B" className="icon" />
      <FaWhatsappSquare size={38} color="#E2BF2B" className="icon" />
      <IoLogoLinkedin size={40} color="#E2BF2B" className="icon" />
      <IoMdMail size={40} color="#E2BF2B" className="icon" />
    </Container>
  );
};
