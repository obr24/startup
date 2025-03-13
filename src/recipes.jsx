import React, { useEffect } from 'react';
import { useState, createContext } from 'react';
import UserContext from './userContext';

const RecipesContext = createContext();

export class Recipe {
    constructor(title, url, submitter, likes) {
        this.title = title;
        this.url = url;
        this.submitter = submitter;
        this.likes = likes;
    }
}


export function ProvideRecipesContext({ children }) {
    const defaultRecipes = [new Recipe('title1', 'url1', 'submitter1', '1')]
    const [recipes, setRecipes] = React.useState(JSON.parse(localStorage.getItem('recipes')) || defaultRecipes);

    useEffect(() => {
        localStorage.setItem('recipes', JSON.stringify(recipes));
    }, [recipes]);
    
    const value = {
        recipes,
        setRecipes,
        loadDefault,
        AddRecipe,
    };

    function loadDefault() {
        setRecipes(defaultRecipes);
    }
    
    async function AddRecipe(title, url, submitter) {
        const response = await fetch('/api/submit', {
            method: 'post',
            body: JSON.stringify({ title: title, url: url, submitter: submitter }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });
        if (response?.status === 200) {
            console.log('recipe added');
        } else {
            const body = await response.json();
            console.log(`Error submitting: ${body.msg}`)
        }
    }

    return (
        <RecipesContext.Provider value={value}>{children}</RecipesContext.Provider>
    );
}
{/*
export function loadDefault() {
    setRecipes(defaultRecipes);
}
*/}
export default RecipesContext;