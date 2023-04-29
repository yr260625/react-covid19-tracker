import { DailyStatsSection, ContinentSection, CountrySection } from 'src/components/features';
import { PageLayout } from 'src/components/layouts';
import { Loading } from 'src/components/ui-parts';
import { useCovid19Fetcher } from 'src/features/covid19/hooks';

export const Top = () => {
  const { covid19 } = useCovid19Fetcher();

  return (
    <PageLayout>
      {covid19.isLoading ? (
        <Loading></Loading>
      ) : (
        <>
          <DailyStatsSection></DailyStatsSection>
          <ContinentSection></ContinentSection>
          <CountrySection></CountrySection>
        </>
      )}
    </PageLayout>
  );
};
