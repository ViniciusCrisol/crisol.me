import styled from 'styled-components';

export const Container = styled.header`
  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  height: 64px;

  z-index: 30;
  background-color: var(--background);
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.15);

  main {
    max-width: 980px;
    width: 100%;
    height: 100%;

    margin: 0 auto;
    padding: 0 32px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    h1 {
      font-size: 22px;

      color: var(--main);
      font-weight: normal;
      letter-spacing: 1px;

      display: flex;
      align-items: center;

      cursor: pointer;
      transition: color 200ms;

      &:hover {
        color: var(--main-opacity);
      }

      svg {
        margin-right: 4px;
      }
    }

    section {
      display: flex;
      align-items: center;

      a {
        font-size: 16px;
        color: var(--white);

        position: relative;
        transition: color 200ms;

        &::after {
          position: absolute;
          bottom: -4px;
          left: 0;

          width: 0%;
          height: 2px;

          content: '';
          transition: 200ms;
          background-color: var(--menu-text);
        }

        &:hover {
          color: var(--main);

          &::after {
            width: 100%;
            background-color: var(--main-opacity);
          }
        }
      }
    }
  }
`;
