import styled from 'styled-components';
import { fadeIn, pushFromBottom } from '../../../styles/animations';

export const Container = styled.div`
  animation: ${pushFromBottom} 1s;

  h2 {
    animation: ${fadeIn} 1s;
    width: 100%;
  }
`;

export const PostsWrapper = styled.div`
  margin-top: 16px;

  display: grid;
  grid-gap: 16px;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

export const ButtonContainer = styled.div`
  width: 100%;
  margin-top: 64px;

  display: flex;
  align-items: center;
  justify-content: center;

  a {
    height: 48px;
    width: 128px;

    background-color: var(--main);
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.15);

    color: white;
    font-size: 18px;

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;
    transition: 250ms box-shadow, 250ms transform;

    &:hover {
      transform: scale(1.008);
      box-shadow: 0px 2px 8px var(--main-opacity);
    }
  }
`;
