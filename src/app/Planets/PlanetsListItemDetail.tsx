import * as React from 'react';
import { PageSection } from '@patternfly/react-core';
import usePlanetsService from '@app/Service/usePlanetService';
import { DataListItem, DataListItemRow, DataListItemCells, DataListCell, DataList } from '@patternfly/react-core';

export const PlanetsListItemDetail: React.FC<any> = props => {
  const planetId = parseInt(props.computedMatch.params.id) | 0;
  const { result, page } = usePlanetsService(0, planetId);

  return (
    <PageSection>
      {result.status !== 'loaded' && result.status}
      <DataList aria-label="Simple data list example">
        {result.status === 'loaded' && <PlanetItemDetail planetDetail={result.payload} />}
      </DataList>
    </PageSection>
  );
};

const PlanetItemDetail = planetDetail => {
  planetDetail = planetDetail.planetDetail;
  return (
    <DataListItem aria-labelledby="simple-item1">
      <DataListItemRow>
        <DataListItemCells
          dataListCells={[
            <DataListCell key="primary content">
              <span id="simple-item1">
                <b>Name</b>
              </span>
            </DataListCell>,
            <DataListCell key="secondary content">{planetDetail.name}</DataListCell>
          ]}
        />
      </DataListItemRow>
      <DataListItemRow>
        <DataListItemCells
          dataListCells={[
            <DataListCell key="primary content">
              <span id="simple-item1">
                <b>Rotation Period</b>
              </span>
            </DataListCell>,
            <DataListCell key="secondary content">{planetDetail.rotation_period}</DataListCell>
          ]}
        />
      </DataListItemRow>
      <DataListItemRow>
        <DataListItemCells
          dataListCells={[
            <DataListCell key="primary content">
              <span id="simple-item1">
                <b>Orbital Period</b>
              </span>
            </DataListCell>,
            <DataListCell key="secondary content">{planetDetail.orbital_period}</DataListCell>
          ]}
        />
      </DataListItemRow>
      <DataListItemRow>
        <DataListItemCells
          dataListCells={[
            <DataListCell key="primary content">
              <span id="simple-item1">
                <b>Diameter</b>
              </span>
            </DataListCell>,
            <DataListCell key="secondary content">{planetDetail.diameter}</DataListCell>
          ]}
        />
      </DataListItemRow>
      <DataListItemRow>
        <DataListItemCells
          dataListCells={[
            <DataListCell key="primary content">
              <span id="simple-item1">
                <b>Climate</b>
              </span>
            </DataListCell>,
            <DataListCell key="secondary content">{planetDetail.climate}</DataListCell>
          ]}
        />
      </DataListItemRow>
      <DataListItemRow>
        <DataListItemCells
          dataListCells={[
            <DataListCell key="primary content">
              <span id="simple-item1">
                <b>Gravity</b>
              </span>
            </DataListCell>,
            <DataListCell key="secondary content">{planetDetail.gravity}</DataListCell>
          ]}
        />
      </DataListItemRow>
      <DataListItemRow>
        <DataListItemCells
          dataListCells={[
            <DataListCell key="primary content">
              <span id="simple-item1">
                <b>Terrain</b>
              </span>
            </DataListCell>,
            <DataListCell key="secondary content">{planetDetail.terrain}</DataListCell>
          ]}
        />
      </DataListItemRow>
      <DataListItemRow>
        <DataListItemCells
          dataListCells={[
            <DataListCell key="primary content">
              <span id="simple-item1">
                <b>Surface Water</b>
              </span>
            </DataListCell>,
            <DataListCell key="secondary content">{planetDetail.surface_water}</DataListCell>
          ]}
        />
      </DataListItemRow>
      <DataListItemRow>
        <DataListItemCells
          dataListCells={[
            <DataListCell key="primary content">
              <span id="simple-item1">
                <b>Population</b>
              </span>
            </DataListCell>,
            <DataListCell key="secondary content">{planetDetail.population}</DataListCell>
          ]}
        />
      </DataListItemRow>
    </DataListItem>
  );
};
