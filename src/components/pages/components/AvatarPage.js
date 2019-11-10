import React from 'react';

/* Styles */
import { 
    Box, 
    Row, 
    Container, 
    BoxTitle,
    Avatar} from './../../styles';
/* Styles */

const AvatarPage = () => {
    return(
        <div>
            <div className="title">
                Avatar
                <div className="sub-title">
                    <i className="fa fa-info-circle"></i> circle image for user avatar.
                </div>
            </div>

            <div className="body">
                <Container>
                    <Row>
                        <Box md={4}>
                            <BoxTitle label="Avatar Size"/>
                            <Avatar size="small" src="/images/avatar.png"/>
                        </Box>
                        <Box md={4}>
                            <BoxTitle label="Medium Avatar"/>
                            <Avatar size="medium" src="/images/avatar.png"/>
                        </Box>
                        <Box md={4}>
                            <BoxTitle label="Large Avatar"/>
                            <Avatar size="large" src="/images/avatar.png"/>
                        </Box>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default AvatarPage;