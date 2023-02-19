import React, { Component } from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import Grid from '@material-ui/core/Grid'
import MapSection from '../components/MapSection'

import {connect} from 'react-redux'
import MealsCard from '../components/MealsCard'

const styles = (theme) => ({
    ...theme.spread,
    section : {
        padding : '10px'
    },
    mainDiv : {
        display: 'flex', 
        flexDirection : 'column',
        justifyContent:'center',
        alignItems:'center'
    }
})

class home extends Component {

    render() {
        const { classes } = this.props

        return (
            <Grid container style={{height: '1000px'}}>
                <Grid item sm={4} className ={classes.section} >
                    <div className={classes.mainDiv}>
                        <MealsCard/>
                    </div>
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