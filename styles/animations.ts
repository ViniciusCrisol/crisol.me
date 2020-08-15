import { keyframes } from 'styled-components';

export const appearFromLeft = keyframes`
from {
  opacity: 0;
  transform: translateX(-25px)
}
to {
  opacity: 1;
  transform: translateX(0)
}
`;

export const appearFromBottom = keyframes`
from {
  opacity: 0;
  transform: translateY(15px)
}
to {
  opacity: 1;
  transform: translateY(0)
}
`;
