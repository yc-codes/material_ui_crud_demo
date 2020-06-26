import React from 'react';
import Container from '@material-ui/core/Container';
import { TextField, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="bg-dark">
            <Container maxWidth="xs">
                <form noValidate autoComplete="off" style={{ height: '100vh' }} className="vh-100 d-flex flex-column justify-content-center">
                    <div className="bg-white p-4 rounded-lg">
                        <h1 className="text-center mt-3 mb-5">
                            Register
                        </h1>
                        <TextField
                            label="E-mail"
                            variant="outlined"
                            className="mb-3"
                            fullWidth
                        />
                        <TextField
                            label="Password"
                            type="password"
                            variant="outlined"
                            className="mb-3"
                            fullWidth
                        />
                        <TextField
                            label="Confirm Password"
                            type="password"
                            variant="outlined"
                            className="mb-4"
                            fullWidth
                        />
                        <div className="d-flex justify-content-between">
                            <Link to="/login">Login</Link>
                            <Button size="large" variant="contained" color="primary" disableElevation >
                                Register
                            </Button>
                        </div>
                    </div>
                </form>
            </Container>
        </div>
    );
}

export default Register;