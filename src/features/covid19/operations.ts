import { createAsyncThunk } from '@reduxjs/toolkit';
import { Api } from 'src/features/covid19/api';
import { StatisticsType } from 'src/features/covid19/state';

type ApiResponse = {
  response: Array<StatisticsType>;
};

type CountryApiResponse = {
  response: Array<String>;
};

export const fetchStatistics = createAsyncThunk<ApiResponse, void>(
  'covid19/statistics',
  async () => {
    const result = await Api.get<ApiResponse>(`/statistics`);
    return result.data;
  },
);

export const fetchHistory = createAsyncThunk<ApiResponse, string>(
  'covid19/history',
  async (country: string) => {
    const result = await Api.get<ApiResponse>(`/history`, {
      params: { country },
    });
    return result.data;
  },
);

export const fetchCountries = createAsyncThunk<CountryApiResponse, void>(
  'covid19/country',
  async () => {
    const result = await Api.get<CountryApiResponse>(`/countries`);
    return result.data;
  },
);
