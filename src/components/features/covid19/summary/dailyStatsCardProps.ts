import { DailyStatsCardProps } from 'src/components/features/covid19/summary/DailyStatsCard';
import { StatisticsType } from 'src/features/covid19/state';

export const getSummary = (statistics: StatisticsType[], country: string): StatisticsType => {
  const notFound: StatisticsType = {
    continent: null,
    country: null,
    population: null,
    cases: {
      new: null,
      active: null,
      critical: null,
      recovered: null,
      total: null,
    },
    deaths: {
      new: null,
      total: null,
    },
    time: '',
  };

  return statistics.find((elm) => elm.country?.toUpperCase() === country.toUpperCase()) ?? notFound;
};

export const getActiveCasesProps = (statistics: StatisticsType): DailyStatsCardProps => {
  return {
    header: {
      title: 'Total Active Cases',
      contents: statistics.cases.active,
    },
    body: [
      { title: 'New Infected', contents: Number(statistics.cases.new) },
      { title: 'Cumulative Total', contents: statistics.cases.total },
      { title: 'Critical', contents: statistics.cases.critical },
    ],
    style: 'active',
  };
};

export const getDeathCasesProps = (statistics: StatisticsType): DailyStatsCardProps => {
  return {
    header: {
      title: 'Total Inactive Cases',
      contents: statistics.deaths.total,
    },
    body: [
      { title: 'New Deaths', contents: Number(statistics.deaths.new) },
      { title: 'Total Deaths', contents: statistics.deaths.total },
      { title: 'Recovered', contents: statistics.cases.recovered },
    ],
    style: 'inactive',
  };
};
