import React from 'react';
import { DataList } from '@patternfly/react-core';
import { IPlanet } from '@app/Types/Planet';
import { PlanetListItem } from './PlanestListItem';
import { History } from 'history';

export interface IPlanetListingProps {
  planets: IPlanet[];
  history: History;
}

const PlanetListing: React.FC<IPlanetListingProps> = ({ planets, history }) => {
  return (
    <DataList aria-label="Expandable data list example">
      {planets.map((planet, index) => (
        <PlanetListItem key={index} planet={planet} history={history} />
      ))}
    </DataList>
  );
};
export { PlanetListing };
