import { Flex, Spinner, Text } from '@chakra-ui/react';

export const Loading = () => {
  return (
    <Flex
      w='100vw'
      h='100vh'
      justify='center'
      align='center'
      backgroundColor={'gray.400'}
      transition={'all 0.5s'}
      opacity={0.5}
      position={'fixed'}
      top={0}
      left={0}
      zIndex={9999}
    >
      <Spinner />
      <Text px={3}>Loading...</Text>
    </Flex>
  );
};
