import React from 'react';
import { Breadcrumb, BreadcrumbItem, Container, Row, Col, Button, Box, Badge, Form, Input, Table, Checkbox } from '../styles';

const MailingPage = () => {
    const mails = [
        {
            isSelected : false,
            avatar: '/images/avatar.png',
            name: 'John Doe',
            subject: 'local environment server fix',
            message : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        },
        {
            isSelected : false,
            avatar: '/images/slider1.jpg',
            name: 'Sarah Johnson',
            subject: 'Meeting Documents',
            message : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        }
    ];

    return(
        <div>
            <div className="title">
                Mailing
                <Breadcrumb>
                    <BreadcrumbItem>
                        <a href="#!">Page</a>
                    </BreadcrumbItem>
                    <BreadcrumbItem isActive={true}>
                        Mailing
                    </BreadcrumbItem>
                </Breadcrumb>
            </div>
            <br/>
            <Container>
                <Row>
                    <Box md={4} lg={3}>
                        <Button icon="fa fa-pencil" label="Compose" isFull={true}/>
                        <ul className="mailing-menu">
                            <li>
                                <a href="#!">
                                    <i className="fa fa-envelope-o"></i>Inbox
                                    <Badge size="small" type="primary" className="menu-badge" message={3}/>
                                </a>
                            </li>
                            <li>
                                <a href="#!"><i className="fa fa-paper-plane-o"></i>Sent</a>
                            </li>
                            <li>
                                <a href="#!"><i className="fa fa-pencil"></i>Draft</a>
                            </li>
                            <li>
                                <a href="#!">
                                    <i className="fa fa-info-circle"></i>Spam
                                    <Badge size="small" className="menu-badge" message={12}/>
                                </a>
                            </li>
                            <li>
                                <a href="#!">
                                    <i className="fa fa-trash"></i>Trash
                                    <Badge size="small" type="danger" className="menu-badge" message={4}/>
                                </a>
                            </li>
                        </ul>
                    </Box>
                    <Col md={8} lg={9}>
                        <Form>
                            <Input icon="fa fa-search" placeholder="Search Mail"/>
                        </Form>
                        <Table isResponsive={true} className="mail-table">
                            <tbody>
                            { mails.map((mail, index) => (
                                <tr key={index}>
                                    <td className="checkbox">
                                        <Checkbox 
                                        handleChange={() => {}}
                                        isChecked={mail.isSelected}/>
                                    </td>
                                    <td className="name">{ mail.name }</td>
                                    <td className="preview-text">
                                        <span className="subject">
                                            { mail.subject }
                                        </span>
                                        -
                                        <span className="message">
                                            { mail.message }
                                        </span>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default MailingPage;