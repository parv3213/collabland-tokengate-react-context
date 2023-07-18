import {
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Link,
  Text,
  VStack,
} from '@chakra-ui/react';
import { TokenGateContext } from 'collabland-tokengate-react-context';
import { useFormik } from 'formik';
import { useContext } from 'react';
import { useAccount } from 'wagmi';
import * as Yup from 'yup';
import { truncateAddress } from '../../utils/utils';
import Button from '../Button/Button';
import CustomInput from '../Input/Input';

const defaultRules = {
  type: 'ERC20',
  chainId: 1, // Ethereum
  minToken: '1',
  contractAddress: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48', // Token USD Coin USDC
  roleId: '001',
};

const RulesValidationSchema = Yup.object().shape({
  type: Yup.string().required('Required'),
  chainId: Yup.number().required('Required'),
  minToken: Yup.number().positive().required('Required'),
  contractAddress: Yup.string().required('Required'),
  roleId: Yup.string().required('Required'),
});

const Demo = () => {
  const { address } = useAccount();
  const { checkRoles, isLoading, result, error } = useContext(TokenGateContext);

  const formik = useFormik({
    initialValues: {
      address: address,
      chainId: defaultRules.chainId,
      type: defaultRules.type,
      contractAddress: defaultRules.contractAddress,
      minToken: defaultRules.minToken,
      roleId: defaultRules.roleId,
    },
    onSubmit: (values) => {
      checkRoles(
        {
          account: values.address!,
          rules: [
            {
              type: values.type!,
              chainId: values.chainId!,
              minToken: values.minToken!,
              contractAddress: values.contractAddress!,
              roleId: values.roleId,
            },
          ],
        },
        process.env.NEXT_PUBLIC_COLLAB_LAND_API_KEY!
      );
    },
    validationSchema: RulesValidationSchema,
  });

  return (
    <Flex
      direction={['column', 'column', 'column', 'row']}
      alignItems="flex-start"
      gap={20}
    >
      <VStack width="424px" ml="40px">
        <VStack alignItems="flex-start">
          <Text fontSize={'3xl'} fontWeight={'normal'} color={'#3898FF'}>
            Wallet Connected
          </Text>
          <Text fontSize="md">
            The form is populated with your wallet address, and data to check the wallet for 1 USDC on Ethereum.<br/>
          </Text>
          <Text fontSize="md" pb="4">
            Keep, or adjust the inputs, then click 'Check Role' to validate your assets and obtain access.
          </Text>
        </VStack>
        <form onSubmit={formik.handleSubmit} className="w-full">
          <VStack spacing={4} align="flex-start">
            <FormControl isRequired>
              <FormLabel htmlFor="address" fontSize="sm">
                Wallet Address
              </FormLabel>
              <CustomInput
                id="address"
                name="address"
                type="string"
                placeholder="Enter Wallet Address"
                onChange={formik.handleChange}
                value={formik.values.address}
                isDisabled={isLoading}
                variant="filled"
                marginBottom={4}
              />
              <FormLabel htmlFor="chainId" fontSize="sm">
                Chain Id
              </FormLabel>
              <CustomInput
                id="chainId"
                name="chainId"
                type="number"
                placeholder="Enter Chain ID"
                onChange={formik.handleChange}
                value={formik.values.chainId}
                isDisabled={isLoading}
                variant="filled"
                marginBottom={4}
              />
              <FormLabel htmlFor="type" fontSize="sm">
                Token Type
              </FormLabel>
              <CustomInput
                id="type"
                name="type"
                type="text"
                placeholder="Enter Token Type"
                onChange={formik.handleChange}
                value={formik.values.type}
                isDisabled={isLoading}
                variant="filled"
                marginBottom={4}
              />
              <FormLabel htmlFor="contractAddress" fontSize="sm">
                Token Contract Address
              </FormLabel>
              <CustomInput
                id="contractAddress"
                name="contractAddress"
                type="address"
                placeholder="Enter Token Contract Address"
                onChange={formik.handleChange}
                value={formik.values.contractAddress}
                isDisabled={isLoading}
                variant="filled"
                marginBottom={4}
              />
              <FormLabel htmlFor="minToken" fontSize="sm">
                Minimum Tokens in Wallet
              </FormLabel>
              <CustomInput
                id="minToken"
                name="minToken"
                type="string"
                placeholder="Enter Minimum Tokens in Wallet"
                onChange={formik.handleChange}
                value={formik.values.minToken}
                isDisabled={isLoading}
                variant="filled"
                marginBottom={4}
              />
            </FormControl>
            <Button
              type="submit"
              width="fit-content"
              isLoading={isLoading}
              paddingX={10}
            >
              Check Role
            </Button>
          </VStack>
        </form>
        {error && <div className="font-bold text-red-900">Error: {error}</div>}
      </VStack>
      <VStack
        align="flex-start"
        alignItems="flex-start"
        width="296px"
        spacing="72px"
        paddingTop="52px"
      >
        <VStack alignItems="flex-start" gap={0} fontSize="md">
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
          <Link
            className="underline"
            href="https://docs.collab.land/help-docs/key-features/token-gate-communities/#supported-blockchains--tokens"
            target="_blank"
          >
            Supported Blockchains &amp; Token
          </Link>
        </VStack>
        {result?.roles?.[0] && (
          <div>
            <Text
              fontSize="3xl"
              mb={3}
              color={
                result.roles[0].granted ? 'general.success' : 'general.error'
              }
            >
              Access {result.roles[0].granted ? 'Granted' : 'Denied'}
            </Text>

            <Text>
              Data sent:
            </Text>
            <pre
              // style={{
              //   fontFamily: 'mPlus1Code',
              //   fontWeight: '400',
              // }}
            >
              {JSON.stringify(
                {
                  ...formik.values,
                  address: truncateAddress(formik.values.address!),
                  contractAddress: truncateAddress(
                    formik.values.contractAddress
                  ),
                },
                undefined,
                4
              )}
            </pre>
          </div>
        )}
      </VStack>
    </Flex>
  );
};

export default Demo;
