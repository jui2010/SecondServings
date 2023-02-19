import React, { Component } from 'react'
import withStyles from '@material-ui/core/styles/withStyles'

import {connect} from 'react-redux'
import Grid from '@material-ui/core/Grid'
import vendors from '../util/vendors.json'
import AddMeal from '../components/AddMeal'

const styles = (theme) => ({
    ...theme.spread,
    nameLoc : {
        position: 'absolute',
        top: '240px',
        left: '30px',
        fontWeight: '800',
        fontSize : '40px',
        color : 'white'
    }, 
    delTime : {
        position: 'absolute',
        top: '290px',
        left: '30px',
        fontWeight: '900',
        fontSize : '20px',
        // color : 'white'
    },
    tile : {
        width:'300vh',
        height:'250px',
        objectFit: 'cover',
        position: 'relative',
        backgroundPosition: 'center'
    },
    description : {
        padding : '20px 30px 10px 30px'
    },
    address : {
        position: 'absolute',
        top: '290px',
        padding : '0px 30px 20px 30px',
        fontWeight: '800',
        color : 'white'

    },
    favBorder : {
        position: 'absolute',
        top: '270px',
        right: '30px',
        color : 'black',
        fontSize : '50px',
        cursor : 'pointer',
    },
    fav : {
        position: 'absolute',
        top: '270px',
        right: '30px',
        color : 'black',
        fontSize : '50px',
        cursor : 'pointer',
    },
    l0 : {
        paddingLeft : '10px',
    },
    l1 : {
        marginTop : '25px',
        fontSize : '15px',
        fontWeight : '800',
    },
    l2 : {
        marginTop : '2px',
        fontSize : '13px',
        fontWeight : '700',
        color : '#4f4f4f'
    },
    l3 : {
        marginTop : '2px',
        fontSize : '13px',
        fontWeight : '700',
    },
})


class vendor extends Component {
    
    showMeals = () => {
        const { classes } = this.props
        const { meals } = this.props.data
        let rows = []
        meals.map((meal)=> {
            rows.push(
            <Grid container item sm={7} style={{border: '1px solid #bfbfbf', marginLeft: '30px', marginTop: '10px'}} >
                <Grid container item sm={3} style={{backgroundImage:`url(${meal.photoURL})`, backgroundSize: 'cover', height:'150px'}}>
                </Grid>
                <Grid container item sm={4} className={classes.l0}  >
                    <Grid container item sm={12} className={classes.l1}  >
                        {meal.name}
                    </Grid>
                    <Grid container item sm={12} className={classes.l2}  >
                        {meal.ingredients}
                    </Grid>
                    <Grid container item sm={12} className={classes.l3}  >
                        ${meal.price}
                    </Grid>
                </Grid>
                <Grid container item sm={2} className={classes.sideDiv} >
                    <Grid item xs={12} style={{paddingTop: '30px', fontSize : '13px', marginLeft:'30px', fontWeight : '600'}}>
                        Qty : {meal.qty}
                    </Grid>
                </Grid>
            </Grid>
            )
            return rows
        })
        return (
            <>{rows}</>
        )
        
    }

    render() {
        let vendor = vendors.find(x => x.id === 1)
        const { name, address, picUrl } = vendor
        const { classes } = this.props
        return (
            <Grid direction="row" container>
                <Grid item sm={12}>
                    <div>
                        <img src={picUrl} alt={name} className={classes.tile} />
                        <div className={classes.nameLoc}>{name} </div>
                    </div>
                </Grid> 
                
                <Grid direction="row" container item>
                    <Grid item sm={11}>
                        <div className={classes.address}>
                            {address}
                        </div>
                    </Grid>
                </Grid>
                
                <Grid container item sm={12}>
                    <Grid container item sm={11}>
                        {this.showMeals()}
                    </Grid> 
                    <Grid item sm={1}>
                        <AddMeal/> 
                    </Grid> 
                </Grid> 
            </Grid>
        )
    }
}

const mapStateToProps = (state) => ({
    data : state.data,
})

export default connect(mapStateToProps, {} )(withStyles(styles)(vendor))