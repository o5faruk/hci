import React, { useState } from "react";
import { AccountCircleOutlined, CheckCircleOutlined } from "@material-ui/icons";
import Table from "../../components/Table/Table";
import moment from "moment";

const Customers = props => {

    const headers = [
        {
            name: "Invoice #",
            selector: "first_name",
            sortable: true
        },
        {
            name: "Customer",
            selector: "last_name",
            sortable: true
        },
        {
            name: "Date",
            selector: "createdAt",
            sortable: true,
            format: data => moment(data.createdAt).format("YYYY/MM/DD")
        },
        {
            name: "Status",
            selector: "email",
            sortable: true
        },
        {
            name: "Total",
            selector: "birthday",
            sortable: true,
            format: data => moment(data.birthday).format("YYYY/MM/DD")
        },
    ];

    const actions = [
    ]

    return (
        <div>
            <Table
                data={[{
                    first_name: "123",
                    last_name: "Alibasic",
                    createdAt: moment(),
                    email: "paid",
                    birthday: 10
                }]}
                headers={headers}
                create={() => { }}
                actions={actions}
                delete={() => { }}
                title="Invoices"
                defaultSortField="first_name"
            />
        </div>
    );
};

export default Customers
