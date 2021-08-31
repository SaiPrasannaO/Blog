import React from 'react'
import { Grid, Paper, TextField, Button, Typography, Link, Box } from '@material-ui/core'
import { useHistory } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
const Login = () => {
    let history = useHistory();
    const paperStyle = {paddinhg: 0, height: '52vh', width: 350, margin: "10px auto"}
    const paperStylee = {padding: 5, height: '90vh', width: 450, margin: "20px auto"}
    const linkStyle = { color: '#0878ea'}
    const fontCol = { color: '#696161'}
    const validationSchema = Yup.object().shape({
        emailaddress: Yup.string().email('Please enter valid email').required("Required"),
        password: Yup.string().min(8,'Password minimum length should be 8').required("Required")
    })
    const fontColor = { color:'#696161'}
    const initialValues = {
        emailaddress:'',
        password:''
    }
    const btnstyle = { margin: '20px 0 20px 0', backgroundColor: '#0878ea' }
    const onSubmit = (values, props) => {
        console.log(values)
        setTimeout(() => {
            props.resetForm()
            props.setSubmitting(true)
        }, 2000)
        console.log(props)
    }
    const validate = (values, props) => {
        const errors = {};
        if (!values.email) {
            errors.emailaddress = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.emailaddress)) {
            errors.emailaddress = 'Invalid email address';
        }
        return errors;
    };
    return (
        <Paper elevation={2} style={paperStylee}>
            <Box border={1} borderColor='gray' padding='10' width='100' height='65vh' margin='20px 30px auto ' borderRadius='15px'>
                <Grid>
                    <Paper elevation={100} style={paperStyle} borderColor='dark'>
                        <Grid align='center'>
                            <div>
                                <h2 style={fontCol}><img src="https://t3.ftcdn.net/jpg/02/38/84/66/240_F_238846620_3d5rchEVVmvLfh4RzyrlpcG3Et6JzNzs.jpg" style={{ width: 30, height: 30, borderRadius: 100 / 3 }} align='center' />     Blog  </h2>
                            </div></Grid>
                        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                            {(props) => (
                                <Form autocomplete='off' >
                                   <Field as={TextField} fullWidth label="Email address" name="emailaddress"
                                        helperText={<ErrorMessage name="emailaddress" />}
                                        size="large" variant="outlined" margin='normal' />
                                    <Field as={TextField}
                                        fullWidth
                                        label="Password"
                                        name="password"
                                        helperText={<ErrorMessage name="password" />}
                                        size="large"
                                        type="password"
                                        variant="outlined"
                                        margin="normal"
                                    />
                                    <Typography align='right' margin='30px 0 20px 0' Color='#0878ea'>
                                        <Link href="#" style={linkStyle}>
                                            Forgot your password ?
                                        </Link>
                                    </Typography>
                                    <Button onClick={() => { history.push("/dashboard"); }} type='submit' color='primary' variant="contained"
                                        style={btnstyle} fullWidth size='large' position='bottom'>Sign in</Button>
                                </Form>
                            )}
                        </Formik>
                    </Paper>
                </Grid>
            </Box>
            <Typography align='center' style={fontColor}> Don't have an Account ?
                <Link onClick={() => { history.push("/signup"); }} href="#" style={linkStyle}>
                    Sign up here
                </Link>
            </Typography>
        </Paper>
    )
}
export default Login;