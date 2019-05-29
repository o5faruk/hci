import React, { useState } from "react";
import { AccountCircleOutlined, CheckCircleOutlined } from "@material-ui/icons";
import Table from "../../components/Table/Table";
import moment from "moment";

const Customers = props => {

    const headers = [
        {
            name: "First Name",
            selector: "first_name",
            sortable: true
        },
        {
            name: "Last Name",
            selector: "last_name",
            sortable: true
        },
        {
            name: "customer Since",
            selector: "createdAt",
            sortable: true,
            format: data => moment(data.createdAt).format("YYYY/MM/DD")
        },
        {
            name: "Email",
            selector: "email",
            sortable: true
        },
        {
            name: "Birthday",
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
                    first_name: "Faruk",
                    last_name: "Alibasic",
                    createdAt: moment(),
                    email: "faruk.alibasic@gmail.com",
                    birthday: moment()
                }]}
                headers={headers}
                create={() => { }}
                actions={actions}
                delete={() => { }}
                title="Customers"
                defaultSortField="first_name"
            />
        </div>
    );
};

export default Customers
