import React from 'react';

/* Styles */
import { Row, Container, IconCard } from './../../styles';
/* Styles */

const CardPage = () => {
    return(
        <div>
            <div className="title">
                Icon Cards
                <div className="sub-title">
                    <i className="fa fa-info-circle"></i> squared box with bunch of element inside.
                </div>
            </div>

            <div className="body">
                <Container>
                    <Row>
                        <div className="col-6 col-sm-6 col-md-4 col-lg-3">
                            <IconCard label="iOS Downloads" isWavy={true} number={5207} icon="fa fa-apple"/>  
                        </div>  
                        <div className="col-6 col-sm-6 col-md-4 col-lg-3"> 
                            <IconCard label="Android Downloads" number={10523} icon="fa fa-android"/> 
                        </div>
                        <div className="col-6 col-sm-6 col-md-4 col-lg-3">
                            <div className="help">
                                *no icon with wavy style
                            </div>
                            <IconCard label="Windows Phone Downloads" isWavy={true} number={602} />
                        </div>  
                        <div className="col-6 col-sm-6 col-md-4 col-lg-3"> 
                            <div className="help">
                                *no icon with blank style
                            </div>
                            <IconCard label="Web Access" number={9020321} /> 
                        </div>            
                    </Row>
                </Container>
            </div>
            <div className="title">
                User Cards
                <div className="sub-title">
                    <i className="fa fa-info-circle"></i> squared box with bunch of element inside.
                </div>
            </div>

            <div className="body">
                <Container>
                    <Row>
            
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default CardPage;