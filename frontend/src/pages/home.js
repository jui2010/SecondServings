import React, { Component } from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import Grid from '@material-ui/core/Grid'
import MapSection from '../components/MapSection'

import {connect} from 'react-redux'
import VendorCard from '../components/VendorCard'

const styles = (theme) => ({
    ...theme.spread,
    section : {
        padding : '10px'
    }
})

class home extends Component {

    render() {
        const { classes } = this.props

        return (
            <Grid container>
                <Grid item sm={4} className ={classes.section} >
                    <VendorCard/>
                </Grid>
                
                <Grid item sm={8} className ={classes.section} >
                    <MapSection />
                </Grid>
                
            </Grid>
        )
    }
}

const mapStateToProps = (state) => ({
    data : state.data
})

export default  connect(mapStateToProps, {})(withStyles(styles)(home))