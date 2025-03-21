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

    function handleServerLike() {
        LoadRecipes();
    }

    async function handleLike(e, id) {
        try {
            try {
        e.preventDefault();
            } catch (error) {
                console.log("no event to prevent default on (normal if this is called by the temp websocket end)");
            }
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
    } catch (error) {
        console.log("error handling like");
    }
    }

    function RecipesHTML() {
        const random = "not any recipes";
        try {
            if (recipes != undefined && recipes.length > 0) {
            return recipes.map((recipe, index) => (
                <ParseRecipe key={index} recipe={recipe} index={index} handleLike={handleLike}/>
            ))
        } else {
            return [];
        }
        } catch (error) {
            console.log("error in recipeshtml:", error);
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
                    </div>
                </div>
            </div>
        );
    }

    {/* To simulate websocket */}
    {/* React.useEffect(() => {
        setInterval(() => {
            if(recipes.length > 0) {
                handleLike(undefined, recipes[0].id);
                handleServerLike();
            }
        }, 30000);
    }, []); */}

    return (
        <main>
        < ParseRecipes />
        </main>
    )
}

