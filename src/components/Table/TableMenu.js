import React, { useState } from "react";
import {
  Menu,
  MenuItem,
  Tooltip,
  IconButton,
  withStyles
} from "@material-ui/core";
import { MoreVert, EditOutlined, DeleteOutlined } from "@material-ui/icons";

const styles = theme => ({
  actionIcon: {
    marginRight: theme.spacing.unit
  }
});

const TableMenu = props => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const { classes, onDeleteRow, onEditRow, row } = props;

  return (
    <div>
      <Tooltip enterDelay={500} title={"More Actions"}>
        <IconButton
          aria-label="More"
          aria-owns={anchorEl ? "extra-menu" : null}
          aria-haspopup="true"
          onClick={handleClick}
        >
          <MoreVert />
        </IconButton>
      </Tooltip>
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        {props.actions && props.actions.map(action => {
          return <MenuItem key={action.key} onClick={() => action.onClick(row)}>
            <action.icon color={action.color || "inherit"} className={classes.actionIcon} />
            {action.text}
          </MenuItem>
        })}
        {/* <MenuItem onClick={() => onEditRow(row)}>
          <EditOutlined color="primary" className={classes.actionIcon} />
          {" Edit"}
        </MenuItem> */}
        <MenuItem onClick={() => onDeleteRow(row)}>
          <DeleteOutlined color="secondary" className={classes.actionIcon} />
          {" Delete"}
        </MenuItem>
      </Menu>
    </div>
  );
};

export default withStyles(styles)(TableMenu);
