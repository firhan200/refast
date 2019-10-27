import React from 'react';

/* Styles */
import { Col, Row, Container, IconCard, UserCard, Button } from './../../styles';
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

            <div className="body add-spaces">
                <Container>
                    <Row>
                        <Col xs={6} sm={6} md={3}>
                            <IconCard label="iOS Downloads" isWavy={true} number={5207} icon="fa fa-apple"/>  
                        </Col>  
                        <Col xs={6} sm={6} md={3}> 
                            <IconCard label="Android Downloads" number={10523} icon="fa fa-android"/> 
                        </Col>
                        <Col xs={6} sm={6} md={3}>
                            <div className="help">
                                *no icon with wavy style
                            </div>
                            <IconCard label="Windows Phone Downloads" isWavy={true} number={602} />
                        </Col>  
                        <Col xs={6} sm={6} md={3}> 
                            <div className="help">
                                *no icon with blank style
                            </div>
                            <IconCard label="Web Access" number={9020321} /> 
                        </Col>             
                    </Row>
                    <Row>
                        <Col xs={12}>
                            <div className="title">
                                User Cards
                                <div className="sub-title">
                                    <i className="fa fa-info-circle"></i> squared box with bunch of element inside.
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12} md={6}>
                            <Container>
                                <Row>
                                    <Col xs={12} sm={6} md={6}>
                                        <UserCard avatar="/images/avatar.png" title="John Doe" subTitle="Software Engineer">
                                            <Button label="Edit Profile" size="medium" icon="fa fa-gear" isOutlined={true}/>
                                        </UserCard> 
                                    </Col>
                                </Row>
                            </Container>
                        </Col>
                    </Row>
                </Container> 
            </div>
        </div>
    );
}

export default CardPage;