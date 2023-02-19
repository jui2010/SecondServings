import React, { Component, Fragment} from 'react'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import LocationOnIcon from '@material-ui/icons/LocationOn'

import withStyles from '@material-ui/core/styles/withStyles'

import meals from '../util/meals.json'

import {connect} from 'react-redux'

const styles = (theme) => ({
    ...theme.spread,
    section : {
        fontFamily: 'Segoe UI,Frutiger,Frutiger Linotype,Dejavu Sans,Helvetica Neue,Arial,sans-serif',
        fontSize: '20px',
    },
    heading : {
        fontFamily: 'Segoe UI,Frutiger,Frutiger Linotype,Dejavu Sans,Helvetica Neue,Arial,sans-serif',
        fontSize : '45px',
        fontWeight : 'bold',
    },
    name: {
        fontWeight : 'bold',
        fontSize : '50px'  
    },
    address: {
        fontWeight : 'bold',
        fontSize : '15px'  
    },
    bookslot: {
        fontWeight : 'bold',
        fontSize : '35px',
        marginTop : '15px'  
    },
    button : {
        fontFamily: 'Bebas Neue',
        fontSize : '30px',
        marginTop : '30px',
        marginBottom : '5px',
        color : 'black'
    },
    total : {
        fontSize : '30px',
    },
    paper : {
        padding : '20px',
        width : '120px',
        height: '160px'
    },
    meal : {
        marginTop : '30px'
    },
    nameDiv:{
        fontWeight: 'bold'
    },
    wip : {
        fontFamily: 'Segoe UI,Frutiger,Frutiger Linotype,Dejavu Sans,Helvetica Neue,Arial,sans-serif',
        fontSize : '15px',
        fontWeight : 'bold',
        backgroundColor: '#80e27e'
    }
})

export class MealsCard extends Component {

    handleChange = (event) =>{
        this.setState({
            [event.target.name] : event.target.value 
        })
    }

    showMeals(){
        const {classes} = this.props
        const {vendor} = this.props.data
        var rows = meals.reduce((rows, meal) => {
            if (meal.vendorName === vendor.name) {
                rows.push(
                    <Grid container item sm={4} className={classes.meal} >
                        <Paper elevation={3} className={classes.paper} >
                            <div className={classes.imgDiv}>
                                {meal.name}
                            </div>
                        </Paper>
                    </Grid>
                )
            } 
          return rows
        }, [])
    
        return (
          <Fragment>{rows}</Fragment>
        )
      }

    render() {
        const { classes } = this.props
        const {vendor} = this.props.data
        return (
            <Grid container item alignItems="center" justify="center">
                
                {Object.keys(vendor).length === 0 &&
                    <Grid item sm={12} className ={classes.section} >
                        <div className ={classes.heading} >
                            Choose a location
                        </div>
                    </Grid>
                }

                {Object.keys(vendor).length > 0 &&
                <Fragment >
                    
                    {/* name */}
                    <Grid item sm={12} className ={classes.section} style={{border: '1px solid black'}}>
                        <div className ={classes.name} >
                            {vendor.name}
                        </div>
                    </Grid>

                    {/* address */}
                    <Grid item sm={12}  className ={classes.section} style={{border: '1px solid black'}}>
                        <div className ={classes.address} >
                            <LocationOnIcon/> [{vendor.address}]
                        </div>
                    </Grid>

                    {/* showing meals info */}
                    {this.showMeals()}
                </Fragment>
                }         
            </Grid>
        )
    }
}

const mapStateToProps = (state) => ({
    data : state.data
})

export default connect(mapStateToProps )(withStyles(styles)(MealsCard))