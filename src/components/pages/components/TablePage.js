import React, { useState } from 'react';

/* Styles */
import { Box, Row, Container, Table, BoxTitle, Checkbox, Badge, Button } from './../../styles';
/* Styles */

const TablePage = () => {
    const [users, setUsers] = useState([
        {
            id: 0,
            name: 'John Doe',
            email: 'john.doe@gmail.com',
            active: true,
            isSelected : false
        },
        {
            id: 1,
            name: 'Sarah Johnson',
            email: 'sarah.johnson@gmail.com',
            active: false,
            isSelected : false
        }
    ]);

    const [selectAll, setSelectAll] = useState(false);

    /* Select All Users */
    const selectAllUsers = () => {
        //set select all to true
        setSelectAll(!selectAll);

        //update users
        users.map(user => {
            user.isSelected = !selectAll;
            return user;
        });
    }

    const setSelectedUser = (userId) => {
        //update current user
        let newUsers = users.map(user => {
            if(user.id === userId){
                user.isSelected = !user.isSelected;
            }

            return user;
        });
        setUsers(newUsers);
    }

    return(
        <div>
            <div className="title">
                Tables
                <div className="sub-title">
                    <i className="fa fa-info-circle"></i> tables example and styling.
                </div>
            </div>

            <div className="body">
                <Container>
                    <Row>
                        <Box sm={12}>
                            <BoxTitle icon="fa fa-users" label="User Account"/>
                            <Table>
                                <thead>
                                    <tr>
                                        <th>
                                            <Checkbox isChecked={selectAll} handleChange={selectAllUsers}/>
                                        </th>
                                        <th>
                                            Name
                                        </th>
                                        <th>
                                            Email
                                        </th>
                                        <th>
                                            Status
                                        </th>
                                        <th>
                                            Actions
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    { users.map((user, index) =>(
                                        <tr>
                                            <td>
                                                <Checkbox isChecked={user.isSelected} handleChange={setSelectedUser.bind(this, user.id)}/>
                                            </td>
                                            <td>
                                                { user.name }
                                            </td>
                                            <td>
                                                { user.email }
                                            </td>
                                            <td>
                                                <Badge 
                                                    message={user.active ? 'Active' : 'In-Active'}
                                                    type={user.active ? 'success' : 'danger'}/>
                                            </td>
                                            <td>
                                                <Button isRounded={true} icon="fa fa-cog" className="m-r-5"/>
                                                <Button isRounded={true} color="danger" icon="fa fa-trash"/>
                                            </td>
                                        </tr>
                                    )) }
                                </tbody>
                            </Table>
                        </Box>
                    </Row>
                    <Row>
                        <Box sm={12} md={6} lg={6}>
                            <BoxTitle label="Default Table"/>
                            <Table>
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Email</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>John Doe</td>
                                        <td>john.doe@gmail.com</td>
                                    </tr>
                                    <tr>
                                        <td>Sarah Johnson</td>
                                        <td>sarah.johnson@gmail.com</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Box>
                        <Box sm={12} md={6} lg={6}>
                            <BoxTitle label="Bordered Table"/>
                            <Table type="bordered">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Email</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>John Doe</td>
                                        <td>john.doe@gmail.com</td>
                                    </tr>
                                    <tr>
                                        <td>Sarah Johnson</td>
                                        <td>sarah.johnson@gmail.com</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Box>
                    </Row>
                    <Row>
                        <Box sm={12} md={6} lg={6}>
                            <BoxTitle label="Striped Table"/>
                            <Table type="striped">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Email</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>John Doe</td>
                                        <td>john.doe@gmail.com</td>
                                    </tr>
                                    <tr>
                                        <td>Sarah Johnson</td>
                                        <td>sarah.johnson@gmail.com</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Box>
                        <Box sm={12} md={6} lg={6}>
                            <BoxTitle label="Dark Table"/>
                            <Table type="dark">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Email</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>John Doe</td>
                                        <td>john.doe@gmail.com</td>
                                    </tr>
                                    <tr>
                                        <td>Sarah Johnson</td>
                                        <td>sarah.johnson@gmail.com</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Box>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default TablePage;