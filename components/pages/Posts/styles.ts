import styled from 'styled-components';
import { appearFromBottom } from '../../../styles/animations';

export const Container = styled.div`
  margin: 0 auto;
  max-width: 710px;
  animation: ${appearFromBottom} 1s;

  display: grid;
  grid-gap: 16px;
  grid-template-columns: 1fr;
`;
