import { Input as ChackraUIInput, InputProps } from '@chakra-ui/react';

const Input: React.FC<InputProps> = (p) => {
  return (
    <ChackraUIInput
      {...p}
      bg={'#000'}
      borderRadius="14px"
      border="1px solid #FFF"
      color="#74FBF7"
      height="44px"
      fontSize="16px"
      _hover={{ bg: '#000', borderColor: '#3898FF' }}
      _focus={{ bg: '#000', borderColor: '#3898FF' }}
      _disabled={{ bg: '#000', borderColor: '#3898FF' }}
    />
  );
};

export default Input;
