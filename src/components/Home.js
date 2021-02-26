import React, { Component } from 'react';
import '../App.css';
import { getCocktails, getCategoriesById } from '../api-utils';
import { Link } from 'react-router-dom';

export default class Home extends Component {
    state = {
        name: '',
        description: '',
        category: [],
        price: '',
        ingredients: '',
        cocktails: []
    }

    componentDidMount = async () => {
        const cocktails = await getCocktails();
console.log(cocktails)
        

        this.setState({
            cocktails: cocktails,
        });
    }

    render() {
        const list = this.state.cocktails.map(cocktail =>         
            (<Link to={`/${cocktail.id}`}  key={cocktail.name}>
                <div className='cocktail-card'>
                    <p className='cocktail-name'>{cocktail.name}</p>
                    <p>{cocktail.description}</p>
                    <p>Category: {cocktail.category_name}</p>
                    <p>${cocktail.price}</p>
                    <p className='cocktail-ingredients'>Ingredients: {cocktail.ingredients}</p>
                </div>
            </Link>)
        )
        return (
            <div className='list'>
                {list}
            </div>
        )
    }
}
