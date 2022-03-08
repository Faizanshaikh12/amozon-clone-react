import React, {FC, FormEvent} from 'react';
import {Box, Button, Grid, InputLabel, TextField, Typography} from "@mui/material";
import {Link} from "react-router-dom";

const LoginForm: FC = () => {

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('clicked');
    }

    return (
        <Box
            sx={{border: 1, padding: 2, borderColor: '#CCCCCC', width: '350px', marginTop: 2}}>
            <form onSubmit={handleSubmit}>
                <Grid container direction='column' justifyContent='flex-start'>
                    <Typography
                        variant='h5'
                        component='h3'
                        sx={{fontWeight: 600, textAlign: 'center', textTransform: 'uppercase'}}>
                        Login Account
                    </Typography>
                    <InputLabel
                        sx={{ fontWeight: 500, marginTop: 1, color: '#000000' }}
                        htmlFor='email'>Email</InputLabel>
                    <TextField
                        type='email'
                        name='email'
                        id='email'
                        variant='outlined'
                        size='small'
                    />
                    <InputLabel
                        sx={{ fontWeight: 500, marginTop: 1, color: '#000000' }}
                        htmlFor='password'>Password</InputLabel>
                    <TextField
                        type='password'
                        name='password'
                        id='password'
                        variant='outlined'
                        size='small'
                    />
                    <Button type='submit' style={{
                        marginTop: 16,
                        marginBottom: 16,
                        fontWeight: 600,
                    }} variant='contained'>Login</Button>
                </Grid>
            </form>
            <div>
                <small>
                    New to Amazon?{' '}
                    <Link to='/register'
                          style={{textDecoration: 'none', color: '#0000ee'}}
                    >Register</Link>
                </small>
            </div>
        </Box>
    );
}

export default LoginForm;
