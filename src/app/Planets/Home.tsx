import React, { useState, useEffect } from 'react';
import { PageSection, Pagination, PaginationVariant } from '@patternfly/react-core';
import { History } from 'history';
import { PlanetListing } from '../Planets/PlanetListing';
import queryString from 'query-string';
import { usePlanetsServiceByPage } from '@app/Service/usePlanetService';

interface IPath {
  history: History;
}

const Home: React.FC<IPath> = ({ history }) => {
  const [perPage, setPerPage] = useState(10);

  const pageParam = parseInt(Object.keys(queryString.parse(history.location.search))[0]);
  const { planetsListResult, page } = usePlanetsServiceByPage(pageParam);

  const [itemCount, setItemCount] = useState(0);
  useEffect(() => {
    if (planetsListResult.status === 'loaded') {
      setItemCount(planetsListResult.payload.count);
    }
  }, [planetsListResult, setItemCount]);

  return (
    <PageSection>
      <Pagination
        itemCount={itemCount}
        page={page}
        perPage={perPage}
        perPageOptions={[{ title: '10', value: 10 }]}
        onSetPage={(_evt, value) => {
          history.push({ pathname: '/Planets', search: '?' + value });
        }}
        onPerPageSelect={(_evt, value) => {
          setPerPage(value);
        }}
        variant={PaginationVariant.top}
      />
      {planetsListResult.status === 'loaded' && (
        <PlanetListing planets={planetsListResult.payload.results} history={history} />
      )}
      {planetsListResult.status !== 'loaded' && planetsListResult.status}
    </PageSection>
  );
};
export { Home };
