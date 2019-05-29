import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

import { TextField } from "@material-ui/core"

function TabContainer(props) {
    return (
        <Typography component="div" style={{ padding: 8 * 3 }}>
            {props.children}
        </Typography>
    );
}


function SimpleTabs() {
    const [value, setValue] = React.useState(0);

    function handleChange(event, newValue) {
        setValue(newValue);
    }

    return (
        <div>
            <AppBar position="static">
                <Tabs value={value} onChange={handleChange}>
                    <Tab label="Details" />
                    <Tab label="Pricing" />
                    <Tab label="Add Ons" />
                    <Tab label="Frequency" />
                </Tabs>
            </AppBar>
            {value === 0 && <TabContainer>
                <TextField
                    fullWidth
                    id="standard-name"
                    label="Service Name"
                    margin="normal"
                />
                <TextField
                    fullWidth
                    id="standard-name"
                    label="Service Description"
                    margin="normal"
                />
                
            </TabContainer>}
            {value === 1 && <TabContainer>Pricing</TabContainer>}
            {value === 2 && <TabContainer>Add Ons</TabContainer>}
            {value === 3 && <TabContainer>Frequency</TabContainer>}
        </div>
    );
}

export default SimpleTabs;