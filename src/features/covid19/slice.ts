import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { fetchCountries, fetchHistory, fetchStatistics } from 'src/features/covid19/operations';
import { initialState } from 'src/features/covid19/state';

const covid19Slicer = createSlice({
  name: 'covid19',
  initialState,
  reducers: {
    setCountry: (state, action: PayloadAction<string>) => {
      state.country = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchStatistics.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchStatistics.fulfilled, (state, action) => {
      state.isLoading = false;
      state.statistics = action.payload.response;
    });
    builder.addCase(fetchHistory.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchHistory.fulfilled, (state, action) => {
      state.isLoading = false;
      state.history = action.payload.response;
    });
    builder.addCase(fetchCountries.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchCountries.fulfilled, (state, action) => {
      state.isLoading = false;
      state.countries = action.payload.response;
    });
  },
});

export const { setCountry } = covid19Slicer.actions;
export const covid19Reducer = covid19Slicer.reducer;
