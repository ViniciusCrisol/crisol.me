import styled from 'styled-components';

export const Container = styled.a`
  width: 100%;
  height: 160px;

  display: flex;
  cursor: pointer;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.15);

  transition: 250ms box-shadow, 250ms transform;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0px 2px 8px var(--main-opacity);
  }
`;

export const Content = styled.div`
  padding: 16px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  section {
    h2 {
      font-size: 18px;
    }

    p {
      flex: 1;
      margin: 8px 0;
    }
  }

  footer {
    display: flex;
    align-items: center;
    justify-content: space-between;

    span {
      display: block;
      font-size: 12px;
      color: var(--gray);

      & + span {
        font-size: 14px;
        color: var(--text);
      }
    }
  }
`;
