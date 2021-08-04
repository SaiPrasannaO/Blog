import React from 'react'
import { Grid, Paper, Avatar, TextField, Button, Typography, Link } from '@material-ui/core'
import Box from '@material-ui/core/Box';
const Login = () => {
    const paperStyle = { padding: 0, height: '52vh', width: 300, margin: "10px auto" }
    const paperStylee = { padding: 5, height: '90vh', width: 400, margin: "20px auto" }
    const linkStyle = { color: '#0878ea' }

    // const avatarStyle = { backgroundColor: 'lightblue' }
    const btnstyle = { margin: ' 20px 0 20px 0', backgroundColor: '#0878ea' }
    const defaultProps = {
        bgcolor: 'background.paper',
        borderColor: 'text.primary',
        border: 1,
        style: { width: '19rem', height: '23rem' },
    };
    return (
        <Paper elevation={2} style={paperStylee}>
            <Box border={1} borderColor="gray" padding='10' width='100' height='65vh' margin='20px 30px auto ' borderRadius='15px'>

                <Grid>

                    <Paper elevation={100} style={paperStyle} borderColor='dark'>
                        {/* <Box display="flex" justifyContent="center">
                    <Box border={1} {...defaultProps} />
                </Box> */}
                        <Grid align='center'>
                            <div>

                                <h2><img src="https://t3.ftcdn.net/jpg/02/38/84/66/240_F_238846620_3d5rchEVVmvLfh4RzyrlpcG3Et6JzNzs.jpg" style={{ width: 30, height: 30, borderRadius: 100 / 3 }} align='center' />     Blog  </h2>
                            </div></Grid>
                        <Grid>
                            <TextField fullWidth label="Email address" name="email" size="large" variant="outlined" margin='normal' />
                            <Grid>
                                <TextField
                                    fullWidth
                                    label="Password"
                                    name="password"
                                    size="large"
                                    type="password"
                                    variant="outlined"
                                    margin='normal'
                                />
                            </Grid>
                            <Typography align='right' margin='30px 0 20px 0' Color='#0878ea'>
                                <Link href="#" style={linkStyle}>
                                    Forgot your password ?
                                </Link>
                            </Typography>

                            <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth size='large' position='bottom'>Sign in</Button>

                        </Grid>

                        {/* <Typography align='center' padding='20'> Don't have an Account ?
                    <Link href="#" >
                        Sign up here
                    </Link>
                </Typography> */}

                    </Paper>

                </Grid>
            </Box>
            <Typography align='center'> Don't have an Account ?
                <Link href="#" style={linkStyle}>
                    Sign up here
                </Link>
            </Typography>
        </Paper>
    )
}
export default Login;