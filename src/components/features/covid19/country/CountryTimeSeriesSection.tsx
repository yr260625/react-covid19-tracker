import { TimeSeriesChart } from 'src/components/features/covid19/country/TimeSeriesChart';
import { SectionLayout } from 'src/components/layouts';
import { useCovid19 } from 'src/features/covid19/hooks';

export const CountryTimeSeriesSection = () => {
  const { history, country } = useCovid19();

  const labels = history.map((elm) => new Date(elm.time).toLocaleDateString()).reverse();
  const data = {
    labels,
    datasets: [
      {
        label: '#Active Cases',
        data: history.map((elm) => elm.cases.active).reverse(),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: '#Death Cases',
        data: history.map((elm) => elm.deaths.total).reverse(),
        borderColor: 'rgba(99, 179, 237)',
        backgroundColor: 'rgba(99, 179, 237, 0.5)',
      },
    ],
  };
  return (
    <SectionLayout title={`${country}'s History`}>
      <TimeSeriesChart title={'testtitle'} lineData={data}></TimeSeriesChart>
    </SectionLayout>
  );
};
