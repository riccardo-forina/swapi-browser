import { useState, useEffect } from 'react';
import { Service } from '../Types/Service';
import { IPlanet } from '../Types/Planet';

export interface IPlanets {
  results: IPlanet[];
}

const usePlanetsService = () => {
  const [result, setResult] = useState<Service<IPlanets>>({
    status: 'loading'
  });

  useEffect(() => {
    fetch('https://swapi.co/api/planets')
      .then(response => response.json())
      .then(response => setResult({ status: 'loaded', payload: response }))
      .catch(error => setResult({ status: 'error', error }));
  }, []);

  return result;
};

export default usePlanetsService;
