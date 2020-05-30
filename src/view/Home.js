import React, { useState } from 'react';
import { Icon, Label, Table, Input } from 'semantic-ui-react'

const DATA = [
    {
        "username": "richard",
        "email": "richard@sample.com",
        "age": 20
    },
    {
        "username": "michael",
        "email": "michael@sample.com",
        "age": 23
    },
    {
        "username": "diego",
        "email": "diego@sample.com",
        "age": 24
    },
    {
        "username": "rene",
        "email": "rene@sample.com",
        "age": 22
    },
    {
        "username": "agustin",
        "email": "agustin@sample.com",
        "age": 32
    }
];


const Home = () => {

    const [searchValue, setValue] = useState('');
    const [sortField, setSortField] = useState(null);
    const [sortDirection, setSortDirection] = useState('ascending');
    const HEADERS = ['Username', 'Email', 'Age'];

    const filteredData = searchValue !== '' ? 
    DATA.filter(user => user.username.includes(searchValue) || user.email.includes(searchValue) || user.age.toString().includes(searchValue))
    :
    [...DATA];

    const switchSortDirection = () => {
        sortDirection === 'ascending' ?
            setSortDirection('descending')
            :
            setSortDirection('ascending')
    }

    const sortedData = () => {
        let sortedProducts = [...filteredData];
        if (sortField !== null) {
            sortedProducts.sort((a, b) => {
                if (a[sortField] < b[sortField]) {
                    return sortDirection === 'ascending' ? -1 : 1;
                }
                if (a[sortField] > b[sortField]) {
                    return sortDirection === 'ascending' ? 1 : -1;
                }
                return 0;
            });
        }
        return sortedProducts;
    }

    return <>
        <Input placeholder='Search' value={searchValue} name='search' onChange={(e) => {
            setValue(e.target.value);
        }} />
        <Table celled>
            <Table.Header>
                <Table.Row>
                    {
                        HEADERS.map(header => <Table.HeaderCell key={header} onClick={() => {
                            setSortField(header.toLowerCase());
                            switchSortDirection();
                        }}>
                            {header}
                            {
                                sortField === header.toLowerCase() && 
                                (sortDirection === 'ascending'?
                                <Icon name='angle up' />
                                :
                                <Icon name='angle down' />)
                            }
                        </Table.HeaderCell>)
                    }
                </Table.Row>
            </Table.Header>

            <Table.Body>
                {
                    sortedData().map(user => <Table.Row key={user.email}>
                        <Table.Cell>
                            <Label ribbon>{user.username}</Label>
                        </Table.Cell>
                        <Table.Cell>{user.email}</Table.Cell>
                        <Table.Cell>{user.age}</Table.Cell>
                    </Table.Row>)
                }
            </Table.Body>
        </Table>
    </>
}

export default Home;