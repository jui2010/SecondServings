import React, { Component } from 'react'
import withStyles from '@material-ui/core/styles/withStyles'

import Grid from '@material-ui/core/Grid'

const styles = (theme) => ({
    ...theme.spread,
    main : {
        padding : '50px',
    },
    order : {
        padding: '50px',
        fontWeight: '700',
        fontSize : '26px',
        color : '#171717'
    },

})

class order extends Component {

    render() {
        const {classes } = this.props
        return (
            <Grid container  className={classes.order} >
                <Grid item xs={12}>
                    Your order was successfully placed.
                </Grid>
            </Grid>
        )
    }
}

export default (withStyles(styles)(order))