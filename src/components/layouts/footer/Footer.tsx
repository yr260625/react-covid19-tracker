import { Stack, Box, Flex } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <Box bg={'blackAlpha.800'} textColor='white' p={4}>
      <Flex
        flexDirection={{ base: 'column', md: 'row' }}
        justifyContent='space-between'
        alignItems='center'
        gap={4}
      >
        <Box fontSize={['xl']}>Covid19 Statistics</Box>
        <Stack direction={'row'} gap={4} spacing={0}>
          <Box _hover={{ color: 'gray.300' }}>
            <Link to='/'>Top</Link>
          </Box>
          <Box _hover={{ color: 'gray.300' }}>
            <Link to='/country'>Country</Link>
          </Box>
          <Box _hover={{ color: 'gray.300' }}>
            <Link to='/about'>About</Link>
          </Box>{' '}
        </Stack>
        <Box color={'white'} letterSpacing={'wide'} textAlign='center'>
          © 2023 yr260625
        </Box>
      </Flex>
    </Box>
  );
};
