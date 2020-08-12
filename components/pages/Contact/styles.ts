import styled from 'styled-components';

export const Container = styled.div`
  max-width: 650px;
  width: 100%;

  h1 {
    font-size: 24px;
    margin-top: 32px;
  }

  p {
    margin-top: 8px;
    font-size: 18px;

    a {
      color: var(--main);
      transition: color 200ms;

      &:hover {
        color: var(--main-opacity);
      }
    }
  }
`;
