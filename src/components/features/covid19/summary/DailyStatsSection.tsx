import { Stack } from '@chakra-ui/react';
import { DailyStatsCard } from 'src/components/features/covid19/summary/DailyStatsCard';
import {
  getActiveCasesProps,
  getSummary,
  getDeathCasesProps,
} from 'src/components/features/covid19/summary/dailyStatsCardProps';
import { SectionLayout } from 'src/components/layouts';
import { UpdatedAt } from 'src/components/ui-parts';
import { useCovid19 } from 'src/features/covid19/hooks';

type Props = {
  country?: string;
};

export const DailyStatsSection = ({ country = 'All' }: Props) => {
  const { statistics } = useCovid19();
  const countryStatistics = getSummary(statistics, country);
  const activeCasesProps = getActiveCasesProps(countryStatistics);
  const deathCasesProps = getDeathCasesProps(countryStatistics);
  const statisticsUpdatedAt = statistics[0]?.time;
  return (
    <SectionLayout title={'Current Situation Summary'}>
      <UpdatedAt date={statisticsUpdatedAt}></UpdatedAt>
      <Stack
        flexDirection={{ base: 'column', md: 'row' }}
        justify={'space-around'}
        alignItems={'center'}
        gap={4}
        spacing={0}
      >
        <DailyStatsCard {...activeCasesProps}></DailyStatsCard>
        <DailyStatsCard {...deathCasesProps}></DailyStatsCard>
      </Stack>
    </SectionLayout>
  );
};
