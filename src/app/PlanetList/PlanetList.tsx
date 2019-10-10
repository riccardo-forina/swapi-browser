import React, { useState, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { PageSection } from '@patternfly/react-core';
import { PlanetPagination } from '../PlanetPagination/PlanetPagination';
import { PlanetDataList } from '../PlanetDataList/PlanetDataList';
import axios from "axios";

const PlanetList: React.FunctionComponent<any> = (props) => {
    const location = useLocation();
    const history = useHistory();
    const searchParams = new URLSearchParams(location.search);
    const page = parseInt(searchParams.get('page') || '', 10) || 1;
    const [perPage, perPageSelect] = useState(10);
    const url = `https://swapi.co/api/planets/?page=${page}`;
    const [planets, setPlanets] = useState<Array<any>>([]);
    const signal = axios.CancelToken.source();

    const onSetPage = (_event: any, pageNumber: number) => {
        history.push('/planets?page=' + pageNumber);
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