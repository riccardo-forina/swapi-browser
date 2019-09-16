import { useState, useEffect } from 'react';
import { Service } from '../Types/Service';
import { IPlanet } from '../Types/Planet';

export interface IPlanetsApiResponse {
  count: number;
  next?: string;
  previous?: string;
  results: IPlanet[];
}

const usePlanetsService = (page: number) => {
  page = page || 1;
  const url = `https://swapi.co/api/planets/?page=${page}`;
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

  return { result, page };
};

export default usePlanetsService;
