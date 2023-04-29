import { Box } from '@chakra-ui/react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title } from 'chart.js';
import type { ChartData, ChartOptions } from 'chart.js';
import { memo } from 'react';
import { Bar } from 'react-chartjs-2';
ChartJS.register(CategoryScale, LinearScale, BarElement, Title);

export type HorizontalBarChartProps = {
  title: string;
  barData: ChartData<'bar'>;
};

export const HorizontalBarChart = memo(({ title, barData }: HorizontalBarChartProps) => {
  const options: ChartOptions<'bar'> = {
    maintainAspectRatio: false,
    responsive: true,
    indexAxis: 'y' as const,
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    plugins: {
      title: {
        align: 'start',
        display: true,
        text: title,
        font: { size: 16 },
      },
    },
  };

  return (
    <Box minH={400}>
      <Bar data={barData} options={options} width={360} height={320} />
    </Box>
  );
});
