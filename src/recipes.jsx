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
    const defaultRecipes = [new Recipe('title1', 'url1', 'submitter1', 'likes1')]
    const [recipes, setRecipes] = React.useState(JSON.parse(localStorage.getItem('recipes')) || defaultRecipes);

    useEffect(() => {
        localStorage.setItem('recipes', JSON.stringify(recipes));
    }, [recipes]);
    
    const value = {
        recipes,
        setRecipes,
        loadDefault,
    };

    function loadDefault() {
        setRecipes(defaultRecipes);
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