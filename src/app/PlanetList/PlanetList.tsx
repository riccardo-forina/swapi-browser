import React, { useState, useEffect } from 'react';
import { PageSection } from '@patternfly/react-core';
import { PlanetPagination } from '../PlanetPagination/PlanetPagination';
import { PlanetDataList } from '../PlanetDataList/PlanetDataList';
import axios from "axios";
import queryString from "query-string";

const PlanetList: React.FunctionComponent<any> = (props) => {
    const [page, setPage] = useState(1);
    const [perPage, perPageSelect] = useState(10);
    const [planets, setPlanets] = useState<Array<any>>([]);
    const signal = axios.CancelToken.source();

    const onSetPage = (_event: any, pageNumber: number) => {
        setPage(pageNumber);
        props.history.push('/planets?page=' + pageNumber);
    }
    const onPerPageSelect = (_event: any, perPage: number) => perPageSelect(perPage);

    useEffect(() => {
        const pageNo = queryString.parse(props.location.search).page || 1;
        let url: string = "https://swapi.co/api/planets";
        if (pageNo) {
            url = "https://swapi.co/api/planets/?page=" + pageNo;
        }
        axios
            .get(url, {
                cancelToken: signal.token,
            })
            .then(({ data }) => {
                setPage(Number(pageNo));
                setPlanets(data.results);
            });
    }, [page]);
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