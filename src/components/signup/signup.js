import React from 'react'
import { Grid, Paper, TextField, Button, Typography, Link, FormControlLabel, Box, Checkbox, FormHelperText} from '@material-ui/core';
import { useHistory} from "react-router-dom";
import { Formik, Field, Form, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import './index3.scss';

const Signup = () => {
    let history = useHistory();
    const paperStyle = { padding: 0, height: '70vh', width: 350, margin: "20px auto"}
    const paperStylee = { padding: 5, height: '90vh', width: 450, margin: "20px auto"}
    const linkStyle = { color: '#0878ea'}
    const checkStyle = { color: '#0878ea', padding: '10px 10px 0px 10px'}
    const btnstyle = { margin: '50px 0', backgroundColor: '#0878ea', textTransform: 'none' }
    const fontColor = { color: '#696161'}
    const color = { color: '#696161'}
    const post = { height: '10vh', width: 1000, margin: '-25px auto', padding: '0px 0px 0px 30px' }
    const validationSchema = Yup.object().shape({
        emailaddress: Yup.string().email('Please enter valid email').required("Required"),
        password: Yup.string().min(8, 'Password minimum lenght should be 8').required("Required"),
        termsAndConditions: Yup.string().oneOf(["true"], 'Accept terms & conditions')
    })
    const initialValues = {
        emailaddress:"",
        Password:"",
        termsAndConditions: false
    }
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
         <Paper elevation={5} style={paperStylee}>
            <Box border={1} borderColor="gray" padding='1' width='100' height='77vh' margin='20px 30px auto ' borderRadius='15px'>
                <Grid>
                    <Paper elevation={0} style={paperStyle} borderColor='dark'>
                        <Grid align='center'>
                            <div>
                                <h2 style={color}><img src="https://t3.ftcdn.net/jpg/02/38/84/66/240_F_238846620_3d5rchEVVmvLfh4RzyrlpcG3Et6JzNzs.jpg" style={{ width: 30, height: 30, borderRadius: 100 / 3 }} align='center' />     Blog  </h2>
                            </div></Grid>
                        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit} >
                            {(props) => (
                                <Form>
                                    <Field as={TextField} fullWidth label="Email address" name="emailaddress"
                                        helperText={<ErrorMessage name="emailaddress" />}
                                        size="large" variant="outlined" margin='normal' />
                                    <Field as={TextField}
                                        fullWidth
                                        label="New Password"
                                        name="password"
                                        helperText={<ErrorMessage name="password" />}
                                        size="large"
                                        type="password"
                                        variant="outlined"
                                        margin="normal"
                                    />
                                    <Typography align="left" style={fontColor}>
                                        <FormControlLabel
                                            control={
                                                <Field as={Checkbox} name='termsAndConditions'
                                                    size="medium"
                                                    style={checkStyle}
                                                />
                                            } />
                                        <Grid style={post} size='medium' >
                                            By signing up, you are agreeing to <br></br>the
                                            <Link href="#" style={linkStyle}>
                                                {" "}terms of service
                                            </Link> & <Link href="#" style={linkStyle}>
                                                privacy policy
                                            </Link>.
                                            <FormHelperText> {<ErrorMessage name="termsAndConditions" />}</FormHelperText>
                                        </Grid>
                                    </Typography>
                                    <Button type='submit' color='primary' variant="contained"
                                        style={btnstyle} fullWidth size='large' position='bottom'>Sign Up</Button>
                                </Form>
                            )}
                        </Formik>
                    </Paper>
                </Grid>
            </Box >
            <Typography align='center' style={fontColor}> Have an Account ?
                <Link onClick={() => { history.push("/login"); }} href="#" style={linkStyle}>
                    Sign in here
                </Link>
            </Typography>
        </Paper>
    )
}
export default Signup;