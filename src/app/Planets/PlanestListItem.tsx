import * as React from 'react';
import { IPlanet } from '@app/Types/Planet';
import { History } from 'history';
import {
  DataListItem,
  DataListItemRow,
  DataListItemCells,
  DataListCell,
  DataListAction,
  Dropdown,
  DropdownPosition,
  KebabToggle,
  DropdownItem
} from '@patternfly/react-core';

interface IPlanestListItemProps {
  planet: IPlanet;
  history: History;
}

export const PlanetListItem: React.FC<IPlanestListItemProps> = ({ planet, history }) => {
  let [isOpen, setOpen] = React.useState<boolean>(false);

  return (
    <DataListItem aria-labelledby="ex-item1" isExpanded={isOpen}>
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
        <DataListAction aria-labelledby="ex-item1 ex-action1" id="ex-action1" aria-label="Actions">
          <Dropdown
            isPlain
            position={DropdownPosition.right}
            isOpen={isOpen}
            onSelect={() => setOpen(!isOpen)}
            toggle={<KebabToggle onToggle={() => setOpen(!isOpen)} />}
            dropdownItems={[
              <DropdownItem
                key="action"
                onClick={() => {
                  let splitUrl = planet.url.split('/');
                  history.push('/PlanetDetails/' + splitUrl[splitUrl.length - 2]);
                }}
                component="button"
              >
                Details
              </DropdownItem>
            ]}
          />
        </DataListAction>
      </DataListItemRow>
    </DataListItem>
  );
};
