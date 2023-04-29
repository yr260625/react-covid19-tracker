import { Box } from '@chakra-ui/react';
import { Chart as ChartJS, PointElement, LineElement, Title } from 'chart.js';
import type { ChartData, ChartOptions } from 'chart.js';
import { memo } from 'react';
import { Line } from 'react-chartjs-2';
ChartJS.register(PointElement, LineElement, Title);

export type TimeSeriesChartProps = {
  title: string;
  lineData: ChartData<'line'>;
};

export const TimeSeriesChart = memo(({ title, lineData }: TimeSeriesChartProps) => {
  const options: ChartOptions<'line'> = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: title,
      },
    },
    elements: {
      point: {
        radius: 1,
      },
    },
  };

  return (
    <Box h={400}>
      <Line data={lineData} options={options} />
    </Box>
  );
});
