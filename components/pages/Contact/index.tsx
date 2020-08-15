import { Container } from './styles';

const github = 'https://github.com/ViniciusCrisol';
const linkedin = 'https://www.linkedin.com/in/vin%C3%ADciuscrisol/';

export default function Contact() {
  return (
    <Container>
      <h2>Sobre mim</h2>
      <p>
        Oi, meu nome é Vinícius Crisol, trabalho e estudo programação há um bom
        tempo. Sou apaixonado por desenvolver soluções com as melhores
        tecnologias. Criei este blog com um objetivo: Ajudar pessoas que estão
        começando na área a evoluírem mais rápido.
      </p>

      <h2>Desenvolvimento do blog</h2>
      <p>
        O blog foi desenvolvido em TypeScript usando o framework NextJS e
        Prismic com GraphQL.
      </p>

      <h2>Contato pessoal</h2>
      <p>
        Email: vinicius.crisol@hotmail.com
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
}
