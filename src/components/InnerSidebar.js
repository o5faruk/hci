import React from 'react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Add from '@material-ui/icons/Add';

import Card from "./Card";

function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
}

function SimpleList(props) {
    return (
        <Card style={{ ...props.style, padding: 0 }} >
            <List component="nav">
                <ListItem button>
                    <ListItemIcon>
                        <Add />
                    </ListItemIcon>
                    <ListItemText primary={props.addText} />
                </ListItem>
            </List>
            <Divider />
            <List component="nav">
                {[1, 2, 3, 4, 5].map(num => {
                    return <ListItem button key={num}>
                        <ListItemText primary={props.itemText + " " + num} />
                    </ListItem>
                })}
            </List>
        </Card>
    );
}

export default SimpleList;