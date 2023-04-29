import { Card, CardHeader, CardBody, Text, Stack, Box, Divider, Flex } from '@chakra-ui/react';
import { memo } from 'react';

const colors = {
  active: 'red.300',
  inactive: 'blue.300',
};
type CardType = keyof typeof colors;

export type DailyStatsCardProps = {
  header: {
    title: string;
    contents: number | null;
  };
  body: Array<{
    title: string;
    contents: number | null;
  }>;
  style: CardType;
};

export const DailyStatsCard = memo(({ header, body, style }: DailyStatsCardProps) => {
  return (
    <Card
      w={[320, 360]}
      boxShadow={'2xl'}
      rounded={'md'}
      overflow={'hidden'}
      letterSpacing={'0.05rem'}
    >
      <CardHeader bg={colors[style]} color={'white'} fontWeight={'semibold'} textAlign={'center'}>
        <Text fontSize={['md', 'xl']}>{header.title}</Text>
        <Text fontSize={['xl', '3xl']}>{header.contents?.toLocaleString() || 'Unknown'}</Text>
      </CardHeader>
      <CardBody>
        <Stack direction={'column'} justify='center' textAlign='center' bg={'white'}>
          {body.map((data, idx) => (
            <Box key={idx}>
              <Stack
                direction={'row'}
                justify={'space-between'}
                color={'gray.600'}
                fontWeight={500}
                spacing='0'
              >
                <Flex alignItems={'flex-end'} fontSize={['xs', 'sm']}>
                  {data.title}
                </Flex>
                <Text fontSize={['sm', 'lg']} px={1}>
                  {data.contents?.toLocaleString() || 'Unknown'}
                </Text>
              </Stack>
              <Divider borderColor={'black'} />
            </Box>
          ))}
        </Stack>
      </CardBody>
    </Card>
  );
});
