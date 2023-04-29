import { Text } from '@chakra-ui/react';
import { memo } from 'react';

type Props = {
  date: string;
};

export const UpdatedAt = memo(({ date }: Props) => {
  const displayDate = new Date(date).toLocaleString();
  return <Text fontSize={'sm'}>{`Latest updated at ${displayDate}`}</Text>;
});
