import { Box } from '@chakra-ui/react';
import { Selector } from 'src/components/ui-parts';
import { useCovid19 } from 'src/features/covid19/hooks';

export const CountrySelector = () => {
  const { country, countries, selectCountry } = useCovid19();
  return (
    <Box py={8}>
      <Selector choiceList={countries} selectedValue={country} onChange={selectCountry}></Selector>
    </Box>
  );
};
