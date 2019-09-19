import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    DataListItem,
    DataListItemRow,
    DataListCell,
    DataListToggle,
    DataListContent,
    Text,
    DataListItemCells,
    TextContent,
    TextVariants,
    TextList,
    TextListItem
} from '@patternfly/react-core';

const Planet: React.FunctionComponent<any> = (props) => {
    let [expanded, setExpanded] = useState<boolean>(false);
    return (
        <DataListItem aria-labelledby="ex-item1" isExpanded={expanded}>
            <DataListItemRow>
                <DataListToggle
                    onClick={() => setExpanded(!expanded)}
                    isExpanded={expanded}
                    id="ex-toggle1"
                    aria-controls="ex-expand1"
                />
                <DataListItemCells
                    dataListCells={[
                        <DataListCell key="primary content">
                            <TextContent>
                                <Text component={TextVariants.h1}>{props.planet.name}</Text>
                            </TextContent>
                        </DataListCell>,
                        <DataListCell key="secondary content">
                            <span><b>Population : </b>{props.planet.population}</span>
                        </DataListCell>
                    ]}
                />
            </DataListItemRow>
            <DataListContent
                aria-label="Primary Content Details"
                id="ex-expand1"
                isHidden={!expanded}
            >
                <TextContent>
                    <Text component={TextVariants.h3}>The planet has been featured in following movies:</Text>
                    <TextList>
                        {props.planet.films.map((film:any, index:number) => (
                            <TextListItem key={index}>{film}</TextListItem>
                        ))}
                    </TextList>
                </TextContent>
                <br/>
                {props.planet.url && 
                    <Link to={"/planets/" + props.planet.url.split("/")[ props.planet.url.split("/").length - 2]}>Load More</Link>
                }
            </DataListContent>
        </DataListItem>
    );
}

export { Planet };