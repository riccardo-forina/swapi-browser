import { useState, useEffect } from 'react';
import { Service } from '../Types/Service';
import { IFilm } from '../Types/Planet';

export interface IFilms {
  results: IFilm[];
}

const useFilmsService = () => {
  const [result, setResult] = useState<Service<IFilms>>({
    status: 'loading'
  });

  useEffect(() => {
    fetch('https://swapi.co/api/Films/id')
      .then(response => response.json())
      .then(response => setResult({ status: 'loaded', payload: response }))
      .catch(error => setResult({ status: 'error', error }));
  }, []);

  return result;
};

export default useFilmsService;
