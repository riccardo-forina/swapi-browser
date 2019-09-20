import * as React from 'react';
import { IPlanet } from '@app/Types/Planet';
import { DataListItem, DataListItemRow, DataListItemCells, DataListCell, Button } from '@patternfly/react-core';
import { Link } from 'react-router-dom';

interface IPlanestListItemProps {
  planet: IPlanet;
}

export const PlanetListItem: React.FC<IPlanestListItemProps> = ({ planet }) => {
  const splitUrl = planet.url.split('/');
  return (
    <DataListItem aria-labelledby="ex-item1" isExpanded={false}>
      <DataListItemRow>
        <DataListItemCells
          dataListCells={[
            <DataListCell key="primary content">
              <div id="ex-item1">{planet.name}</div>
            </DataListCell>,
            <DataListCell key="secondary content 2">
              <span>{planet.population}</span>
            </DataListCell>
          ]}
        />
        <Link to={'/Planets/' + splitUrl[splitUrl.length - 2]}>More</Link>
        {/* <Button
          variant="link"
          onClick={() => {
            let splitUrl = planet.url.split('/');
            history.push('/Planets/' + splitUrl[splitUrl.length - 2]);
          }}
          isInline
        >
          More
        </Button> */}
      </DataListItemRow>
    </DataListItem>
  );
};
