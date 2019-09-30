import React, { useState, useEffect } from 'react';
import {
    PageSection,
    Grid,
    GridItem,
    Card,
    CardHeader,
    CardBody,
    List,
    ListItem,
    TextContent,
    Text,
    TextVariants
} from '@patternfly/react-core';
import { Link, BrowserRouter as Router } from 'react-router-dom';
import axios from "axios";
import { isTemplateElement } from '@babel/types';


export interface IPlanet {
    name: string;
    population: string;
    films: string[];
    rotation_period: string;
    orbital_period: string;
    diameter: string;
    climate: string;
    gravity: string;
    terrain: string;
    surface_water: string;
    created: string;
    edited: string;
    residents: string[];
    url: string;
}

const initialPlanet:IPlanet = {
    name: "",
    population: "",
    films: [],
    rotation_period: "",
    orbital_period: "",
    diameter: "",
    climate: "",
    gravity: "",
    terrain: "",
    surface_water: "",
    created: "",
    edited: "",
    residents: [],
    url: ""
}

const PlanetDetail: React.FunctionComponent<any> = (props) => {
    const planetNo = props.computedMatch.params.id || 1;
    const signal = axios.CancelToken.source();
    const [planetDetails, setDetails] = useState<IPlanet>(initialPlanet);
    useEffect(() => {
        const url: string = "https://swapi.co/api/planets/" + planetNo;
        axios
            .get(url, {
                cancelToken: signal.token,
            })
            .then(({ data }) => {
                setDetails(data);
            });
    }, []);

    return (
        <PageSection>
            {planetDetails.name &&
                <Grid gutter='md'>
                    <GridItem span={5}>
                        <Card>
                            <CardHeader>
                                <TextContent>
                                    <Text component={TextVariants.h1}><b>{planetDetails.name}</b></Text>
                                </TextContent>
                            </CardHeader>
                        </Card>
                    </GridItem>
                    <GridItem span={7}>
                        <Card>
                            <CardBody>
                                <TextContent>
                                    <Text component={TextVariants.h3}>Population : {planetDetails.population}</Text>
                                    <Text component={TextVariants.h3}>Rotation Period : {planetDetails.rotation_period}</Text>
                                    <Text component={TextVariants.h3}>Orbit Period : {planetDetails.orbital_period}</Text>
                                </TextContent>
                            </CardBody>
                        </Card>
                    </GridItem>
                    <GridItem span={12}>
                        <Card>
                            <CardBody>
                                <TextContent>
                                    <Grid>
                                        <GridItem span={6}>
                                            <Text component={TextVariants.h3}>Diameter : {planetDetails.diameter}</Text>
                                            <Text component={TextVariants.h3}>Gravity Period : {planetDetails.gravity}</Text>
                                            <Text component={TextVariants.h3}>Climate : {planetDetails.climate}</Text>
                                        </GridItem>
                                        <GridItem span={6}>
                                            <Text component={TextVariants.h3}>Terrain : {planetDetails.terrain}</Text>
                                            <Text component={TextVariants.h3}>Surface Water : {planetDetails.surface_water}</Text>
                                        </GridItem>
                                    </Grid>
                                </TextContent>
                            </CardBody>
                        </Card>
                    </GridItem>
                    <GridItem span={6}>
                        <Card>
                            <CardHeader><b>Movies featuring this planet</b></CardHeader>
                            <CardBody>
                                <List>
                                    {planetDetails.films.map((film:string, idx:number) => {
                                        return(
                                            <ListItem>
                                                <Link to={film} key={idx}>{film}</Link>
                                            </ListItem>
                                        )
                                    })}
                                </List>
                            </CardBody>
                        </Card>
                    </GridItem>
                    <GridItem span={6}>
                        <Card>
                            <CardHeader><b>Characters from this planet</b></CardHeader>
                            <CardBody>
                                <List>
                                    {planetDetails.residents.map((resident:string, idx:number) => {
                                        return(
                                            <ListItem key={idx}>
                                                <Link to={resident} key={idx}>{resident}</Link>
                                            </ListItem>
                                        )
                                    })}
                                </List>
                            </CardBody>
                        </Card>
                    </GridItem>
                </Grid>
            }
        </PageSection>
    );
}

export { PlanetDetail };