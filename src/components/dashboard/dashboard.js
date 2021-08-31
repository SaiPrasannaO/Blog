import React from 'react'
import { Paper, AppBar, Toolbar, Grid, Typography, Button, Box, Link, Avatar, Icon, makeStyles } from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton';
import CreateIcon from '@material-ui/icons/Create';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import EventNoteIcon from '@material-ui/icons/EventNote';
import SettingsIcon from '@material-ui/icons/Settings';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Menu from '@material-ui/icons/Menu';
const Dashboard = () => {
    const paperStylee = { padding: 0, height: '110vh', width: 450 }
    const fontCol = { color: '#696161' }
    const fontColo = { color: 'black', fontSize: '25px' }
    const gridStyle = { padding: '0px 0px 0px 180px' }
    const mystyle = { padding: '20px 0px 20px 20px' }
    const avatarCol = { color: 'black' }
    const door = { color: '#696161', margin: '180px 20px 0px 0px' }
    const fontColor = { color: '#0878ea', fontWeight: '500', fontSize: '20px', margin: "0px 0px 0px 5px" }
    const fontColour = { color: '#0878ea', fontWeight: '500', fontSize: '20px', margin: "20px -0.5px -0.5px 30px" }
    const useStyles = makeStyles((theme) => ({
        root: {
            '& > span': {
                margin: theme.spacing(7),
            },
        },
    }));
    const classes = useStyles();

    const [state, setState] = React.useState(false)
    const toggleDrawer = (open) => (event) => {
        setState(open)
    }
    const list = () => (
        <div style={mystyle} onClick={toggleDrawer(false)}>
            <div >
                <p >
                    <h8 style={fontColo}><img src="https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" style={{ width: 40, height: 40, borderRadius: 200 / 3 }} align='center' />  Sai </h8>
                </p>
            </div>
            <div>
                <List>
                    <ListItem button style={{ color: '#0878ea', fontWeight: '500', padding: '10px 50px 10px 80px' }}>Manage profile</ListItem>
                    <ListItem button style={fontCol}>
                        <ListItemIcon>
                            <HomeIcon />
                        </ListItemIcon>
                        <ListItemText primary={"Home"} />
                    </ListItem>
                    <ListItem button style={fontCol}>
                        <ListItemIcon>
                            <EventNoteIcon />
                        </ListItemIcon>
                        <ListItemText primary={"Articles"} />
                    </ListItem>
                    <ListItem button style={door}>
                        <ListItemIcon>
                            <SettingsIcon />
                        </ListItemIcon>
                        <ListItemText primary={"Settings"} />
                    </ListItem>
                    <ListItem button style={fontCol}>
                        <ListItemIcon>
                            <ContactSupportIcon />
                        </ListItemIcon>
                        <ListItemText primary={"Support"} />
                    </ListItem>
                    <ListItem button style={fontCol}>
                        <ListItemIcon>
                            <ExitToAppIcon />
                        </ListItemIcon>
                        <ListItemText primary={"Logout"} />
                    </ListItem>
                </List>
            </div>
        </div>
    )
    return (
        <Paper elevation={2} style={paperStylee} >
            <AppBar position="static" color="white" >
                <Toolbar >
                    <IconButton aria-label='app'>
                        <div>
                            <Button onClick={toggleDrawer(true)} ><Menu />
                            </Button>
                            <Drawer
                                anchor={'left'}
                                open={state}
                                onClose={toggleDrawer(false)}>
                                {list()}
                            </Drawer>
                        </div>
                    </IconButton>
                    <Typography variant="h9" >
                        <div>
                            <h2 style={fontCol}><img src="https://t3.ftcdn.net/jpg/02/38/84/66/240_F_238846620_3d5rchEVVmvLfh4RzyrlpcG3Et6JzNzs.jpg" style={{ width: 35, height: 35, borderRadius: 200 / 3 }} align='center' />     Blog  </h2>
                        </div>
                    </Typography>
                    <Grid style={gridStyle}>
                        <Avatar style={avatarCol} src="https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500">  </Avatar>
                    </Grid>
                </Toolbar>
            </AppBar>
            <div> 
                <h8 style={{ margin: "10px 0px 0px 30px", fontWeight: 500, fontSize: '30px', color: '#696161' }}> Hi, Sai</h8>
            </div>
            <div>
                <p style={{ margin: "0px 0px 0px 30px", fontSize: '20px', color: '#696161' }}>
                    Here is your dashboard overview, you can easily manage your articles in one place
                </p>
            </div>
            <Box border={1} borderColor='gray' padding='10' width='100' height='45vh' margin='20px 30px auto ' borderRadius='15px'>
                <h5 style={{ margin: "10px 0px 0px 30px", fontWeight: 500, fontSize: '55px', color: '#696161' }}>3</h5>
                <h5 style={{ margin: "10px 0px 0px 30px", fontWeight: 500, fontSize: '30px', color: '#696161' }}>Total articles</h5>
                <p style={{ margin: "0px 0px 0px 30px", fontSize: '20px', color: '#696161' }}>Add, manage, view articles</p>
                <div className={classes.root}>
                    <AddCircleIcon style={fontColour} fontSize='medium' />
                    <Icon style={fontColor}>Add a new article</Icon>
                </div>
                <div className={classes.root}>
                    <CreateIcon style={fontColour} fontSize='medium' />
                    <Icon style={fontColor}>Manage articles</Icon>
                </div>
            </Box>
        </Paper>
    )
}
export default Dashboard;