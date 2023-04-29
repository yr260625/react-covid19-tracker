import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchHistory, fetchStatistics, fetchCountries } from 'src/features/covid19/operations';
import { setCountry } from 'src/features/covid19/slice';
import { AppDispatch, RootState } from 'src/features/store/store';

/**
 * 国一覧はTOPページで取っておく
 */
export const useCovid19InitFetcher = () => {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);
};

export const useCovid19Fetcher = () => {
  const dispatch = useDispatch<AppDispatch>();
  const covid19 = useSelector((state: RootState) => state.covid19);
  const selectCountry = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => dispatch(setCountry(e.target.value)),
    [dispatch],
  );

  // 初期表示時のみ取得
  useEffect(() => {
    dispatch(fetchStatistics());
    dispatch(fetchCountries());
  }, [dispatch]);

  // 国が変更されると再取得
  useEffect(() => {
    dispatch(setCountry(covid19.country));
    dispatch(fetchHistory(covid19.country));
  }, [dispatch, covid19.country]);

  return { covid19, selectCountry };
};

export const useCovid19 = () => {
  const dispatch = useDispatch<AppDispatch>();
  const selectCountry = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => dispatch(setCountry(e.target.value)),
    [dispatch],
  );
  const covid19 = useSelector((state: RootState) => state.covid19);
  return { ...covid19, selectCountry };
};
