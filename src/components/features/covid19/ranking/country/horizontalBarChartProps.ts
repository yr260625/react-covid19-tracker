import { HorizontalBarChartProps } from 'src/components/features/covid19/ranking/country/HorizontalBarChart';
import { StatisticsType } from 'src/features/covid19/state';

/**
 * 感染者数上位国の抽出
 * @param statistics: StatisticsType[]
 * @param topNumber: number
 * @returns HorizontalBarChartProps
 */
export const getActiveCasesNumberTop = (
  statistics: StatisticsType[],
  topNumber: number,
): HorizontalBarChartProps => {
  const sorted = statistics
    .filter((elm) => elm.continent !== 'All' && elm.continent !== elm.country)
    .sort((a, b) => {
      const activeA = a.cases.active || 0;
      const activeB = b.cases.active || 0;
      return activeB - activeA;
    });

  return {
    title: `Today's Top ${topNumber} Countries of Active Cases`,
    barData: {
      labels: sorted.slice(0, topNumber).map((elm) => elm.country || 'no-label'),
      datasets: [
        {
          label: '#Active Cases',
          data: sorted.slice(0, topNumber).map((elm) => elm.cases.active || 0),
          borderColor: 'rgb(255, 99, 132)',
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
      ],
    },
  };
};

/**
 * 死者数上位国の抽出
 * @param statistics: StatisticsType[]
 * @param topNumber: number
 * @returns HorizontalBarChartProps
 */
export const getDeathCasesNumberTop = (
  statistics: StatisticsType[],
  topNumber: number,
): HorizontalBarChartProps => {
  const sorted = statistics
    .filter((elm) => elm.continent !== 'All' && elm.continent !== elm.country)
    .sort((a, b) => {
      const deathA = a.deaths.total || 0;
      const deathB = b.deaths.total || 0;
      return deathB - deathA;
    });

  return {
    title: `Today's Top ${topNumber} Countries of Death Cases`,
    barData: {
      labels: sorted.slice(0, topNumber).map((elm) => elm.country),
      datasets: [
        {
          label: '#Death Cases',
          data: sorted.slice(0, topNumber).map((elm) => elm.deaths.total),
          borderColor: 'rgba(99, 179, 237)',
          backgroundColor: 'rgba(99, 179, 237, 0.5)',
        },
      ],
    },
  };
};
