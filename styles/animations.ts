import { keyframes } from 'styled-components';

export const appearFromLeft = keyframes`
from {
  opacity: 0;
  transform: translateX(-20px)
}
to {
  opacity: 1;
  transform: translateX(0)
}
`;

export const fadeIn = keyframes`
from {
  opacity: 0;
}
to {
  opacity: 1;
}
`;

export const pushFromBottom = keyframes`
from {
  transform: translateY(20px)
}
to {
  transform: translateY(0)
}
`;
