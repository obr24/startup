import React, { useContext } from 'react';

import RecipesContext, {ProvideRecipesContext, Recipe} from '../recipes';
import UserContext, { ProvideUserContext } from '../userContext';

export function Submit() {
  return (
      <ProvideUserContext>
      <ProvideRecipesContext>
        <SubmitContent />
      </ProvideRecipesContext>
    </ProvideUserContext>
  );
}

function SubmitContent() {
    const { recipes, setRecipes, loadDefault, AddRecipe } = useContext(RecipesContext);
    const { emailAddy, setEmail, authenticationState, setAuthenticationState } = useContext(UserContext);

    const [title, setTitle] = React.useState('');
    const [url, setURL] = React.useState('');
    const submitter = emailAddy;

    async function submitRecipe(e) {
        e.preventDefault();
        AddRecipe(title, url, submitter);
    }
    return (
        <main>
                <div className="container mt-5 d-flex justify-content-center bp-5 mb-5">
                    <div className="card p-4 shadow" style={{"width": "450px"}}>
                        <h4 className="text-center mb-4">Submit Recipe</h4>
                        <form>
                            <div className="mb-3">
                                <label htmlFor="title" className="form-label">Recipe Title</label>
                                <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" className="form-control" id="title" placeholder="Enter the recipe title" required></input>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="url" className="form-label">URL</label>
                                <textarea value={url} onChange={(e) => setURL(e.target.value)} className="form-control" id="url" rows="3"></textarea>
                            </div>
                            <div className="d-flex gap-2 justify-content-between">
                                <button onClick={submitRecipe} type="submit" className="btn btn-primary flex-grow-1">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
      );
}