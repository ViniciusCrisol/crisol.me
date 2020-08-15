import styled from 'styled-components';
import { fadeIn } from '../../../styles/animations';

export const Container = styled.article`
  margin: 0 auto;
  max-width: 710px;
  animation: ${fadeIn} 1s;

  h1,
  h3 {
    margin-bottom: 8px;
  }

  h3 {
    margin-top: 48px;
  }

  img {
    width: 100%;
  }

  pre {
    width: 100%;

    padding: 10px;
    font-size: 15px;
    margin: 12px auto;
    border-left: 3px solid var(--main);
    background-color: rgb(238, 238, 238);

    @media (max-width: 660px) {
      white-space: normal;
    }
  }
`;
