import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, BoxTitle, Form, FormGroup, Input, Button, H4 } from '../styles';

const ResetPasswordPage = () => {
    const [newPassword, setNewPassword] = useState('');

    return(
        <div>
            <Box xs={12} sm={12} md={6} mdOffset={3} lg={4} lgOffset={4}>
                <BoxTitle label="Reset Password" subLabel="please enter your new password." align="center"/>
                <Form handleSubmit={(e) => { 
                    e.preventDefault();
                    alert("Password has been reset.");
                }}>
                    <FormGroup>
                        <Input 
                            value={newPassword}
                            required={true}
                            maxLength={20}
                            type="password" 
                            placeholder="New Password"
                            handleChange={(e) => { setNewPassword(e.target.value) }}/>
                    </FormGroup>
                    <FormGroup>
                        <Button type="submit" label="Reset" isFull={true}/>
                    </FormGroup>
                    <H4 align="center"><Link to="/page/login">Go To Login Page.</Link></H4>
                </Form>
            </Box>
        </div>
    );
}

export default ResetPasswordPage;