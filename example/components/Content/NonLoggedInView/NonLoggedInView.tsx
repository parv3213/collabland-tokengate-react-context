import { Button, Flex, Link, Text, VStack } from '@chakra-ui/react';
import { useConnectModal } from '@rainbow-me/rainbowkit';
// import Link from 'next/link';

const NonLoggedInView = () => {
  const { openConnectModal } = useConnectModal();

  return (
    <Flex direction={'column'} alignItems="flex-start" maxW="424px" gap={5}>
      <Text fontSize="3xl">Token Gate Demo Website</Text>
      <Text fontSize="xl">
        Collab.Land offers a token gating feature that allows you to restrict
        access to elements or pages of your site based on ownership of certain
        blockchain assets.
      </Text>
      <Text fontSize="xl">
        <Link
          className="italic bg-gray-700 px-2 py-1 rounded no-underline hover:no-underline"
          href="https://www.npmjs.com/package/collabland-tokengate-react-context"
          target="_blank"
        >
          collabland-tokengate-react-context
        </Link>{' '}
        is a package that provides a React context for token gating users based
        on specific rules. It utilizes the Collab.Land APIs to implement this
        functionality
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
      <Button
        variant="link"
        onClick={openConnectModal}
        color="general.link"
        fontSize={'2xl'}
        fontWeight={'light'}
      >
        Connect your wallet to view the demo
      </Button>
    </Flex>
  );
};

export default NonLoggedInView;
