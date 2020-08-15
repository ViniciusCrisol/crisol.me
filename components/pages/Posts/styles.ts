import styled from 'styled-components';
import { fadeIn } from '../../../styles/animations';

export const Container = styled.div`
  margin: 0 auto;
  max-width: 710px;
  animation: ${fadeIn} 1s;

  display: grid;
  grid-gap: 16px;
  grid-template-columns: 1fr;
`;
