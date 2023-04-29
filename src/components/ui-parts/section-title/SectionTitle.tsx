import { Heading } from '@chakra-ui/react';
import { memo } from 'react';

type Props = {
  title: string;
};

export const SectionTitle = memo(({ title }: Props) => {
  return (
    <Heading as='h2' size={'md'} letterSpacing={'wide'} borderBottom={'1px'} borderColor='gray.200'>
      {title}
    </Heading>
  );
});
