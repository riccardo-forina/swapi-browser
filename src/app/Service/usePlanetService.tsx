import { useState, useEffect } from 'react';
import { Service } from '../Types/Service';
import { IPlanet } from '../Types/Planet';

export interface IPlanets {
  results: IPlanet[];
}

const usePlanetsService = (url: string) => {
  const [result, setResult] = useState<Service<IPlanets>>({
    status: 'loading'
  });

  useEffect(() => {
    if (url) {
      fetch(url)
        .then(response => response.json())
        .then(response => setResult({ status: 'loaded', payload: response }))
        .catch(error => setResult({ status: 'error', error }));
    }
  }, [url]);

  return result;
};

export default usePlanetsService;
