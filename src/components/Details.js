import React, { Component } from 'react';
import { getCategoriesById, getCocktailById } from '../api-utils';
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
            category: category,
            category_id: cocktail.category_id,
            price: cocktail.price,
            ingredients: cocktail.ingredients
        });
    }

    render() {
        return (
            <div className='list'>
                <div className='cocktail-card'>
                    <p className='cocktail-name'>{this.state.name}</p>
                    <p>{this.state.description}</p>
                    <p>Category: {this.state.category}</p>
                    <p>${this.state.price}</p>
                    <p className='cocktail-ingredients'>Ingredients: {this.state.ingredients}</p>
                </div>
            </div>
        )
    }
}
