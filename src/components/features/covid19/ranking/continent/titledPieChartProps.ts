import { PieChartProps } from 'src/components/features/covid19/ranking/continent/TitledPieChart';
import { StatisticsType } from 'src/features/covid19/state';

type aggregatedByContinent = {
  continent: string;
  active: number;
  death: number;
};

// 大陸別に集計
export const aggregateByContinent = (statistics: StatisticsType[]) => {
  const aggregation = statistics.reduce(
    (acc: { [key: string]: aggregatedByContinent }, current: StatisticsType) => {
      if (current.continent === 'All' || current.continent == null) {
        return acc;
      }
      if (!acc[current.continent]) {
        acc[current.continent] = {
          continent: current.continent,
          active: 0,
          death: 0,
        };
      }
      acc[current.continent].active += current.cases.active || 0;
      acc[current.continent].death += current.deaths.total || 0;
      return acc;
    },
    {},
  );

  // 配列化して返却
  return Object.keys(aggregation).map((elm) => aggregation[elm]);
};

export const activeCasesByContinent = (aggregation: aggregatedByContinent[]): PieChartProps => {
  const sortedByActiveCases = aggregation.slice().sort((a, b) => {
    return b.active - a.active;
  });

  return {
    title: "Today's Active Cases",
    pieData: {
      labels: sortedByActiveCases.map((elm) => elm.continent),
      datasets: [
        {
          label: '#Active Cases',
          data: sortedByActiveCases.map((elm) => elm.active),
          backgroundColor: [
            'rgba(197,81,85,0.8)',
            'rgba(255,120,120,0.8)',
            'rgba(255,175,175,0.8)',
            'rgba(255,225,225,0.8)',
            'rgba(255,255,255,0.8)',
            'rgba(150,129,129,0.8)',
          ],
          borderColor: ['rgba(252,129,129,1)'],
          borderWidth: 1,
        },
      ],
    },
  };
};

export const deathCasesByContinent = (aggregation: aggregatedByContinent[]): PieChartProps => {
  const sortedByDeathCases = aggregation.slice().sort((a, b) => {
    return b.death - a.death;
  });
  return {
    title: "Today's Death Cases",
    pieData: {
      labels: sortedByDeathCases.map((elm) => elm.continent),
      datasets: [
        {
          label: '#Death Cases',
          data: sortedByDeathCases.map((elm) => elm.death),
          backgroundColor: [
            'rgba(0,225,225,0.8)',
            'rgba(88,159,239,0.8)',
            'rgba(143,208,255,0.8)',
            'rgba(198,255,255,0.8)',
            'rgba(255,255,255,0.8)',
            'rgba(150,129,129,0.8)',
          ],
          borderColor: ['rgba(0,225,225,1)'],
          borderWidth: 1,
        },
      ],
    },
  };
};
