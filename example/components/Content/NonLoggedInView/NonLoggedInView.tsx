import { Button, Link, Text, VStack } from '@chakra-ui/react';
import { useConnectModal } from '@rainbow-me/rainbowkit';
// import Link from 'next/link';

const NonLoggedInView = () => {
  const { openConnectModal } = useConnectModal();

  return (
    <VStack alignItems="flex-start" spacing="24px" maxW="424px">
      <Text fontSize="3xl">Please connect your wallet</Text>
      <Text fontSize="xl">
        Collab.Land offers a token gating feature that allows you to restrict
        access to elements or pages of your site based on ownership of certain
        blockchain assets.
      </Text>
      <Text fontSize="xl">
        Token.Gate is a package that provides a React context for token gating
        users based on specific rules. It utilizes the Collab.Land APIs to
        implement this functionality
      </Text>
      <VStack alignItems="flex-start">
        <Link
          className="underline"
          href="https://www.npmjs.com/package/collabland-tokengate-react-context"
          target="_blank"
        >
          Token Gate React Context
        </Link>
        <Link
          className="underline"
          href="https://docs.collab.land/help-docs/key-features/token-gate-communities/"
          target="_blank"
        >
          Collab.Land Token-Gate Docs
        </Link>
      </VStack>
      <Button variant="link" onClick={openConnectModal} color="general.link">
        Connect your wallet to view the demo
      </Button>
    </VStack>
  );
};

export default NonLoggedInView;
