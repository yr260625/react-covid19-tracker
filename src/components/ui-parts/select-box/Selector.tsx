import { Select } from '@chakra-ui/react';
import { memo } from 'react';

type Props = {
  choiceList: Array<String>;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  selectedValue: string;
};

export const Selector = memo(({ choiceList, selectedValue, onChange }: Props) => {
  if (!choiceList) {
    return null;
  }

  return (
    <Select onChange={onChange} value={selectedValue}>
      {choiceList.map((elm, key) => (
        <option key={key} value={elm.valueOf()}>
          {elm}
        </option>
      ))}
    </Select>
  );
});
