import React, { Component} from 'react'
import Grid from '@material-ui/core/Grid'
import AddCircle from '@material-ui/icons/AddCircle'
import RemoveCircle from '@material-ui/icons/RemoveCircle'
import withStyles from '@material-ui/core/styles/withStyles'

import {setSelectedMeals} from '../redux/actions/dataActions'
import {connect} from 'react-redux'

const styles = (theme) => ({
    ...theme.spread,
    mealDiv : {
        marginTop : '10px',
        width:'63vh',
        border : '1px solid #c7c5c5',
        height: '120px'
    },
    sideDiv : {
        marginTop : '10px'
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
    icons : {
        fontSize : '25px',
        color : '#b5b5b5'
    }
})

export class MealsCard extends Component {

    state = {
        open : false,
        quantity : 0,
    }

    handleChange = (event) =>{
        this.setState({
            [event.target.name] : event.target.value 
        })
    }

    handleDecrease = () => {
        this.setState({
            quantity : this.state.quantity === 1 ? 1 : this.state.quantity - 1
        })
    }

    handleIncrease = () => {
        this.setState({
            quantity : this.state.quantity + 1
        })

        let meal = {
            mealId : this.props.meal.id,
            name: this.props.meal.name,
            price: this.props.meal.price,
            ingredients: this.props.meal.ingredients,
            photoURL: this.props.meal.photoURL,
            quantity : this.state.quantity + 1
        }

        this.props.setSelectedMeals(meal)
    }

    render() {
        const { classes } = this.props
        const { meal } = this.props
        return (
            <Grid container item sm={12} className={classes.mealDiv} >
                <Grid container item sm={3} style={{backgroundImage:`url(${meal.photoURL})`, backgroundSize: 'cover'}}>
                </Grid>
                <Grid container item sm={6} className={classes.l0}  >
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
                <Grid container item sm={3} className={classes.sideDiv} >
                    <Grid item xs={1}><RemoveCircle onClick={this.handleDecrease} className={classes.icons} />
                    </Grid>
                    <Grid item xs={1} style={{paddingLeft: '20px', fontSize : '20px', fontWeight : '600', marginLeft: '5px'}}>{this.state.quantity}
                    </Grid>
                    <Grid item xs={1}><AddCircle onClick={this.handleIncrease} className={classes.icons} style={{marginLeft: '15px'}}/>
                    </Grid>
                    <Grid item xs={12} style={{paddingTop: '30px', fontSize : '13px', marginLeft:'30px', fontWeight : '600'}}>
                        Qty : {meal.qty}
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

const mapStateToProps = (state) => ({
    data : state.data
})

export default connect(mapStateToProps, {setSelectedMeals} )(withStyles(styles)(MealsCard))