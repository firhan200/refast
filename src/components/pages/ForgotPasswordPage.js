import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, BoxTitle, Form, FormGroup, Input, Button, H4 } from '../styles';

const ForgotPasswordPage = () => {
    const [email, setEmail] = useState('');

    return(
        <div>
            <Box xs={12} sm={12} md={6} mdOffset={3} lg={4} lgOffset={4}>
                <BoxTitle icon="fa fa-question-circle" label="Forgot Your Password?" subLabel="we will send reset password link to your email." align="center"/>
                <Form handleSubmit={(e) => { 
                    e.preventDefault();
                    alert("Email sent to: "+email);
                }}>
                    <FormGroup>
                        <Input 
                            value={email}
                            required={true}
                            type="email" 
                            placeholder="Email"
                            handleChange={(e) => { setEmail(e.target.value) }}/>
                    </FormGroup>
                    <FormGroup>
                        <Button type="submit" icon="fa fa-paper-plane" label="Send Reset Link" isFull={true}/>
                    </FormGroup>
                    <H4 align="center">I remember my password, <Link to="/page/login">Go To Login</Link></H4>
                </Form>
            </Box>
        </div>
    );
}

export default ForgotPasswordPage;