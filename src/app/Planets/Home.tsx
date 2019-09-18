import React, { useState, useEffect } from 'react';
import { PageSection, Pagination, PaginationVariant } from '@patternfly/react-core';
import { History } from 'history';
import { PlanetListing } from '../Planets/PlanetListing';
import queryString from 'query-string';
import usePlanetsService from '@app/Service/usePlanetService';

interface IPath {
  history: History;
}

const Home: React.FC<IPath> = ({ history }) => {
  const [perPage, setPerPage] = useState(10);

  const pageParam = parseInt(Object.keys(queryString.parse(history.location.search))[0]);
  const { result, page } = usePlanetsService(pageParam, 0);

  const [itemCount, setItemCount] = useState(0);
  useEffect(() => {
    if (result.status === 'loaded') {
      setItemCount(result.payload.count);
    }
  }, [result, setItemCount]);

  return (
    <PageSection>
      <Pagination
        itemCount={itemCount}
        page={page}
        perPage={perPage}
        perPageOptions={[{ title: '10', value: 10 }]}
        onSetPage={(_evt, value) => {
          history.push({ pathname: '/Home', search: '?' + value });
        }}
        onPerPageSelect={(_evt, value) => {
          setPerPage(value);
        }}
        variant={PaginationVariant.top}
      />
      {result.status === 'loaded' && <PlanetListing planets={result.payload.results} history={history} />}
      {result.status !== 'loaded' && result.status}
    </PageSection>
  );
};
export { Home };
