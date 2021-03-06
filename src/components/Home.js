import React, { Component } from 'react';
import '../App.css';
import { getCocktails } from '../api-utils';
import { Link } from 'react-router-dom';

export default class Home extends Component {
    state = {
        cocktails: [],
    }

    componentDidMount = async () => {        
        const cocktails = await getCocktails();        

        this.setState({
            cocktails: cocktails,
        });
    }

    render() {
        return (
            <div className='list'>
                {this.state.cocktails.map(cocktail =>         
                <Link to={`/${cocktail.id}`}  key={cocktail.name}>
                    <div className='cocktail-card'>
                        <p className='cocktail-name'>{cocktail.name}</p>
                        <p>{cocktail.description}</p>
                        <p>Category: {cocktail.category_name}</p>
                        <p>${cocktail.price}</p>
                        <p className='cocktail-ingredients'>Ingredients: {cocktail.ingredients}</p>
                    </div>
                </Link>
                )}
            </div>
        )
    }
}
