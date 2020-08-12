import React from 'react';

import { Container } from './styles';

const linkedin = 'https://www.linkedin.com/in/vin%C3%ADciuscrisol/';
const github = 'https://github.com/ViniciusCrisol';

const Contact: React.FC = () => (
  <Container>
    <h1>Sobre mim</h1>
    <p>
      Oi, meu nome é Vinícius Crisol, trabalho e estudo programação há um bom
      tempo. Sou apaixonado por desenvolver soluções com as melhores
      tecnologias. Criei este blog com um objetivo: Ajudar pessoas que estão
      começando na área a evoluírem mais rápido.
    </p>

    <h1>Desenvolvimento do blog</h1>
    <p>
      O blog foi desenvolvido em TypeScript usando o framework NextJS e Prismic
      com GraphQL.
    </p>

    <h1>Contato pessoal</h1>
    <p>
      Email: vinicius.crisol@etec.sp.gov.br
      <br />
      <a href={linkedin} target='_blank'>
        Linkedin
      </a>
      &nbsp;&nbsp;
      <a href={github} target='_blank'>
        Github
      </a>
    </p>
  </Container>
);

export default Contact;
