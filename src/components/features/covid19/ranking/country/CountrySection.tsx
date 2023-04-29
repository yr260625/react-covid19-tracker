import { Stack } from '@chakra-ui/react';
import { HorizontalBarChart } from 'src/components/features/covid19/ranking/country/HorizontalBarChart';
import {
  getActiveCasesNumberTop,
  getDeathCasesNumberTop,
} from 'src/components/features/covid19/ranking/country/horizontalBarChartProps';
import { SectionLayout } from 'src/components/layouts';
import { useCovid19 } from 'src/features/covid19/hooks';

export const CountrySection = () => {
  const { statistics } = useCovid19();

  const EXTRACT_NUMBER = 10;
  const hBarChartPropsForActiveCases = getActiveCasesNumberTop(statistics, EXTRACT_NUMBER);
  const hBarChartPropsForDeathCases = getDeathCasesNumberTop(statistics, EXTRACT_NUMBER);

  return (
    <SectionLayout title='Current Situation By Countries'>
      <Stack
        flexDirection={{ base: 'column', md: 'row' }}
        justify={'space-around'}
        alignItems={'center'}
        gap={4}
        spacing={0}
      >
        <HorizontalBarChart {...hBarChartPropsForActiveCases} />
        <HorizontalBarChart {...hBarChartPropsForDeathCases} />
      </Stack>
    </SectionLayout>
  );
};
