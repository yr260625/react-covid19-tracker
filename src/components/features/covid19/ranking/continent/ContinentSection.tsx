import { Stack } from '@chakra-ui/react';
import { TitledPieChart } from 'src/components/features/covid19/ranking/continent/TitledPieChart';
import {
  activeCasesByContinent,
  aggregateByContinent,
  deathCasesByContinent,
} from 'src/components/features/covid19/ranking/continent/titledPieChartProps';
import { SectionLayout } from 'src/components/layouts';
import { useCovid19 } from 'src/features/covid19/hooks';

export const ContinentSection = () => {
  const { statistics } = useCovid19();
  const aggregation = aggregateByContinent(statistics);
  const activeCaseProps = activeCasesByContinent(aggregation);
  const deathCaseProps = deathCasesByContinent(aggregation);

  return (
    <SectionLayout title={'Current Situation By Continents'}>
      <Stack
        flexDirection={{ base: 'column', md: 'row' }}
        justify={'space-around'}
        alignItems={'center'}
        gap={4}
        spacing={0}
      >
        <TitledPieChart {...activeCaseProps}></TitledPieChart>
        <TitledPieChart {...deathCaseProps}></TitledPieChart>
      </Stack>
    </SectionLayout>
  );
};
