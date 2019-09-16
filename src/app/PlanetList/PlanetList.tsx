import React, { useState, useEffect } from 'react';
import { Pagination, PaginationVariant, DataList, PageSection } from '@patternfly/react-core';
import { Planet } from '../Planet/Planet';
import axios from "axios";
import queryString from "query-string";

const PlanetList: React.FunctionComponent<any> = (props) => {
    const [page, setPage] = useState(1);
    const [perPage, perPageSelect] = useState(10);
    const [planets, setPlanets] = useState<Array<any>>([]);
    const [url, setUrl] = useState("");
    const signal = axios.CancelToken.source();

    const onSetPage = (_event: any, pageNumber: number) => {
        console.log(pageNumber);
        setUrl("https://swapi.co/api/planets/?page=" + pageNumber);
        setPage(pageNumber);
        props.history.push('/planets?page=' + pageNumber);
    }
    const onPerPageSelect = (_event: any, perPage: number) => perPageSelect(perPage);

    useEffect(() => {
        const pageNo = queryString.parse(props.location.search).page || 1;
        let url = "https://swapi.co/api/planets"
        if (pageNo) {
            url = "https://swapi.co/api/planets/?page=" + pageNo;
        }
        axios
            .get(url, {
                cancelToken: signal.token,
            })
            .then(({ data }) => {
                console.log(data);
                setPage(Number(pageNo));
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
            <Pagination
                itemCount={61}
                perPage={perPage}
                page={page}
                perPageOptions={[{ title: '10', value: 10 }]}
                onSetPage={onSetPage}
                variant={PaginationVariant.bottom}
                widgetId="pagination-options-menu-top"
                onPerPageSelect={onPerPageSelect}
            />
            <DataList aria-label="Planet List">
                {planets.map((planet: any, index: number) => <Planet planet={planet} key={index} />)}
            </DataList>
        </PageSection>
    );
}

export { PlanetList };