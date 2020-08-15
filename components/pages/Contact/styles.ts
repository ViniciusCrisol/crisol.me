import styled from 'styled-components';
import { appearFromBottom } from '../../../styles/animations';

export const Container = styled.div`
  margin: 0 auto;
  max-width: 710px;
  animation: ${appearFromBottom} 1s;

  h2 {
    font-size: 20px;
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
