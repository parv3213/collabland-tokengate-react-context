import styled from 'styled-components';
import Image from 'next/image';

export const Container = styled.div`
  display: flex;
`;

export const CollabMascote = styled(Image)`
  animation: bounce 7s infinite;

  @keyframes bounce {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-75px);
    }
    100% {
      transform: translateY(0);
    }
  }

  @media (max-width: 1025px) {
    width: 350px;
    height: 350px;
  }
`;
