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
    
    function ParseRecipes() {
        return (
            <div className="container mt-3 mb-5">
            <div className="row row-cols-1 row-cols-md-2 row-cols-xxl-4 g-4">
            {recipes.map((recipe, index) => (
                <ParseRecipe key={index} recipe={recipe} />
            ))}
            </div>
            </div>
        );
    }
    
    function ParseRecipe({recipe}) {
        return (
            <div className="col">
                <div className="card shadow-sm">
                    <div className="card-body">
                        <h5 className="card-title"><a href={recipe.url}>{recipe.title}</a></h5> {/* Can recipe.url be in quotes? */}
                        <p className="card-text">Submitted by {recipe.submitter}</p>
                        <span>{recipe.likes} likes</span> - <a href="#">Like</a>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <main>
        <button onClick={ loadDefaultData }>load test recipes</button>
        < ParseRecipes />
        </main>
    )
}

