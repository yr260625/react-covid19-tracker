import { ExternalLinkIcon } from '@chakra-ui/icons';
import { ListItem, OrderedList, Link } from '@chakra-ui/react';
import { PageLayout, SectionLayout } from 'src/components/layouts';

export const About = () => {
  return (
    <>
      <PageLayout>
        <SectionLayout title='掲載データ'>
          <OrderedList spacing={2} textStyle={'default'} paddingLeft={2}>
            <ListItem>Covid19感染者数累計動向</ListItem>
            <ListItem>Covid19新規感染者動向</ListItem>
            <ListItem>Covid19死者数動向</ListItem>
          </OrderedList>
        </SectionLayout>
        <SectionLayout title='参照API'>
          <OrderedList spacing={2} textStyle={'default'} paddingLeft={2}>
            <ListItem>
              <Link href='https://rapidapi.com/api-sports/api/covid-193' isExternal>
                Rapid API - COVID-19 API Documentation
                <ExternalLinkIcon mx={1} />
              </Link>
            </ListItem>
          </OrderedList>
        </SectionLayout>
        <SectionLayout title='その他'>
          <OrderedList spacing={2} textStyle={'default'} paddingLeft={2}>
            <ListItem>
              本Webサイトでは、外部APIから取得した結果を独自に集計した値を表示している。
            </ListItem>
            <ListItem>
              公的機関により公表されている結果とは一致しないため、正確な値が必要であればそちらを参照する必要がある。
            </ListItem>
          </OrderedList>
        </SectionLayout>
      </PageLayout>
    </>
  );
};
