import React, { useState } from 'react';
import {
  PageSection,
  DataList,
  DataListItem,
  DataListItemRow,
  DataListCell,
  DataListToggle,
  DataListContent,
  DataListItemCells,
  TextList,
  TextContent,
  TextListItem
} from '@patternfly/react-core';
import usePlanetService from '../Service/usePlanetService';

const PlanetListing: React.FC<{}> = () => {
  const service = usePlanetService();
  let [isOpen, setOpen] = useState<boolean>(false);
  return (
    <PageSection>
      {service.status === 'loading' && <div>Loading...</div>}

      <DataList aria-label="Expandable data list example">
        {service.status === 'loaded' &&
          service.payload.results.map((planet, index) => (
            <DataListItem key={index} aria-labelledby="ex-item1" isExpanded={isOpen}>
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
          ))}
      </DataList>
    </PageSection>
  );
};

export { PlanetListing };
