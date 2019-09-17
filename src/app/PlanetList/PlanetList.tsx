import React, { useState, useEffect } from 'react';
import { PageSection } from '@patternfly/react-core';
import { PlanetPagination } from '../PlanetPagination/PlanetPagination';
import { PlanetDataList } from '../PlanetDataList/PlanetDataList';
import axios from "axios";
import queryString from "query-string";

const PlanetList: React.FunctionComponent<any> = (props) => {
    const page = Number(queryString.parse(props.location.search).page) || 1;
    const [perPage, perPageSelect] = useState(10);
    const url = `https://swapi.co/api/planets/?page=${page}`;
    const [planets, setPlanets] = useState<Array<any>>([]);
    const signal = axios.CancelToken.source();

    const onSetPage = (_event: any, pageNumber: number) => {
        props.history.push('/planets?page=' + pageNumber);
    }
    const onPerPageSelect = (_event: any, perPage: number) => perPageSelect(perPage);

    useEffect(() => {
        axios
            .get(url, {
                cancelToken: signal.token,
            })
            .then(({ data }) => {
                setPlanets(data.results);
            });
    }, [url]);

    useEffect(() => {
        return () => {
            signal.cancel();
        }
    }, []);

    return (
        <PageSection>
            <PlanetPagination
                perPage={perPage}
                page={page}
                onSetPage={onSetPage}
                onPerPageSelect={onPerPageSelect}
            />
            <PlanetDataList
                planets={planets}
            />
        </PageSection>
    );
}

export { PlanetList };