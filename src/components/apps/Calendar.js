import React from 'react';

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
                        popup={true}
                        style={{height: 600}}
                        />
                    </Col>
                </Row>
            </Container>

            <Modal isShow={true}>
                Testing Modal
            </Modal>
        </div>
    )
}

export default Calendar;