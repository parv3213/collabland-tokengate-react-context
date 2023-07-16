import { Flex, HStack } from '@chakra-ui/react';
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
    <Flex
      direction={['column', 'column', 'column', 'row']}
      className="pt-24 pb-3 mx-auto"
      justifyContent="center"
      alignItems="center"
      maxW="1500px"
    >
      <S.CollabMascote
        src="/collab.land-mascote.svg"
        width={454}
        height={577}
        alt="Collab.land mascot"
      />
      {isConnected ? <Demo /> : <NonLoggedInView />}
    </Flex>
  );
};

export default Content;
