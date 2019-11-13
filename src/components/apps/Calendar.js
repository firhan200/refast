import React, { useState, Fragment } from 'react';

//libs
import { Calendar as MyCalendar, momentLocalizer } from 'react-big-calendar';
import moment, { isMoment } from 'moment';
import Datetime from 'react-datetime';

/* components */
import { 
    Breadcrumb, 
    BreadcrumbItem, 
    Container, 
    Row,
    Modal,
    Col,
    Form,
    FormGroup,
    Input,
    Textarea,
    Button} from './../styles';
import { toast } from 'react-toastify';

//localizer
const localizer = momentLocalizer(moment)

const Calendar = () => {
    /* event example */
    const myEventsList = [
        {
            id: 0,
            title: 'Meeting with Client',
            allDay: true,
            start: moment().utc(0).set({hour:0,minute:0,second:0,millisecond:0}).hour(10),
            end: moment().utc(0).set({hour:0,minute:0,second:0,millisecond:0}).hour(12),
            resource : {
                description: 'meeting at restaurant to discuss product management.'
            }
        },
        {
            id: 2,
            title: 'Lunch with Sarah',
            allDay: true,
            start: moment().utc(0).set({hour:0,minute:0,second:0,millisecond:0}).add(1, 'day').hour(12),
            end: moment().utc(0).set({hour:0,minute:0,second:0,millisecond:0}).add(1, 'day').hour(13),
            resource : {
                description: 'booking restaurant for 2 people at benihana.'
            }
        },
        {
            id: 3,
            title: 'Tech Seminar',
            allDay: true,
            start: moment().utc(0).set({hour:0,minute:0,second:0,millisecond:0}).add(-5, 'day'),
            end: moment().utc(0).set({hour:0,minute:0,second:0,millisecond:0}).add(-2, 'day'),
            resource : {
                description: '3 days tech seminar at Company.'
            }
        }
    ]

    /* hooks */
    //event hooks
    const [events, setEvents] = useState(myEventsList);

    //form hooks
    const [title, setTitle] = useState({
        value: '',
        isValid : null,
        message: ''
    });
    const [description, setDescription] = useState({
        value: '',
        isValid : null,
        message: ''
    })
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    
    //modals hooks
    const [showEventModal, setShowEventModal] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [showCreateEventModal, setShowCreateEventModal] = useState(false);
    /* hooks */

    //methods
    const createEvent = (e) => {
        //set start date and end date
        setStartDate(e.start);
        setEndDate(e.end);

        //show modal
        setShowCreateEventModal(true);
    }

    //show event details
    const eventDetails = (e) => {
        //set selected event
        setSelectedEvent(e);

        //show modal
        setShowEventModal(true);
    }

    //add event
    const addEvent = (e) => {
        e.preventDefault();

        //check errors
        if(validation().length < 1){
            //no errors
            //update events
            setEvents([...events, {
                id : events.length + 1,
                title : title.value,
                start: isMoment(startDate) ? startDate._d : startDate,
                end:  isMoment(endDate) ? endDate._d : endDate,
                allDay : false,
                resource : {
                    description: description.value
                }
            }]);

            //reset form
            resetForm();

            //close modal
            setShowCreateEventModal(false);

            //show toast
            toast(title.value + " event has been created.");
        }
    }

    //remove event
    const removeEvent = (selectedEvent) => {
        //remove event with filter
        let newEvents = events.filter(event => (event.id !== selectedEvent.id));
        //set hooks
        setEvents(newEvents);

        //close modal
        setShowEventModal(false);

        //show toast
        toast(selectedEvent.title + " removed.");
    }

    //reset form
    const resetForm = () => {
        //reset title
        setTitle({
            value: '',
            isValid : null,
            message : ''
        });
        //reset description
        setDescription({
            value: '',
            isValid : null,
            message : ''
        });
        //reset start and end date
        setStartDate(new Date());
        setEndDate(new Date());
    }

    //add event validation
    const validation = () => {
        let errors = [];

        //title validation
        if(title.value.length < 1){
            errors.push(true);
            setTitle({ value: '', isValid : false, message: '*title is required' })
        }

        //description validation
        if(description.value.length < 1){
            errors.push(true);
            setDescription({ value: '', isValid : false, message: '*description is required' })
        }

        return errors;
    }
    //methods

    return(
        
        <div>
            {/* page title */}
            <div className="title">
                Calendar Application

                {/* breadcrumb info */}
                <Breadcrumb>
                    <BreadcrumbItem>
                        <a href="#!">App</a>
                    </BreadcrumbItem>
                    <BreadcrumbItem isActive={true}>
                        Calendar
                    </BreadcrumbItem>
                </Breadcrumb>
            </div>
            <br/>
            <Container>
                <Row>
                    <Col sm={12} md={12}>
                    <MyCalendar
                        localizer={localizer}
                        events={events}
                        selectable={true} //selectable slot to create event
                        onSelectEvent={ eventDetails } //on click event
                        onSelectSlot={ createEvent } //on select slow date
                        style={{height: 600}} //calendar height
                        />
                    </Col>
                </Row>
            </Container>

            {/* event details modal */}
            <Modal 
                title={(
                    <span><i className="fa fa-calendar"></i>&nbsp; Event</span>
                )} 
                handleButtonCloseClick={() => setShowEventModal(false)}
                isShow={showEventModal}>
                
                <EventDetails removeEvent={removeEvent} event={selectedEvent}/>
            </Modal>

            {/* create event modal */}
            <Modal 
                title={(
                    <span><i className="fa fa-pencil-square-o"></i>&nbsp; Create Event</span>
                )} 
                handleButtonCloseClick={() => {
                    //reset form
                    resetForm();

                    //close modal
                    setShowCreateEventModal(false)}
                }
                isShow={showCreateEventModal}>
                    
                <Form handleSubmit={ addEvent }>
                    <FormGroup>
                        Event Title
                        <Input 
                            value={ title.value }
                            isValid={ title.isValid }
                            message={ title.message }
                            handleChange={(e) => setTitle({ value : e.target.value })}
                            maxLength={50} 
                            placeholder="Title"/>
                    </FormGroup>
                    <FormGroup>
                        Event Description
                        <Textarea 
                            value={ description.value }
                            isValid={ description.isValid }
                            message={ description.message }
                            handleChange={(e) => setDescription({ value : e.target.value })}
                            maxLength={150} 
                            placeholder="Description"/>
                    </FormGroup>
                    <FormGroup>
                        <Row>
                            <Col md={6}>
                                Start Date
                                <Datetime 
                                    onChange={(e) => setStartDate(e)}
                                    value={ startDate }/>
                            </Col>
                            <Col md={6}>
                                End Date
                                <Datetime 
                                    onChange={(e) => setEndDate(e)}
                                    value={ endDate }/>
                            </Col>
                        </Row>
                    </FormGroup>
                    <FormGroup>
                        <Button 
                            type="submit" 
                            label="Save" 
                            icon="fa fa-paper-plane"/>
                        <Button 
                            handleClick={() => {
                                //reset form
                                resetForm();

                                //close modal
                                setShowCreateEventModal(false)}
                            }
                            type="button" 
                            style={{ marginLeft:'10px' }} 
                            label="Cancel" 
                            color="warning"/>
                    </FormGroup>
                </Form>
            </Modal>
        </div>
    )
}

const EventDetails = (props) => {
    const event = typeof props.event !== 'undefined' && props.event !== null ? props.event : '';
    return (
        <div className="event-detail">
            { event !== '' ? (
                <Fragment>
                    <div className="event-title">
                        <i className="fa fa-circle-o"></i> { event.title }
                    </div>
                    <div className="event-description">
                        { event.resource.description }
                    </div>
                    <div className="event-date">
                        { moment(event.start).format('HH:mm ddd, DD MMM YYYY') }
                        &nbsp;-&nbsp;
                        { moment(event.end).format('HH:mm ddd, DD MMM YYYY') }
                    </div>

                    <Button 
                        handleClick={ props.removeEvent.bind(this, event) } 
                        icon="fa fa-trash" 
                        color="danger" 
                        label="Remove"/>
                </Fragment>
            ): (
                <div>
                    No event selected.
                </div>
            ) }
            
        </div>
    )
}

export default Calendar;