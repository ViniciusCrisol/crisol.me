import styled from 'styled-components';

export const Container = styled.div`
  padding-top: 32px;

  h2 {
    width: 100%;
  }
`;

export const PinnedPostsContainer = styled.div`
  margin-top: 16px;

  display: grid;
  grid-gap: 16px;
  grid-template-columns: 1fr 1fr;
`;
