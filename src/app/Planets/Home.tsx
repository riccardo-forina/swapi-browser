import React, { useState } from 'react';
import { PageSection, Pagination, PaginationVariant } from '@patternfly/react-core';
import { History } from 'history';
import { PlanetListing } from '../Planets/PlanetListing';
import queryString from 'query-string';

interface IPath {
  history: History;
}

const Home: React.FC<IPath> = ({ history }) => {
  const pageParam = parseInt(Object.keys(queryString.parse(history.location.search))[0]);
  const currentPage = pageParam || 1;
  const apiPath = 'https://swapi.co/api/planets/?page=';
  const [url, setUrl] = React.useState(apiPath + currentPage);
  const [page, setPage] = React.useState(currentPage);
  const [perPage, setPerPage] = useState(10);

  return (
    <PageSection>
      <Pagination
        itemCount={61} //Remove hardcoding and fetch item count from API
        page={page}
        perPage={perPage}
        onSetPage={(_evt, value) => {
          setPage(value);
          setUrl(apiPath + value);
          history.push({ pathname: '/Home', search: '?' + value });
        }}
        onPerPageSelect={(_evt, value) => {
          setPerPage(value);
        }}
        variant={PaginationVariant.top}
      />
      <PlanetListing url={url} />
    </PageSection>
  );
};
export { Home };
