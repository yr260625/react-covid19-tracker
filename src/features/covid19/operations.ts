import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import {
  getAllCountry,
  getHistorySimulator,
  getStatisticsAllSimulator,
} from 'src/features/covid19/simulator';
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
    if (process.env.REACT_APP_LOCAL === '1') {
      return getStatisticsAllSimulator();
    }
    const result = await axios.get<ApiResponse>(`https://covid-193.p.rapidapi.com/statistics`, {
      params: {},
      headers: {
        'X-RapidAPI-Key': '6d5ec894d1msh618d3d7ebaf777dp1e38c0jsn83cee05f9383',
        'X-RapidAPI-Host': 'covid-193.p.rapidapi.com',
      },
    });
    return result.data;
  },
);

export const fetchHistory = createAsyncThunk<ApiResponse, string>(
  'covid19/history',
  async (country: string) => {
    if (process.env.REACT_APP_LOCAL === '1') {
      return getHistorySimulator(country);
    }
    const result = await axios.get<ApiResponse>(`https://covid-193.p.rapidapi.com/history`, {
      params: { country },
      headers: {
        'X-RapidAPI-Key': '6d5ec894d1msh618d3d7ebaf777dp1e38c0jsn83cee05f9383',
        'X-RapidAPI-Host': 'covid-193.p.rapidapi.com',
      },
    });
    return result.data;
  },
);

export const fetchCountries = createAsyncThunk<CountryApiResponse, void>(
  'covid19/country',
  async () => {
    if (process.env.REACT_APP_LOCAL === '1') {
      return getAllCountry();
    }
    const result = await axios.get<CountryApiResponse>(
      `https://covid-193.p.rapidapi.com/countries`,
      {
        params: {},
        headers: {
          'X-RapidAPI-Key': '6d5ec894d1msh618d3d7ebaf777dp1e38c0jsn83cee05f9383',
          'X-RapidAPI-Host': 'covid-193.p.rapidapi.com',
        },
      },
    );
    return result.data;
  },
);
