import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import DIYContext from '../DIYContext'


export default class AddSupply extends Component {
   static contextType = DIYContext;

    
    handleAddSupply = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { supply_name, details, quantity } = e.target;
        const newSupply = {
            supply_name: supply_name.value,
            details: details.value,
            quantity: quantity.value
        }
        console.log(newSupply);
        this.context.setInventory([...this.context.inventory, newSupply])
        
    }
    

    render() {

        return (
            <form onSubmit={e => this.handleSubmit(e)}>
                <h3>Add a supply to your inventory!</h3>
                
                    <label htmlFor="supply_name">supply name:</label>
                    <input
                        type='text'
                        name='supply_name'
                        onChange={this.handleAddSupply}
                    />
                    <label htmlFor='details'>details</label>
                    <input
                        type='text'
                        name='details'
                        onChange={this.handleAddSupply}
                    />
                    <label htmlFor='quantity'>quantity</label>
                    <input 
                        type='number'
                        name='quantity'
                        onChange={this.handleAddSupply}
                    />
                
                
                <div className='buttons'>
                    <button>
                        <Link to='/supplies'>Cancel</Link>
                    </button>
                    <button type='submit'>
                        Save
                    </button>
                </div>
                
            </form>
        )
    }
}