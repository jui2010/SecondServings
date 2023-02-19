import React, { Component } from 'react'
import withStyles from '@material-ui/core/styles/withStyles'

import {connect} from 'react-redux'
import Grid from '@material-ui/core/Grid'
import InputBase from '@material-ui/core/InputBase'
import { Link } from 'react-router-dom'

const styles = (theme) => ({
    ...theme.spread,
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
    },
    itemsList : {
        display: 'flex',
        justifyContent: 'space-around',
    },
    dishName : {
        fontSize : '23px',
        fontWeight : '600'
    }, 
    dishQuantity : {
        fontSize : '22px',
        fontWeight : '500',
        paddingLeft : '20px',
    }, 
    dishPrice : {
        fontSize : '18px',
        color : '#171717'
    },
    list : {
        paddingBottom : '10px',
        marginBottom : '10px',
        marginLeft: '10px',
        borderBottom : '1px solid #dedede'
    },
    items : {
        fontSize : '27px',
        fontWeight : '600',
        padding : '20px',
        width : '100%'
    },
    itemsName : {
        fontSize : '30px',
        fontWeight : '700',
        padding : '20px',
        width : '100%'
    },
    placeOrderMain : {
        marginLeft : '800px',
        backgroundColor : '#e3e3e3',
        position: 'fixed',
        background: 'lightgrey',
        height:'100%',
        zIndex: 1,
        overflowY: 'auto',
        willChange: 'transform',
        backfaceVisibility: 'hidden'
    },
    checkout : {
        backgroundColor : 'black',
        color : 'white',
        padding : '10px 150px',
        marginRight : '10px',
        display: 'flex',
        justifyContent: 'space-around',
        cursor : 'pointer',
        fontSize : '24px',
        margin : '0px 0 20px 10px',
    },
    align : {
        display: 'flex',
        justifyContent: 'space-around',
    },
    instructions : {
        fontSize : '20px',
        fontWeight : '600',
        padding : '20px',
    },
    instructionsBox : {
        border : '1px solid #dedede',
        marginLeft : '20px',
        width : '500px'

    }
})

class checkout extends Component {

    state = {
        maxOrderId : 0,
        total : 0,
        instructions : ''
    }  

    displayOrders(){
        const {classes} = this.props
        const { selectedMeals } = this.props.data
        return selectedMeals.map(meal => (
                <Grid container item xs={12} key={meal.mealId} className={classes.list}>
                    <Grid container item sm={3} style={{backgroundImage:`url(${meal.photoURL})`, backgroundSize: 'cover', height: '120px'}}>
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
                    <Grid container item sm={3} style={{fontWeight: '800', fontSize: '30px', marginTop: '30px'}}>
                        × {meal.quantity}
                    </Grid>
                </Grid>
            ))
    }

    getSubTotal = () =>{
        const { selectedMeals } = this.props.data
        let tot = 0
        selectedMeals.map(mealItem => tot = tot + mealItem.quantity * mealItem.price)
        return tot
    }
    
    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    render() {
        const {classes} = this.props
        const {name, address} = this.props.data.vendor

        let subtotal = this.getSubTotal()
        console.log(subtotal)
        return (
            <Grid direction="row" container>
                
                <Grid container item sm={7} >
                    <div className={classes.itemsName}>
                        {name} 
                    </div>
                    <div style={{marginLeft: '20px', fontWeight: '800', color: '#404040'}}>
                        ({address})
                    </div>
                    <div className={classes.items}>
                        Your Items
                    </div>
                    
                    {this.displayOrders()}

                    <div className={classes.instructions}>
                        Special Instructions
                    </div>
                    <InputBase
                        id="instructions"
                        name="instructions"
                        className={classes.instructionsBox}
                        onChange={this.handleChange}
                        multiline
                    />
                </Grid>

                <Grid container item sm={5} className={classes.placeOrderMain}>
                    <div style={{margin: '40px', fontSize : '20px'}}>
                        <div className={classes.align}>
                            <div style={{width: '300px',}}>Subtotal</div> <div>${Math.round(subtotal*100)/100}</div>
                        </div>
                        <div className={classes.align}>
                        <div style={{width: '300px',}}>Taxes</div>
                        <div>${Math.round(subtotal * 0.15 *100)/100}</div>
                        </div>
                        <div className={classes.align} style={{marginTop : '20px'}}>
                        <div style={{width: '300px', fontWeight : '700'}}>Total</div>
                        <div style={{fontWeight : '700'}}>
                            ${Math.round((parseFloat(subtotal)+subtotal * 0.15) *100)/100 }
                        </div>
                        </div>
                        <div role="button" style={{marginTop : '120px'}}>
                            <Link to="/orderSuccess" style={{textDecoration: 'none'}}>
                                <div className={classes.checkout}>Place Order</div>
                            </Link>
                        </div>
                    </div>
                </Grid>
            </Grid>
        )
    }
}

const mapStateToProps = (state) => ({
    data : state.data,
})

export default connect(mapStateToProps, {} )(withStyles(styles)(checkout))