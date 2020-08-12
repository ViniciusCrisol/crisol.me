import styled from 'styled-components';

export const Container = styled.article`
  margin: 0 auto;
  max-width: 710px;

  h1,
  h3 {
    margin: 16px 0;
  }

  img {
    width: 100%;
  }

  pre {
    width: 100%;

    padding: 10px;
    margin: 30px auto;
    border-left: 3px solid var(--main);
    background-color: rgb(238, 238, 238);
  }
`;
