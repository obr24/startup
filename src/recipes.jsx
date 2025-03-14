import React, { useEffect } from 'react';
import { useState, createContext } from 'react';
import UserContext from './userContext';

const RecipesContext = createContext();

{/* let recipes = []; */}

export class Recipe {
    constructor(title, url, submitter, likes) {
        this.title = title;
        this.url = url;
        this.submitter = submitter;
        this.likes = likes;
    }
}

export function ProvideRecipesContext({ children }) {
    {/* const [recipes, setRecipes] = React.useState(JSON.parse(localStorage.getItem('recipes') || [])); */}
    const [recipes, setRecipes] = React.useState(() => {
        try {
            const storedRecipes = localStorage.getItem('recipes');
            return storedRecipes ? JSON.parse(storedRecipes) : [];
        } catch (error) {
            console.log("error parsing recipes from local storage", error);
            return [];
        }
    });
    
    
    {/* todo: check to make sure this is doing what it's supposed to!!! */}
 
    {/*useEffect(() => {
        setRecipes([]);
    }, []); */}

    useEffect(() => {
        localStorage.setItem('recipes', JSON.stringify(recipes));
    }, [recipes]);
    
    const value = {
        recipes,
        setRecipes,
        AddRecipe,
        LoadRecipes,
    };

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
            console.log(`Error submitting: ${body.msg}`);
        }
    }

    async function LoadRecipes() {
        const response = await fetch('/api/recipes', {
            method: 'get',
    });
        if (response?.status === 200) {
            console.log('recipes received');
            const body = await response.json();
            setRecipes(body);
        } else {
            const body = await response.json();
            console.log(`Error submitting: ${body.msg}`);
            setRecipes([]);
        }
}



    return (
        <RecipesContext.Provider value={value}>{children}</RecipesContext.Provider>
    );
}
export default RecipesContext;