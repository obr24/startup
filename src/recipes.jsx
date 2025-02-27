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
    
    function AddRecipe(title, url, submitter) {
        let likes = '0';
        console.log(likes);
        let newRecipe = new Recipe(title, url, submitter, likes)
        console.log(newRecipe);
        let newRecipes = [...recipes, newRecipe];
        console.log(newRecipes);
        setRecipes(newRecipes);
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