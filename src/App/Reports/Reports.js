import React, { Component } from 'react';
import InnerSidebar from "../../components/InnerSidebar"
import Table from "../../components/Table/Table";
import { Grid, TextField } from "@material-ui/core";

import Card from "../../components/Card";

import moment from 'moment';

const headers = [
    {
        name: "Name",
        selector: "first_name",
        sortable: true
    },
    {
        name: "Date",
        selector: "last_name",
        sortable: true,
        format: data => moment(data.createdAt).format("YYYY/MM/DD")
    },
    {
        name: "Worked hours",
        selector: "createdAt",
        sortable: true,
    },
    {
        name: "Hourly Pay",
        selector: "email",
        sortable: true
    },
    {
        name: "Total pay",
        selector: "birthday",
        sortable: true,
    },
];

const actions = [];

class Services extends Component {
    render() {
        return (
            <Grid container>
                <Grid md={3}>
                    <Card style={{ marginTop: "24px" }}>
                        <TextField label="Start Time" className="w-100" />
                        <TextField label="End Time" className="w-100" />
                    </Card>
                </Grid>
                <Grid md={9}>
                    <Table
                        data={[{
                            first_name: "Faruk",
                            last_name: moment(),
                            createdAt: 20,
                            email: "15$",
                            birthday: 600
                        }]}
                        headers={headers}
                        create={() => { }}
                        actions={actions}
                        delete={() => { }}
                        title="Reports"
                        defaultSortField="first_name"
                    />
                </Grid>

            </Grid>
        );
    }
}

export default Services;