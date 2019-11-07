import React, { useState } from 'react';

//libs
import { toast } from 'react-toastify';

//helper
import stringHelper from './../../helpers/stringHelper.js';

//styles
import { 
    Breadcrumb, 
    BreadcrumbItem, 
    Container, 
    Row, 
    Col, 
    Button, 
    Box, 
    Badge, 
    Form, 
    Input, 
    Table, 
    Checkbox, H4 } from '../styles';

const MailingPage = () => {
    //variables
    const MAX_MESSAGE_LENGTH = 50;

    //mails
    const defaultMails = [
        {
            isStarred : true,
            isRead : false,
            isSelected : false,
            date: '14:20',
            name: 'John Doe',
            subject: 'local environment server fix',
            message : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        },
        {
            isStarred : false,
            isRead : false,
            isSelected : false,
            date: '10:06',
            name: 'Sarah Johnson',
            subject: 'Meeting Documents',
            message : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        },
        {
            isStarred : false,
            isRead : true,
            isSelected : false,
            date : "4 Nov",
            name: 'Firhan',
            subject: 'Software Documentation Update v2',
            message : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        },
        {
            isStarred : false,
            isRead : false,
            isSelected : false,
            date : "5 Nov",
            name: 'Sarah Johnson',
            subject: 'Meeting Documents',
            message : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        },
    ];

    /* Hooks */
    const [mails, setMails] = useState(defaultMails);
    const [selectAllMail, setSelectAllMail] = useState(false);
    const [keyword, setKeyword] = useState('');
    /* Hooks */

    /* select mail */
    const selectMail = (currentMail) => {
        //get mail
        let newMails = mails.map(mail => {
            //create new obj
            let newMail = Object.assign({}, mail);
            //check if current mail
            if(mail === currentMail){
                //set selected
                newMail.isSelected = !mail.isSelected;
            }

            //return new obj
            return newMail;
        });

        //set hoks
        setMails(newMails)
    }

    /* select all mails */
    const selectAllMails = () => {
        //set hooks
        setSelectAllMail(!selectAllMail);
        
        //loop mails
        let newMails = mails.map(mail => {
            //create new obj
            let newMail = Object.assign({}, mail);

            //set selected
            newMail.isSelected = !selectAllMail;

            //return new obj
            return newMail;
        });

        //set hooks
        setMails(newMails);
    }

    /* starring mail */
    const starMail = (selectedMail) => {
        //get current mail
        let currentMail = mails.filter(mail => (mail === selectedMail));
        if(currentMail.length > 0){
            let newMail = currentMail[0];
            //change star
            newMail.isStarred = !newMail.isStarred;

            //set mail
            setMails(
                Object.assign([], mails, newMail)
            );

            //show toast
            let toastMessage = !newMail.isStarred ? "remove star mail from: " : "star mail from: ";
            toast(toastMessage + selectedMail.name);
        }
    }

    /* delete selected mails */
    const deleteSelectedMails = () => {
        //get un selected mails
        const unSelectedMails = mails.filter(mail => (!mail.isSelected));

        //get selected
        const selectedMails = mails.filter(mail => (mail.isSelected));

        //check if there is selected mails
        if(selectedMails.length > 0){
            //set hooks
            setMails(unSelectedMails);

            //show toast
            toast(selectedMails.length + " mails deleted");
        }
    }

    /* star selected mails */
    const starSelectedMails = () => {
        //get selected
        const selectedMails = mails.filter(mail => (mail.isSelected));

        //total mail starred
        let totalMailStarred = 0;

        //check if there is selected mails
        if(selectedMails.length > 0){
            let newMails = mails.map(mail => {
                //check if mail include in selected mails
                if(selectedMails.includes(mail)){
                    //only increment when mail are not starred before
                    totalMailStarred += (!mail.isStarred ? 1 : 0);

                    //return new object with is starred true
                    return Object.assign({}, mail, {
                        isStarred : true
                    });
                }else{
                    //return default
                    return mail;
                }
            });

            //set hooks
            setMails(
                Object.assign([], mails, newMails)
            );

            //show toast
            const toastMessage = totalMailStarred > 0 ? (totalMailStarred+ " mails starred") : "all mails already starred";
            toast(toastMessage);
        }
    }

    /* search mail by keyword */
    const searchMails = () => {
        let filteredMails = [...defaultMails];
        //get mails that contains keyword
        const mailsContainsKeyword = filteredMails.filter(mail => (
            mail.name.toLowerCase().includes(keyword.toLowerCase())
            ||
            mail.subject.toLowerCase().includes(keyword.toLowerCase())
            ))

        //set hooks
        setMails(mailsContainsKeyword);
    }

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
                                    <Badge size="small" type="primary" className="menu-badge" message={
                                        //unread message
                                        mails.filter(mail => (!mail.isRead)).length
                                    }/>
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
                        <Form handleSubmit={(e) => e.preventDefault()}>
                            <Input 
                                icon="fa fa-search" 
                                value={keyword} 
                                handleChange={(e) => setKeyword(e.target.value)} 
                                handleKeyPress={(e) => {
                                    //check if enter
                                    if(e.key === 'Enter'){
                                        //search
                                        searchMails();
                                    }
                                }}
                                placeholder="Search Mail"/>
                        </Form>
                        <Table isResponsive={true} className="mail-table">
                            {/* header mail table */}
                            <thead>
                                <tr>
                                    <td>
                                        <Checkbox 
                                        handleChange={ selectAllMails }
                                        isChecked={ selectAllMail }/>
                                    </td>
                                    <td colSpan="5" align="right">
                                        <Button 
                                            handleClick={ deleteSelectedMails }
                                            className="m-l-10" 
                                            size="small" 
                                            icon="fa fa-trash"/>
                                        <Button 
                                            handleClick={ starSelectedMails }
                                            className="m-l-10" 
                                            size="small" 
                                            icon="fa fa-star"/>
                                        <Button className="m-l-10" size="small" icon="fa fa-file-o"/>
                                    </td>
                                </tr>
                            </thead>

                            {/* mail table rows */}
                            <tbody>
                            { mails.map((mail, index) => (
                                <tr key={index} className={ mail.isRead ? 'read' : 'unread' }>
                                    <td className="checkbox">
                                        <Checkbox 
                                        handleChange={ selectMail.bind(this, mail) }
                                        isChecked={mail.isSelected}/>
                                    </td>
                                    <td className="star">
                                        {/* starred mail */}
                                        <i className={"fa fa-star" + (!mail.isStarred ? "-o" : "")} onClick={ starMail.bind(this, mail) }></i>
                                    </td>
                                    <td className="name">{ mail.name }</td>
                                    <td className="subject">{ mail.subject }</td>
                                    <td className="message">
                                        { stringHelper.cutString(mail.message, MAX_MESSAGE_LENGTH) }
                                    </td>
                                    <td className="date">
                                        { mail.date }
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </Table>
                        <div className="" align="right">
                            <span className="m-l-10">
                                <H4 style={{
                                    display: 'inherit'
                                }}>10 from 120</H4>
                            </span>
                            <Button 
                                className="m-l-10"
                                size="small"
                                icon="fa fa-chevron-left" 
                                disabled={true}/>
                            <Button 
                                className="m-l-10"
                                size="small"
                                icon="fa fa-chevron-right" 
                                disabled={false}/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default MailingPage;