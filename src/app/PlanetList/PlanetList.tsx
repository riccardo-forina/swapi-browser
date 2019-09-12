import React, { useState, useEffect } from 'react';
import { PageSection, DataList } from '@patternfly/react-core';
import { Planet } from '../Planet/Planet';
import axios from "axios";

const PlanetList: React.FunctionComponent<any> = (props) => {
    const [planets, getPlanets] = useState<Array<any>>([]);
    useEffect(() => {
        axios
          .get("https://swapi.co/api/planets")
          .then(({ data }) => {
            console.log(data);
            getPlanets(data.results);
          });
    }, []);
    return (
        <PageSection>
            <DataList aria-label="Planet List">
                { planets.map((planet:any,index:number) => <Planet planet={planet} key={index}/>) }
            </DataList>
        </PageSection>
    );
}
  
export { PlanetList };