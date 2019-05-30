import React, { Component } from 'react';
import { Grid, TextField, Button } from "@material-ui/core";

import Card from "../../components/Card";

class Services extends Component {
    render() {
        return (
            <Grid container>
                <Card style={{ height: "80vh" }}>
                    <TextField
                        fullWidth
                        id="standard-name"
                        label="To"
                        margin="normal"
                    />
                    <TextField
                        fullWidth
                        id="standard-name"
                        label="Subject"
                        margin="normal"
                    />
                    <TextField
                        fullWidth
                        id="standard-name"
                        label="Body"
                        variant="outlined"
                        multiline
                        rowsMax="4"
                        margin="normal"
                    />
                    <Button color="primary" className="float-right">SEND</Button>
                </Card>
            </Grid>
        );
    }
}

export default Services;