import React, { useState } from 'react';
import { Box, BoxTitle, Form, FormGroup, Input, Button, Checkbox } from '../styles';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    return(
        <div>
            <Box xs={12} sm={12} md={6} mdOffset={3} lg={4} lgOffset={4}>
                <BoxTitle label="Authentication"/>
                <Form handleSubmit={(e) => { 
                    e.preventDefault();
                    alert("Login Success, remember me: "+rememberMe);
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
                        <Input 
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
                    <FormGroup>
                        <Button type="button" color="danger" icon="fa fa-google" label="GOOGLE" isFull={true}/>
                    </FormGroup>
                    <FormGroup>
                        <Button type="button" color="#4267B2" icon="fa fa-facebook" label="FACEBOOK" isFull={true}/>
                    </FormGroup>
                </Form>
            </Box>
        </div>
    );
}

export default LoginPage;