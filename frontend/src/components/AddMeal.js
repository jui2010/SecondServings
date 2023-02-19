import React, { Component, Fragment } from 'react'
import withStyles from '@material-ui/core/styles/withStyles'

import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import AddBoxIcon from '@material-ui/icons/AddBox'
import Tooltip from '@material-ui/core/Tooltip'

import {connect} from 'react-redux'
import {addMeal} from '../redux/actions/dataActions'

const styles = (theme) => ({
    ...theme.spread,
    button : {
        paddingLeft : '30px',
        cursor : 'pointer',
        color : '#808080',
        paddingTop : '40px',
    }
})

class AddMeal extends Component {
    state = {
        open : false,
        name : '',
        price : '',
        ingredients : '',
        qty : '',
        photoURL : ''
    }

    handleOpen = () => {
        this.setState({
            open : true
        })
    }

    handleClose = () => {
        this.setState({
            open : false
        })
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const newMeal= {
            name : this.state.name,
            price : this.state.price,
            ingredients : this.state.ingredients,
            qty : this.state.qty,
            photoURL : this.state.photoURL
        }
        this.props.addMeal(newMeal)
        this.setState({
            name : '',
            price : '',
            ingredients : '',
            qty : '',
            photoURL : ''
        })
        this.handleClose()
    }
    
    render() {
        const {classes} = this.props
        return (
            <Fragment>
                <div onClick={this.handleOpen} className={classes.button}>
                    
                    <Tooltip title="Add a new meal">
                        <AddBoxIcon/>
                    </Tooltip>
                </div>
                
                <Dialog open={this.state.open} onClose={this.handleClose}>
                    <DialogTitle>
                        <div>Add a new meal</div>
                    </DialogTitle>
                    <form onSubmit={this.handleSubmit} style={{margin : 'auto 15px'}}>

                        <TextField name="name" id="name" label="Meal Name" type="text" onChange={this.handleChange}
                            style={{marginBottom: '10px'}} value={this.state.name} variant="outlined" fullWidth />

                        <TextField name="price" id="price" label="Price" type="text" onChange={this.handleChange}
                            style={{marginBottom: '10px'}} value={this.state.price} variant="outlined" fullWidth />
                        
                        <TextField name="ingredients" id="ingredients" label="Ingredients" type="text" onChange={this.handleChange} 
                            style={{marginBottom: '10px'}} value={this.state.ingredients} variant="outlined" fullWidth />

                        <TextField name="qty" id="qty" label="Quantity" type="text" onChange={this.handleChange} 
                            style={{marginBottom: '10px'}} value={this.state.qty} variant="outlined" fullWidth />

                        <TextField name="photoURL" id="photoURL" label="Picture Link" type="text" onChange={this.handleChange}
                            style={{marginBottom: '10px'}} value={this.state.photoURL} variant="outlined" fullWidth />
                    
                        <Button type="submit" variant="contained" color="primary"
                            style={{ margin : '10px 5px', fontSize : '16px'}}>
                            Submit
                        </Button>

                    </form>
                </Dialog>
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => ({
})

export default connect(mapStateToProps, {addMeal})(withStyles(styles)(AddMeal))