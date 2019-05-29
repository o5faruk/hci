import React, { Component } from 'react';
import InnerSidebar from "../../components/InnerSidebar"
import { Grid } from "@material-ui/core";

import Card from "../../components/Card";
import Tabs from "./Tabs";

class Services extends Component {
    render() {
        return (
            <Grid container>
                <Grid md={3}>
                    <InnerSidebar addText="Create Service" itemText="Service" style={{ backgroundColor: "white", height: "80vh" }} />
                </Grid>
                <Grid md={9}>
                    <Card style={{ height: "80vh" }}>
                        <Tabs />
                    </Card>
                </Grid>

            </Grid>
        );
    }
}

export default Services;