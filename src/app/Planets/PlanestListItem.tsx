import * as React from 'react';
import { IPlanet } from "@app/Types/Planet";
import { DataListItem, DataListItemRow, DataListToggle, DataListItemCells, DataListCell, DataListContent, TextContent, TextList, TextListItem } from '@patternfly/react-core';

export interface IPlanestListItemProps {
  planet: IPlanet;
}

export const PlanetListItem: React.FC<IPlanestListItemProps> = ({ planet }) => {
  let [isOpen, setOpen] = React.useState<boolean>(false);

  return (
    <DataListItem aria-labelledby="ex-item1" isExpanded={isOpen}>
      <DataListItemRow>
        <DataListToggle
          onClick={() => setOpen(!isOpen)}
          isExpanded={isOpen}
          id="ex-toggle1"
          aria-controls="ex-expand1"
        />
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
      </DataListItemRow>
      <DataListContent aria-label="Primary Content Details" id="ex-expand1" isHidden={!isOpen}>
        <TextContent>
          <TextList>
            {planet.films.map((film, index) => (
              <TextListItem key={index}>{film}</TextListItem>
            ))}
          </TextList>
        </TextContent>
      </DataListContent>
    </DataListItem>
  );
}
