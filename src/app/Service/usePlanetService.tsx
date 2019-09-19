import { useState, useEffect } from 'react';
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

  useEffect(() => {
    if (url) {
      setResult({ status: 'loading' });
      fetch(url)
        .then(response => response.json())
        .then(response => setResult({ status: 'loaded', payload: response }))
        .catch(error => setResult({ status: 'error', error }));
    }
  }, [url, setResult]);

  return result;
};
