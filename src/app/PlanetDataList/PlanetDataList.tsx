import React from "react";
import { DataList } from '@patternfly/react-core';
import { Planet } from '../Planet/Planet';

const PlanetDataList: React.FunctionComponent<any> = (props) => {
  return (
    <DataList aria-label="Planet List">
      {props.planets.map((planet: any, index: number) => <Planet planet={planet} key={index} />)}
    </DataList>
  );
}

export { PlanetDataList };