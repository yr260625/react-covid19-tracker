import { Box } from '@chakra-ui/react';
import { Chart, ArcElement, Tooltip, Legend, Title } from 'chart.js';
import type { ChartData, ChartOptions } from 'chart.js';
import { memo } from 'react';
import { Pie } from 'react-chartjs-2';
Chart.register(ArcElement, Tooltip, Legend, Title);

export type PieChartProps = {
  title: string;
  pieData: ChartData<'pie'>;
};

export const TitledPieChart = memo(({ title, pieData }: PieChartProps) => {
  const options: ChartOptions<'pie'> = {
    maintainAspectRatio: false,
    plugins: {
      title: {
        align: 'start',
        display: true,
        text: title,
        font: { size: 16 },
      },
      legend: {
        display: true,
      },
    },
  };

  return (
    <Box>
      <Pie data={pieData} options={options} width={300} height={360} />
    </Box>
  );
});
