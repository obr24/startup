import React, { useContext } from 'react';

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
        loadDefault
        } = useContext(RecipesContext);

    const defaultRecipes = [new Recipe('Gmas cookies', 'https://example.com/gmas_cookies', 'Megan', '50'),
       new Recipe('Gmas cookies', 'https://example.com/gmas_cookies', 'Megan', '50'),
      new Recipe('Gmas cookies', 'https://example.com/gmas_cookies', 'Megan', '50'),
      new Recipe('Gmas cookies', 'https://example.com/gmas_cookies', 'Megan', '50'),
      new Recipe('Gmas cookies', 'https://example.com/gmas_cookies', 'Megan', '50'),
      new Recipe('Gmas cookies', 'https://example.com/gmas_cookies', 'Megan', '50'),
      new Recipe('Gmas cookies', 'https://example.com/gmas_cookies', 'Megan', '50')  
    ]

    function loadDefaultData() {
        setRecipes(defaultRecipes);
        localStorage.setItem('recipes', JSON.stringify(defaultRecipes));
    }
    
    function handleServerLike(index) {
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
    
    function ParseRecipes() {
        return (
            <div className="container mt-3 mb-5">
            <div className="row row-cols-1 row-cols-md-2 row-cols-xxl-4 g-4">
            {recipes.map((recipe, index) => (
                <ParseRecipe key={index} recipe={recipe} index={index} handleLike={handleLike}/>
            ))}
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
                        <span>{recipe.likes} likes</span> - <a onClick={(e) => handleLike(e, index)} href="">Like</a>
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

