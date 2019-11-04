import React, { useState } from 'react';

/* libs */
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';

/* redux */
import { login } from './../../redux/actions/authAction';

/* components */
import { Box, BoxTitle, Form, FormGroup, Input, Button, Checkbox, H4 } from '../styles';

const LoginPage = (props) => {
    const [email, setEmail] = useState('admin@gmail.com');
    const [password, setPassword] = useState('123456');
    const [rememberMe, setRememberMe] = useState(false);

    const login = () => {
        props.login('jwt_token_here', () => {
            toast("Welcome...");

            props.history.push('/');
        });
    }

    return(
        <div>
            <div className="header-logo-container" align="center">
                <img src="/iconname.png" alt="logo" className="header-logo"/>
                <div className="header-logo-text">
                    REACT ADMIN TEMPLATE
                </div>
            </div>
            <Box xs={12} sm={12} md={6} mdOffset={3} lg={4} lgOffset={4}>
                <BoxTitle label="Authentication" subLabel="welcome to refast admin template." align="center"/>
                <Form handleSubmit={(e) => { 
                    e.preventDefault();
                    login();
                }}>
                    <FormGroup>
                        <Input
                            id="email"
                            value={email}
                            required={true}
                            type="email" 
                            placeholder="Email"
                            handleChange={(e) => { setEmail(e.target.value) }}/>
                    </FormGroup>
                    <FormGroup>
                        <Input 
                            id="password"
                            value={password}
                            required={true}
                            type="password" 
                            placeholder="Password"
                            handleChange={(e) => { setPassword(e.target.value) }}/>
                    </FormGroup>
                    <FormGroup>
                        <Checkbox 
                            isChecked={rememberMe}
                            handleChange={(e) => { setRememberMe(e.target.checked) }}
                            label="remember me?"/>
                    </FormGroup>
                    <FormGroup>
                        <Button type="submit" label="LOGIN" isFull={true}/>
                    </FormGroup>
                    <H4 align="center">or login with</H4>
                    <FormGroup>
                        <Button type="button" color="danger" icon="fa fa-google" label="GOOGLE" isFull={true}/>
                    </FormGroup>
                    <FormGroup>
                        <Button type="button" color="#4267B2" icon="fa fa-facebook" label="FACEBOOK" isFull={true}/>
                    </FormGroup>
                    <H4 align="center">Doesn have an account? <Link to="/signup">Sign up Here</Link></H4>
                </Form>
            </Box>
        </div>
    );
}

/* map redux states to be accessed by global props */
const mapStateToProps = state => ({
    isAuthenticated : state.authReducer.isAuthenticated
});

/* connect use react redux */
export default connect(mapStateToProps, {
    /* redux actions to be accessed by global props */
    login
})(LoginPage);