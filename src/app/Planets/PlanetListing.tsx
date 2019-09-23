import React from 'react';
import { DataList } from '@patternfly/react-core';
import { IPlanet } from '@app/Types/Planet';
import { PlanetListItem } from './PlanestListItem';

export interface IPlanetListingProps {
  planets: IPlanet[];
}

const PlanetListing: React.FC<IPlanetListingProps> = ({ planets }) => {
  return (
    <DataList aria-label="Expandable data list example">
      {planets.map((planet, index) => (
        <PlanetListItem key={index} planet={planet} />
      ))}
    </DataList>
  );
};
export { PlanetListing };
