import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, BoxTitle, Form, FormGroup, Input, Button, Checkbox, H4, Textarea } from '../styles';

const SignupPage = () => {
    /* hooks */
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [address, setAddress] = useState('');
    const [agreed, setAgreed] = useState(false);

    return(
        <div>
            {/* logo and header information */}
            <div className="header-logo-container" align="center">
                <img src="/iconname.png" alt="logo" className="header-logo"/>
                <div className="header-logo-text">
                    REACT ADMIN TEMPLATE
                </div>
            </div>

            {/* content form */}
            <Box xs={12} sm={12} md={8} mdOffset={2} lg={6} lgOffset={3}>
                <BoxTitle label="Register" subLabel="signup and be a member of community." align="left"/>
                <Form handleSubmit={(e) => { 
                    e.preventDefault();
                    alert("Sign up success");
                }}>
                    <FormGroup>
                        <Input 
                            value={name}
                            required={true}
                            maxLength={50}
                            type="text" 
                            placeholder="Name"
                            handleChange={(e) => { setName(e.target.value) }}/>
                    </FormGroup>
                    <FormGroup>
                        <Input 
                            value={email}
                            required={true}
                            maxLength={50}
                            type="email" 
                            placeholder="Email"
                            handleChange={(e) => { setEmail(e.target.value) }}/>
                    </FormGroup>
                    <FormGroup>
                        <Input 
                            value={password}
                            required={true}
                            maxLength={20}
                            type="password" 
                            placeholder="Password"
                            handleChange={(e) => { setPassword(e.target.value) }}/>
                    </FormGroup>
                    <FormGroup>
                        <Textarea 
                            value={address}
                            required={true}
                            maxLength={150}
                            placeholder="Address"
                            handleChange={(e) => { setAddress(e.target.value) }}/>
                    </FormGroup>
                    <FormGroup>
                        <Checkbox 
                            isChecked={agreed}
                            handleChange={(e) => { setAgreed(e.target.checked) }}
                            label="I agree with terms and conditions."/>
                    </FormGroup>
                    <FormGroup>
                        <Button type="submit" label="Sign Up" isFull={true}/>
                    </FormGroup>
                    <H4 align="center">Already have an account? <Link to="/login">Login Here</Link></H4>
                </Form>
            </Box>
        </div>
    );
}

export default SignupPage;