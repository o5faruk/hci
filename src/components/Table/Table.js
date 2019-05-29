import React, { useState } from "react";
import { Card, Button, Checkbox } from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
import {
  ArrowDownward,
  IndeterminateCheckBox,
  CheckBoxOutlineBlank,
  Add,
  Delete
} from "@material-ui/icons";
import DataTable from "react-data-table-component";
import TableMenu from "./TableMenu";
const styles = theme => ({
  card: {
    height: "100%",
    marginTop: theme.spacing.unit * 3
  }
});

const Table = props => {
  const [selectedRows, setSelectedRows] = useState([]);
  const [toggleCleared, setToggleCleared] = useState(false);

  const { data, title, classes, create, headers, defaultSortField } = props;

  const handleChange = newState => {
    setSelectedRows(newState.selectedRows);
  };

  const handleRowClicked = row => {
    // console.log(`${row.name} was clicked!`);
  };

  const deleteAll = () => {
    // console.log(selectedRows);
  };

  const deleteOne = row => {
    props.delete(row);
  };

  const editOne = row => {
    props.edit(row)
  };

  const actions = [
    <Button key="create" variant="text" color="primary" onClick={create}>
      <Add /> Create new
    </Button>
  ];

  const contextActions = [
    <Button key="delete" onClick={deleteAll} style={{ color: "red" }}>
      <Delete color="secondary" />
      delete
    </Button>
  ];

  const columns = [
    ...headers,
    {
      name: "Actions",
      cell: row => <TableMenu row={row} onDeleteRow={deleteOne} onEditRow={editOne} actions={props.actions} />,
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
      width: "56px"
    }
  ];

  return (
    <Card className={classes.card}>
      <DataTable
        title={title}
        columns={columns}
        data={data}
        selectableRows
        highlightOnHover
        defaultSortField={defaultSortField}
        actions={actions}
        contextActions={contextActions}
        sortIcon={<ArrowDownward />}
        selectableRowsComponent={Checkbox}
        selectableRowsComponentProps={{
          uncheckedicon: isIndeterminate =>
            isIndeterminate ? (
              <IndeterminateCheckBox />
            ) : (
                <CheckBoxOutlineBlank />
              )
        }}
        onTableUpdate={handleChange}
        clearSelectedRows={toggleCleared}
        onRowClicked={handleRowClicked}
        pagination
      />
    </Card>
  );
};

export default withStyles(styles)(Table);
