import { Stack, Container, Flex } from '@chakra-ui/react';
import { FC, memo, ReactNode } from 'react';
import { Footer, Header } from 'src/components/layouts';

export const PageLayout: FC<{ children: ReactNode }> = memo(({ children }) => {
  return (
    <Flex flexDirection={'column'} minHeight={'100vh'}>
      <Header></Header>
      <Stack flex={1}>
        <Container maxW='1280px'>{children}</Container>
      </Stack>
      <Footer></Footer>
    </Flex>
  );
});
