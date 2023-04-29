import { CountryTimeSeriesSection, DailyStatsSection } from 'src/components/features';
import { CountrySelector } from 'src/components/features/covid19/country/CountrySelector';
import { PageLayout } from 'src/components/layouts';
import { Loading } from 'src/components/ui-parts';
import { useCovid19Fetcher } from 'src/features/covid19/hooks';

export const Country = () => {
  const { covid19 } = useCovid19Fetcher();

  return (
    <PageLayout>
      {covid19.isLoading ? (
        <Loading></Loading>
      ) : (
        <>
          <CountrySelector></CountrySelector>
          <DailyStatsSection country={covid19.country}></DailyStatsSection>
          <CountryTimeSeriesSection></CountryTimeSeriesSection>
        </>
      )}
    </PageLayout>
  );
};
