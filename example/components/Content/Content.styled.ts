import styled from 'styled-components';
import Image from 'next/image';

export const Container = styled.div`
  display: flex;
`;

export const CollabMascote = styled(Image)`
  animation: bounce 10s infinite;
  @keyframes bounce {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-30px);
    }
    100% {
      transform: translateY(0);
    }
  }
`;
