import React, { useContext, useEffect } from 'react';

import RecipesContext, {ProvideRecipesContext, Recipe} from '../recipes';

export function View() {
  return (
      <ProvideRecipesContext>
      <MainContent />
      </ProvideRecipesContext>
  );
}

function MainContent() {
    const {recipes,
        setRecipes,
        LoadRecipes,
        } = useContext(RecipesContext);

    useEffect(() => {
        LoadRecipes();
    }, [])

    function handleServerLike(index) {
        setRecipes(function(previousRecipes) {
            try {
            const updatedRecipes = previousRecipes.map(function(recipe, i) {
                if (i == index) {
                    return { ...recipe, likes: parseInt(recipe.likes) + 1 };
                }
                return recipe;
            });
            return updatedRecipes;
        } catch (error) {
            return error.toString();
        }
        });
    }

    async function handleLike(e, id) {
        e.preventDefault();
        const response = await fetch('/api/like', {
            method: 'post',
            body: JSON.stringify({ id: id }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });
        if (response?.status === 200) {
            LoadRecipes();
        } else {
            const body = await response.json();
            console.log(`Error: ${body.msg}`);
        }
    }
{/*
    function handleLike(e, index) {
        e.preventDefault();
        setRecipes(function(previousRecipes) {
            const updatedRecipes = previousRecipes.map(function(recipe, i) {
                if (i == index) {
                    return { ...recipe, likes: parseInt(recipe.likes) + 1 };
                }
                return recipe;
            });
            return updatedRecipes;
        });
    }
    */}

    function RecipesHTML() {
        const random = "not any recipes";
        try {
            if (recipes.length > 0) {
            return recipes.map((recipe, index) => (
                <ParseRecipe key={index} recipe={recipe} index={index} handleLike={handleLike}/>
            ))
        } else {
            return <div>`${random}`</div>
        }
        } catch (error) {
            return <h1>{error.toString()}</h1> // TODO: remove before submitting
        }
    }
    
    function ParseRecipes() {
        return (
            <div className="container mt-3 mb-5">
            <div className="row row-cols-1 row-cols-md-2 row-cols-xxl-4 g-4">
            < RecipesHTML />
            </div>
            </div>
        );
    }
    
    function ParseRecipe({recipe, index, handleLike}) {
        return (
            <div className="col">
                <div className="card shadow-sm">
                    <div className="card-body">
                        <h5 className="card-title"><a href={recipe.url}>{recipe.title}</a></h5>
                        <p className="card-text">Submitted by {recipe.submitter}</p>
                        <span>{recipe.likes} likes</span> - <a onClick={(e) => handleLike(e, recipe.id)} href="">Like</a>
                        <pre>{recipe.id}</pre>
                    </div>
                </div>
            </div>
        );
    }

    {/* To simulate websocket */}
    React.useEffect(() => {
        setInterval(() => {
            if(recipes.length > 0) {
                handleServerLike(0);
            }
        }, 1000);
    }, []);

    return (
        <main>
        {/* <button onClick={ loadDefaultData }>load test recipes</button> */}
        < ParseRecipes />
        </main>
    )
}

