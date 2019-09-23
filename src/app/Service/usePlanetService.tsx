import { useState, useEffect, useCallback } from 'react';
import { Service } from '../Types/Service';
import { IPlanet } from '../Types/Planet';

export interface IPlanetsApiResponse {
  count: number;
  next?: string;
  previous?: string;
  results: IPlanet[];
}

export const usePlanetsServiceByPage = (page: number) => {
  page = page || 1;
  const url = `https://swapi.co/api/planets/?page=${page}`;
  const planetsListResult = useAPI(url);
  return { planetsListResult, page };
};

export const usePlanetServiceByPageId = (pageId: number) => {
  pageId = pageId || 0; //In case, a page id is 0, SW API returns error 404. Calling API in case of an invalid id is debatable, though.
  const url = `https://swapi.co/api/planets/${pageId}`;
  const planetItemResult = useAPI(url);
  return { planetItemResult, pageId };
};

const useAPI = (url: string) => {
  const [result, setResult] = useState<Service<IPlanetsApiResponse>>({
    status: 'loading'
  });

  const callApi = useCallback(
    async function() {
      setResult({ status: 'loading' });
      try {
        const response = await fetch(url);
        if (response.status !== 200) {
          throw new Error(`Api error(${response.status})`);
        }
        const payload = await response.json();
        setResult({ status: 'loaded', payload });
      } catch (error) {
        setResult({ status: 'error', error });
      }
    },
    [url, setResult]
  );

  useEffect(() => {
    if (url) {
      callApi();
    }
  }, [url, callApi]);

  return result;
};
