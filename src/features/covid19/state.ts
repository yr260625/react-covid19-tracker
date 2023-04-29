type CasesType = {
  new: string | null;
  active: number | null;
  critical: number | null;
  recovered: number | null;
  total: number | null;
};

type DeathsType = {
  new: string | null;
  total: number | null;
};

export type StatisticsType = {
  continent: string | null;
  country: string | null;
  population: number | null;
  cases: CasesType;
  deaths: DeathsType;
  time: string;
};

export type Covid19StateType = {
  country: string;
  countries: String[];
  statistics: StatisticsType[];
  history: StatisticsType[];
  isLoading: boolean;
};

export const initialState: Covid19StateType = {
  country: 'Japan',
  countries: [],
  statistics: [],
  history: [],
  isLoading: true,
};
