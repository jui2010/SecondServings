import React from "react";
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Tooltip from '@material-ui/core/Tooltip'
import Button from '@material-ui/core/Button'
import withStyles from '@material-ui/core/styles/withStyles'
import HomeIcon from '@material-ui/icons/Home'
import CameraIcon from '@material-ui/icons/Camera'
import Avatar from '@material-ui/core/Avatar'

import { Link } from 'react-router-dom'

import { useAuth0 } from "@auth0/auth0-react"

import store from '../redux/store'
import { SET_AUTHENTICATED } from '../redux/types'

const styles = (theme) => ({
    ...theme.spread,
    root: {
        flexGrow: 1,
    },
    logo : {
        marginRight: theme.spacing(2),
    },
    title : {
        fontFamily: 'Bebas Neue',
        fontSize : '35px',
        marginTop : '5px',
        flexGrow: 1
    },
    login: {
        fontSize : '17px',
        textTransform : 'capitalize',
        fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif'
    },
    profile : {
        width: theme.spacing(4),
        height: theme.spacing(4),
        objectFit: 'cover',
        borderRadius: '50%',
    },
    profileB : {
        marginRight : '15px'
    },
    icon : {
        fontSize : '40px',
    },
    avatar: {
        fontSize : '25px',
        fontFamily: 'Bebas Neue',
        width: theme.spacing(5),
        height: theme.spacing(5),
        marginRight : '15px'
    },
})


const NavBar = (props) => {

    const { classes } = props

    const {
        // user,
        // isAuthenticated,
        loginWithRedirect
    } = useAuth0();

    const isAuthenticated = true

    if(isAuthenticated){
        store.dispatch({type : SET_AUTHENTICATED})
    }

    return (
        <div >
            <AppBar position="relative" color="transparent" >
                <Toolbar style={{ height: 50}}>

                    {/* logog */}
                    <CameraIcon color="secondary" className={classes.icon}/>

                    {/* title */}
                    <div className={classes.title}>
                    &nbsp;&nbsp;
                    Second Servings
                    </div>

                    {/* login */}
                    {!isAuthenticated && (
                        <Button className={classes.login} color="primary" onClick={() => loginWithRedirect()}>
                            Login
                        </Button>)}

                    {/* signup */}
                    {!isAuthenticated && (
                        <Button className={classes.login} color="primary" onClick={() => loginWithRedirect()}>
                            Signup
                        </Button>)}

                    {/* home */}
                        <Tooltip title="Home" >
                            <Button color="primary" component = {Link} to="/home" >
                                <HomeIcon/>
                            </Button>
                        </Tooltip>

                    {/* profile pic */}
                        <Tooltip title="Profile" >
                            <Avatar className={classes.avatar} >JT</Avatar>
                        </Tooltip>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default (withStyles(styles)(NavBar))