import React from "react";
import { Pagination, PaginationVariant } from '@patternfly/react-core';

const PlanetPagination: React.FunctionComponent<any> = (props) => {
  return (
    <Pagination
      itemCount={61}
      perPage={props.perPage}
      page={props.page}
      perPageOptions={[{ title: '10', value: 10 }]}
      onSetPage={props.onSetPage}
      variant={PaginationVariant.bottom}
      widgetId="pagination-options-menu-top"
      onPerPageSelect={props.onPerPageSelect}
    />
  );
}

export { PlanetPagination };