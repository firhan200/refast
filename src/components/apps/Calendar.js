import React, { useState } from 'react';

//libs
import { Calendar as MyCalendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';

/* components */
import { 
    Breadcrumb, 
    BreadcrumbItem, 
    Container, 
    Row,
    Modal,
    Col} from './../styles';

//localizer
const localizer = momentLocalizer(moment)

const Calendar = () => {
    /* event example */
    const myEventsList = [
        {
            id: 0,
            title: 'Meeting with Client',
            allDay: false,
            start: new Date(),
            end: new Date(),
        }
    ]

    //hooks
    const [showEventModal, setShowEventModal] = useState(false);

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
                        events={myEventsList}
                        startAccessor="start"
                        endAccessor="end"
                        onSelectEvent={(e) => {
                            setShowEventModal(true);
                        }}
                        popup={true}
                        style={{height: 600}}
                        />
                    </Col>
                </Row>
            </Container>

            <Modal 
                title={(
                    <span><i className="fa fa-calendar"></i>&nbsp; Event</span>
                )} 
                handleButtonCloseClick={() => setShowEventModal(false)}
                isShow={showEventModal}>
                Testing Modal
            </Modal>
        </div>
    )
}

export default Calendar;