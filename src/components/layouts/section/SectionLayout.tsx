import { Stack } from '@chakra-ui/react';
import { FC, memo, ReactNode } from 'react';
import { SectionTitle } from 'src/components/ui-parts';

export const SectionLayout: FC<{ children: ReactNode; title: string }> = memo(
  ({ children, title }) => {
    return (
      <Stack py={4} gap={4}>
        <SectionTitle title={title}></SectionTitle>
        <Stack gap={4} pb={12} spacing={0}>
          {children}
        </Stack>
      </Stack>
    );
  },
);
