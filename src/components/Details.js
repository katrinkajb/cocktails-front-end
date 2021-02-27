import React, { Component } from 'react';
import { getCategoriesById, getCocktailById, updateCocktail, deleteCocktail } from '../api-utils';
import '../App.css';

export default class Details extends Component {
    state = {
        name: '',
        description: '',
        category: [],
        category_id: '',
        price: '',
        ingredients: ''
    }

    componentDidMount = async () => {
        const cocktail = await getCocktailById(this.props.match.params.id);

        const category = await getCategoriesById(cocktail.category_id)

        this.setState({
            name: cocktail.name,
            description: cocktail.description,
            category: category.name,
            category_id: cocktail.category_id,
            price: cocktail.price,
            ingredients: cocktail.ingredients
        });
    }

    handleUpdate = async (e) => {
        e.preventDefault();

        await updateCocktail(this.props.match.params.id);

        this.props.history.push('/');
    }

    handleNameChange = async (e) => {
        this.setState({ name: e.target.value})
    }

    handleDescriptionChange = async (e) => {
        this.setState({ description: e.target.value})
    }

    handleCategoryChange = async (e) => {
        this.setState({category_id: e.target.value})
    }

    handlePriceChange = async (e) => {
        this.setState({ price: Number(e.target.value)})
    }

    handleIngredientsChange = async (e) => {
        this.setState({ ingredients: e.target.value})
    }

    handleDelete = async (e) => {
        e.preventDefault();

        await deleteCocktail(this.props.match.params.id);

        this.props.history.push('/');
    }

    render() {
        return (
            <div className='list'>
                <div className='cocktail-card'>
                    <form onSubmit={this.handleUpdate}>
                        <div>
                            <label className='create-input'>
                                Cocktail name {'\n'}
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
                                <select value={this.state.category_id} onChange={this.handleCategoryChange}>
                                    <option value={1} defaultValue={this.state.category_id === 1}>
                                        Strong
                                    </option>
                                    <option value={2} defaultValue={this.state.category_id === 2}>
                                        Creamy
                                    </option>
                                    <option value={3} defaultValue={this.state.category_id === 3}>
                                        Bubbly
                                    </option>
                                    <option value={4} defaultValue={this.state.category_id === 4}>
                                        Refreshing
                                    </option>
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
                            <button>Update</button>
                        </div>
                    </form>
                    <button className='delete-button' onClick={this.handleDelete}>Delete Cocktail</button>
                </div>
            </div>
        )
    }
}
