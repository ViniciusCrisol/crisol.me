import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  max-width: 710px;

  h1 {
    font-size: 24px;
    margin-top: 32px;

    &:first-child {
      margin-top: 0;
    }
  }

  p {
    margin-top: 8px;

    a {
      color: var(--main);
      transition: color 200ms;

      &:hover {
        color: var(--main-opacity);
      }
    }
  }
`;
