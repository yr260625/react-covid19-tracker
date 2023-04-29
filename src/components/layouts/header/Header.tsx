import { Stack, Heading, Container } from '@chakra-ui/react';

export const Header = () => {
  return (
    <Stack spacing={0} gap={2} backgroundColor={'cyan.400'}>
      <Container maxW='1280px'>
        <Heading as={'h1'} color={'white'} letterSpacing={'wide'} size={['sm', 'md', 'lg']} py={4}>
          Covid19 Statistics
        </Heading>
      </Container>
    </Stack>
  );
};
