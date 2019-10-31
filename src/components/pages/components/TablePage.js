import React, { useState, useEffect } from 'react';

/* Styles */
import { Box, Row, Container, Col, Table, BoxTitle, Checkbox, Badge, Button, Dropdown, DropdownItem, Collapse, Form, Input, Select } from './../../styles';
/* Styles */

const TablePage = () => {
    //variables
    const originalUsers = [
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
        },
        {
            id: 2,
            name: 'Firhan Faisal',
            email: 'firhan.faisal1995@gmail.com',
            active: true,
            isSelected : false
        },
    ]

    /* Hooks */
    const [users, setUsers] = useState(originalUsers);
    const [selectAll, setSelectAll] = useState(false);
    const [selectedActionsDisabled, setSelectedActionsDisabled] = useState(true);
    const [showCollapse, setShowCollapse] = useState(false);
    const [filterStatus, setFilterStatus] = useState(null);
    const [keyword, setKeyword] = useState('');

    useEffect(() => {
        //filter users function
        const filterUser = () => {
            //filter users
            let filteredUsers = [...originalUsers].filter(user => (
                //status filter
                (filterStatus !== null ? (user.active === filterStatus) : true)
                &&
                //keyword filter
                (
                    user.name.toLowerCase().includes(keyword.toLowerCase()) 
                    || 
                    user.email.toLowerCase().includes(keyword.toLowerCase())
                )
            ));
    
            //set users
            setUsers(filteredUsers);
        }

        //filter users
        filterUser();
    }, [keyword, filterStatus])
    /* Hooks */

    /* Select All Users */
    const selectAllUsers = () => {
        //set select all to true
        setSelectAll(!selectAll);

        //update users
        users.map(user => {
            user.isSelected = !selectAll;
            return user;
        });

        //set selected actions
        setSelectedActionButtons();
    }

    const setSelectedUser = (userId) => {
        //update current user
        let newUsers = users.map(user => {
            if(user.id === userId){
                user.isSelected = !user.isSelected;
            }

            return user;
        });

        //set selected actions
        setSelectedActionButtons();

        //call hooks
        setUsers(newUsers);
    }

    const setSelectedActionButtons = () => {
        //check if at least 1 selected
        if(users.filter(user => (user.isSelected)).length > 0){
            //set actions button to enable
            setSelectedActionsDisabled(false);
        }else{
            //set actions button to disable
            setSelectedActionsDisabled(true);
        }
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
                            <Button 
                                handleClick={() => {
                                    setShowCollapse(!showCollapse)
                                }}
                                className="m-b-20"
                                label="Filter" 
                                icon="fa fa-filter"/>
                            <Collapse label="Filter" isOpen={showCollapse}>
                                <div className="card card-body">
                                    <Form>
                                        <Container>
                                            <Row>
                                                <Col md={4} lg={3}>
                                                    <BoxTitle label="Filter by keyword"/>
                                                    <Input 
                                                        value={keyword}
                                                        handleChange={(e) => setKeyword(e.target.value)}
                                                        placeholder="Search..."
                                                        />
                                                </Col>
                                                <Col md={3} lg={2}>
                                                    <BoxTitle label="Filter by status"/>
                                                    <Select 
                                                        value={filterStatus} 
                                                        handleChange={(e) => { setFilterStatus(e.target.value === '' ? null : (e.target.value==='true' ? true : false))} } 
                                                        placeholder="Select Status">

                                                        <option value="">All</option>
                                                        <option value={true}>Active</option>
                                                        <option value={false}>In-Active</option>

                                                    </Select>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </Form>
                                </div>
                            </Collapse>
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
                            <Dropdown disabled={selectedActionsDisabled} label="Actions">
                                <DropdownItem>Delete Selected Users</DropdownItem>
                                <DropdownItem>Archive Selected Users</DropdownItem>
                            </Dropdown>
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