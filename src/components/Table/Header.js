import React from "react";

import {
  TableHead,
  TableRow,
  TableCell,
  Checkbox,
  Tooltip,
  TableSortLabel
} from "@material-ui/core";

const Header = props => {
  const createSortHandler = property => event => {
    props.onRequestSort(event, property);
  };
  const { onSelectAllClick, order, orderBy, numSelected, rowCount } = props;

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={numSelected === rowCount}
            onChange={onSelectAllClick}
          />
        </TableCell>
        {props.rows.map(row => (
          <TableCell
            key={row.id}
            align={row.numeric ? "right" : "left"}
            padding={row.disablePadding ? "none" : "default"}
            sortDirection={orderBy === row.id ? order : false}
          >
            <Tooltip
              title="Sort"
              placement={row.numeric ? "bottom-end" : "bottom-start"}
              enterDelay={300}
            >
              <TableSortLabel
                active={orderBy === row.id}
                direction={order}
                onClick={createSortHandler(row.id)}
              >
                {row.label}
              </TableSortLabel>
            </Tooltip>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default Header;
