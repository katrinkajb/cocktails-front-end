import React, { Component } from 'react';
import { createCocktail } from '../api-utils';
import '../App.css';

export default class Create extends Component {
    state = {
        name: '',
        description: '',
        category_id: 1,
        price: '',
        ingredients: ''
    }
    
    handleSubmit = async (e) => {
        e.preventDefault();

        await createCocktail(this.state);

        this.props.history.push('/');
    }

    handleNameChange = async (e) => {
        this.setState({ name: e.target.value})
    }

    handleDescriptionChange = async (e) => {
        this.setState({ description: e.target.value})
    }

    handleCategoryChange = async (e) => {
        this.setState({category_id: Number(e.target.value)})
    }

    handlePriceChange = async (e) => {
        this.setState({ price: e.target.value})
    }

    handleIngredientsChange = async (e) => {
        this.setState({ ingredients: e.target.value})
    }

    render() {
        return (
            <div className='list'>
                <div className='cocktail-card'>
                    <form onSubmit={this.handleSubmit}>
                        <div>
                            <label className='create-input'>
                                Cocktail name{'\n'}
                                <input value={this.state.name} onChange={this.handleNameChange} />
                            </label>
                        </div>
                        <div>
                            <label>
                                Description{'\n'}
                                <input value={this.state.description} onChange={this.handleDescriptionChange} /> 
                            </label>
                        </div>
                        <div>
                            <label>
                            Select a category{'\n'}
                                <select value={this.state.category} onChange={this.handleCategoryChange}>
                                    <option value={1}>Strong</option>
                                    <option value={2}>Creamy</option>
                                    <option value={3}>Bubbly</option>
                                    <option value={4}>Refreshing</option>
                                </select>
                            </label>
                        </div>
                        <div>
                            <label>
                                Price{'\n'}
                                <input value={this.state.price} type="number" onChange={this.handlePriceChange} /> 
                            </label>
                        </div>
                        <div>
                            <label>
                                Ingredients{'\n'}
                                <input value={this.state.ingredients} onChange={this.handleIngredientsChange} /> 
                            </label>
                        </div>
                        <div>
                            <button>Add Cocktail</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}