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
                    <Tab label="Services" />
                    <Tab label="Off Services" />
                    <Tab label="Clock Time" />
                </Tabs>
            </AppBar>
            {value === 0 && <TabContainer>
                <TextField
                    fullWidth
                    id="standard-name"
                    label="Staff Name"
                    margin="normal"
                />
                <TextField
                    fullWidth
                    id="standard-name"
                    label="Description"
                    margin="normal"
                />
                <TextField
                    fullWidth
                    id="standard-name"
                    label="Email"
                    margin="normal"
                />
                <TextField
                    fullWidth
                    id="standard-name"
                    type="number"
                    label="Pay rate"
                    margin="normal"
                />
                
            </TabContainer>}
            {value === 1 && <TabContainer>Services</TabContainer>}
            {value === 2 && <TabContainer>Off time</TabContainer>}
            {value === 3 && <TabContainer>Clock time</TabContainer>}
        </div>
    );
}

export default SimpleTabs;