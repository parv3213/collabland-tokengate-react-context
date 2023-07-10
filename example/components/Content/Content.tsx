import { HStack } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useAccount } from 'wagmi';
import Demo from '../Demo/Demo';
import * as S from './Content.styled';
import NonLoggedInView from './NonLoggedInView/NonLoggedInView';

const Content = () => {
  const { isConnected } = useAccount();
  const [showChild, setShowChild] = useState(false);
  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }

  return (
    <HStack className="py-3" justifyContent="center" maxW="1500px">
      <S.CollabMascote
        src="/collab.land-mascote.svg"
        width={554}
        height={677}
        alt="Collab.land mascot"
      />
      {isConnected ? <Demo /> : <NonLoggedInView />}
    </HStack>
  );
};

export default Content;
