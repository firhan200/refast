import React from 'react';

/* Styles */
import { Row, Container, IconCard } from './../../styles';
/* Styles */

const CardPage = () => {
    return(
        <div>
            <div className="title">
                Cards
                <div className="sub-title">
                    <i className="fa fa-info-circle"></i> squared box with bunch of element inside.
                </div>
            </div>

            <div className="body">
                <Container>
                    <Row>
                        <div className="col-6 col-sm-6 col-md-4 col-lg-3">
                            <IconCard label="Messages" number={100} icon="fa fa-comments"/>  
                        </div>                  
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default CardPage;