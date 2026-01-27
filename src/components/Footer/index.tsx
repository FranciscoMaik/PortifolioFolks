import React from 'react';
import { IoMdMail, IoLogoLinkedin } from 'react-icons/io';
import { AiFillInstagram } from 'react-icons/ai';
import { FaWhatsappSquare } from 'react-icons/fa';

import { Container } from './styles';

export const Footer: React.FC = function () {
  const year = new Date().getFullYear();

  return (
    <Container>
      <div className="social-links">
        <a
          href="https://www.instagram.com/francisco_maik_/"
          target="_blank"
          rel="noreferrer"
          aria-label="Instagram"
        >
          <AiFillInstagram size={32} />
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=5589988020693&text=Ol%C3%A1%2C%20sou%20o%20Francisco%20Maik%2C%20em%20que%20posso%20ajudar%3F"
          target="_blank"
          rel="noreferrer"
          aria-label="WhatsApp"
        >
          <FaWhatsappSquare size={30} />
        </a>
        <a
          href="https://www.linkedin.com/in/francisco-maik-fonseca-nunes-468511184/"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
        >
          <IoLogoLinkedin size={32} />
        </a>
        <a
          href="mailto:chiconunes3081@gmail.com"
          target="_blank"
          rel="noreferrer"
          aria-label="Email"
        >
          <IoMdMail size={32} />
        </a>
      </div>
      <p>© {year} F. Maik Fonseca. All rights reserved.</p>
    </Container>
  );
};
