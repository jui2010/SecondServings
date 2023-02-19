import React, { Component, Fragment} from 'react'
import Grid from '@material-ui/core/Grid'
import withStyles from '@material-ui/core/styles/withStyles'

import meals from '../util/meals.json'

import {connect} from 'react-redux'
import MealsCard from './MealsCard'

const styles = (theme) => ({
    ...theme.spread,
    section : {
        fontFamily: 'Segoe UI,Frutiger,Frutiger Linotype,Dejavu Sans,Helvetica Neue,Arial,sans-serif',
        fontSize: '20px',
    },
    heading : {
        fontFamily: 'Segoe UI,Frutiger,Frutiger Linotype,Dejavu Sans,Helvetica Neue,Arial,sans-serif',
        fontSize : '25px',
        fontWeight : '800',
    },
    tile : {
        width:'63vh',
        height:'200px',
        objectFit: 'cover',
        position: 'relative',
        backgroundPosition: 'center'
    },
    name: {
        fontWeight : '800',
        fontSize : '23px'  
    },
    address: {
        fontWeight : 'bold',
        fontSize : '13px',
        color: '#474747'
    }
})

export class VendorCard extends Component {

    handleChange = (event) =>{
        this.setState({
            [event.target.name] : event.target.value 
        })
    }

    showMeals(){
        const {vendor} = this.props.data
        var rows = meals.reduce((rows, meal) => {
            if (meal.vendorName === vendor.name) {
                rows.push(
                    <MealsCard meal = {meal} />
                )
            } 
          return rows
        }, [])
    
        return (
          <div style={{overflowY: 'auto', height:'440px'}}>{rows}</div>
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
                        <Grid item sm={12} className ={classes.section} >
                            <div className ={classes.name} >
                                <img src={vendor.picUrl} alt="bg" className ={classes.tile}/>
                            </div>
                        </Grid>

                        <Grid item sm={12} className ={classes.section} >
                            <div className ={classes.name} >
                                {vendor.name}
                            </div>
                        </Grid>

                        {/* address */}
                        <Grid item sm={12}  className ={classes.section}>
                            <div className ={classes.address} >
                                {vendor.address}
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

export default connect(mapStateToProps )(withStyles(styles)(VendorCard))